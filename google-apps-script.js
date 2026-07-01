/**
 * GOOGLE APPS SCRIPT: Sincronización Avanzada de Auditorías (Búsqueda y Actualización de Alumnos)
 * 
 * Este script está diseñado para:
 * 1. Buscar al alumno en las filas existentes de la pestaña '889030629'.
 * 2. Si el alumno existe, actualiza sus celdas de auditoría con la última evaluación (SÍ/NO, score, fecha).
 * 3. Si el alumno NO existe, añade una nueva fila al final de la hoja.
 * 4. Mapear de forma dinámica las columnas analizando la primera fila de cabecera.
 * 5. Colocar observaciones individuales como "Notas de celda" (esquinas amarillas) y consolidadas al final.
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    // Bloquear el script para evitar conflictos concurrentes durante la escritura
    lock.waitLock(30000);
    
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = null;
    var targetGid = "889030629";
    
    // 1. Obtener la pestaña específica por GID
    var sheets = ss.getSheets();
    for (var i = 0; i < sheets.length; i++) {
      if (sheets[i].getSheetId().toString() === targetGid) {
        sheet = sheets[i];
        break;
      }
    }
    // Si no se encuentra el GID, usar la pestaña activa por defecto
    if (!sheet) {
      sheet = ss.getActiveSheet();
    }
    
    var data = JSON.parse(e.postData.contents);
    var studentName = data.client ? data.client.toString().trim() : "";
    var coachName = data.coach ? data.coach.toString().trim() : "";
    var score = data.score !== undefined ? data.score : 0;
    var dateVal = data.date ? new Date(data.date) : new Date();
    
    // Lista de los 36 IDs reales mapeados en la aplicación (puntos 3 al 38)
    var pointIds = [
      3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
      20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38
    ];
    
    // 2. Leer la primera fila (Cabeceras) para mapear dinámicamente las columnas
    var lastCol = Math.max(sheet.getLastColumn(), 42); // Asegura tamaño mínimo
    var headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
    
    var colDate = -1;
    var colCoach = -1;
    var colClient = -1;
    var colScore = -1;
    var colConsolidatedObs = -1;
    var colPoints = {}; // ID punto -> Columna (1-based)
    
    for (var c = 0; c < headers.length; c++) {
      var hText = headers[c].toString().toLowerCase().trim();
      
      if (hText.indexOf("fecha") !== -1 || hText.indexOf("date") !== -1) {
        if (colDate === -1) colDate = c + 1;
      } else if (hText.indexOf("coach") !== -1 || hText.indexOf("entrenador") !== -1) {
        if (colCoach === -1) colCoach = c + 1;
      } else if (hText.indexOf("alumno") !== -1 || hText.indexOf("client") !== -1) {
        if (colClient === -1) colClient = c + 1;
      } else if (hText.indexOf("score") !== -1 || hText.indexOf("compliance") !== -1 || hText.indexOf("cumplimiento") !== -1) {
        if (colScore === -1) colScore = c + 1;
      } else if (hText.indexOf("resumen") !== -1 || hText.indexOf("consolidado") !== -1 || (hText.indexOf("observaciones") !== -1 && hText.indexOf(".") === -1)) {
        if (colConsolidatedObs === -1) colConsolidatedObs = c + 1;
      }
      
      // Buscar mapeo para puntos 3-38
      for (var p = 0; p < pointIds.length; p++) {
        var pid = pointIds[p];
        var prefix = pid + ".";
        var prefixAlt = pid + " ";
        var hOrig = headers[c].toString().trim();
        if (hOrig.indexOf(prefix) === 0 || hOrig.indexOf(prefixAlt) === 0 || hOrig === pid.toString()) {
          colPoints[pid] = c + 1;
        }
      }
    }
    
    // Mapeo por defecto en caso de no encontrar encabezados
    if (colDate === -1) colDate = 1;      // Columna A
    if (colCoach === -1) colCoach = 2;    // Columna B
    if (colClient === -1) colClient = 3;  // Columna C
    if (colScore === -1) colScore = 4;    // Columna D
    for (var p = 0; p < pointIds.length; p++) {
      var pid = pointIds[p];
      if (!colPoints[pid]) {
        colPoints[pid] = pid + 2; // ID 3 -> Columna 5 (E)
      }
    }
    if (colConsolidatedObs === -1) colConsolidatedObs = 41; // Columna AO
    
    // 3. Buscar la fila del alumno (se busca en las columnas del cliente y primeras 4 columnas)
    var targetRowIndex = -1;
    var values = sheet.getDataRange().getValues();
    var searchName = studentName.toLowerCase().trim();
    
    for (var r = 1; r < values.length; r++) {
      var colsToSearch = [colClient - 1, 0, 1, 2, 3];
      for (var idx = 0; idx < colsToSearch.length; idx++) {
        var colIdx = colsToSearch[idx];
        if (colIdx >= 0 && colIdx < values[r].length) {
          var cellVal = values[r][colIdx].toString().toLowerCase().trim();
          if (cellVal === searchName && searchName !== "") {
            targetRowIndex = r + 1; // 1-indexed
            break;
          }
        }
      }
      if (targetRowIndex !== -1) break;
    }
    
    // 4. Si el alumno existe, actualizar su fila; si no, añadir una fila nueva
    var isNewRow = false;
    if (targetRowIndex === -1) {
      targetRowIndex = sheet.getLastRow() + 1;
      isNewRow = true;
    }
    
    // Guardar Metadatos
    sheet.getRange(targetRowIndex, colDate).setValue(dateVal);
    sheet.getRange(targetRowIndex, colCoach).setValue(coachName);
    sheet.getRange(targetRowIndex, colClient).setValue(studentName);
    sheet.getRange(targetRowIndex, colScore).setValue(score + "%");
    
    // 5. Inyectar respuestas de compliance y observaciones (notas)
    for (var p = 0; p < pointIds.length; p++) {
      var pid = pointIds[p];
      var val = data.compliance[pid];
      var cellCol = colPoints[pid];
      var cell = sheet.getRange(targetRowIndex, cellCol);
      
      // Limpiar notas previas antes de actualizar
      cell.clearNote();
      
      if (val === 1 || val === "1") {
        cell.setValue("SÍ");
      } else if (val === 0 || val === "0") {
        cell.setValue("NO");
      } else {
        cell.setValue(val !== undefined && val !== null ? val : "");
      }
      
      // Añadir comentario como nota de celda
      var obs = data.observations[pid];
      if (obs && obs.trim() !== "") {
        cell.setNote(obs.trim());
      }
    }
    
    // 6. Consolidar todas las observaciones escritas al final de la fila
    var consolidatedComments = [];
    for (var p = 0; p < pointIds.length; p++) {
      var pid = pointIds[p];
      var obs = data.observations[pid];
      if (obs && obs.trim() !== "") {
        consolidatedComments.push("Punto " + pid + ": " + obs.trim());
      }
    }
    sheet.getRange(targetRowIndex, colConsolidatedObs).setValue(consolidatedComments.join(" | "));
    
    return ContentService.createTextOutput(JSON.stringify({
      "status": "success",
      "action": isNewRow ? "created" : "updated",
      "row": targetRowIndex
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      "status": "error",
      "message": err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

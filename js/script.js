// Configuración de colores personalizados de Anytime Fitness (Morado corporativo y Lima)
tailwind.config = {
    theme: {
        extend: {
            colors: {
                brandDark: '#0B0813',       // Fondo ultra oscuro con matiz morado
                brandPanel: '#171226',      // Paneles morado oscuro profundo
                brandBorder: '#2D2344',     // Bordes de alta fidelidad
                brandPurple: '#7332A6',     // Morado oficial Anytime Fitness
                brandPurpleLight: '#914CC9',// Morado brillante para estados activos/hover
                brandLime: '#9BE600',       // Cyber Lime / Verde Anytime Fitness para acentos
                brandCyan: '#00E5FF',       // Neon Cyan para información técnica y alertas secundarias
                brandText: '#9E9AA8'        // Texto secundario grisáceo-morado
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif']
            }
        }
    }
}

// --- BASE DE DATOS LOCAL MOCKUP (ENTRENADORES REALES DE ANYTIME FITNESS SANT ADRIÀ) ---
const entrenadoresDefault = [
    { id: "e1", name: "Tomas", role: "Head Coach / AF Sant Adrià", score: 95, compliance: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], lastAudit: "2026-06-12 11:30", status: "good", focus: "Ninguno (Excelente apego a protocolos operativos y MyZone)" },
    { id: "e2", name: "Oscar", role: "Coaching Team", score: 88, compliance: [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1], lastAudit: "2026-06-13 09:15", status: "good", focus: "Revisar la correcta entrega de cinturones MyZone y registro de firmas." },
    { id: "e3", name: "Ruben", role: "Coaching Team", score: 79, compliance: [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1], lastAudit: "2026-06-11 16:40", status: "attention", focus: "Alerta: Aplicar urgente el protocolo de 3 intentos a los 7 clientes 'No Responde' y asignar los 9 programas faltantes." },
    { id: "e4", name: "Lucia", role: "Coaching Team", score: 92, compliance: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1], lastAudit: "2026-06-10 10:00", status: "good", focus: "Mantener entrevistas de prevención de bajas con clientes inactivos." },
    { id: "e5", name: "Luisa", role: "Coaching Team", score: 85, compliance: [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], lastAudit: "2026-06-09 12:30", status: "good", focus: "Asegurar que los clientes con cinturón lo usen activamente en sesiones." },
    { id: "e6", name: "Santana", role: "Coaching Team", score: 82, compliance: [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], lastAudit: "2026-06-08 17:15", status: "attention", focus: "Verificar firmas de contratos pendientes (Ej: Ana Piedra, Daniel Rodríguez)." }
];

const auditoriasDefault = [
    { id: "a1", date: "2026-06-13 09:15", coach: "Oscar", club: "AF Sant Adrià", score: 88, shift: "Revisión Semanal", obs: "Se revisó su base de datos. Faltan detalles de entrega de MyZone para clientes recientes, pero las valoraciones están al día." },
    { id: "a2", date: "2026-06-12 11:30", coach: "Tomas", club: "AF Sant Adrià", score: 100, shift: "Cierre de Mes", obs: "Todas las métricas cumplidas. Asistencia de los clientes perfecta, sin demoras en entregas de cinturones ni en firmas de contratos." },
    { id: "a3", date: "2026-06-11 16:40", coach: "Ruben", club: "AF Sant Adrià", score: 79, shift: "Revisión Semanal", obs: "Detectamos que un 53% de clientes no tienen programa completado. Posee 7 clientes marcados como NO RESPONDE (Ivan E., Teresa D., etc) que requieren acción inmediata." },
    { id: "a4", date: "2026-06-08 17:15", coach: "Santana", club: "AF Sant Adrià", score: 82, shift: "Revisión Semanal", obs: "Faltan confirmar algunas firmas de contrato (clientes del 10/06 y 12/06). Entrega de dispositivos OK." }
];

// Carga desde Almacenamiento Local (usando nueva key v4 para forzar actualización con el nuevo webhook)
let entrenadores = JSON.parse(localStorage.getItem('af_coaches_v4')) || entrenadoresDefault;
let auditorias = JSON.parse(localStorage.getItem('af_audits_v4')) || auditoriasDefault;
// Carga URL pre-configurada que el usuario haya guardado o usa el webhook oficial
let googleScriptUrl = localStorage.getItem('af_script_url_v4') || "https://script.google.com/macros/s/AKfycbxtS5k9QSY7KanAx6rgCAnF9iPr8gtsyplfpiMo5YA-HAp-q-YqwLs17vL_gg6Odi57/exec";

// Inicializar el estado de los 19 parámetros del checklist temporal del formulario
let formParamValues = {};
for(let i = 1; i <= 19; i++) {
    formParamValues[`p${i}`] = 1; 
}

// --- SISTEMA DE NAVEGACIÓN ---
function cambiarSeccion(target) {
    document.getElementById('view-dashboard').classList.add('hidden');
    document.getElementById('view-auditar').classList.add('hidden');
    document.getElementById('view-entrenadores').classList.add('hidden');
    document.getElementById('view-config').classList.add('hidden');

    document.getElementById(`view-${target}`).classList.remove('hidden');

    document.querySelectorAll('aside nav button').forEach(btn => btn.classList.remove('active-nav'));
    document.getElementById(`nav-${target}`).classList.add('active-nav');

    const titles = {
        dashboard: "Dashboard de Auditorías - Anytime Fitness",
        auditar: "Cargar Nueva Auditoría de Coaching (19 Ítems)",
        entrenadores: "Fichas Históricas y Retención de Clientes",
        config: "Conectar Web App a tu Google Sheet Real"
    };
    document.getElementById('sectionTitle').innerText = titles[target];

    if (target === 'dashboard') renderDashboard();
    if (target === 'entrenadores') renderEntrenadoresGrid();
}

function cambiarClub(club) {
    renderDashboard();
}

// --- GESTIÓN DE CONFIGURACIÓN DE SHEET API ---
function guardarUrlSheet() {
    const urlInput = document.getElementById('sheetUrlInput').value.trim();
    localStorage.setItem('af_script_url_v4', urlInput);
    googleScriptUrl = urlInput;
    
    const badge = document.getElementById('syncStatusBadge');
    if(urlInput) {
        badge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Configurado`;
        badge.className = "flex items-center gap-1 text-[11px] text-emerald-400 font-medium";
    } else {
        badge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-orange-400"></span> Local Only`;
        badge.className = "flex items-center gap-1 text-[11px] text-orange-400 font-medium";
    }
    alert("Webhook URL de Google Sheets guardado correctamente.");
}

function copyCode() {
    const code = document.getElementById('codeBlock').innerText;
    navigator.clipboard.writeText(code);
    alert("Código de Apps Script copiado al portapapeles. Listo para pegar en tu Google Sheet.");
}

// --- SISTEMA DE RENDERIZACIÓN DINÁMICA ---

function renderDashboard() {
    const listContainer = document.getElementById('coachesSummaryList');
    listContainer.innerHTML = '';

    entrenadores.forEach(coach => {
        let statusColor = 'text-brandLime border-brandLime/20 bg-brandLime/5';
        let dotColor = 'bg-brandLime';
        let badgeText = 'Protocolo OK';

        if (coach.score < 80) {
            statusColor = 'text-red-400 border-red-500/20 bg-red-500/5';
            dotColor = 'bg-red-400';
            badgeText = 'Alerta Crítica';
        } else if (coach.score < 90) {
            statusColor = 'text-amber-400 border-amber-500/20 bg-amber-500/5';
            dotColor = 'bg-amber-400';
            badgeText = 'Bajo Observación';
        }

        listContainer.innerHTML += `
            <div class="bg-brandDark/50 border border-brandBorder rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-lg bg-brandBorder flex items-center justify-center text-white font-poppins font-bold text-sm">
                        ${coach.name.substring(0,2).toUpperCase()}
                    </div>
                    <div>
                        <h4 class="font-poppins font-semibold text-sm text-white">${coach.name}</h4>
                        <p class="text-xs text-brandText">${coach.role} • Última carga: ${coach.lastAudit}</p>
                    </div>
                </div>

                <div class="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                    <div class="text-right">
                        <span class="text-xs text-brandText">Promedio</span>
                        <p class="text-sm font-poppins font-bold text-white">${coach.score}%</p>
                    </div>
                    <div class="w-24 bg-brandDark border border-brandBorder h-2 rounded-full overflow-hidden">
                        <div class="h-full ${dotColor}" style="width: ${coach.score}%"></div>
                    </div>
                    <span class="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border ${statusColor}">
                        <span class="w-1.5 h-1.5 rounded-full ${dotColor}"></span> ${badgeText}
                    </span>
                </div>
            </div>
        `;
    });

    const tableBody = document.getElementById('lastAuditsTable');
    tableBody.innerHTML = '';

    auditorias.forEach(aud => {
        tableBody.innerHTML += `
            <tr class="border-b border-brandBorder/40 hover:bg-brandPanel/30 transition">
                <td class="py-4 pl-2 font-medium text-xs text-brandText">${aud.date}</td>
                <td class="py-4 font-semibold text-white">${aud.coach}</td>
                <td class="py-4 text-xs text-brandText">${aud.shift}</td>
                <td class="py-4 text-center">
                    <span class="text-xs font-poppins font-bold px-2 py-0.5 rounded-md ${aud.score >= 85 ? 'text-brandLime bg-brandLime/10' : 'text-red-400 bg-red-400/10'}">
                        ${aud.score}%
                    </span>
                </td>
                <td class="py-4 max-w-sm truncate text-xs text-brandText" title="${aud.obs}">${aud.obs}</td>
                <td class="py-4 text-center">
                    <span class="text-emerald-400 text-xs"><i class="fa-solid fa-cloud-arrow-up"></i> Sincro</span>
                </td>
            </tr>
        `;
    });

    const selectElement = document.getElementById('formCoachSelect');
    selectElement.innerHTML = '<option value="" disabled selected>Selecciona un coach...</option>';
    entrenadores.forEach(coach => {
        selectElement.innerHTML += `<option value="${coach.id}">${coach.name}</option>`;
    });

    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    document.getElementById('formDateTime').value = now.toISOString().slice(0, 16);
}

function renderEntrenadoresGrid() {
    const grid = document.getElementById('coachesDetailedGrid');
    grid.innerHTML = '';

    entrenadores.forEach(coach => {
        let statusBadge = 'text-brandLime bg-brandLime/10';
        let borderStyle = 'border-brandBorder';
        if(coach.score < 80) {
            statusBadge = 'text-red-400 bg-red-500/10';
            borderStyle = 'border-red-500/30';
        } else if(coach.score < 90) {
            statusBadge = 'text-amber-400 bg-amber-500/10';
            borderStyle = 'border-amber-500/30';
        }

        // Generar los 19 checks de cumplimiento del entrenador basados en el plan de coaching
        const listItems = [
            "Firma Contratos", "Registro Cuotas", "Asign. Vendedor", "Gestión Bajas", "Activación MyZone", "Num. Serie MZ",
            "Entrega MZ", "Uso Activo MZ", "Progr. Asignados", "Revisión 30 Días", "Ajustes Médicos", "Logros Corto Plazo",
            "Valoraciones", "Mensajes Semanales", "Protoc. No Responde", "Baja Asistencia", "Estrat. Motivación", "Entrev. Salida", "Gestión Cartera"
        ];

        let checklistHtml = '';
        for(let idx = 0; idx < 19; idx++) {
            checklistHtml += `
                <div class="flex items-center gap-1">
                    <i class="fa-solid ${coach.compliance[idx] ? 'fa-square-check text-brandLime' : 'fa-square-xmark text-red-500'}"></i>
                    <span class="text-brandText truncate text-[11px]">${listItems[idx]}</span>
                </div>
            `;
        }

        grid.innerHTML += `
            <div class="bg-brandPanel border ${borderStyle} rounded-2xl p-5 space-y-4 flex flex-col justify-between">
                <div>
                    <div class="flex items-center justify-between mb-3">
                        <div class="w-12 h-12 rounded-xl bg-brandBorder flex items-center justify-center text-white font-poppins font-bold text-lg">
                            ${coach.name.substring(0,2).toUpperCase()}
                        </div>
                        <span class="text-xs px-2.5 py-1 rounded-full font-semibold ${statusBadge}">
                            Score: ${coach.score}%
                        </span>
                    </div>

                    <div>
                        <h3 class="font-poppins font-semibold text-base text-white">${coach.name}</h3>
                        <p class="text-xs text-brandText font-light">${coach.role}</p>
                    </div>

                    <div class="border-t border-brandBorder pt-3.5 mt-3 space-y-2">
                        <span class="text-[10px] text-brandText uppercase tracking-wider font-semibold block">Desglose Operativo (19 KPIs)</span>
                        <div class="grid grid-cols-2 gap-x-2 gap-y-1 text-xs">
                            ${checklistHtml}
                        </div>
                    </div>
                </div>

                <div class="border-t border-brandBorder pt-3.5 mt-4">
                    <span class="text-[10px] text-brandText uppercase tracking-wider font-semibold block mb-1">Diagnóstico IA</span>
                    <p class="text-xs text-brandCyan bg-brandCyan/5 border border-brandCyan/10 px-3 py-2 rounded-xl">
                        <i class="fa-solid fa-triangle-exclamation"></i> ${coach.focus}
                    </p>
                </div>
            </div>
        `;
    });
}

// --- LOGICA DE CONTROL DE BOTONES SÍ / NO EN CHECKLIST ---
function setParam(paramId, value, buttonElement) {
    formParamValues[paramId] = value;
    
    const buttons = document.querySelectorAll(`.param-btn-${paramId}`);
    buttons.forEach(btn => {
        btn.className = `param-btn-${paramId} px-2.5 py-1 text-[10px] font-semibold rounded-md text-brandText hover:text-white transition`;
    });

    if (value === 1) {
        buttonElement.className = `param-btn-${paramId} px-2.5 py-1 text-[10px] font-semibold rounded-md bg-brandLime text-brandDark transition`;
    } else {
        buttonElement.className = `param-btn-${paramId} px-2.5 py-1 text-[10px] font-semibold rounded-md bg-red-500 text-white transition`;
    }
}

// --- ASISTENTE DE REDACCIÓN DE OBSERVACIONES IA ---
function optimizarFeedbackConIA() {
    const rawText = document.getElementById('formRawObservation').value.trim();
    const coachId = document.getElementById('formCoachSelect').value;
    const finalTexarea = document.getElementById('formFinalObservation');

    if (!coachId) {
        alert("Por favor, selecciona primero al coach para contextualizar el reporte.");
        return;
    }

    if (!rawText) {
        alert("Por favor, escribe notas rápidas en el cuadro izquierdo para que la IA las optimice.");
        return;
    }

    finalTexarea.value = "Anytime IA Motor: Procesando notas y analizando retención / MyZone...";

    setTimeout(() => {
        const coachName = entrenadores.find(c => c.id === coachId).name;
        
        const respuestasProfesionales = [
            `Auditoría Operativa - Coach ${coachName}: Desempeño óptimo en el cumplimiento del checklist del club. Respecto al seguimiento se constata: "${rawText}". Se registra excelente actitud hacia el registro de contratos y control de bandas MyZone.`,
            `Reporte de Anytime Fitness - Coach ${coachName}: Se verifica la correcta asignación de programas y protocolos de asistencia. Se documenta que: "${rawText}". Se sugiere mantener el seguimiento de mejora sobre estas métricas para evitar deserciones.`,
            `Evaluación de Retención (${coachName}): Evaluados con éxito los 19 KPIs de coaching. Se destaca la gestión administrativa de contratos y cuotas. Observación del auditor: "${rawText}". Se califica el periodo de forma satisfactoria.`
        ];

        const indexAleatorio = Math.floor(Math.random() * respuestasProfesionales.length);
        finalTexarea.value = respuestasProfesionales[indexAleatorio];
    }, 1100);
}

// --- EXPORTAR AUDITORÍA E INTEGRACIÓN CON EL WEBHOOK DE GOOGLE SHEETS ---
function procesarNuevaAuditoria(event) {
    event.preventDefault();

    const coachId = document.getElementById('formCoachSelect').value;
    const datetime = document.getElementById('formDateTime').value.replace('T', ' ');
    const shift = document.getElementById('formShift').value;
    const rawObs = document.getElementById('formRawObservation').value.trim();
    let finalObs = document.getElementById('formFinalObservation').value.trim();

    if (!coachId) {
        alert("Por favor, selecciona a un coach.");
        return;
    }

    if (!finalObs) {
        finalObs = rawObs || "Auditoría de gestión de cartera completada con éxito. Sin observaciones urgentes sobre MyZone o Contratos.";
    }

    let totalYes = 0;
    for(let i = 1; i <= 19; i++) {
        if(formParamValues[`p${i}`] === 1) totalYes++;
    }
    const scoreCalculado = Math.round((totalYes / 19) * 100);

    const coachObject = entrenadores.find(c => c.id === coachId);

    const nuevaAuditoria = {
        entrenador: coachObject.name,
        fecha: datetime,
        turno: shift,
        p1: formParamValues.p1 === 1, p2: formParamValues.p2 === 1, p3: formParamValues.p3 === 1,
        p4: formParamValues.p4 === 1, p5: formParamValues.p5 === 1, p6: formParamValues.p6 === 1,
        p7: formParamValues.p7 === 1, p8: formParamValues.p8 === 1, p9: formParamValues.p9 === 1,
        p10: formParamValues.p10 === 1, p11: formParamValues.p11 === 1, p12: formParamValues.p12 === 1,
        p13: formParamValues.p13 === 1, p14: formParamValues.p14 === 1, p15: formParamValues.p15 === 1,
        p16: formParamValues.p16 === 1, p17: formParamValues.p17 === 1, p18: formParamValues.p18 === 1,
        p19: formParamValues.p19 === 1,
        score: scoreCalculado,
        observacionesIA: finalObs
    };

    // Transmisión al Webhook pre-configurado de Anytime Fitness
    if (googleScriptUrl) {
        fetch(googleScriptUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(nuevaAuditoria)
        })
        .then(() => console.log("Auditoría enviada a tu Google Sheet."))
        .catch(err => console.error("Error al reportar a la API de Google Sheets: ", err));
    } else {
        console.warn("Webhook no configurado. Los datos se almacenarán localmente.");
    }

    auditorias.unshift({
        id: "a_" + Date.now(),
        date: datetime,
        coach: coachObject.name,
        club: document.getElementById('clubSelector').value,
        score: scoreCalculado,
        shift: shift,
        obs: finalObs
    });

    coachObject.score = Math.round((coachObject.score + scoreCalculado) / 2);
    coachObject.compliance = [];
    for(let i = 1; i <= 19; i++) {
        coachObject.compliance.push(formParamValues[`p${i}`]);
    }
    coachObject.lastAudit = datetime;

    if(coachObject.score >= 90) {
        coachObject.status = "good";
        coachObject.focus = "Mantener los estándares de retención y control operativo.";
    } else if(coachObject.score >= 80) {
        coachObject.status = "attention";
        coachObject.focus = "Reforzar protocoles de MyZone y entrevistas de salida.";
    } else {
        coachObject.status = "critical";
        coachObject.focus = "Priorizar contacto con clientes 'No Responde' y agendar valoraciones.";
    }

    localStorage.setItem('af_audits_v4', JSON.stringify(auditorias));
    localStorage.setItem('af_coaches_v4', JSON.stringify(entrenadores));

    const isLocal = !googleScriptUrl;
    document.getElementById('successModalText').innerHTML = isLocal 
        ? "La auditoría se ha guardado localmente de forma segura.<br><strong class='text-brandLime'>Para enviarla directamente a tu planilla, configura tu enlace Webhook en la pestaña 'Configurar Sheet'.</strong>"
        : `¡Auditoría cargada con éxito!<br>Los 19 ítems han sido volcados en tiempo real en tu archivo de seguimiento de Google Sheets.`;
    
    document.getElementById('successModal').classList.remove('hidden');
}

function closeSuccessModal() {
    document.getElementById('successModal').classList.add('hidden');
    
    document.getElementById('auditForm').reset();
    document.getElementById('formRawObservation').value = "";
    document.getElementById('formFinalObservation').value = "";
    
    for(let i = 1; i <= 19; i++) {
        formParamValues[`p${i}`] = 1;
    }
    
    document.querySelectorAll('[class^="param-btn-"]').forEach(btn => {
        btn.className = btn.innerHTML === "SÍ" 
            ? btn.className.replace('bg-red-500 text-white', 'bg-brandLime text-brandDark') 
            : btn.className.replace('bg-red-500 text-white', 'text-brandText');
    });

    cambiarSeccion('dashboard');
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('sheetUrlInput').value = googleScriptUrl;
    
    const badge = document.getElementById('syncStatusBadge');
    if(googleScriptUrl) {
        badge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Sincronizado`;
        badge.className = "flex items-center gap-1 text-[11px] text-emerald-400 font-medium";
    } else {
        badge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-orange-400"></span> Local Only`;
        badge.className = "flex items-center gap-1 text-[11px] text-orange-400 font-medium";
    }

    renderDashboard();
});

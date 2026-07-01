// Configuración de colores corporativos AF (Consistente con la estética Vercel)
tailwind.config = {
    theme: {
        extend: {
            colors: {
                brandDark: '#0B0813', brandPanel: '#171226', brandBorder: '#2D2344',
                brandPurple: '#7332A6', brandPurpleLight: '#914CC9', brandLime: '#9BE600',
                brandCyan: '#00E5FF', brandText: '#9E9AA8'
            },
            fontFamily: { sans: ['Inter', 'sans-serif'], poppins: ['Poppins', 'sans-serif'] }
        }
    }
}

// --- CONFIGURACIÓN DE SUPABASE ---
const SUPABASE_URL = "https://ovbaukzafvrfymkmpdhh.supabase.co";
const SUPABASE_KEY = "sb_publishable_0pFvPEWbBh7cWMb2KSFWwA_hudVfPrv";
const supabase = (typeof window.supabase !== 'undefined') ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY) : null;

// --- DEFINICIÓN DE LOS 38 PUNTOS REALES DEL SHEET ---
const CONFIG_AUDIT = [
    { id: 3, label: "3. Coach asignado en Membr?", section: 1, type: "bool" },
    { id: 4, label: "4. Valoración Fitness Realizada?", section: 1, type: "bool" },
    { id: 5, label: "5. Objetivo del Cliente", section: 1, type: "text" },
    { id: 6, label: "6. Programa Asignado?", section: 1, type: "bool" },
    { id: 7, label: "7. Obs Programa (Tipo/Opinión)", section: 1, type: "text" },
    { id: 8, label: "8. Enviado por App?", section: 1, type: "bool" },
    { id: 9, label: "9. Está completando programas?", section: 1, type: "bool" },
    { id: 10, label: "10. Observaciones Generales", section: 1, type: "text" },
    { id: 11, label: "11. Se hizo el Escaneo Evolt?", section: 2, type: "bool" },
    { id: 12, label: "12. Obs Escaneo (Grasa/Músculo)", section: 2, type: "text" },
    { id: 13, label: "13. Test de Movilidad Realizado?", section: 2, type: "bool" },
    { id: 14, label: "14. Observaciones del Test", section: 2, type: "text" },
    { id: 15, label: "15. Mejora desde última evaluación?", section: 2, type: "bool" },
    { id: 16, label: "16. Fecha Valoración/Escaneo", section: 2, type: "date" },
    { id: 17, label: "17. Añadida Entrevista en Notas?", section: 2, type: "bool" },
    { id: 18, label: "18. Fecha Próximo Escaneo (4 sem)", section: 2, type: "date" },
    { id: 19, label: "19. Fecha Próxima Revisión (6 sem)", section: 2, type: "date" },
    { id: 20, label: "20. Apps Descargadas (MZ, Evolt, AF)?", section: 3, type: "bool" },
    { id: 21, label: "21. Observaciones Apps", section: 3, type: "text" },
    { id: 22, label: "22. Uso de MyZone Regular?", section: 3, type: "bool" },
    { id: 23, label: "23. Participación en Reto?", section: 3, type: "bool" },
    { id: 24, label: "24. Logros alcanzados", section: 3, type: "text" },
    { id: 25, label: "25. Introducido en Grupo MZ?", section: 3, type: "bool" },
    { id: 26, label: "26. Status MyZone (Active/Inc)", section: 3, type: "text" },
    { id: 27, label: "27. Interacción Grupal?", section: 3, type: "bool" },
    { id: 28, label: "28. Comunidad Individual (Msgs)?", section: 3, type: "bool" },
    { id: 29, label: "29. Interacción de Likes?", section: 3, type: "bool" },
    { id: 30, label: "30. Observaciones MyZone", section: 3, type: "text" },
    { id: 31, label: "31. Prueba Esfuerzo Realizada?", section: 3, type: "bool" },
    { id: 32, label: "32. Resultados Prueba Esfuerzo", section: 3, type: "text" },
    { id: 33, label: "33. Seguimiento Semanal 1", section: 4, type: "bool" },
    { id: 34, label: "34. Seguimiento Semanal 2", section: 4, type: "bool" },
    { id: 35, label: "35. Seguimiento Semanal 3", section: 4, type: "bool" },
    { id: 36, label: "36. Seguimiento Semanal 4", section: 4, type: "bool" },
    { id: 37, label: "37. Método de Contacto", section: 4, type: "text" },
    { id: 38, label: "38. Valoración Genérica Coach", section: 4, type: "text" }
];

// --- BASE DE DATOS REAL AF SANT ADRIÀ ---
const entrenadoresDefault = [
    { id: "e1", name: "Tomas", role: "Head Coach", score: 95, clients: [
        {id:"ct1", name:"JOSE LUIS GIMENEZ", compliance: Array(38).fill(1)}, {id:"ct2", name:"MARIA CARMEN RUIZ", compliance: Array(38).fill(1)}, {id:"ct3", name:"ANTONIO LOPEZ", compliance: Array(38).fill(1)}, {id:"ct4", name:"FRANCISCO JAVIER GARCIA", compliance: Array(38).fill(1)}, {id:"ct5", name:"MARIA DOLORES MARTINEZ", compliance: Array(38).fill(1)}
    ] },
    { id: "e2", name: "Oscar", role: "Coach", score: 88, clients: [
        {id:"co1", name:"JOSE ANTONIO GONZALEZ ARROYO", compliance: Array(38).fill(1)}, {id:"co2", name:"MONTSERRAT AGUILAR", compliance: Array(38).fill(1)}, {id:"co3", name:"SHEILA DE CARMEN", compliance: Array(38).fill(1)}, {id:"co4", name:"ORIOL BACELLS", compliance: Array(38).fill(1)}, {id:"co5", name:"LISANDRO MELENDEZ", compliance: Array(38).fill(1)},
        {id:"co6", name:"JORGE MANUEL DOMINGUEZ", compliance: Array(38).fill(1)}, {id:"co7", name:"MIBEL RIBAS", compliance: Array(38).fill(1)}, {id:"co8", name:"YOLANDA FERNANDEZ", compliance: Array(38).fill(1)}, {id:"co9", name:"ANA MARIN MARTIN", compliance: Array(38).fill(1)}, {id:"co10", name:"RAUL VEGA GARCIA", compliance: Array(38).fill(1)},
        {id:"co11", name:"XAVI CATALAN", compliance: Array(38).fill(1)}, {id:"co12", name:"SELENE FERRER", compliance: Array(38).fill(1)}, {id:"co13", name:"MONTSERRAT GARRIGA", compliance: Array(38).fill(1)}, {id:"co14", name:"LLUIS GASSO", compliance: Array(38).fill(1)}, {id:"co15", name:"LAURA MASSOT", compliance: Array(38).fill(1)},
        {id:"co16", name:"SAMUEL RODRIGUEZ DA SILVA", compliance: Array(38).fill(1)}, {id:"co17", name:"MONTSERRAT RUIZ GRIBAU", compliance: Array(38).fill(1)}, {id:"co18", name:"GUILLERMO VERA", compliance: Array(38).fill(1)}, {id:"co19", name:"EDUARD FALCON", compliance: Array(38).fill(1)}, {id:"co20", name:"SEIDY GARCIA ISISDRO", compliance: Array(38).fill(1)},
        {id:"co21", name:"CLAUDIA SOUZA DA SILVA", compliance: Array(38).fill(1)}, {id:"co22", name:"MONICA ESCAÑO VIAN", compliance: Array(38).fill(1)}, {id:"co23", name:"CESAR DAVID SOLORZANO QUIÑE", compliance: Array(38).fill(1)}, {id:"co24", name:"AUDRY DOTEL", compliance: Array(38).fill(1)}, {id:"co25", name:"CRISTINA BATALLER BATALLER", compliance: Array(38).fill(1)},
        {id:"co26", name:"ALEX GIL RAFELS", compliance: Array(38).fill(1)}, {id:"co27", name:"YERAY MELLADO GARCIA", compliance: Array(38).fill(1)}, {id:"co28", name:"NATALIA BELEN DIAZ", compliance: Array(38).fill(1)}, {id:"co29", name:"ADOLFO ROSA RUIZ", compliance: Array(38).fill(1)}, {id:"co30", name:"PAOLA ALONZO ALVAREZ", compliance: Array(38).fill(1)},
        {id:"co31", name:"CHAYMAE HOUNAINE", compliance: Array(38).fill(1)}, {id:"co32", name:"WISAL KHAN", compliance: Array(38).fill(1)}, {id:"co33", name:"LIZ PAOLA CANDIA", compliance: Array(38).fill(1)}
    ]},
    { id: "e3", name: "Ruben", role: "Coach", score: 82, clients: [
        {id:"cr1", name:"Ivan sanchez mont", compliance: Array(38).fill(1)}, {id:"cr2", name:"Sandra Carolina Benitez", compliance: Array(38).fill(1)}, {id:"cr3", name:"ANNa Bollo Albos", compliance: Array(38).fill(1)}, {id:"cr4", name:"Xavier Guerrero Garcia", compliance: Array(38).fill(1)}, {id:"cr5", name:"Carlos javier gallego mateo", compliance: Array(38).fill(1)},
        {id:"cr6", name:"Cristina rodriguez valero", compliance: Array(38).fill(1)}, {id:"cr7", name:"Alex pino palau", compliance: Array(38).fill(1)}, {id:"cr8", name:"biel serrano", compliance: Array(38).fill(1)}, {id:"cr9", name:"daniel rodriguez", compliance: Array(38).fill(1)}, {id:"cr10", name:"ana celia", compliance: Array(38).fill(1)},
        {id:"cr11", name:"gustavo rocha", compliance: Array(38).fill(1)}, {id:"cr12", name:"cristina molina rosales", compliance: Array(38).fill(1)}, {id:"cr13", name:"Manuel Rodrigez Fernandez", compliance: Array(38).fill(1)}, {id:"cr14", name:"Mohamed Rougui", compliance: Array(38).fill(1)}, {id:"cr15", name:"albert lastra", compliance: Array(38).fill(1)},
        {id:"cr16", name:"David mula", compliance: Array(38).fill(1)}, {id:"cr17", name:"Miriam gasca", compliance: Array(38).fill(1)}
    ]},
    { id: "e4", name: "Anna", role: "Coach", score: 90, clients: [
        {id:"ca1", name:"ANA MARIN MARTIN", compliance: Array(38).fill(1)}, {id:"ca2", name:"MONTSERRAT GARRIGA", compliance: Array(38).fill(1)}, {id:"ca3", name:"SELENE FERRER", compliance: Array(38).fill(1)}, {id:"ca4", name:"MONTSERRAT RUIZ GRIBAU", compliance: Array(38).fill(1)}, {id:"ca5", name:"GUILLERMO VERA", compliance: Array(38).fill(1)}, {id:"ca6", name:"CESAR DAVID SOLORZANO QUIÑE", compliance: Array(38).fill(1)}, {id:"ca7", name:"CRISTINA BATALLER BATALLER", compliance: Array(38).fill(1)}
    ] }
];

let entrenadores = entrenadoresDefault;
try {
    const savedCoaches = localStorage.getItem('af_coaches_v26');
    if (savedCoaches) {
        const parsedCoaches = JSON.parse(savedCoaches);
        if (Array.isArray(parsedCoaches)) entrenadores = parsedCoaches;
    }
} catch (e) {
    console.error("Error parsing af_coaches_v26:", e);
}

let auditorias = [];
try {
    const savedAudits = localStorage.getItem('af_audits_v26');
    if (savedAudits) {
        const parsedAudits = JSON.parse(savedAudits);
        if (Array.isArray(parsedAudits)) auditorias = parsedAudits;
    }
} catch (e) {
    console.error("Error parsing af_audits_v26:", e);
}

let formValues = {}; 
let formObservations = {};
let googleScriptUrl = localStorage.getItem('af_script_url_v4') || "https://script.google.com/macros/s/AKfycbxcIOljiPraQq2mgtyMLwj0PQ3Nzrd5Qcuawg1L1FdvCqsaQhTF7o_-fH-9T2mf1kyx/exec";


function resetFormParams() { 
    CONFIG_AUDIT.forEach(p => { 
        formValues[p.id] = p.type === "bool" ? 1 : ""; 
        formObservations[p.id] = ""; 
    });
}
resetFormParams();

// --- TOAST NOTIFICATIONS (MENSAJES FLOTANTES PREMIUM) ---
window.showToast = function(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = `pointer-events-auto flex items-center gap-3 px-5 py-4 rounded-2xl border text-xs font-semibold shadow-2xl transform translate-y-2 opacity-0 transition-all duration-300 ${
        type === 'success' 
        ? 'bg-[#171226]/95 border-brandLime/30 text-white backdrop-blur-md' 
        : 'bg-[#171226]/95 border-red-500/30 text-white backdrop-blur-md'
    }`;
    
    const icon = type === 'success' 
        ? '<i class="fa-solid fa-circle-check text-brandLime text-base"></i>' 
        : '<i class="fa-solid fa-triangle-exclamation text-red-500 text-base"></i>';
        
    toast.innerHTML = `${icon} <span>${message}</span>`;
    container.appendChild(toast);
    
    // Force reflow
    toast.offsetHeight;
    
    // Animate in
    toast.classList.remove('translate-y-2', 'opacity-0');
    
    // Auto-remove
    setTimeout(() => {
        toast.classList.add('translate-y-[-10px]', 'opacity-0');
        setTimeout(() => { toast.remove(); }, 300);
    }, 4000);
}

// --- COPIAR CÓDIGO APPS SCRIPT ---
window.copyCode = function() {
    const code = document.getElementById('codeBlock').innerText;
    navigator.clipboard.writeText(code).then(() => {
        showToast("¡Código Apps Script copiado al portapapeles!");
    }).catch(err => {
        console.error("Error al copiar: ", err);
        showToast("No se pudo copiar el código.", "error");
    });
}

// --- NAVEGACIÓN ---
window.cambiarSeccion = function(target) {
    try {
        document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
        const viewEl = document.getElementById(`view-${target}`);
        if (viewEl) viewEl.classList.remove('hidden');
        
        document.querySelectorAll('aside nav button').forEach(btn => btn.classList.remove('active-nav'));
        const navBtn = document.getElementById(`nav-${target}`);
        if (navBtn) navBtn.classList.add('active-nav');
        
        if (target === 'dashboard') renderDashboard();
        if (target === 'auditar') { 
            renderCoachSelect(); 
            renderPuntosAuditoria(); 
            // Pre-poblar fecha y hora local actual si está vacío
            const dtInput = document.getElementById('formDateTime');
            if (dtInput && !dtInput.value) {
                const now = new Date();
                const tzOffset = now.getTimezoneOffset() * 60000;
                const localISOTime = (new Date(now - tzOffset)).toISOString().slice(0, 16);
                dtInput.value = localISOTime;
            }
        }
        if (target === 'config') {
            const input = document.getElementById('sheetUrlInput');
            if (input) input.value = googleScriptUrl || "";
        }
        if (target === 'entrenadores') renderEntrenadoresGrid();
    } catch (err) {
        console.error("Error al cambiar de sección:", err);
    }
}

function renderPuntosAuditoria() {
    for (let i = 1; i <= 4; i++) {
        const container = document.getElementById(`seccion-${i}-puntos`);
        if (!container) continue;
        container.innerHTML = "";
        CONFIG_AUDIT.filter(p => p.section === i).forEach(p => {
            let controlHtml = "";
            const currentVal = formValues[p.id];
            const currentObs = formObservations[p.id] || "";

            if (p.type === "bool") {
                const isYes = currentVal === 1;
                const isNo = currentVal === 0;
                controlHtml = `
                    <div class="flex gap-1 bg-brandDark p-1 rounded-lg border border-brandBorder">
                        <button type="button" onclick="setVal(${p.id}, 1, this)" class="btn-val-${p.id} px-3 py-1 text-[10px] rounded-md transition font-bold ${isYes ? 'bg-brandLime text-brandDark' : 'text-brandText'}">SÍ</button>
                        <button type="button" onclick="setVal(${p.id}, 0, this)" class="btn-val-${p.id} px-3 py-1 text-[10px] rounded-md transition font-bold ${isNo ? 'bg-red-500 text-white' : 'text-brandText'}">NO</button>
                    </div>`;
            } else {
                const inputType = p.type === "date" ? "date" : "text";
                controlHtml = `<input type="${inputType}" value="${currentVal || ''}" oninput="setVal(${p.id}, this.value)" class="bg-brandDark border border-brandBorder rounded-lg p-2 text-[10px] text-white focus:border-brandPurple outline-none w-full sm:w-40">`;
            }

            container.innerHTML += `
                <div class="bg-brandDark/40 p-4 rounded-2xl border border-brandBorder space-y-3">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <span class="text-xs text-white font-medium">${p.label}</span>
                        ${controlHtml}
                    </div>
                    <div class="pt-1">
                        <input type="text" value="${currentObs}" oninput="setObs(${p.id}, this.value)" placeholder="Añadir observación..." class="w-full bg-brandDark/60 border border-brandBorder/30 rounded-xl p-2.5 text-[10px] text-brandText focus:text-white focus:outline-none focus:border-brandPurple placeholder-brandText/30">
                    </div>
                </div>`;
        });
    }
}

window.setVal = function(id, val, btn) {
    formValues[id] = val;
    if (btn) {
        document.querySelectorAll(`.btn-val-${id}`).forEach(b => b.className = `btn-val-${id} px-3 py-1 text-[10px] rounded-md text-brandText transition font-bold`);
        btn.className = `btn-val-${id} px-3 py-1 text-[10px] rounded-md transition font-bold ${val === 1 ? 'bg-brandLime text-brandDark' : 'bg-red-500 text-white'}`;
    }
}
window.setObs = function(id, val) { formObservations[id] = val; }

function renderCoachSelect() {
    const s = document.getElementById('formCoachSelect');
    if (!s) return;
    s.innerHTML = '<option value="" disabled selected>Selecciona Coach...</option>';
    if (Array.isArray(entrenadores)) {
        entrenadores.forEach(e => {
            if (e && e.id && e.name) {
                s.innerHTML += `<option value="${e.id}">${e.name}</option>`;
            }
        });
    }
}

window.actualizarListaAlumnos = function(id) {
    const s = document.getElementById('formClientSelect');
    if (!s) return;
    s.innerHTML = '<option value="" disabled selected>Selecciona Alumno...</option>';
    const coach = entrenadores.find(e => e.id === id);
    if (coach) {
        coach.clients.sort((a,b) => a.name.localeCompare(b.name)).forEach(c => {
            s.innerHTML += `<option value="${c.id}">${c.name}</option>`;
        });
    }
}

function renderDashboard() {
    const total = auditorias.length;
    const avg = total ? Math.round(auditorias.reduce((acc, b) => acc + (b.score || 0), 0) / total) : 0;
    const alrt = auditorias.filter(a => (a.score || 0) < 80).length;
    
    if(document.getElementById('statTotalAudits')) document.getElementById('statTotalAudits').innerText = total;
    if(document.getElementById('statAvgScore')) document.getElementById('statAvgScore').innerText = avg + "%";
    if(document.getElementById('statAlerts')) document.getElementById('statAlerts').innerText = alrt;

    const list = document.getElementById('coachesSummaryList');
    if (!list) return;
    list.innerHTML = "";
    entrenadores.forEach(e => {
        const scoreVal = e.score !== undefined && e.score !== null ? e.score : 100;
        const color = scoreVal < 80 ? 'bg-red-500' : (scoreVal < 90 ? 'bg-amber-500' : 'bg-brandLime');
        const coachInitial = e.name && e.name.length ? e.name[0] : '?';
        list.innerHTML += `
            <div class="bg-[#171226] border border-[#2D2344] rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
                <div class="flex items-center gap-4">
                    <div class="w-14 h-14 rounded-2xl bg-[#0B0813] border border-[#2D2344] flex items-center justify-center text-white font-bold text-xl shadow-inner">${coachInitial}</div>
                    <div>
                        <h4 class="text-white font-bold text-lg">${e.name || 'Sin Nombre'}</h4>
                        <p class="text-[10px] text-brandText uppercase tracking-widest">${e.role || 'Coach'}</p>
                    </div>
                </div>
                <div class="flex items-center gap-8">
                    <div class="text-right">
                        <p class="text-[10px] text-brandText uppercase font-bold tracking-widest">Compliance</p>
                        <p class="text-white font-bold text-2xl">${scoreVal}%</p>
                    </div>
                    <div class="w-40 bg-brandDark border border-[#2D2344] h-2.5 rounded-full overflow-hidden shadow-inner">
                        <div class="h-full ${color}" style="width: ${scoreVal}%"></div>
                    </div>
                </div>
            </div>`;
    });

    const table = document.getElementById('lastAuditsTable');
    if (!table) return;
    table.innerHTML = auditorias.length ? '' : '<tr><td colspan="5" class="py-10 text-brandText text-center tracking-widest uppercase text-[10px]">Sin auditorías registradas</td></tr>';
    auditorias.slice(0, 10).forEach(a => {
        const displayDate = (a.date && typeof a.date === 'string') ? a.date.split('T')[0] : 'Sin fecha';
        table.innerHTML += `
            <tr class="border-b border-[#2D2344]/40 hover:bg-[#171226]/50 transition text-xs">
                <td class="py-6 pl-2 text-brandText">${displayDate}</td>
                <td class="py-6 font-bold text-white uppercase tracking-tighter">${a.coach || 'Sin Coach'}</td>
                <td class="py-6 text-white font-medium">${a.client || 'Sin Alumno'}</td>
                <td class="py-6 text-center"><span class="px-3 py-1.5 rounded-xl text-[11px] font-black ${(a.score || 0) >= 85 ? 'bg-brandLime/10 text-brandLime' : 'bg-red-500/10 text-red-500'}">${a.score || 0}%</span></td>
                <td class="py-6 text-center"><button onclick="verInformePrevio('${a.id}')" class="text-brandPurpleLight hover:text-white transition transform hover:scale-110"><i class="fa-solid fa-file-invoice text-xl"></i></button></td>
            </tr>`;
    });
}

window.procesarNuevaAuditoria = function(e) {
    e.preventDefault();
    const coachId = document.getElementById('formCoachSelect').value;
    const clientId = document.getElementById('formClientSelect').value;
    const dateInput = document.getElementById('formDateTime').value;
    if (!coachId || !clientId || !dateInput) {
        return showToast("Error: Selecciona Coach, Alumno y Fecha.", "error");
    }

    const coach = entrenadores.find(e => e.id === coachId);
    const client = coach.clients.find(c => c.id === clientId);

    const boolPoints = CONFIG_AUDIT.filter(p => p.type === "bool");
    const score = Math.round((boolPoints.filter(p => formValues[p.id] === 1).length / boolPoints.length) * 100);

    const nuevaAuditoria = {
        id: "a_" + Date.now(),
        date: dateInput,
        coach: coach.name, client: client.name, score: score,
        compliance: {...formValues}, observations: {...formObservations},
        prevScore: client.lastScore || null
    };

    auditorias.unshift(nuevaAuditoria);
    client.lastScore = score;
    
    // Calcular score del coach ignorando clientes sin auditorías (o por lo menos ponderándolo de forma realista)
    const auditedClients = coach.clients.filter(c => c.lastScore !== undefined);
    coach.score = auditedClients.length 
        ? Math.round(auditedClients.reduce((acc, c) => acc + c.lastScore, 0) / auditedClients.length) 
        : 100;

    localStorage.setItem('af_audits_v26', JSON.stringify(auditorias));
    localStorage.setItem('af_coaches_v26', JSON.stringify(entrenadores));

    showToast("Sincronizando auditoría en la nube...");

    if (supabase) {
        supabase.from('auditorias').insert([{
            coach: coach.name, client: client.name, score: score,
            compliance_data: formValues, observations_data: formObservations,
            created_at: new Date()
        }]).then(({error}) => { 
            if (error) {
                console.error("Supabase Sync Error:", error);
                showToast("Fallo al guardar en Base de Datos.", "error");
            } else {
                showToast("Base de datos sincronizada.");
            }
        });
    }

    if (googleScriptUrl) {
        fetch(googleScriptUrl, { 
            method: 'POST', 
            mode: 'no-cors', 
            body: JSON.stringify({...nuevaAuditoria, action: "updateAndHighlight"}) 
        })
        .then(() => {
            showToast("Planilla Google Sheets sincronizada.");
        })
        .catch(err => {
            console.error("Sheet Sync Error:", err);
            showToast("Error de conexión al sincronizar Planilla.", "error");
        });
    }

    generarInformeFinal(nuevaAuditoria);
    
    // Limpieza y reseteo completo del formulario y estado de memoria
    resetFormParams();
    document.getElementById('auditFormMain').reset();
    renderPuntosAuditoria();
    
    // Repoblar la fecha y hora local actual
    const dtInput = document.getElementById('formDateTime');
    if (dtInput) {
        const now = new Date();
        const tzOffset = now.getTimezoneOffset() * 60000;
        const localISOTime = (new Date(now - tzOffset)).toISOString().slice(0, 16);
        dtInput.value = localISOTime;
    }
}

function generarInformeFinal(aud) {
    const container = document.getElementById('contenidoInforme');
    const fallos = CONFIG_AUDIT.filter(p => p.type === "bool" && aud.compliance[p.id] === 0);
    const fortalezas = CONFIG_AUDIT.filter(p => p.type === "bool" && aud.compliance[p.id] === 1);
    const tendencia = aud.prevScore ? (aud.score > aud.prevScore ? "Mejora detectada" : "Descenso detectado") : "Auditoría Inicial";

    container.innerHTML = `
        <div class="flex justify-between border-b border-[#2D2344] pb-8 text-white">
            <div><p class="text-[10px] text-brandText uppercase font-black tracking-widest mb-2">Resumen Audit</p><h4 class="text-4xl font-bold">${aud.score}% Compliance</h4></div>
            <div class="text-right text-[10px] text-brandText font-bold uppercase tracking-widest">${tendencia}<br>${aud.date.replace('T', ' ')}</div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 py-8">
            <div class="space-y-4 text-white"><h5 class="text-xs font-black text-brandLime uppercase tracking-widest">Fortalezas</h5><ul class="text-[11px] space-y-3">${fortalezas.slice(0,10).map(f=>`<li class="flex items-center gap-3"><i class="fa-solid fa-circle-check text-brandLime"></i>${f.label}</li>`).join('')}</ul></div>
            <div class="space-y-6 text-white"><h5 class="text-xs font-black text-red-400 uppercase tracking-widest">Mejoras Críticas</h5><ul class="text-[11px] space-y-5">${fallos.map(f=>`<li class="space-y-2"><div class="font-bold flex items-center gap-3"><i class="fa-solid fa-triangle-exclamation text-red-400"></i>${f.label}</div>${aud.observations[f.id] ? `<div class="ml-7 pl-4 border-l-2 border-[#2D2344] text-brandText italic">"${aud.observations[f.id]}"</div>` : ''}</li>`).join('')}</ul></div>
        </div>`;
    document.getElementById('modalInforme').classList.remove('hidden');
}

window.guardarUrlSheet = function() {
    const url = document.getElementById('sheetUrlInput').value.trim();
    if (!url) return showToast("Ingresa una URL válida de Apps Script", "error");
    localStorage.setItem('af_script_url_v4', url);
    googleScriptUrl = url;
    showToast("¡Planilla vinculada con éxito!");
    cambiarSeccion('dashboard');
}

window.cerrarModalInforme = function() { document.getElementById('modalInforme').classList.add('hidden'); cambiarSeccion('dashboard'); }
window.verInformePrevio = function(id) { const a = auditorias.find(aud => aud.id === id); if (a) generarInformeFinal(a); }

function renderEntrenadoresGrid() {
    const grid = document.getElementById('coachesDetailedGrid');
    if (!grid) return;
    grid.innerHTML = "";
    if (!Array.isArray(entrenadores)) return;
    
    entrenadores.forEach(e => {
        if (!e) return;
        const clientsList = Array.isArray(e.clients) ? e.clients : [];
        grid.innerHTML += `
            <div class="bg-[#171226] border border-[#2D2344] rounded-[2.5rem] p-10 space-y-8 shadow-2xl">
                <h3 class="font-bold text-white text-2xl border-b border-[#2D2344] pb-6">${e.name || 'Sin Nombre'}</h3>
                <p class="text-[11px] text-brandText uppercase font-black tracking-[0.2em]">Cartera Activa (${clientsList.length})</p>
                <div class="space-y-4 max-h-[25rem] overflow-y-auto pr-3 custom-scroll">
                    ${clientsList.map(c => `
                        <div class="flex justify-between items-center text-sm bg-[#0B0813]/60 p-5 rounded-[1.5rem] border border-[#2D2344]">
                            <span class="text-white font-semibold truncate pr-4">${c.name || 'Sin Nombre'}</span>
                            <span class="font-black text-brandLime text-base">${c.lastScore !== undefined && c.lastScore !== null ? c.lastScore : '--'}%</span>
                        </div>
                    `).join('')}
                </div>
            </div>`;
    });
}

document.addEventListener('DOMContentLoaded', () => { 
    try {
        renderDashboard(); 
    } catch (err) {
        console.error("Error al inicializar el Dashboard:", err);
    }
});

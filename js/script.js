// Configuración de colores corporativos
tailwind.config = {
    theme: {
        extend: {
            colors: {
                brandDark: '#0B0813', brandPanel: '#171226', brandBorder: '#2D2344',
                brandPurple: '#7332A6', brandPurpleLight: '#914CC9', brandLime: '#9BE600',
                brandCyan: '#00E5FF', brandText: '#9E9AA8'
            }
        }
    }
}

// --- CONFIGURACIÓN DE SUPABASE ---
const SUPABASE_URL = "https://ovbaukzafvrfymkmpdhh.supabase.co";
const SUPABASE_KEY = "sb_publishable_0pFvPEWbBh7cWMb2KSFWwA_hudVfPrv";
const supabase = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY) : null;

// --- DEFINICIÓN DE LOS 38 PUNTOS REALES DEL SHEET ---
const CONFIG_AUDIT = [
    { id: 3, label: "Coach asignado en Membr?", section: 1, type: "bool" },
    { id: 4, label: "Valoración Fitness Realizada?", section: 1, type: "bool" },
    { id: 5, label: "Objetivo del Cliente", section: 1, type: "text" },
    { id: 6, label: "Programa Asignado?", section: 1, type: "bool" },
    { id: 7, label: "Obs Programa (Tipo/Opinión)", section: 1, type: "text" },
    { id: 8, label: "Enviado por App?", section: 1, type: "bool" },
    { id: 9, label: "Está completando programas?", section: 1, type: "bool" },
    { id: 10, label: "Observaciones Generales", section: 1, type: "text" },
    { id: 11, label: "Se hizo el Escaneo Evolt?", section: 2, type: "bool" },
    { id: 12, label: "Obs Escaneo (Grasa/Músculo)", section: 2, type: "text" },
    { id: 13, label: "Test de Movilidad Realizado?", section: 2, type: "bool" },
    { id: 14, label: "Observaciones del Test", section: 2, type: "text" },
    { id: 15, label: "Mejora desde última evaluación?", section: 2, type: "bool" },
    { id: 16, label: "Fecha Valoración/Escaneo", section: 2, type: "date" },
    { id: 17, label: "Añadida Entrevista en Notas?", section: 2, type: "bool" },
    { id: 18, label: "Fecha Próximo Escaneo (4 sem)", section: 2, type: "date" },
    { id: 19, label: "Fecha Próxima Revisión (6 sem)", section: 2, type: "date" },
    { id: 20, label: "Apps Descargadas (MZ, Evolt, AF)?", section: 3, type: "bool" },
    { id: 21, label: "Observaciones Apps", section: 3, type: "text" },
    { id: 22, label: "Uso de MyZone Regular?", section: 3, type: "bool" },
    { id: 23, label: "Participación en Reto?", section: 3, type: "bool" },
    { id: 24, label: "Logros alcanzados", section: 3, type: "text" },
    { id: 25, label: "Introducido en Grupo MZ?", section: 3, type: "bool" },
    { id: 26, label: "Status MyZone (Active/Inc)", section: 3, type: "text" },
    { id: 27, label: "Interacción Grupal?", section: 3, type: "bool" },
    { id: 28, label: "Comunidad Individual (Msgs)?", section: 3, type: "bool" },
    { id: 29, label: "Interacción de Likes?", section: 3, type: "bool" },
    { id: 30, label: "Observaciones MyZone", section: 3, type: "text" },
    { id: 31, label: "Prueba Esfuerzo Realizada?", section: 3, type: "bool" },
    { id: 32, label: "Resultados Prueba Esfuerzo", section: 3, type: "text" },
    { id: 33, label: "Seguimiento Semanal 1", section: 4, type: "bool" },
    { id: 34, label: "Seguimiento Semanal 2", section: 4, type: "bool" },
    { id: 35, label: "Seguimiento Semanal 3", section: 4, type: "bool" },
    { id: 36, label: "Seguimiento Semanal 4", section: 4, type: "bool" },
    { id: 37, label: "Método de Contacto", section: 4, type: "text" },
    { id: 38, label: "Valoración Genérica Coach", section: 4, type: "text" }
];

// --- BASE DE DATOS REAL AF SANT ADRIÀ ---
const entrenadoresDefault = [
    { id: "e1", name: "Tomas", role: "Head Coach", score: 95, clients: [{id:"ct1", name:"JOSE LUIS GIMENEZ"}] },
    { id: "e2", name: "Oscar", role: "Coach", score: 88, clients: [
        {id:"co1", name:"JOSE ANTONIO GONZALEZ ARROYO"}, {id:"co2", name:"MONTSERRAT AGUILAR"}, {id:"co3", name:"SHEILA DE CARMEN"}
    ]},
    { id: "e3", name: "Ruben", role: "Coach", score: 82, clients: [
        {id:"cr1", name:"Ivan sanchez mont"}, {id:"cr2", name:"Sandra Carolina Benitez"}, {id:"cr3", name:"ANNa Bollo Albos"},
        {id:"cr4", name:"Xavier Guerrero Garcia"}, {id:"cr5", name:"Carlos javier gallego mateo"}, {id:"cr6", name:"Cristina rodriguez valero"},
        {id:"cr7", name:"Alex pino palau"}, {id:"cr8", name:"biel serrano"}, {id:"cr9", name:"daniel rodriguez"},
        {id:"cr10", name:"ana celia"}, {id:"cr11", name:"gustavo rocha"}, {id:"cr12", name:"cristina molina rosales"},
        {id:"cr13", name:"Manuel Rodrigez Fernandez"}, {id:"cr14", name:"Mohamed Rougui"}, {id:"cr15", name:"albert lastra"},
        {id:"cr16", name:"David mula"}, {id:"cr17", name:"Miriam gasca"}
    ]},
    { id: "e4", name: "Anna", role: "Coach", score: 90, clients: [{id:"ca1", name:"LUISA FERNANDA GOMEZ"}] }
];

let entrenadores = JSON.parse(localStorage.getItem('af_coaches_v19')) || entrenadoresDefault;
let auditorias = JSON.parse(localStorage.getItem('af_audits_v19')) || [];
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

// --- NAVEGACIÓN ---
function cambiarSeccion(target) {
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
    document.getElementById(`view-${target}`).classList.remove('hidden');
    document.querySelectorAll('aside nav button').forEach(btn => btn.classList.remove('active-nav'));
    const navBtn = document.getElementById(`nav-${target}`);
    if (navBtn) navBtn.classList.add('active-nav');
    
    if (target === 'dashboard') renderDashboard();
    if (target === 'auditar') { renderCoachSelect(); renderPuntosAuditoria(); }
    if (target === 'config') document.getElementById('sheetUrlInput').value = googleScriptUrl;
}

// --- RENDERIZADO DINÁMICO ---
function renderPuntosAuditoria() {
    for (let i = 1; i <= 4; i++) {
        const container = document.getElementById(`seccion-${i}-puntos`);
        if (!container) continue;
        container.innerHTML = "";
        CONFIG_AUDIT.filter(p => p.section === i).forEach(p => {
            let controlHtml = "";
            if (p.type === "bool") {
                controlHtml = `
                    <div class="flex gap-1 bg-brandDark p-1 rounded-lg border border-brandBorder">
                        <button type="button" onclick="setVal(${p.id}, 1, this)" class="btn-val-${p.id} px-3 py-1 text-[10px] rounded-md bg-brandLime text-brandDark transition">SÍ</button>
                        <button type="button" onclick="setVal(${p.id}, 0, this)" class="btn-val-${p.id} px-3 py-1 text-[10px] rounded-md text-brandText transition">NO</button>
                    </div>`;
            } else {
                const inputType = p.type === "date" ? "date" : "text";
                controlHtml = `<input type="${inputType}" oninput="setVal(${p.id}, this.value)" class="bg-brandDark border border-brandBorder rounded-lg p-2 text-[10px] text-white focus:border-brandPurple outline-none w-full sm:w-40">`;
            }

            container.innerHTML += `
                <div class="bg-brandDark/40 p-4 rounded-2xl border border-brandBorder space-y-3">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <span class="text-xs text-white font-medium">${p.label}</span>
                        ${controlHtml}
                    </div>
                    <div class="pt-1">
                        <input type="text" oninput="setObs(${p.id}, this.value)" placeholder="Observación para este punto..." class="w-full bg-brandDark/60 border border-brandBorder/30 rounded-xl p-2.5 text-[10px] text-brandText focus:text-white focus:outline-none focus:border-brandPurple">
                    </div>
                </div>`;
        });
    }
}

function setVal(id, val, btn) {
    formValues[id] = val;
    if (btn) {
        document.querySelectorAll(`.btn-val-${id}`).forEach(b => b.className = `btn-val-${id} px-3 py-1 text-[10px] rounded-md text-brandText transition`);
        btn.className = `btn-val-${id} px-3 py-1 text-[10px] rounded-md transition ${val === 1 ? 'bg-brandLime text-brandDark' : 'bg-red-500 text-white'}`;
    }
}
function setObs(id, val) { formObservations[id] = val; }

function renderCoachSelect() {
    const s = document.getElementById('formCoachSelect');
    s.innerHTML = '<option value="" disabled selected>Selecciona Coach...</option>';
    entrenadores.forEach(e => s.innerHTML += `<option value="${e.id}">${e.name}</option>`);
}

function actualizarListaAlumnos(id) {
    const s = document.getElementById('formClientSelect');
    s.innerHTML = '<option value="" disabled selected>Selecciona Alumno...</option>';
    const coach = entrenadores.find(e => e.id === id);
    if (coach) coach.clients.forEach(c => s.innerHTML += `<option value="${c.id}">${c.name}</option>`);
}

function renderDashboard() {
    const total = auditorias.length;
    const avg = total ? Math.round(auditorias.reduce((a,b)=>a+b.score,0)/total) : 0;
    const alrt = auditorias.filter(a=>a.score < 80).length;
    document.getElementById('statTotalAudits').innerText = total;
    document.getElementById('statAvgScore').innerText = avg + "%";
    document.getElementById('statAlerts').innerText = alrt;

    const list = document.getElementById('coachesSummaryList');
    list.innerHTML = "";
    entrenadores.forEach(e => {
        const color = e.score < 80 ? 'bg-red-500' : (e.score < 90 ? 'bg-amber-500' : 'bg-brandLime');
        list.innerHTML += `
            <div class="bg-brandPanel border border-brandBorder rounded-2xl p-5 space-y-3">
                <div class="flex items-center gap-4">
                    <div class="w-10 h-10 rounded-xl bg-brandBorder flex items-center justify-center text-white font-bold">${e.name[0]}</div>
                    <div><h4 class="text-white font-bold text-sm">${e.name}</h4><p class="text-[10px] text-brandText uppercase">${e.role}</p></div>
                </div>
                <div class="flex justify-between items-center text-[10px] font-bold text-white"><span>Score: ${e.score}%</span></div>
                <div class="w-full bg-brandDark h-1.5 rounded-full overflow-hidden border border-brandBorder"><div class="h-full ${color}" style="width: ${e.score}%"></div></div>
            </div>`;
    });

    const table = document.getElementById('lastAuditsTable');
    table.innerHTML = auditorias.length ? '' : '<tr><td colspan="5" class="py-4 text-brandText pl-2">Sin registros.</td></tr>';
    auditorias.slice(0, 10).forEach(a => {
        table.innerHTML += `
            <tr class="border-b border-brandBorder/40 hover:bg-brandPanel/30 transition text-xs">
                <td class="py-4 pl-2 text-brandText">${a.date.split('T')[0]}</td>
                <td class="py-4 font-bold text-white">${a.coach}</td>
                <td class="py-4 text-white">${a.client}</td>
                <td class="py-4 text-center"><span class="px-2 py-1 rounded-lg text-[10px] font-bold ${a.score >= 85 ? 'bg-brandLime/10 text-brandLime' : 'bg-red-500/10 text-red-500'}">${a.score}%</span></td>
                <td class="py-4 text-center"><button onclick="verInformePrevio('${a.id}')" class="text-brandPurple hover:text-white transition"><i class="fa-solid fa-file-invoice"></i></button></td>
            </tr>`;
    });
}

function procesarNuevaAuditoria(e) {
    e.preventDefault();
    const coachId = document.getElementById('formCoachSelect').value;
    const clientId = document.getElementById('formClientSelect').value;
    if (!coachId || !clientId) return alert("Selecciona coach y alumno.");

    const coach = entrenadores.find(e => e.id === coachId);
    const client = coach.clients.find(c => c.id === clientId);

    const boolPoints = CONFIG_AUDIT.filter(p => p.type === "bool");
    const score = Math.round((boolPoints.filter(p => formValues[p.id] === 1).length / boolPoints.length) * 100);

    const nuevaAuditoria = {
        id: "a_" + Date.now(),
        date: document.getElementById('formDateTime').value,
        coach: coach.name, client: client.name, score: score,
        compliance: {...formValues}, observations: {...formObservations},
        prevScore: client.lastScore || null
    };

    auditorias.unshift(nuevaAuditoria);
    client.lastScore = score;
    coach.score = Math.round(coach.clients.reduce((acc, c) => acc + (c.lastScore || 100), 0) / coach.clients.length);

    // Guardado en LocalStorage
    localStorage.setItem('af_audits_v19', JSON.stringify(auditorias));
    localStorage.setItem('af_coaches_v19', JSON.stringify(entrenadores));

    // GUARDADO EN SUPABASE
    if (supabase) {
        supabase.from('auditorias').insert([{
            coach: coach.name, client: client.name, score: score,
            compliance_data: formValues, observations_data: formObservations,
            created_at: new Date()
        }]).then(({error}) => { if (error) console.error("Supabase Error:", error); });
    }

    // ENVÍO A GOOGLE SHEET
    if (googleScriptUrl) {
        fetch(googleScriptUrl, {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify({...nuevaAuditoria, action: "updateAndHighlight"})
        });
    }

    generarInformeFinal(nuevaAuditoria);
}

function generarInformeFinal(aud) {
    const container = document.getElementById('contenidoInforme');
    const fallos = CONFIG_AUDIT.filter(p => p.type === "bool" && aud.compliance[p.id] === 0);
    const fortalezas = CONFIG_AUDIT.filter(p => p.type === "bool" && aud.compliance[p.id] === 1);
    const tendencia = aud.prevScore ? (aud.score > aud.prevScore ? "📈 Mejora" : "📉 Descenso") : "🆕 Inicial";

    container.innerHTML = `
        <div class="flex justify-between border-b border-brandBorder pb-4">
            <div><p class="text-[10px] text-brandText uppercase font-bold">Resumen Audit</p><h4 class="text-2xl font-bold text-white">${aud.score}% Cumplimiento</h4></div>
            <div class="text-right text-[10px] text-brandText font-bold">${tendencia}<br>${aud.date.replace('T', ' ')}</div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
            <div class="space-y-2"><h5 class="text-xs font-bold text-brandLime uppercase tracking-widest">Fortalezas</h5><ul class="text-[10px] space-y-1">${fortalezas.slice(0,6).map(f=>`<li>• ${f.label}</li>`).join('')}</ul></div>
            <div class="space-y-3"><h5 class="text-xs font-bold text-red-400 uppercase tracking-widest">Mejoras Críticas</h5><ul class="text-[10px] space-y-3">${fallos.map(f=>`<li><span class="text-white font-medium">${f.label}</span>${aud.observations[f.id] ? `<br><em class="text-brandText/60 italic">Nota: "${aud.observations[f.id]}"</em>` : ''}</li>`).join('')}</ul></div>
        </div>
        <div class="bg-brandDark/40 p-5 rounded-2xl border border-brandBorder italic text-[11px] text-brandText">
            Diagnóstico: La gestión de <strong>${aud.coach}</strong> con <strong>${aud.client}</strong> ha sido registrada y sincronizada.
        </div>`;
    document.getElementById('modalInforme').classList.remove('hidden');
}

function guardarUrlSheet() {
    const url = document.getElementById('sheetUrlInput').value.trim();
    if (!url) return alert("Ingresa URL");
    localStorage.setItem('af_script_url_v4', url);
    googleScriptUrl = url;
    alert("¡Vinculado con éxito!");
    cambiarSeccion('dashboard');
}

function cerrarModalInforme() { document.getElementById('modalInforme').classList.add('hidden'); cambiarSeccion('dashboard'); }
function verInformePrevio(id) { const a = auditorias.find(aud => aud.id === id); if (a) generarInformeFinal(a); }

document.addEventListener('DOMContentLoaded', () => { 
    renderDashboard();
});

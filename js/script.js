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
const supabase = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY) : null;

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

// --- BASE DE DATOS REAL COMPLETA AF SANT ADRIÀ ---
const entrenadoresDefault = [
    { id: "e1", name: "Tomas", role: "Head Coach", score: 95, clients: [
        {id:"ct1", name:"JOSE LUIS GIMENEZ"}, {id:"ct2", name:"MARIA CARMEN RUIZ"}, {id:"ct3", name:"ANTONIO LOPEZ"}, {id:"ct4", name:"FRANCISCO JAVIER GARCIA"}, {id:"ct5", name:"MARIA DOLORES MARTINEZ"}
    ] },
    { id: "e2", name: "Oscar", role: "Coach", score: 88, clients: [
        {id:"co1", name:"JOSE ANTONIO GONZALEZ ARROYO"}, {id:"co2", name:"MONTSERRAT AGUILAR"}, {id:"co3", name:"SHEILA DE CARMEN"}, {id:"co4", name:"ORIOL BACELLS"}, {id:"co5", name:"LISANDRO MELENDEZ"},
        {id:"co6", name:"JORGE MANUEL DOMINGUEZ"}, {id:"co7", name:"MIBEL RIBAS"}, {id:"co8", name:"YOLANDA FERNANDEZ"}, {id:"co9", name:"ANA MARIN MARTIN"}, {id:"co10", name:"RAUL VEGA GARCIA"},
        {id:"co11", name:"XAVI CATALAN"}, {id:"co12", name:"SELENE FERRER"}, {id:"co13", name:"MONTSERRAT GARRIGA"}, {id:"co14", name:"LLUIS GASSO"}, {id:"co15", name:"LAURA MASSOT"},
        {id:"co16", name:"SAMUEL RODRIGUEZ DA SILVA"}, {id:"co17", name:"MONTSERRAT RUIZ GRIBAU"}, {id:"co18", name:"GUILLERMO VERA"}, {id:"co19", name:"EDUARD FALCON"}, {id:"co20", name:"SEIDY GARCIA ISISDRO"},
        {id:"co21", name:"CLAUDIA SOUZA DA SILVA"}, {id:"co22", name:"MONICA ESCAÑO VIAN"}, {id:"co23", name:"CESAR DAVID SOLORZANO QUIÑE"}, {id:"co24", name:"AUDRY DOTEL"}, {id:"co25", name:"CRISTINA BATALLER BATALLER"},
        {id:"co26", name:"ALEX GIL RAFELS"}, {id:"co27", name:"YERAY MELLADO GARCIA"}, {id:"co28", name:"NATALIA BELEN DIAZ"}, {id:"co29", name:"ADOLFO ROSA RUIZ"}, {id:"co30", name:"PAOLA ALONZO ALVAREZ"},
        {id:"co31", name:"CHAYMAE HOUNAINE"}, {id:"co32", name:"WISAL KHAN"}, {id:"co33", name:"LIZ PAOLA CANDIA"}
    ]},
    { id: "e3", name: "Ruben", role: "Coach", score: 82, clients: [
        {id:"cr1", name:"Ivan sanchez mont"}, {id:"cr2", name:"Sandra Carolina Benitez"}, {id:"cr3", name:"ANNa Bollo Albos"}, {id:"cr4", name:"Xavier Guerrero Garcia"}, {id:"cr5", name:"Carlos javier gallego mateo"},
        {id:"cr6", name:"Cristina rodriguez valero"}, {id:"cr7", name:"Alex pino palau"}, {id:"cr8", name:"biel serrano"}, {id:"cr9", name:"daniel rodriguez"}, {id:"cr10", name:"ana celia"},
        {id:"cr11", name:"gustavo rocha"}, {id:"cr12", name:"cristina molina rosales"}, {id:"cr13", name:"Manuel Rodrigez Fernandez"}, {id:"cr14", name:"Mohamed Rougui"}, {id:"cr15", name:"albert lastra"},
        {id:"cr16", name:"David mula"}, {id:"cr17", name:"Miriam gasca"}
    ]},
    { id: "e4", name: "Anna", role: "Coach", score: 90, clients: [
        {id:"ca1", name:"ANA MARIN MARTIN"}, {id:"ca2", name:"MONTSERRAT GARRIGA"}, {id:"ca3", name:"SELENE FERRER"}, {id:"ca4", name:"MONTSERRAT RUIZ GRIBAU"}, {id:"ca5", name:"GUILLERMO VERA"}, {id:"ca6", name:"CESAR DAVID SOLORZANO QUIÑE"}, {id:"ca7", name:"CRISTINA BATALLER BATALLER"}
    ] }
];

let entrenadores = JSON.parse(localStorage.getItem('af_coaches_v23')) || entrenadoresDefault;
let auditorias = JSON.parse(localStorage.getItem('af_audits_v23')) || [];
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
    if (target === 'entrenadores') renderEntrenadoresGrid();
    if (target === 'config') document.getElementById('sheetUrlInput').value = googleScriptUrl;
}

// --- RENDERIZADO DINÁMICO DE LOS 38 PUNTOS ---
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
                        <button type="button" onclick="setVal(${p.id}, 1, this)" class="btn-val-${p.id} px-3 py-1 text-[10px] rounded-md bg-brandLime text-brandDark transition font-bold">SÍ</button>
                        <button type="button" onclick="setVal(${p.id}, 0, this)" class="btn-val-${p.id} px-3 py-1 text-[10px] rounded-md text-brandText transition font-bold">NO</button>
                    </div>`;
            } else {
                const inputType = p.type === "date" ? "date" : "text";
                controlHtml = `<input type="${inputType}" oninput="setVal(${p.id}, this.value)" class="bg-brandDark border border-brandBorder rounded-lg p-2 text-[10px] text-white focus:border-brandPurple outline-none w-full sm:w-40">`;
            }

            container.innerHTML += `
                <div class="bg-brandDark/40 p-4 rounded-xl border border-brandBorder space-y-3">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <span class="text-xs text-white font-medium">${p.label}</span>
                        ${controlHtml}
                    </div>
                    <div class="pt-1">
                        <input type="text" oninput="setObs(${p.id}, this.value)" placeholder="Añadir observación específica..." class="w-full bg-brandDark/60 border border-brandBorder/30 rounded-xl p-2 text-[10px] text-brandText focus:text-white focus:outline-none focus:border-brandPurple placeholder-brandText/30">
                    </div>
                </div>`;
        });
    }
}

function setVal(id, val, btn) {
    formValues[id] = val;
    if (btn) {
        document.querySelectorAll(`.btn-val-${id}`).forEach(b => b.className = `btn-val-${id} px-3 py-1 text-[10px] rounded-md text-brandText transition font-bold`);
        btn.className = `btn-val-${id} px-3 py-1 text-[10px] rounded-md transition font-bold ${val === 1 ? 'bg-brandLime text-brandDark' : 'bg-red-500 text-white'}`;
    }
}
function setObs(id, val) { formObservations[id] = val; }

function renderCoachSelect() {
    const s = document.getElementById('formCoachSelect');
    if (!s) return;
    s.innerHTML = '<option value="" disabled selected>Selecciona Coach...</option>';
    entrenadores.forEach(e => s.innerHTML += `<option value="${e.id}">${e.name}</option>`);
}

function actualizarListaAlumnos(id) {
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
    const avg = total ? Math.round(auditorias.reduce((a,b)=>a+b.score,0)/total) : 0;
    const alrt = auditorias.filter(a=>a.score < 80).length;
    
    // Unificación de IDs para estadísticas
    const stT = document.getElementById('statTotalAudits');
    const stA = document.getElementById('statAvgScore');
    const stL = document.getElementById('statAlerts');
    
    if(stT) stT.innerText = total;
    if(stA) stA.innerText = avg + "%";
    if(stL) stL.innerText = alrt;

    const list = document.getElementById('coachesSummaryList');
    if (!list) return;
    list.innerHTML = "";
    entrenadores.forEach(e => {
        const color = e.score < 80 ? 'bg-red-500' : (e.score < 90 ? 'bg-amber-500' : 'bg-brandLime');
        list.innerHTML += `
            <div class="bg-brandPanel border border-brandBorder rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 rounded-xl bg-brandBorder flex items-center justify-center text-white font-bold text-lg">${e.name[0]}</div>
                    <div>
                        <h4 class="text-white font-bold text-base">${e.name}</h4>
                        <p class="text-[10px] text-brandText uppercase tracking-widest">${e.role}</p>
                    </div>
                </div>
                <div class="flex items-center gap-6">
                    <div class="text-right">
                        <p class="text-[10px] text-brandText uppercase font-bold">Compliance</p>
                        <p class="text-white font-bold text-lg">${e.score}%</p>
                    </div>
                    <div class="w-32 bg-brandDark border border-brandBorder h-2 rounded-full overflow-hidden">
                        <div class="h-full ${color}" style="width: ${e.score}%"></div>
                    </div>
                </div>
            </div>`;
    });

    const table = document.getElementById('lastAuditsTable');
    if (!table) return;
    table.innerHTML = auditorias.length ? '' : '<tr><td colspan="5" class="py-6 text-brandText pl-2">Sin auditorías registradas aún.</td></tr>';
    auditorias.slice(0, 10).forEach(a => {
        table.innerHTML += `
            <tr class="border-b border-brandBorder/40 hover:bg-brandPanel/30 transition text-xs">
                <td class="py-4 pl-2 text-brandText">${a.date.split('T')[0]}</td>
                <td class="py-4 font-bold text-white">${a.coach}</td>
                <td class="py-4 text-white">${a.client}</td>
                <td class="py-4 text-center"><span class="px-2 py-1 rounded-lg text-[10px] font-bold ${a.score >= 85 ? 'bg-brandLime/10 text-brandLime' : 'bg-red-500/10 text-red-500'}">${a.score}%</span></td>
                <td class="py-4 text-center"><button onclick="verInformePrevio('${a.id}')" class="text-brandPurple hover:text-white transition"><i class="fa-solid fa-file-invoice text-xl"></i></button></td>
            </tr>`;
    });
}

function procesarNuevaAuditoria(e) {
    e.preventDefault();
    const coachId = document.getElementById('formCoachSelect').value;
    const clientId = document.getElementById('formClientSelect').value;
    const dateInput = document.getElementById('formDateTime').value;
    if (!coachId || !clientId || !dateInput) return alert("Por favor completa los campos de Coach, Alumno y Fecha.");

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
    coach.score = Math.round(coach.clients.reduce((acc, c) => acc + (c.lastScore || 100), 0) / coach.clients.length);

    localStorage.setItem('af_audits_v23', JSON.stringify(auditorias));
    localStorage.setItem('af_coaches_v23', JSON.stringify(entrenadores));

    if (supabase) {
        supabase.from('auditorias').insert([{
            coach: coach.name, client: client.name, score: score,
            compliance_data: formValues, observations_data: formObservations,
            created_at: new Date()
        }]).then(({error}) => { if (error) console.error("Supabase Sync Error:", error); });
    }

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
    const tendencia = aud.prevScore ? (aud.score > aud.prevScore ? "📈 Mejora detectada" : "📉 Descenso detectado") : "🆕 Auditoría Inicial";

    container.innerHTML = `
        <div class="flex justify-between border-b border-brandBorder pb-6">
            <div><p class="text-[10px] text-brandText uppercase font-bold tracking-widest">Resultado Alumno</p><h4 class="text-3xl font-bold text-white">${aud.score}% Cumplimiento</h4></div>
            <div class="text-right"><p class="text-xs text-brandLime font-bold">${tendencia}</p><p class="text-[10px] text-brandText uppercase">${aud.date.replace('T', ' ')}</p></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 py-6">
            <div class="space-y-3"><h5 class="text-xs font-bold text-brandLime uppercase tracking-widest">Fortalezas</h5><ul class="text-[11px] space-y-2">${fortalezas.slice(0,8).map(f=>`<li><i class="fa-solid fa-check-circle mr-2 text-brandLime"></i>${f.label}</li>`).join('')}</ul></div>
            <div class="space-y-4"><h5 class="text-xs font-bold text-red-400 uppercase tracking-widest">Oportunidades de Mejora</h5><ul class="text-[11px] space-y-4">${fallos.map(f=>`<li><span class="text-white font-semibold flex items-center"><i class="fa-solid fa-triangle-exclamation mr-2 text-red-400"></i>${f.label}</span>${aud.observations[f.id] ? `<div class="mt-1 pl-6 text-brandText italic border-l border-brandBorder">Nota: "${aud.observations[f.id]}"</div>` : ''}</li>`).join('')}</ul></div>
        </div>`;
    document.getElementById('modalInforme').classList.remove('hidden');
}

function guardarUrlSheet() {
    const url = document.getElementById('sheetUrlInput').value.trim();
    if (!url) return alert("Por favor ingresa una URL válida de Google Apps Script.");
    localStorage.setItem('af_script_url_v4', url);
    googleScriptUrl = url;
    alert("¡Google Sheet vinculado correctamente!");
    cambiarSeccion('dashboard');
}

function cerrarModalInforme() { document.getElementById('modalInforme').classList.add('hidden'); cambiarSeccion('dashboard'); }
function verInformePrevio(id) { const a = auditorias.find(aud => aud.id === id); if (a) generarInformeFinal(a); }

function renderEntrenadoresGrid() {
    const grid = document.getElementById('coachesDetailedGrid');
    if (!grid) return;
    grid.innerHTML = "";
    entrenadores.forEach(e => {
        grid.innerHTML += `
            <div class="bg-brandPanel border border-brandBorder rounded-[2rem] p-8 space-y-6 shadow-2xl">
                <h3 class="font-bold text-white text-lg border-b border-brandBorder pb-4">${e.name}</h3>
                <p class="text-[10px] text-brandText uppercase tracking-widest font-bold">Cartera de Clientes (${e.clients.length})</p>
                <div class="space-y-3 max-h-72 overflow-y-auto pr-2 custom-scroll">
                    ${e.clients.map(c => `
                        <div class="flex justify-between items-center text-xs bg-brandDark/40 p-3 rounded-xl border border-brandBorder/50">
                            <span class="text-white font-medium truncate pr-2">${c.name}</span>
                            <span class="font-bold text-brandLime">${c.lastScore || '--'}%</span>
                        </div>
                    `).join('')}
                </div>
            </div>`;
    });
}

document.addEventListener('DOMContentLoaded', () => { renderDashboard(); });

// --- CONFIGURACIÓN Y ESTADO ---
const CONFIG = {
    puntos: [
        { id: 1, label: "Coach asignado en Membr?", section: 1 },
        { id: 2, label: "Valoración Fitness Realizada?", section: 1 },
        { id: 3, label: "Programa Asignado (Apto/Muy Apto)?", section: 1 },
        { id: 4, label: "Enviado por App?", section: 1 },
        { id: 5, label: "Cliente Completa Programas?", section: 1 },
        { id: 6, label: "Se hizo el Escaneo Evolt?", section: 2 },
        { id: 7, label: "Test de Movilidad Realizado?", section: 2 },
        { id: 8, label: "Mejora desde última evaluación?", section: 2 },
        { id: 9, label: "Datos añadidos en Notas?", section: 2 },
        { id: 10, label: "Apps Descargadas?", section: 3 },
        { id: 11, label: "Status Apps (MZ, Evolt, AF)?", section: 3 },
        { id: 12, label: "Uso de MyZone?", section: 3 },
        { id: 13, label: "Participación Último Reto?", section: 3 },
        { id: 14, label: "Introducido en Grupo MZ?", section: 3 },
        { id: 15, label: "Interacción Grupal?", section: 3 },
        { id: 16, label: "Comunidad Individual?", section: 3 },
        { id: 17, label: "Interacción de Likes?", section: 3 },
        { id: 18, label: "Prueba Esfuerzo MZ?", section: 3 },
        { id: 19, label: "Seguimiento Sem 1", section: 4 },
        { id: 20, label: "Seguimiento Sem 2", section: 4 },
        { id: 21, label: "Seguimiento Sem 3", section: 4 },
        { id: 22, label: "Seguimiento Sem 4", section: 4 }
    ]
};

// --- BASE DE DATOS LOCAL ---
const entrenadoresDefault = [
    { id: "e1", name: "Tomas", role: "Head Coach", score: 95, clients: [{ id: "c_t1", name: "JOSE LUIS GIMENEZ", compliance: Array(22).fill(1) }] },
    { id: "e2", name: "Oscar", role: "Coach", score: 88, clients: [{ id: "c_o1", name: "JOSE ANTONIO GONZALEZ", compliance: Array(22).fill(1) }] },
    { id: "e3", name: "Anna", role: "Coach", score: 90, clients: [{ id: "c_a1", name: "LUISA FERNANDA GOMEZ", compliance: Array(22).fill(1) }] }
];

let entrenadores = JSON.parse(localStorage.getItem('af_coaches_v9')) || entrenadoresDefault;
let auditorias = JSON.parse(localStorage.getItem('af_audits_v9')) || [];
let formParamValues = {};
let formObservations = {};

function resetFormParams() { 
    CONFIG.puntos.forEach(p => {
        formParamValues[`p${p.id}`] = 1;
        formObservations[`obs${p.id}`] = "";
    });
}
resetFormParams();

// --- SISTEMA DE NAVEGACIÓN ---
function cambiarSeccion(target) {
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
    document.getElementById(`view-${target}`).classList.remove('hidden');
    document.querySelectorAll('aside nav button').forEach(btn => btn.classList.remove('active-nav'));
    document.getElementById(`nav-${target}`).classList.add('active-nav');
    if (target === 'dashboard') renderDashboard();
    if (target === 'auditar') {
        renderPuntosAuditoria();
        renderCoachSelect();
    }
}

// --- RENDERIZADO DINÁMICO ---
function renderPuntosAuditoria() {
    for (let i = 1; i <= 4; i++) {
        const container = document.getElementById(`seccion-${i}-puntos`);
        container.innerHTML = "";
        CONFIG.puntos.filter(p => p.section === i).forEach(p => {
            container.innerHTML += `
                <div class="bg-brandDark/40 p-4 rounded-2xl border border-brandBorder space-y-3">
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-medium text-white">${p.label}</span>
                        <div class="flex gap-1 bg-brandDark p-1 rounded-lg border border-brandBorder">
                            <button type="button" onclick="setParam(${p.id}, 1, this)" class="param-btn-${p.id} px-3 py-1 text-[10px] rounded-md bg-brandLime text-brandDark transition">SÍ</button>
                            <button type="button" onclick="setParam(${p.id}, 0, this)" class="param-btn-${p.id} px-3 py-1 text-[10px] rounded-md text-brandText transition">NO</button>
                        </div>
                    </div>
                    <input type="text" oninput="setObs(${p.id}, this.value)" placeholder="Añadir observación específica..." class="w-full bg-brandDark/60 border border-brandBorder/50 rounded-xl p-2.5 text-[11px] text-white focus:outline-none focus:border-brandPurple placeholder-brandText/30">
                </div>`;
        });
    }
}

function setParam(id, val, btn) {
    formParamValues[`p${id}`] = val;
    document.querySelectorAll(`.param-btn-${id}`).forEach(b => b.className = `param-btn-${id} px-3 py-1 text-[10px] rounded-md text-brandText transition`);
    btn.className = `param-btn-${id} px-3 py-1 text-[10px] rounded-md transition ${val === 1 ? 'bg-brandLime text-brandDark' : 'bg-red-500 text-white'}`;
}

function setObs(id, val) { formObservations[`obs${id}`] = val; }

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
    const list = document.getElementById('coachesSummaryList');
    list.innerHTML = "";
    entrenadores.forEach(e => {
        const color = e.score < 80 ? 'bg-red-500' : (e.score < 90 ? 'bg-amber-500' : 'bg-brandLime');
        list.innerHTML += `
            <div class="bg-brandPanel border border-brandBorder rounded-3xl p-5 space-y-3">
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 rounded-2xl bg-brandBorder flex items-center justify-center text-white font-bold text-lg">${e.name[0]}</div>
                    <div>
                        <h4 class="text-white font-bold text-sm">${e.name}</h4>
                        <p class="text-[10px] text-brandText uppercase tracking-widest">${e.role}</p>
                    </div>
                </div>
                <div class="pt-2">
                    <div class="flex justify-between items-center mb-1">
                        <span class="text-[10px] text-brandText">Cumplimiento Global</span>
                        <span class="text-xs font-bold text-white">${e.score}%</span>
                    </div>
                    <div class="w-full bg-brandDark h-1.5 rounded-full overflow-hidden border border-brandBorder">
                        <div class="h-full ${color}" style="width: ${e.score}%"></div>
                    </div>
                </div>
            </div>`;
    });

    const table = document.getElementById('lastAuditsTable');
    table.innerHTML = auditorias.length ? '' : '<tr><td class="text-brandText py-4">No hay registros de auditoría.</td></tr>';
    auditorias.slice(0, 5).forEach(a => {
        table.innerHTML += `
            <tr class="border-b border-brandBorder/40 hover:bg-brandPanel/30 transition">
                <td class="py-4 pl-2 text-brandText">${a.date.split('T')[0]}</td>
                <td class="py-4 font-bold text-white">${a.coach}</td>
                <td class="py-4 text-white">${a.client}</td>
                <td class="py-4 text-center"><span class="px-2 py-1 rounded-lg text-[10px] font-bold ${a.score >= 85 ? 'bg-brandLime/10 text-brandLime' : 'bg-red-500/10 text-red-500'}">${a.score}%</span></td>
                <td class="py-4 text-right pr-2"><button onclick="verInformePrevio('${a.id}')" class="text-brandPurple hover:text-white transition"><i class="fa-solid fa-file-lines"></i></button></td>
            </tr>`;
    });
}

// --- LOGICA DE INFORME INTELIGENTE ---
function procesarNuevaAuditoria(e) {
    e.preventDefault();
    const coachId = document.getElementById('formCoachSelect').value;
    const clientId = document.getElementById('formClientSelect').value;
    const datetime = document.getElementById('formDateTime').value;

    const coach = entrenadores.find(e => e.id === coachId);
    const client = coach.clients.find(c => c.id === clientId);

    const compliance = CONFIG.puntos.map(p => formParamValues[`p${p.id}`]);
    const score = Math.round((compliance.filter(v => v === 1).length / 22) * 100);

    const nuevaAuditoria = {
        id: "a_" + Date.now(),
        date: datetime,
        coach: coach.name,
        client: client.name,
        score: score,
        compliance: compliance,
        observations: {...formObservations},
        history: auditorias.filter(a => a.client === client.name)
    };

    auditorias.unshift(nuevaAuditoria);
    client.compliance = compliance;
    coach.score = Math.round(coach.clients.reduce((acc, c) => acc + (c.compliance ? Math.round((c.compliance.filter(v => v === 1).length / 22) * 100) : 0), 0) / coach.clients.length);

    localStorage.setItem('af_audits_v9', JSON.stringify(auditorias));
    localStorage.setItem('af_coaches_v9', JSON.stringify(entrenadores));

    generarInformeInteligente(nuevaAuditoria);
}

function generarInformeInteligente(aud) {
    const container = document.getElementById('contenidoInforme');
    const fallos = CONFIG.puntos.filter(p => aud.compliance[p.id - 1] === 0);
    const fortalezas = CONFIG.puntos.filter(p => aud.compliance[p.id - 1] === 1);
    
    // Comparación histórica
    const prevScore = aud.history.length > 0 ? aud.history[0].score : null;
    const tendencia = prevScore !== null ? (aud.score > prevScore ? "📈 Mejora detectada" : "📉 Descenso detectado") : "🆕 Primera auditoría registrada";

    let html = `
        <div class="space-y-6">
            <div class="flex justify-between items-end border-b border-brandBorder pb-4">
                <div>
                    <p class="text-[10px] uppercase tracking-widest text-brandText font-bold">Estado General</p>
                    <h4 class="text-2xl font-poppins font-bold text-white">${aud.score}% Cumplimiento</h4>
                </div>
                <div class="text-right">
                    <p class="text-xs text-brandLime font-bold">${tendencia}</p>
                    <p class="text-[10px] text-brandText">${aud.date.replace('T', ' ')}</p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-3">
                    <h5 class="text-xs font-bold text-brandLime uppercase tracking-wider"><i class="fa-solid fa-circle-check"></i> Puntos Fuertes</h5>
                    <ul class="text-[11px] space-y-2">
                        ${fortalezas.slice(0, 4).map(p => `<li class="flex items-start gap-2"><span class="text-brandLime mt-1">●</span> <span>${p.label}</span></li>`).join('')}
                    </ul>
                </div>
                <div class="space-y-3">
                    <h5 class="text-xs font-bold text-red-400 uppercase tracking-wider"><i class="fa-solid fa-triangle-exclamation"></i> Áreas de Mejora</h5>
                    <ul class="text-[11px] space-y-2">
                        ${fallos.length ? fallos.map(p => `<li class="flex items-start gap-2"><span class="text-red-400 mt-1">●</span> <span>${p.label} ${aud.observations[`obs${p.id}`] ? `<br><em class="text-brandText/60">Nota: ${aud.observations[`obs${p.id}`]}</em>` : ''}</span></li>`).join('') : '<li class="text-brandText">Sin fallos detectados.</li>'}
                    </ul>
                </div>
            </div>

            <div class="bg-brandDark/40 p-5 rounded-2xl border border-brandBorder">
                <h5 class="text-xs font-bold text-white uppercase tracking-wider mb-3">Diagnóstico Ejecutivo</h5>
                <p class="text-[11px] italic">
                    "El coach <strong>${aud.coach}</strong> muestra un desempeño ${aud.score >= 90 ? 'excepcional' : (aud.score >= 80 ? 'sólido pero con margen de ajuste' : 'crítico que requiere intervención inmediata')} en la gestión de ${aud.client}. 
                    ${fallos.length > 3 ? 'Es imperativo reforzar el seguimiento semanal y el uso de herramientas digitales para evitar deserciones.' : 'Se recomienda mantener la proactividad actual.'}"
                </p>
            </div>
        </div>`;

    container.innerHTML = html;
    document.getElementById('modalInforme').classList.remove('hidden');
}

function cerrarModalInforme() {
    document.getElementById('modalInforme').classList.add('hidden');
    cambiarSeccion('dashboard');
}

function descargarInforme() {
    alert("Función de descarga a PDF simulada. El informe se ha guardado en el historial de la base de datos.");
}

function verInformePrevio(id) {
    const aud = auditorias.find(a => a.id === id);
    if (aud) generarInformeInteligente(aud);
}

document.addEventListener('DOMContentLoaded', () => {
    cambiarSeccion('dashboard');
});

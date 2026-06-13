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

// --- BASE DE DATOS LOCAL (DATOS REALES AF SANT ADRIÀ) ---
const entrenadoresDefault = [
    { 
        id: "e1", name: "Tomas", role: "Head Coach", score: 92, lastAudit: "2026-06-13", status: "good", focus: "Mantener estándares de gestión.",
        clients: [
            { id: "c_t1", name: "JOSE LUIS GIMENEZ", compliance: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] },
            { id: "c_t2", name: "MARIA CARMEN RUIZ", compliance: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] },
            { id: "c_t3", name: "ANTONIO LOPEZ", compliance: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] },
            { id: "c_t4", name: "FRANCISCO JAVIER GARCIA", compliance: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] },
            { id: "c_t5", name: "MARIA DOLORES MARTINEZ", compliance: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] }
        ]
    },
    { 
        id: "e2", name: "Oscar", role: "Coaching Team", score: 85, lastAudit: "2026-06-13", status: "good", focus: "Seguimiento MyZone y Evolt.",
        clients: [
            { id: "c_o1", name: "JOSE ANTONIO GONZALEZ ARROYO", compliance: [1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1] },
            { id: "c_o2", name: "MONTSERRAT AGUILAR", compliance: [1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1] },
            { id: "c_o3", name: "SHEILA DE CARMEN", compliance: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] },
            { id: "c_o4", name: "ORIOL BACELLS", compliance: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] },
            { id: "c_o5", name: "LISANDRO MELENDEZ", compliance: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] },
            { id: "c_o6", name: "JORGE MANUEL DOMINGUEZ", compliance: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] },
            { id: "c_o7", name: "MIBEL RIBAS", compliance: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] },
            { id: "c_o8", name: "YOLANDA FERNANDEZ", compliance: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] },
            { id: "c_o9", name: "ANA MARIN MARTIN", compliance: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] },
            { id: "c_o10", name: "RAUL VEGA GARCIA", compliance: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] },
            { id: "c_o11", name: "XAVI CATALAN", compliance: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] },
            { id: "c_o12", name: "SELENE FERRER", compliance: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] },
            { id: "c_o13", name: "MONTSERRAT GARRIGA", compliance: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] },
            { id: "c_o14", name: "LLUIS GASSO", compliance: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] },
            { id: "c_o15", name: "LAURA MASSOT", compliance: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] },
            { id: "c_o16", name: "SAMUEL RODRIGUEZ DA SILVA", compliance: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] },
            { id: "c_o17", name: "MONTSERRAT RUIZ GRIBAU", compliance: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] },
            { id: "c_o18", name: "GUILLERMO VERA", compliance: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] },
            { id: "c_o19", name: "EDUARD FALCON", compliance: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] },
            { id: "c_o20", name: "SEIDY GARCIA ISISDRO", compliance: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] },
            { id: "c_o21", name: "CLAUDIA SOUZA DA SILVA", compliance: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] },
            { id: "c_o22", name: "MONICA ESCAÑO VIAN", compliance: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] },
            { id: "c_o23", name: "CESAR DAVID SOLORZANO QUIÑE", compliance: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] },
            { id: "c_o24", name: "AUDRY DOTEL", compliance: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] },
            { id: "c_o25", name: "CRISTINA BATALLER BATALLER", compliance: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] },
            { id: "c_o26", name: "ALEX GIL RAFELS", compliance: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] },
            { id: "c_o27", name: "YERAY MELLADO GARCIA", compliance: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] },
            { id: "c_o28", name: "NATALIA BELEN DIAZ", compliance: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] },
            { id: "c_o29", name: "ADOLFO ROSA RUIZ", compliance: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] },
            { id: "c_o30", name: "PAOLA ALONZO ALVAREZ", compliance: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] },
            { id: "c_o31", name: "CHAYMAE HOUNAINE", compliance: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] },
            { id: "c_o32", name: "WISAL KHAN", compliance: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] },
            { id: "c_o33", name: "LIZ PAOLA CANDIA", compliance: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] }
        ]
    },
    { 
        id: "e3", name: "Ruben", role: "Coaching Team", score: 80, lastAudit: "2026-06-13", status: "attention", focus: "Reforzar protocolos de contacto.",
        clients: [
            { id: "c_r1", name: "ALUMNO RUBEN 1", compliance: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] },
            { id: "c_r2", name: "ALUMNO RUBEN 2", compliance: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] }
        ]
    },
    { 
        id: "e4", name: "Anna", role: "Coaching Team", score: 88, lastAudit: "2026-06-13", status: "good", focus: "Mantener seguimiento.",
        clients: [
            { id: "c_a1", name: "LUISA FERNANDA GOMEZ", compliance: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] },
            { id: "c_a2", name: "MARIA ISABEL PEREZ", compliance: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] },
            { id: "c_a3", name: "JUAN CARLOS RODRIGUEZ", compliance: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] }
        ]
    }
];

const auditoriasDefault = [
    { id: "a1", date: "2026-06-13 09:15", coach: "Oscar", client: "JOSE ANTONIO GONZALEZ ARROYO", score: 88, shift: "Revisión Semanal", obs: "Auditoría inicial." }
];

// Carga desde Almacenamiento Local (usando nueva key v6 para forzar datos reales)
let entrenadores = JSON.parse(localStorage.getItem('af_coaches_v6')) || entrenadoresDefault;
let auditorias = JSON.parse(localStorage.getItem('af_audits_v6')) || auditoriasDefault;
let googleScriptUrl = localStorage.getItem('af_script_url_v4') || "https://script.google.com/macros/s/AKfycbxtS5k9QSY7KanAx6rgCAnF9iPr8gtsyplfpiMo5YA-HAp-q-YqwLs17vL_gg6Odi57/exec";

// Inicializar el estado de los 19 parámetros
let formParamValues = {};
function resetFormParams() {
    for(let i = 1; i <= 19; i++) {
        formParamValues[`p${i}`] = 1; 
    }
}
resetFormParams();

// --- SISTEMA DE NAVEGACIÓN ---
function cambiarSeccion(target) {
    document.getElementById('view-dashboard').classList.add('hidden');
    document.getElementById('view-auditar').classList.add('hidden');
    document.getElementById('view-entrenadores').classList.add('hidden');
    document.getElementById('view-config').classList.add('hidden');

    document.getElementById(`view-${target}`).classList.remove('hidden');

    document.querySelectorAll('aside nav button').forEach(btn => btn.classList.remove('active-nav'));
    document.getElementById(`nav-${target}`).classList.add('active-nav');

    if (target === 'dashboard') renderDashboard();
    if (target === 'entrenadores') renderEntrenadoresGrid();
    if (target === 'auditar') {
        const coachSelect = document.getElementById('formCoachSelect');
        actualizarListaAlumnos(coachSelect.value);
    }
}

function actualizarListaAlumnos(coachId) {
    const clientSelect = document.getElementById('formClientSelect');
    clientSelect.innerHTML = '<option value="" disabled selected>Selecciona un alumno...</option>';
    if (!coachId) return;
    const coach = entrenadores.find(e => e.id === coachId);
    if (coach && coach.clients) {
        coach.clients.forEach(client => {
            clientSelect.innerHTML += `<option value="${client.id}">${client.name}</option>`;
        });
    }
}

function renderDashboard() {
    const listContainer = document.getElementById('coachesSummaryList');
    listContainer.innerHTML = '';
    entrenadores.forEach(coach => {
        let dotColor = coach.score < 80 ? 'bg-red-400' : (coach.score < 90 ? 'bg-amber-400' : 'bg-brandLime');
        listContainer.innerHTML += `
            <div class="bg-brandDark/50 border border-brandBorder rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-lg bg-brandBorder flex items-center justify-center text-white font-poppins font-bold text-sm">
                        ${coach.name.substring(0,2).toUpperCase()}
                    </div>
                    <div>
                        <h4 class="font-poppins font-semibold text-sm text-white">${coach.name}</h4>
                        <p class="text-xs text-brandText">${coach.role} • ${coach.clients ? coach.clients.length : 0} Alumnos</p>
                    </div>
                </div>
                <div class="flex items-center gap-4">
                    <div class="text-right">
                        <p class="text-sm font-poppins font-bold text-white">${coach.score}%</p>
                    </div>
                    <div class="w-24 bg-brandDark border border-brandBorder h-2 rounded-full overflow-hidden">
                        <div class="h-full ${dotColor}" style="width: ${coach.score}%"></div>
                    </div>
                </div>
            </div>
        `;
    });

    const tableBody = document.getElementById('lastAuditsTable');
    tableBody.innerHTML = '';
    auditorias.forEach(aud => {
        tableBody.innerHTML += `
            <tr class="border-b border-brandBorder/40 hover:bg-brandPanel/30 transition text-xs">
                <td class="py-4 pl-2 text-brandText">${aud.date}</td>
                <td class="py-4 font-semibold text-white">${aud.coach}</td>
                <td class="py-4 text-white">${aud.client}</td>
                <td class="py-4 text-center">
                    <span class="font-bold px-2 py-0.5 rounded-md ${aud.score >= 85 ? 'text-brandLime bg-brandLime/10' : 'text-red-400 bg-red-400/10'}">
                        ${aud.score}%
                    </span>
                </td>
                <td class="py-4 max-w-xs truncate text-brandText">${aud.obs}</td>
                <td class="py-4 text-center text-emerald-400"><i class="fa-solid fa-cloud-arrow-up"></i></td>
            </tr>
        `;
    });

    const coachSelect = document.getElementById('formCoachSelect');
    coachSelect.innerHTML = '<option value="" disabled selected>Selecciona un coach...</option>';
    entrenadores.forEach(coach => {
        coachSelect.innerHTML += `<option value="${coach.id}">${coach.name}</option>`;
    });
}

function renderEntrenadoresGrid() {
    const grid = document.getElementById('coachesDetailedGrid');
    grid.innerHTML = '';
    entrenadores.forEach(coach => {
        let clientsHtml = coach.clients.map(c => `
            <div class="flex items-center justify-between text-[10px] bg-brandDark/30 p-2 rounded-lg border border-brandBorder/50">
                <span class="text-white font-medium">${c.name}</span>
                <span class="${calcularScore(c.compliance) >= 85 ? 'text-brandLime' : 'text-red-400'} font-bold">${calcularScore(c.compliance)}%</span>
            </div>
        `).join('');
        grid.innerHTML += `
            <div class="bg-brandPanel border border-brandBorder rounded-2xl p-5 space-y-4">
                <div class="flex items-center justify-between">
                    <h3 class="font-poppins font-semibold text-white">${coach.name}</h3>
                    <span class="text-xs px-2 py-1 rounded-lg bg-brandPurple/20 text-brandLime">${coach.score}%</span>
                </div>
                <div class="space-y-2">
                    <p class="text-[10px] text-brandText uppercase tracking-wider font-bold">Alumnos de Cartera</p>
                    <div class="grid grid-cols-1 gap-2 max-h-40 overflow-y-auto pr-2">
                        ${clientsHtml}
                    </div>
                </div>
            </div>
        `;
    });
}

function calcularScore(compliance) {
    if (!compliance) return 0;
    const yes = compliance.filter(v => v === 1).length;
    return Math.round((yes / compliance.length) * 100);
}

function setParam(paramId, value, buttonElement) {
    formParamValues[paramId] = value;
    const buttons = document.querySelectorAll(`.param-btn-${paramId}`);
    buttons.forEach(btn => btn.className = `param-btn-${paramId} px-2.5 py-1 text-[10px] font-semibold rounded-md text-brandText hover:text-white transition`);
    buttonElement.className = `param-btn-${paramId} px-2.5 py-1 text-[10px] font-semibold rounded-md ${value === 1 ? 'bg-brandLime text-brandDark' : 'bg-red-500 text-white'} transition`;
}

function optimizarFeedbackConIA() {
    const rawText = document.getElementById('formRawObservation').value.trim();
    const coachId = document.getElementById('formCoachSelect').value;
    const finalTexarea = document.getElementById('formFinalObservation');
    if (!coachId || !rawText) return alert("Selecciona coach y escribe notas.");
    finalTexarea.value = "Generando reporte profesional...";
    setTimeout(() => {
        const coachName = entrenadores.find(e => e.id === coachId).name;
        finalTexarea.value = `Auditoría AF Sant Adrià (${coachName}): ${rawText}. Protocolos MyZone y Evolt validados.`;
    }, 800);
}

function procesarNuevaAuditoria(event) {
    event.preventDefault();
    const coachId = document.getElementById('formCoachSelect').value;
    const clientId = document.getElementById('formClientSelect').value;
    const datetime = document.getElementById('formDateTime').value;
    const shift = document.getElementById('formShift').value;
    const finalObs = document.getElementById('formFinalObservation').value || document.getElementById('formRawObservation').value;

    if (!coachId || !clientId) return alert("Selecciona coach y alumno.");

    const coach = entrenadores.find(e => e.id === coachId);
    const client = coach.clients.find(c => c.id === clientId);

    let complianceArray = [];
    for(let i = 1; i <= 19; i++) complianceArray.push(formParamValues[`p${i}`]);
    const scoreCalculado = calcularScore(complianceArray);

    client.compliance = complianceArray;
    const totalScoreClients = coach.clients.reduce((acc, c) => acc + calcularScore(c.compliance), 0);
    coach.score = Math.round(totalScoreClients / coach.clients.length);
    coach.lastAudit = datetime;

    auditorias.unshift({ id: "a_" + Date.now(), date: datetime, coach: coach.name, client: client.name, score: scoreCalculado, shift: shift, obs: finalObs });

    localStorage.setItem('af_audits_v6', JSON.stringify(auditorias));
    localStorage.setItem('af_coaches_v6', JSON.stringify(entrenadores));

    alert("Auditoría guardada.");
    cambiarSeccion('dashboard');
}

document.addEventListener('DOMContentLoaded', () => {
    renderDashboard();
});

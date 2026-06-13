// Configuración de colores corporativos AF
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

const entrenadoresDefault = [
    { 
        id: "e1", name: "Tomas", role: "Head Coach", score: 95, lastAudit: "2026-06-13",
        clients: [
            { id: "c_t1", name: "JOSE LUIS GIMENEZ", compliance: Array(22).fill(1) },
            { id: "c_t2", name: "MARIA CARMEN RUIZ", compliance: Array(22).fill(1) },
            { id: "c_t3", name: "ANTONIO LOPEZ", compliance: Array(22).fill(1) },
            { id: "c_t4", name: "FRANCISCO JAVIER GARCIA", compliance: Array(22).fill(1) },
            { id: "c_t5", name: "MARIA DOLORES MARTINEZ", compliance: Array(22).fill(1) }
        ]
    },
    { 
        id: "e2", name: "Oscar", role: "Coaching Team", score: 88, lastAudit: "2026-06-13",
        clients: [
            { id: "c_o1", name: "JOSE ANTONIO GONZALEZ ARROYO", compliance: Array(22).fill(1) },
            { id: "c_o2", name: "MONTSERRAT AGUILAR", compliance: Array(22).fill(1) },
            { id: "c_o3", name: "SHEILA DE CARMEN", compliance: Array(22).fill(1) },
            { id: "c_o4", name: "ORIOL BACELLS", compliance: Array(22).fill(1) },
            { id: "c_o5", name: "LISANDRO MELENDEZ", compliance: Array(22).fill(1) },
            { id: "c_o6", name: "JORGE MANUEL DOMINGUEZ", compliance: Array(22).fill(1) },
            { id: "c_o7", name: "MIBEL RIBAS", compliance: Array(22).fill(1) },
            { id: "c_o8", name: "YOLANDA FERNANDEZ", compliance: Array(22).fill(1) },
            { id: "c_o9", name: "ANA MARIN MARTIN", compliance: Array(22).fill(1) },
            { id: "c_o10", name: "RAUL VEGA GARCIA", compliance: Array(22).fill(1) },
            { id: "c_o11", name: "XAVI CATALAN", compliance: Array(22).fill(1) },
            { id: "c_o12", name: "SELENE FERRER", compliance: Array(22).fill(1) },
            { id: "c_o13", name: "MONTSERRAT GARRIGA", compliance: Array(22).fill(1) },
            { id: "c_o14", name: "LLUIS GASSO", compliance: Array(22).fill(1) },
            { id: "c_o15", name: "LAURA MASSOT", compliance: Array(22).fill(1) },
            { id: "c_o16", name: "SAMUEL RODRIGUEZ DA SILVA", compliance: Array(22).fill(1) },
            { id: "c_o17", name: "MONTSERRAT RUIZ GRIBAU", compliance: Array(22).fill(1) },
            { id: "c_o18", name: "GUILLERMO VERA", compliance: Array(22).fill(1) },
            { id: "c_o19", name: "EDUARD FALCON", compliance: Array(22).fill(1) },
            { id: "c_o20", name: "SEIDY GARCIA ISISDRO", compliance: Array(22).fill(1) },
            { id: "c_o21", name: "CLAUDIA SOUZA DA SILVA", compliance: Array(22).fill(1) },
            { id: "c_o22", name: "MONICA ESCAÑO VIAN", compliance: Array(22).fill(1) },
            { id: "c_o23", name: "CESAR DAVID SOLORZANO QUIÑE", compliance: Array(22).fill(1) },
            { id: "c_o24", name: "AUDRY DOTEL", compliance: Array(22).fill(1) },
            { id: "c_o25", name: "CRISTINA BATALLER BATALLER", compliance: Array(22).fill(1) },
            { id: "c_o26", name: "ALEX GIL RAFELS", compliance: Array(22).fill(1) },
            { id: "c_o27", name: "YERAY MELLADO GARCIA", compliance: Array(22).fill(1) },
            { id: "c_o28", name: "NATALIA BELEN DIAZ", compliance: Array(22).fill(1) },
            { id: "c_o29", name: "ADOLFO ROSA RUIZ", compliance: Array(22).fill(1) },
            { id: "c_o30", name: "PAOLA ALONZO ALVAREZ", compliance: Array(22).fill(1) },
            { id: "c_o31", name: "CHAYMAE HOUNAINE", compliance: Array(22).fill(1) },
            { id: "c_o32", name: "WISAL KHAN", compliance: Array(22).fill(1) },
            { id: "c_o33", name: "LIZ PAOLA CANDIA", compliance: Array(22).fill(1) }
        ]
    },
    { 
        id: "e4", name: "Anna", role: "Coaching Team", score: 90, lastAudit: "2026-06-13",
        clients: [
            { id: "c_a1", name: "LUISA FERNANDA GOMEZ", compliance: Array(22).fill(1) },
            { id: "c_a2", name: "MARIA ISABEL PEREZ", compliance: Array(22).fill(1) },
            { id: "c_a3", name: "JUAN CARLOS RODRIGUEZ", compliance: Array(22).fill(1) }
        ]
    }
];

let entrenadores = JSON.parse(localStorage.getItem('af_coaches_v8')) || entrenadoresDefault;
let auditorias = JSON.parse(localStorage.getItem('af_audits_v8')) || [];
let formParamValues = {};
function resetFormParams() { for(let i = 1; i <= 22; i++) formParamValues[`p${i}`] = 1; }
resetFormParams();

function cambiarSeccion(target) {
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
    document.getElementById(`view-${target}`).classList.remove('hidden');
    document.querySelectorAll('aside nav button').forEach(btn => btn.classList.remove('active-nav'));
    document.getElementById(`nav-${target}`).classList.add('active-nav');
    if (target === 'dashboard') renderDashboard();
    if (target === 'entrenadores') renderEntrenadoresGrid();
    if (target === 'auditar') actualizarListaAlumnos(document.getElementById('formCoachSelect').value);
}

function actualizarListaAlumnos(coachId) {
    const clientSelect = document.getElementById('formClientSelect');
    clientSelect.innerHTML = '<option value="" disabled selected>Selecciona alumno...</option>';
    if (!coachId) return;
    const coach = entrenadores.find(e => e.id === coachId);
    if (coach && coach.clients) {
        coach.clients.forEach(client => { clientSelect.innerHTML += `<option value="${client.id}">${client.name}</option>`; });
    }
}

function calcularScore(compliance) {
    if (!compliance) return 0;
    const yes = compliance.filter(v => v === 1).length;
    return Math.round((yes / compliance.length) * 100);
}

function renderDashboard() {
    const listContainer = document.getElementById('coachesSummaryList');
    listContainer.innerHTML = '';
    entrenadores.forEach(coach => {
        let dotColor = coach.score < 80 ? 'bg-red-400' : (coach.score < 90 ? 'bg-amber-400' : 'bg-brandLime');
        listContainer.innerHTML += `
            <div class="bg-brandPanel border border-brandBorder rounded-2xl p-4 flex flex-col gap-2">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-lg bg-brandBorder flex items-center justify-center text-white font-bold">${coach.name.substring(0,2).toUpperCase()}</div>
                    <div class="min-w-0">
                        <h4 class="font-semibold text-xs text-white truncate">${coach.name}</h4>
                        <p class="text-[10px] text-brandText">${coach.clients.length} Clientes</p>
                    </div>
                </div>
                <div class="flex items-center justify-between mt-1">
                    <span class="text-[10px] font-bold text-white">${coach.score}%</span>
                    <div class="w-24 bg-brandDark border border-brandBorder h-1.5 rounded-full overflow-hidden">
                        <div class="h-full ${dotColor}" style="width: ${coach.score}%"></div>
                    </div>
                </div>
            </div>`;
    });

    const tableBody = document.getElementById('lastAuditsTable');
    tableBody.innerHTML = auditorias.length ? '' : '<tr><td class="text-brandText py-4">No hay registros.</td></tr>';
    auditorias.slice(0, 5).forEach(aud => {
        tableBody.innerHTML += `
            <tr class="border-b border-brandBorder/40">
                <td class="py-3 text-brandText">${aud.date.split('T')[0]}</td>
                <td class="py-3 font-semibold text-white">${aud.coach}</td>
                <td class="py-3 text-white">${aud.client}</td>
                <td class="py-3 text-center"><span class="font-bold px-2 py-0.5 rounded-md ${aud.score >= 85 ? 'text-brandLime bg-brandLime/10' : 'text-red-400 bg-red-400/10'}">${aud.score}%</span></td>
            </tr>`;
    });

    const coachSelect = document.getElementById('formCoachSelect');
    coachSelect.innerHTML = '<option value="" disabled selected>Selecciona Coach...</option>';
    entrenadores.forEach(coach => { coachSelect.innerHTML += `<option value="${coach.id}">${coach.name}</option>`; });
}

function renderEntrenadoresGrid() {
    const grid = document.getElementById('coachesDetailedGrid');
    grid.innerHTML = '';
    entrenadores.forEach(coach => {
        let clientsHtml = coach.clients.map(c => `
            <div class="flex items-center justify-between text-[10px] bg-brandDark/30 p-2 rounded-lg border border-brandBorder/50">
                <span class="text-white truncate pr-2">${c.name}</span>
                <span class="${calcularScore(c.compliance) >= 85 ? 'text-brandLime' : 'text-red-400'} font-bold">${calcularScore(c.compliance)}%</span>
            </div>`).join('');
        grid.innerHTML += `
            <div class="bg-brandPanel border border-brandBorder rounded-2xl p-5 space-y-4">
                <h3 class="font-bold text-white text-sm border-b border-brandBorder pb-2">${coach.name}</h3>
                <div class="space-y-2 max-h-60 overflow-y-auto pr-1">${clientsHtml}</div>
            </div>`;
    });
}

function setParam(paramId, value, buttonElement) {
    formParamValues[paramId] = value;
    const buttons = document.querySelectorAll(`.param-btn-${paramId}`);
    buttons.forEach(btn => btn.className = `param-btn-${paramId} px-3 py-1 text-[10px] rounded-md text-brandText hover:text-white transition`);
    buttonElement.className = `param-btn-${paramId} px-3 py-1 text-[10px] rounded-md ${value === 1 ? 'bg-brandLime text-brandDark' : 'bg-red-500 text-white'} transition`;
}

function procesarNuevaAuditoria(event) {
    event.preventDefault();
    const coachId = document.getElementById('formCoachSelect').value;
    const clientId = document.getElementById('formClientSelect').value;
    if (!coachId || !clientId) return alert("Faltan datos.");

    const coach = entrenadores.find(e => e.id === coachId);
    const client = coach.clients.find(c => c.id === clientId);

    let complianceArray = [];
    for(let i = 1; i <= 22; i++) complianceArray.push(formParamValues[`p${i}`]);
    const scoreCalculado = calcularScore(complianceArray);

    client.compliance = complianceArray;
    coach.score = Math.round(coach.clients.reduce((acc, c) => acc + calcularScore(c.compliance), 0) / coach.clients.length);
    coach.lastAudit = new Date().toISOString();

    auditorias.unshift({ 
        id: "a_" + Date.now(), 
        date: document.getElementById('formDateTime').value, 
        coach: coach.name, 
        client: client.name, 
        score: scoreCalculado
    });

    localStorage.setItem('af_audits_v8', JSON.stringify(auditorias));
    localStorage.setItem('af_coaches_v8', JSON.stringify(entrenadores));

    alert("Auditoría de 38 columnas guardada.");
    cambiarSeccion('dashboard');
}

document.addEventListener('DOMContentLoaded', () => { renderDashboard(); });

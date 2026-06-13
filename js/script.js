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

// --- BASE DE DATOS LOCAL MOCKUP (ENTRENADORES Y ALUMNOS REALES DE ANYTIME FITNESS SANT ADRIÀ) ---
const entrenadoresDefault = [
    { 
        id: "e1", name: "Tomas", role: "Head Coach", score: 95, lastAudit: "2026-06-12 11:30", status: "good", focus: "Excelente apego a protocolos.",
        clients: [
            { id: "c1", name: "Ana Piedra", compliance: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
            { id: "c2", name: "Daniel Rodríguez", compliance: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] }
        ]
    },
    { 
        id: "e2", name: "Oscar", role: "Coaching Team", score: 88, lastAudit: "2026-06-13 09:15", status: "good", focus: "Revisar MyZone.",
        clients: [
            { id: "c3", name: "Marc Vila", compliance: [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
            { id: "c4", name: "Elena Soler", compliance: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1] }
        ]
    },
    { 
        id: "e3", name: "Ruben", role: "Coaching Team", score: 79, lastAudit: "2026-06-11 16:40", status: "attention", focus: "Alerta Clientes 'No Responde'.",
        clients: [
            { id: "c5", name: "Ivan E.", compliance: [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1] },
            { id: "c6", name: "Teresa D.", compliance: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1] }
        ]
    }
];

const auditoriasDefault = [
    { id: "a1", date: "2026-06-13 09:15", coach: "Oscar", client: "Marc Vila", score: 88, shift: "Revisión Semanal", obs: "Falta entrega MyZone." }
];

// Carga desde Almacenamiento Local
let entrenadores = JSON.parse(localStorage.getItem('af_coaches_v5')) || entrenadoresDefault;
let auditorias = JSON.parse(localStorage.getItem('af_audits_v5')) || auditoriasDefault;
// Carga URL pre-configurada
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

// Función para actualizar los alumnos al cambiar de coach en el formulario
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

function cambiarClub(club) {
    renderDashboard();
}

// --- GESTIÓN DE CONFIGURACIÓN DE SHEET API ---
function guardarUrlSheet() {
    const urlInput = document.getElementById('sheetUrlInput').value.trim();
    localStorage.setItem('af_script_url_v4', urlInput);
    googleScriptUrl = urlInput;
    alert("Webhook URL guardado.");
}

function copyCode() {
    const code = document.getElementById('codeBlock').innerText;
    navigator.clipboard.writeText(code);
    alert("Código copiado.");
}

// --- SISTEMA DE RENDERIZACIÓN DINÁMICA ---

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
                <td class="py-4 text-white">${aud.client || 'General'}</td>
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

    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    document.getElementById('formDateTime').value = now.toISOString().slice(0, 16);
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
                    <span class="text-xs px-2 py-1 rounded-lg bg-brandPurple/20 text-brandLime">${coach.score}% Promedio</span>
                </div>
                <div class="space-y-2">
                    <p class="text-[10px] text-brandText uppercase tracking-wider font-bold">Alumnos de Cartera</p>
                    <div class="grid grid-cols-1 gap-2">
                        ${clientsHtml}
                    </div>
                </div>
                <div class="pt-2 border-t border-brandBorder">
                    <p class="text-[10px] text-brandText uppercase tracking-wider font-bold mb-1">Foco de Mejora</p>
                    <p class="text-xs text-brandCyan">${coach.focus}</p>
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

// --- LOGICA DE CONTROL DE BOTONES SÍ / NO ---
function setParam(paramId, value, buttonElement) {
    formParamValues[paramId] = value;
    const buttons = document.querySelectorAll(`.param-btn-${paramId}`);
    buttons.forEach(btn => btn.className = `param-btn-${paramId} px-2.5 py-1 text-[10px] font-semibold rounded-md text-brandText hover:text-white transition`);
    buttonElement.className = `param-btn-${paramId} px-2.5 py-1 text-[10px] font-semibold rounded-md ${value === 1 ? 'bg-brandLime text-brandDark' : 'bg-red-500 text-white'} transition`;
}

// --- ASISTENTE IA ---
function optimizarFeedbackConIA() {
    const rawText = document.getElementById('formRawObservation').value.trim();
    const coachId = document.getElementById('formCoachSelect').value;
    const clientId = document.getElementById('formClientSelect').value;
    const finalTexarea = document.getElementById('formFinalObservation');

    if (!coachId || !rawText) {
        alert("Selecciona coach y escribe notas.");
        return;
    }

    finalTexarea.value = "IA: Procesando reporte específico...";
    setTimeout(() => {
        const coachName = entrenadores.find(e => e.id === coachId).name;
        const clientName = clientId ? "del alumno " + (entrenadores.find(e => e.id === coachId).clients.find(c => c.id === clientId).name) : "general";
        finalTexarea.value = `Auditoría AF Sant Adrià: Se evalúa la gestión de ${coachName} ${clientName}. Observación: "${rawText}". Cumplimiento de protocolos MyZone y administrativos validado.`;
    }, 800);
}

// --- GUARDAR AUDITORÍA ---
function procesarNuevaAuditoria(event) {
    event.preventDefault();

    const coachId = document.getElementById('formCoachSelect').value;
    const clientId = document.getElementById('formClientSelect').value;
    const datetime = document.getElementById('formDateTime').value;
    const shift = document.getElementById('formShift').value;
    const finalObs = document.getElementById('formFinalObservation').value || document.getElementById('formRawObservation').value;

    if (!coachId || !clientId) {
        alert("Selecciona coach y alumno.");
        return;
    }

    const coach = entrenadores.find(e => e.id === coachId);
    const client = coach.clients.find(c => c.id === clientId);

    let complianceArray = [];
    for(let i = 1; i <= 19; i++) {
        complianceArray.push(formParamValues[`p${i}`]);
    }
    
    const scoreCalculado = calcularScore(complianceArray);

    // Actualizar datos del cliente
    client.compliance = complianceArray;
    
    // Actualizar score del coach (promedio de sus alumnos)
    const totalScoreClients = coach.clients.reduce((acc, c) => acc + calcularScore(c.compliance), 0);
    coach.score = Math.round(totalScoreClients / coach.clients.length);
    coach.lastAudit = datetime;

    const nuevaAuditoria = {
        id: "a_" + Date.now(),
        date: datetime,
        coach: coach.name,
        client: client.name,
        score: scoreCalculado,
        shift: shift,
        obs: finalObs
    };

    auditorias.unshift(nuevaAuditoria);

    // Sincronización remota (opcional)
    if (googleScriptUrl) {
        fetch(googleScriptUrl, {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify({...nuevaAuditoria, coachId, clientId})
        });
    }

    localStorage.setItem('af_audits_v5', JSON.stringify(auditorias));
    localStorage.setItem('af_coaches_v5', JSON.stringify(entrenadores));

    alert("Auditoría de alumno guardada con éxito.");
    cambiarSeccion('dashboard');
}

function closeSuccessModal() {
    document.getElementById('successModal').classList.add('hidden');
    cambiarSeccion('dashboard');
}

document.addEventListener('DOMContentLoaded', () => {
    renderDashboard();
});


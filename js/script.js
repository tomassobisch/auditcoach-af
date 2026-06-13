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

const PUNTOS_LABELS = {
    p1: "Coach en Membr", p2: "Valoración Fitness", p3: "Programa Asignado", p4: "Enviado por App", p5: "Completa Programas",
    p6: "Escaneo Evolt", p7: "Test Movilidad", p8: "Mejora Física", p9: "Registro Notas",
    p12: "Uso MyZone", p13: "Participación Reto", p14: "Grupo MyZone", p15: "Interacción Grupal"
};

const entrenadoresDefault = [
    { 
        id: "e1", name: "Tomas", role: "Head Coach", score: 95,
        clients: [
            { id: "c_t1", name: "JOSE LUIS GIMENEZ", compliance: Array(22).fill(1) },
            { id: "c_t2", name: "MARIA CARMEN RUIZ", compliance: Array(22).fill(1) },
            { id: "c_t3", name: "ANTONIO LOPEZ", compliance: Array(22).fill(1) }
        ]
    },
    { 
        id: "e2", name: "Oscar", role: "Coach", score: 88,
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
        id: "e3", name: "Ruben", role: "Coach", score: 85,
        clients: [
            { id: "c_r1", name: "SHEILA DE CARMEN", compliance: Array(22).fill(1) },
            { id: "c_r2", name: "ORIOL BACELLS", compliance: Array(22).fill(1) },
            { id: "c_r3", name: "LISANDRO MELÉNDEZ", compliance: Array(22).fill(1) },
            { id: "c_r4", name: "JORGE MANUEL DOMÍNGUEZ", compliance: Array(22).fill(1) },
            { id: "c_r5", name: "MIBEL RIBAS", compliance: Array(22).fill(1) },
            { id: "c_r6", name: "YOLANDA FERNÁNDEZ", compliance: Array(22).fill(1) },
            { id: "c_r7", name: "ANA MARÍN MARTÍN", compliance: Array(22).fill(1) },
            { id: "c_r8", name: "RAÚL VEGA GARCÍA", compliance: Array(22).fill(1) },
            { id: "c_r9", name: "XAVI CATALÁN", compliance: Array(22).fill(1) },
            { id: "c_r10", name: "SELENE FERRER", compliance: Array(22).fill(1) },
            { id: "c_r11", name: "MONTSERRAT GARRIGA", compliance: Array(22).fill(1) },
            { id: "c_r12", name: "LLUÍS GASSÓ", compliance: Array(22).fill(1) },
            { id: "c_r13", name: "LAURA MASSOT", compliance: Array(22).fill(1) },
            { id: "c_r14", name: "SAMUEL RODRIGUEZ DA SILVA", compliance: Array(22).fill(1) },
            { id: "c_r15", name: "MONTSERRAT RUIZ GRIBAU", compliance: Array(22).fill(1) },
            { id: "c_r16", name: "GUILLERMO VERA", compliance: Array(22).fill(1) },
            { id: "c_r17", name: "EDUARD FALCÓN", compliance: Array(22).fill(1) },
            { id: "c_r18", name: "SEIDY GARCÍA ISIDRO", compliance: Array(22).fill(1) },
            { id: "c_r19", name: "CLAUDIA SOUZA DA SILVA", compliance: Array(22).fill(1) },
            { id: "c_r20", name: "MÓNICA ESCAÑO VIAN", compliance: Array(22).fill(1) },
            { id: "c_r21", name: "CÉSAR DAVID SOLÓRZANO QUIÑE", compliance: Array(22).fill(1) },
            { id: "c_r22", name: "AUDRY DOTEL", compliance: Array(22).fill(1) },
            { id: "c_r23", name: "CRISTINA BATALLER BATALLER", compliance: Array(22).fill(1) },
            { id: "c_r24", name: "ALEX GIL RAFELS", compliance: Array(22).fill(1) },
            { id: "c_r25", name: "YERAY MELLADO GARCÍA", compliance: Array(22).fill(1) },
            { id: "c_r26", name: "NATALIA BELÉN DÍAZ", compliance: Array(22).fill(1) },
            { id: "c_r27", name: "ADOLFO ROSA RUIZ", compliance: Array(22).fill(1) },
            { id: "c_r28", name: "PAOLA ALONZO ÁLVAREZ", compliance: Array(22).fill(1) },
            { id: "c_r29", name: "CHAYMAE HOUNAINE", compliance: Array(22).fill(1) },
            { id: "c_r30", name: "WISAL KHAN", compliance: Array(22).fill(1) },
            { id: "c_r31", name: "LIZ PAOLA CANDIA", compliance: Array(22).fill(1) }
        ]
    },
    { 
        id: "e4", name: "Anna", role: "Coach", score: 90,
        clients: [
            { id: "c_a1", name: "LUISA FERNANDA GOMEZ", compliance: Array(22).fill(1) },
            { id: "c_a2", name: "MARIA ISABEL PEREZ", compliance: Array(22).fill(1) },
            { id: "c_a3", name: "JUAN CARLOS RODRIGUEZ", compliance: Array(22).fill(1) }
        ]
    }
];

let entrenadores = JSON.parse(localStorage.getItem('af_coaches_v13')) || entrenadoresDefault;
let auditorias = JSON.parse(localStorage.getItem('af_audits_v13')) || [];
let formParamValues = {};
let googleScriptUrl = localStorage.getItem('af_script_url_v4') || "https://script.google.com/macros/s/AKfycbxtS5k9QSY7KanAx6rgCAnF9iPr8gtsyplfpiMo5YA-HAp-q-YqwLs17vL_gg6Odi57/exec";

function resetFormParams() { for(let i = 1; i <= 22; i++) formParamValues[`p${i}`] = 1; }
resetFormParams();

function cambiarSeccion(target) {
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
    document.getElementById(`view-${target}`).classList.remove('hidden');
    document.querySelectorAll('aside nav button').forEach(btn => btn.classList.remove('active-nav'));
    document.getElementById(`nav-${target}`).classList.add('active-nav');
    if (target === 'dashboard') renderDashboard();
    if (target === 'entrenadores') renderEntrenadoresGrid();
    if (target === 'auditar') renderCoachSelect();
}

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

function setParam(id, val, btn) {
    formParamValues[id] = val;
    document.querySelectorAll(`.param-btn-${id}`).forEach(b => b.className = `param-btn-${id} px-3 py-1 text-[10px] rounded-md text-brandText transition`);
    btn.className = `param-btn-${id} px-3 py-1 text-[10px] rounded-md transition ${val === 1 ? 'bg-brandLime text-brandDark' : 'bg-red-500 text-white'}`;
}

function renderDashboard() {
    const totalAudits = auditorias.length;
    const avgScore = totalAudits > 0 ? Math.round(auditorias.reduce((acc, a) => acc + a.score, 0) / totalAudits) : 0;
    const alerts = auditorias.filter(a => a.score < 80).length;

    document.getElementById('statTotalAudits').innerText = totalAudits;
    document.getElementById('statAvgScore').innerText = avgScore + "%";
    document.getElementById('statAlerts').innerText = alerts;

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
                <div class="flex justify-between items-center text-[10px] font-bold text-white"><span>Compliance: ${e.score}%</span></div>
                <div class="w-full bg-brandDark h-1.5 rounded-full overflow-hidden border border-brandBorder"><div class="h-full ${color}" style="width: ${e.score}%"></div></div>
            </div>`;
    });

    const table = document.getElementById('lastAuditsTable');
    table.innerHTML = auditorias.length ? '' : '<tr><td colspan="5" class="py-4 text-brandText pl-2">Sin registros.</td></tr>';
    auditorias.slice(0, 10).forEach(a => {
        table.innerHTML += `
            <tr class="border-b border-brandBorder/40 hover:bg-brandPanel/30 transition">
                <td class="py-4 pl-2 text-brandText">${a.date.split('T')[0]}</td>
                <td class="py-4 font-bold text-white">${a.coach}</td>
                <td class="py-4 text-white">${a.client}</td>
                <td class="py-4 text-center"><span class="px-2 py-1 rounded-lg text-[10px] font-bold ${a.score >= 85 ? 'text-brandLime bg-brandLime/10' : 'text-red-400 bg-red-400/10'}">${a.score}%</span></td>
                <td class="py-4 text-center"><button onclick="verInformePrevio('${a.id}')" class="text-brandPurple hover:text-white transition"><i class="fa-solid fa-file-invoice"></i></button></td>
            </tr>`;
    });
}

function procesarNuevaAuditoria(e) {
    e.preventDefault();
    const coachId = document.getElementById('formCoachSelect').value;
    const clientId = document.getElementById('formClientSelect').value;
    if (!coachId || !clientId) return alert("Faltan datos.");

    const coach = entrenadores.find(e => e.id === coachId);
    const client = coach.clients.find(c => c.id === clientId);

    let complianceArray = [];
    let observations = {};
    for(let i = 1; i <= 22; i++) {
        complianceArray.push(formParamValues[`p${i}`] || 1);
        const obsInput = document.getElementById(`obs_p${i}`);
        if (obsInput) observations[`p${i}`] = obsInput.value;
    }
    
    const score = Math.round((complianceArray.filter(v => v === 1).length / 22) * 100);
    const prevScore = client.lastScore || null;

    client.compliance = complianceArray;
    client.lastScore = score;
    coach.score = Math.round(coach.clients.reduce((acc, c) => acc + (c.lastScore || 100), 0) / coach.clients.length);

    const nuevaAuditoria = {
        id: "a_" + Date.now(),
        date: document.getElementById('formDateTime').value,
        coach: coach.name,
        client: client.name,
        score: score,
        prevScore: prevScore,
        compliance: complianceArray,
        observations: observations
    };

    auditorias.unshift(nuevaAuditoria);

    if (googleScriptUrl) {
        fetch(googleScriptUrl, {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify({...nuevaAuditoria, action: "updateAndHighlight"})
        });
    }

    localStorage.setItem('af_audits_v13', JSON.stringify(auditorias));
    localStorage.setItem('af_coaches_v13', JSON.stringify(entrenadores));

    generarInforme(nuevaAuditoria);
}

function generarInforme(aud) {
    const container = document.getElementById('contenidoInforme');
    const fallos = [];
    const fortalezas = [];

    aud.compliance.forEach((val, index) => {
        const id = index + 1;
        const label = PUNTOS_LABELS[`p${id}`];
        if (!label) return;
        if (val === 1) fortalezas.push(label);
        else fallos.push({ label, obs: aud.observations[`p${id}`] });
    });

    const tendencia = aud.prevScore !== null ? (aud.score > aud.prevScore ? "📈 Mejora detectada" : "📉 Descenso detectado") : "🆕 Auditoría Inicial";

    container.innerHTML = `
        <div class="flex justify-between items-center border-b border-brandBorder pb-4">
            <div><p class="text-[10px] text-brandText uppercase font-bold">Score Final</p><h4 class="text-3xl font-bold text-white">${aud.score}%</h4></div>
            <div class="text-right"><p class="text-xs text-brandLime font-bold">${tendencia}</p><p class="text-[10px] text-brandText">${aud.date.replace('T', ' ')}</p></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
            <div class="space-y-3">
                <h5 class="text-xs font-bold text-brandLime uppercase tracking-widest"><i class="fa-solid fa-circle-check mr-2"></i>Puntos Fuertes</h5>
                <ul class="text-[11px] space-y-2">${fortalezas.slice(0, 5).map(f => `<li class="flex items-center gap-2"><span class="w-1 h-1 bg-brandLime rounded-full"></span>${f}</li>`).join('')}</ul>
            </div>
            <div class="space-y-3">
                <h5 class="text-xs font-bold text-red-400 uppercase tracking-widest"><i class="fa-solid fa-triangle-exclamation mr-2"></i>Áreas de Mejora</h5>
                <ul class="text-[11px] space-y-2">
                    ${fallos.length ? fallos.map(f => `<li class="space-y-1"><div class="flex items-center gap-2"><span class="w-1 h-1 bg-red-400 rounded-full"></span>${f.label}</div>${f.obs ? `<div class="pl-3 text-brandText/60 italic">"${f.obs}"</div>` : ''}</li>`).join('') : '<li>No se detectaron fallos.</li>'}
                </ul>
            </div>
        </div>
        <div class="bg-brandDark/40 p-5 rounded-2xl border border-brandBorder space-y-2">
            <h5 class="text-xs font-bold text-white uppercase tracking-widest">Diagnóstico AF Sant Adrià</h5>
            <p class="text-[11px] italic text-brandText">Gestión de <strong>${aud.coach}</strong> con <strong>${aud.client}</strong> calificada como ${aud.score >= 85 ? 'Satisfactoria' : 'Revisable'}.</p>
        </div>`;
    document.getElementById('modalInforme').classList.remove('hidden');
}

function cerrarModalInforme() { document.getElementById('modalInforme').classList.add('hidden'); cambiarSeccion('dashboard'); }
function verInformePrevio(id) { const a = auditorias.find(aud => aud.id === id); if (a) generarInforme(a); }

function renderEntrenadoresGrid() {
    const grid = document.getElementById('coachesDetailedGrid');
    grid.innerHTML = "";
    entrenadores.forEach(e => {
        const clientsHtml = e.clients.map(c => `
            <div class="flex justify-between items-center text-[10px] bg-brandDark/30 p-2 rounded-lg border border-brandBorder/50">
                <span class="text-white truncate">${c.name}</span>
                <span class="font-bold text-brandLime">${c.lastScore || 100}%</span>
            </div>`).join('');
        grid.innerHTML += `
            <div class="bg-brandPanel border border-brandBorder rounded-2xl p-5 space-y-4">
                <h3 class="font-bold text-white text-sm border-b border-brandBorder pb-2">${e.name}</h3>
                <div class="space-y-2 max-h-40 overflow-y-auto">${clientsHtml}</div>
            </div>`;
    });
}

document.addEventListener('DOMContentLoaded', () => { renderDashboard(); });

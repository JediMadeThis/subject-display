const times = {
  A: { start: [7, 25], end: [8, 15] },
  1: { start: [8, 15], end: [9, 5] },
  2: { start: [9, 5], end: [9, 55] },
  B: { start: [9, 55], end: [10, 10] },
  3: { start: [10, 10], end: [11, 0] },
  4: { start: [11, 0], end: [11, 50] },
  5: { start: [11, 50], end: [12, 40] },
  6: { start: [12, 40], end: [13, 30] },
  7: { start: [13, 30], end: [14, 20] },
  8: { start: [14, 20], end: [15, 10] },
  9: { start: [18, 31], end: [19, 10] }, // 15:10 - 16:00
  10: { start: [16, 0], end: [16, 50] },
  11: { start: [20, 0], end: [20, 10] },
};

const numberToName = {
  0: 'A',
  1: 1,
  2: 2,
  3: 'B',
  4: 3,
  5: 4,
  6: 5,
  7: 6,
  8: 7,
  9: 8,
  10: 9,
  11: 10,
  12: 11,
};

const nameToNumber = {
  A: 0,
  1: 1,
  2: 2,
  B: 3,
  3: 4,
  4: 5,
  5: 6,
  6: 7,
  7: 8,
  8: 9,
  9: 10,
  10: 11,
  11: 12,
};

const subjects = {
  monday: {
    A: { name: 'Homeroom', teachers: '' },
    1: { name: 'Reading', teachers: '' },
    2: { name: 'Thai', teachers: 'ครูนวีณา' },
    B: { name: 'Break', teachers: '' },
    3: { name: 'Social Studies/History', teachers: 'ครูรมณีย์' },
    4: { name: 'Lunch', teachers: '' },
    5: { name: 'Maths', teachers: 'T. Jay, ครูสุชาดา' },
    6: { name: 'Buddhism', teachers: 'พระอาจารย์' },
    7: { name: 'English', teachers: 'T. Inspire, ครูกฤตพร' },
    8: { name: 'EPX Practice', teachers: '' },
  },
  tuesday: {
    A: { name: 'Homeroom', teachers: '' },
    1: { name: 'Scout', teachers: '' },
    2: { name: 'Art', teachers: 'ครูพัชรินทร์' },
    B: { name: 'Break', teachers: '' },
    3: { name: 'English', teachers: 'T. Inspire, ครูกฤตพร' },
    4: { name: 'Lunch', teachers: '' },
    5: { name: 'Science', teachers: 'T. Girlie, ครูปวีณา' },
    6: { name: 'Science', teachers: 'ครูปวีณา' },
    7: { name: 'Thai', teachers: 'ครูนวีณา' },
    8: { name: 'Maths', teachers: 'T. Jay, ครูสุชาดา' },
  },
  wednesday: {
    A: { name: 'Homeroom', teachers: '' },
    1: { name: 'English', teachers: 'T. Inspire' },
    2: { name: 'Maths', teachers: 'ครูสุชาดา' },
    B: { name: 'Break', teachers: '' },
    3: { name: 'English Writing', teachers: 'อ.ทวี, ครูกฤตพร' },
    4: { name: 'Lunch', teachers: '' },
    5: { name: 'English Read-Write', teachers: 'T. Isiah' },
    6: { name: 'Social Studies', teachers: 'ครูรมณีย์' },
    7: { name: 'P.E.', teachers: 'ครูธนพล' },
    8: { name: 'H.E.', teachers: 'T. Leonora, ครู A' },
  },
  thursday: {
    A: { name: 'Homeroom', teachers: '' },
    1: { name: 'Meeting', teachers: '' },
    2: { name: 'Art', teachers: 'ครูรัตติยา' },
    B: { name: 'Break', teachers: '' },
    3: { name: 'Maths', teachers: 'T. Jay' },
    4: { name: 'Lunch', teachers: '' },
    5: { name: 'Chinese/Japanese', teachers: 'Multiple teachers' },
    6: { name: 'Social Studies', teachers: 'ครูรมณีย์' },
    7: { name: 'Science', teachers: 'T. Girlie, ครูปวีณา' },
    8: { name: 'Science', teachers: 'T. Girlie, ครูปวีณา' },
  },
  friday: {
    A: { name: 'Homeroom', teachers: '' },
    1: { name: 'Computer', teachers: 'T. Tommy, ครูคมกฤษณ์' },
    2: { name: 'Computer', teachers: 'T. Tommy, ครูคมกฤษณ์' },
    B: { name: 'Break', teachers: '' },
    3: { name: 'Thai', teachers: 'ครูนวีณา' },
    4: { name: 'Lunch', teachers: '' },
    5: { name: 'English Read-Write', teachers: 'T. Isiah, ครูอารียา' },
    6: { name: 'แนะแนว', teachers: 'ครูดรุนลักษณ์' },
    7: { name: 'Maths', teachers: 'T. Jay' },
    8: { name: 'Science', teachers: 'ครูปวีณา' },
  },
};

const daysOfWeek = {
  0: 'sunday',
  1: 'monday',
  2: 'tuesday',
  3: 'wednesday',
  4: 'thursday',
  5: 'friday',
  6: 'saturday',
};

const monthsOfYear = {
  0: 'janurary',
  1: 'february',
  2: 'march',
  3: 'april',
  4: 'may',
  5: 'june',
  6: 'july',
  7: 'august',
  8: 'september',
  9: 'october',
  10: 'november',
  11: 'december',
};

const bar = document.getElementById('bar');
const tbody = document.getElementById('tbody');

const currentSubjName = document.getElementById('currentSubjectName');
const currentSubjTeachers = document.getElementById('currentSubjectTeachers');

const clockE = document.getElementById('clock');
const dateE = document.getElementById('date');

generateTable();
setInterval(update, 1000);

function update() {
  updateClock();
  updateBar();
  updateSubjectDisplay();
  updateTableStatus();
}

function updateClock() {
  const d = new Date();

  const hours = d.getHours().toString().padStart(2, '0');
  const minutes = d.getMinutes().toString().padStart(2, '0');
  const seconds = d.getSeconds().toString().padStart(2, '0');

  clockE.textContent = `${hours}:${minutes}:${seconds}`;

  const dayStr = capitalizeString(daysOfWeek[d.getDay()]);

  const date = d.getDate();
  const month = d.getMonth();
  const year = d.getFullYear();

  const monthStr = capitalizeString(monthsOfYear[month]);

  dateE.textContent = `${dayStr}, ${date} ${monthStr} ${year}`;
}

/**
 * @param {String} str
 * @returns {String}
 */
function capitalizeString(str) {
  const firstLetter = String(str).charAt(0).toUpperCase();
  const theRest = String(str).slice(1);

  return firstLetter + theRest;
}

function updateSubjectDisplay() {
  const d = new Date();

  const dayNo = d.getDay();
  const day = daysOfWeek[dayNo];

  currentSubjName.textContent =
    subjects[day][getCurrentPeriod().periodName].name;
}

function generateTable() {
  const d = new Date();

  const dayNo = d.getDay();
  const day = daysOfWeek[dayNo];

  for (let i = 0; i < Object.keys(subjects[day]).length; i++) {
    console.log(i, nameToNumber[getCurrentPeriod().periodName]);

    let sh = String(times[numberToName[i]].start[0]);
    let sm = String(times[numberToName[i]].start[1]);
    let eh = String(times[numberToName[i]].end[0]);
    let em = String(times[numberToName[i]].end[1]);

    sh = sh.length < 2 ? `0${sh}` : sh;
    sm = sm.length < 2 ? `0${sm}` : sm;
    eh = eh.length < 2 ? `0${eh}` : eh;
    em = em.length < 2 ? `0${em}` : em;

    const tr = generateSubjTr(
      numberToName[i],
      `${sh}:${sm} - ${eh}:${em}`,
      subjects[day][numberToName[i]].name,
      subjects[day][numberToName[i]].teachers
    );
    tbody.appendChild(tr);
  }
}

function updateTableStatus() {
  const d = new Date();

  const dayNo = d.getDay();
  const day = daysOfWeek[dayNo];

  for (let i = 0; i < Object.keys(subjects[day]).length; i++) {
    if (i < getCurrentPeriod().periodNo) {
      document.getElementById(`subjRow${i}`).style.opacity = '0.2';
    } else {
      document.getElementById(`subjRow${i}`).style.opacity = '1';
    }

    if (i === getCurrentPeriod().periodNo) {
      document.getElementById(`subjRow${i}`).style.backgroundColor =
        '#89cff030';
    }
  }
}

function generateSubjTr(period, time, name, teacherss) {
  const tr = document.createElement('tr');
  tr.id = `subjRow${nameToNumber[period]}`;

  const subjNoTd = document.createElement('td');
  let subjNoText;

  if (period === 'A' || period === 'B') {
    tr.classList.add('bigger');
    subjNoText = document.createTextNode('');
  } else {
    subjNoText = document.createTextNode(period);
  }

  subjNoTd.id = 'subjNo';

  const subjTimeTd = document.createElement('td');
  const subjTimeText = document.createTextNode(time);
  subjTimeTd.id = 'subjTime';

  const subjNameTd = document.createElement('td');
  const subjNameText = document.createTextNode(name);
  subjNameTd.id = 'subjName';
  subjNameTd.classList.add('subjName');

  const subjTeachTd = document.createElement('td');
  const subjTeachText = document.createTextNode(teacherss);
  subjTeachTd.id = 'subjTeach';

  subjNoTd.appendChild(subjNoText);
  subjTimeTd.appendChild(subjTimeText);
  subjNameTd.appendChild(subjNameText);
  subjTeachTd.appendChild(subjTeachText);

  tr.appendChild(subjNoTd);
  tr.appendChild(subjTimeTd);
  tr.appendChild(subjNameTd);
  tr.appendChild(subjTeachTd);

  return tr;
}

function updateBar() {
  bar.style.width = `${getCurrentPeriodInfo().periodProgress * 100}%`;
}

function getCurrentPeriodInfo() {
  const currentPeriod = getCurrentPeriod().periodName;

  if (!currentPeriod) {
    return false;
  }

  const periodMs = getPeriodMs(currentPeriod);
  const nowMs = getMs(new Date());

  const totalPeriodTime = periodMs.end - periodMs.start;
  const timeElapsed = nowMs - periodMs.start;

  const periodProgress = timeElapsed / totalPeriodTime;

  return { timeElapsed, totalPeriodTime, periodProgress };
}

function getCurrentPeriod() {
  const d = new Date();
  const nowMs = getMs(d);
  const day = daysOfWeek[d.getDay()];

  for (const period in times) {
    const periodMs = getPeriodMs(period);

    if (nowMs > periodMs.start && nowMs < periodMs.end) {
      return { periodName: period, periodNo: nameToNumber[period] };
    }
  }

  return false;
}

function getPeriodMs(period) {
  const s = new Date(
    null,
    null,
    null,
    times[period].start[0],
    times[period].start[1]
  );

  const e = new Date(
    null,
    null,
    null,
    times[period].end[0],
    times[period].end[1]
  );

  return { start: getMs(s), end: getMs(e) };
}

/**
 * @param {Date} d
 * @returns {Number}
 */
function getMs(d) {
  let e = new Date(d);

  return d - e.setHours(0, 0, 0, 0);
}

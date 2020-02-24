import camelCase from 'lodash/camelCase';

const seaEnlisted = [
  {
    rank: 'E1',
    title: 'Seaman Recruit',
    abbr: 'SR',
  },
  {
    rank: 'E2',
    title: 'Seaman Apprentice',
    abbr: 'SA',
  },
  {
    rank: 'E3',
    title: 'Seaman',
    abbr: 'SN',
  },
  {
    rank: 'E4',
    title: 'Petty Officer Third Class',
    abbr: 'PO3',
  },
  {
    rank: 'E5',
    title: 'Petty Officer Second Class',
    abbr: 'PO2',
  },
  {
    rank: 'E6',
    title: 'Petty Officer First Class',
    abbr: 'PO1',
  },
  {
    rank: 'E7',
    title: 'Chief Petty Officer',
    abbr: 'CPO',
  },
  {
    rank: 'E8',
    title: 'Senior Chief Petty Officer',
    abbr: 'SCPO',
  },
  {
    rank: 'E9',
    title: 'Master Chief Petty Officer',
    abbr: 'MCPO',
  },
  {
    rank: 'E9',
    title: 'Force Command Master Chief Petty Officer',
    abbr: 'FORMC',
  },
  {
    rank: 'E9',
    title: 'Fleet Command Master Chief Petty Officer',
    abbr: 'FLTMC',
  },
];

const warrantOfficer = [
  {
    rank: 'WO1',
    title: 'Warrant Officer 1',
    abbr: 'WO',
  },
  {
    rank: 'CWO2',
    title: 'Chief Warrant Officer 2',
    abbr: 'CWO2',
  },
  {
    rank: 'CWO3',
    title: 'Chief Warrant Officer 3',
    abbr: 'CWO3',
  },
  {
    rank: 'CWO4',
    title: 'Chief Warrant Officer 4',
    abbr: 'CWO4',
  },
  {
    rank: 'CWO5',
    title: 'Chief Warrant Officer 5',
    abbr: 'CWO5',
  },
];

const landOfficer = [
  {
    rank: 'O1',
    title: 'Second Lieutenant',
    abbr: '',
  },
  {
    rank: 'O2',
    title: 'First Lieutenant',
    abbr: '',
  },
  {
    rank: 'O3',
    title: 'Captain',
    abbr: '',
  },
  {
    rank: 'O4',
    title: 'Major',
    abbr: '',
  },
  {
    rank: 'O5',
    title: 'Lieutenant Colonel',
    abbr: '',
  },
  {
    rank: 'O6',
    title: 'Colonel',
    abbr: '',
  },
  {
    rank: 'O7',
    title: 'Brigadier General',
    abbr: '',
  },
  {
    rank: 'O8',
    title: 'Major General',
    abbr: '',
  },
  {
    rank: 'O9',
    title: 'Lieutenant General',
    abbr: '',
  },
  {
    rank: 'O10',
    title: 'General',
    abbr: '',
  },
];

const seaOfficer = [
  {
    rank: 'O1',
    title: 'Ensign',
    abbr: '',
  },
  {
    rank: 'O2',
    title: 'Lieutenant (junior grade)',
    abbr: '',
  },
  {
    rank: 'O3',
    title: 'Lieutenant',
    abbr: '',
  },
  {
    rank: 'O4',
    title: 'Lieutenant Commander',
    abbr: '',
  },
  {
    rank: 'O5',
    title: 'Commander',
    abbr: '',
  },
  {
    rank: 'O6',
    title: 'Captain',
    abbr: '',
  },
  {
    rank: 'O7',
    title: 'Rear Admiral (lower half)',
    abbr: '',
  },
  {
    rank: 'O8',
    title: 'Rear Admiral (upper half)',
    abbr: '',
  },
  {
    rank: 'O9',
    title: 'Vice Admiral',
    abbr: '',
  },
  {
    rank: 'O10',
    title: 'Admiral',
    abbr: '',
  },
];

/**
 * Description.
 *
 * @enum {object}
 */
const branchRanks = {
  airForce: {
    enlisted: [
      {
        rank: 'E1',
        title: 'Airman Basic',
        abbr: 'AB',
      },
      {
        rank: 'E2',
        title: 'Airman',
        abbr: 'Amn',
      },
      {
        rank: 'E3',
        title: 'Airman First Class',
        abbr: 'A1C',
      },
      {
        rank: 'E4',
        title: 'Senior Airman',
        abbr: 'SrA',
      },
      {
        rank: 'E5',
        title: 'Staff Sergeant',
        abbr: 'SSgt',
      },
      {
        rank: 'E6',
        title: 'Technical Sergeant',
        abbr: 'TSgt',
      },
      {
        rank: 'E7',
        title: 'Master Sergeant',
        abbr: 'MSgt',
      },
      {
        rank: 'E7',
        title: 'First Sergeant',
        abbr: 'E-7',
      },
      {
        rank: 'E8',
        title: 'Senior Master Sergeant',
        abbr: 'SMSgt',
      },
      {
        rank: 'E8',
        title: 'First Sergeant',
        abbr: 'E-8',
      },
      {
        rank: 'E9',
        title: 'Chief Master Sergeant',
        abbr: 'CMSgt',
      },
      {
        rank: 'E9',
        title: 'First Sergeant',
        abbr: 'E-9',
      },
      {
        rank: 'E9',
        title: 'Command Chief Master Sergeant',
        abbr: 'CCM',
      },
    ],
    warrantOfficer: null,
    officer: landOfficer,
  },
  army: {
    enlisted: [
      {
        rank: 'E1',
        title: 'Private',
        abbr: 'PV1',
      },
      {
        rank: 'E2',
        title: 'Private',
        abbr: 'PV2',
      },
      {
        rank: 'E3',
        title: 'Private First Class',
        abbr: 'PFC',
      },
      {
        rank: 'E4',
        title: 'Corporal',
        abbr: 'CPL',
      },
      {
        rank: 'E4',
        title: 'Specialist',
        abbr: 'SPL',
      },
      {
        rank: 'E5',
        title: 'Sergeant',
        abbr: 'SGT',
      },
      {
        rank: 'E6',
        title: 'Staff Sergeant',
        abbr: 'SSG',
      },
      {
        rank: 'E7',
        title: 'Sergeant First Class',
        abbr: 'SFC',
      },
      {
        rank: 'E8',
        title: 'Master Sergeant',
        abbr: 'MSG',
      },
      {
        rank: 'E8',
        title: 'First Sergeant',
        abbr: '1SG',
      },
      {
        rank: 'E9',
        title: 'Sergeant Major',
        abbr: 'SGM',
      },
      {
        rank: 'E9',
        title: 'Command Sergeant Major',
        abbr: 'CSM',
      },
    ],
    warrantOfficer,
    officer: landOfficer,
  },
  coastGuard: {
    enlisted: seaEnlisted,
    warrantOfficer,
    officer: seaOfficer,
  },
  marineCorps: {
    enlisted: [
      {
        rank: 'E1',
        title: 'Private',
        abbr: 'Pvt',
      },
      {
        rank: 'E2',
        title: 'Private First Class',
        abbr: 'PFC',
      },
      {
        rank: 'E3',
        title: 'Lance Corporal',
        abbr: 'LCpl',
      },
      {
        rank: 'E4',
        title: 'Corporal',
        abbr: 'Cpl',
      },
      {
        rank: 'E5',
        title: 'Sergeant',
        abbr: 'Sgt',
      },
      {
        rank: 'E6',
        title: 'Staff Sergeant',
        abbr: 'SSgt',
      },
      {
        rank: 'E7',
        title: 'Gunnery Sergeant',
        abbr: 'GySgt',
      },
      {
        rank: 'E8',
        title: 'Master Sergeant',
        abbr: 'MSgt',
      },
      {
        rank: 'E8',
        title: 'First Sergeant',
        abbr: '1stSgt',
      },
      {
        rank: 'E9',
        title: 'Master Gunnery Sergeant',
        abbr: 'MGySgt',
      },
      {
        rank: 'E9',
        title: 'Sergeant Major',
        abbr: 'SgtMaj',
      },
    ],
    warrantOfficer,
    officer: landOfficer,
  },
  navy: {
    enlisted: seaEnlisted,
    warrantOfficer,
    officer: seaOfficer,
  }
};

// const formOptions = {
//   airForce: [],
//   army: [],
//   coastGuard: [],
//   marineCorps: [],
//   navy: [],
// }
const buildRankFormOptions = (branch) => {
  const formOptions = [];

  if (!branch) {
    return formOptions;
  } else if (branch === 'N/A') {
    formOptions.push({ value: 'N/A', label: 'N/A'})
    return formOptions;
  }

  const branchList = branchRanks[camelCase(branch)];
  const keys = Object.keys(branchList);

  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const ranks = branchList[key];

    if (ranks && ranks.length) {
      for (let rankIndex = 0; rankIndex < ranks.length; rankIndex++) {
        const rank = branchList[key][rankIndex];
        const rankString = `${rank.rank} - ${rank.title} (${rank.abbr})`;

        formOptions.push({
          value: rankString,
          label: rankString,
        });
      }
    }
  }

  return formOptions;
};

const branches = {
  airForce: 'Air Force',
  army: 'Army',
  coastGuard: 'Coast Guard',
  marineCorps: 'Marine Corps',
  navy: 'Navy',
};

/**
 * Description.
 */
const branchFormOptions = () => {
  const branchKeys = Object.keys(branches);
  const branchOptions = [
    { value: 'N/A', label: 'N/A'},
  ];

  for (let index = 0; index < branchKeys.length; index++) {
    branchOptions.push({
      value: camelCase(branches[branchKeys[index]]),
      label: branches[branchKeys[index]],
    })
  }

  return branchOptions;
};

export {
  branches,
  branchFormOptions,
  branchRanks,
  buildRankFormOptions,
};

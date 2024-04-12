// TODO: I really need to switch to TS
const DEFAULT = {
    general: {
        name: 'Scott Clark',
        email: 'stuff@place.net',
        phone: '215-123-6969',
    },
    education: { school: 'Arcadia', major: 'Math', year: '1996' },
    experience: {
        company: 'Towers Perrin',
        title: 'Senior Support',
        description: 'software developer',
        start: '1996',
        end: '2008',
    },
};

const EMPTY = clear(clone(DEFAULT));

const STORE_KEY = 'scotttopfsjscv';

function loadData() {
    const local = localStorage.getItem(STORE_KEY);

    if (!local) return DEFAULT;

    return JSON.parse(local);
}

function saveData(data = undefined) {
    if (!data) localStorage.removeItem(STORE_KEY);
    else localStorage.setItem(STORE_KEY, JSON.stringify(data));
}

function clear(obj) {
    for (let key in obj) {
        // console.log(key);
        if (typeof obj[key] === 'object') {
            clear(obj[key]);
        } else {
            obj[key] = '';
        }
    }
    return obj;
}

// TODO: spread does not do deep copy
// my hack for this simple structure
function clone(obj = DEFAULT) {
    return {
        ...obj,
        general: { ...obj.general },
        education: { ...obj.education },
        experience: { ...obj.experience },
    };
}

export { DEFAULT, EMPTY, loadData, saveData, clone };

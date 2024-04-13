// TODO: I really need to switch to TS
// I don't trust that react will not break stuff if this is passed directly
// so I hide it behind clone()
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

const STORE_KEY = 'scotttopfsjscv';

function load() {
    const local = localStorage.getItem(STORE_KEY);

    if (!local) return clone();

    return JSON.parse(local);
}

function saveLocal(data) {
    localStorage.setItem(STORE_KEY, JSON.stringify(data));
}

function removeLocal() {
    localStorage.removeItem(STORE_KEY);
}

function clear(data) {
    for (let key in data) {
        // console.log(key);
        if (typeof data[key] === 'object') {
            clear(data[key]);
        } else {
            data[key] = '';
        }
    }
    return data;
}

// TODO: spread does not do deep copy
// my hack for this simple structure
function clone(data = DEFAULT) {
    return {
        ...data,
        general: { ...data.general },
        education: { ...data.education },
        experience: { ...data.experience },
    };
}

export { clone, clear, load, saveLocal, removeLocal };

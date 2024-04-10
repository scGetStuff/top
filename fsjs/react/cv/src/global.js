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

// I hate passing property down multiple components deep
// the flag is set on a button click in the main app component
// it will cause re-render where the flag is used in lower components
let writeFlag = false;

function setWriteFlag(b = false) {
    writeFlag = b;
}

function getWriteFlag() {
    return writeFlag;
}

export { DEFAULT, clone, setWriteFlag, getWriteFlag };

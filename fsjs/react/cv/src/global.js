// I hate passing property down multiple components deep
// the flag is set on a button click in the main app component
// it is used in lower components
let writeFlag = false;

function setWriteFlag(b = false) {
    writeFlag = b;
}

function getWriteFlag() {
    return writeFlag;
}

export { setWriteFlag, getWriteFlag };

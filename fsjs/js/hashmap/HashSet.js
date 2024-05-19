import { HashMap } from './HashMap.js';

class HashSet {
    #map = new HashMap();

    constructor() {}

    set(key = '') {
        this.#map.set(key, key);
    }

    get(key) {
        return this.#map.get(key);
    }

    has(key) {
        return this.#map.has(key);
    }

    remove(key) {
        return this.#map.remove(key);
    }

    length() {
        return this.#map.length();
    }

    clear() {
        this.#map.clear();
    }

    keys() {
        return this.#map.keys();
    }

    toString() {
        return `${this.keys()}`;
    }
}

export { HashSet };

function testBasic() {
    const set = new HashSet();
    set.set('name');
    set.set('age');
    set.set('city');
    console.log(set);
    console.log(`${set}`);

    console.log('\n');
    console.log(set.get('name')); // Output: John
    console.log(set.get('age')); // Output: 30
    console.log(set.get('city')); // Output: New York

    console.log('\n');
    console.log(set.remove('age')); // Output: true
    console.log(set.remove('SSS')); // Output: false
    console.log(set.get('age')); // Output: null

    console.log('\n');
    console.log('Keys: ' + set.keys());

    console.log('\n');
    console.log(set.length());
    console.log(set);
    console.log(`${set}`);
    console.log(set.clear());
    console.log(set);
    console.log(`${set}`);
}

// testBasic();

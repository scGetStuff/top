import { Node } from './Node.js';

const CAPACITY = 16;
const LOAD_FACTOR = 0.75;

class HashMap {
    #buckets = [];
    #capacity = CAPACITY;
    #count = 0;

    constructor(capacity = CAPACITY) {
        this.#capacity = capacity;
        this.clear();
    }

    set(key = '', value) {
        this.#grow();

        const hash = this.#hash(key);
        let node = this.#getBucket(hash);

        // new bucket
        if (!node) {
            this.#buckets[hash] = new Node(key, value);
            this.#count++;
            return;
        }

        // update
        let last = undefined;
        do {
            if (node.key === key) {
                node.value = value;
                return;
            }
            last = node;
            node = node.next;
        } while (node);

        // add
        last.next = new Node(key, value);
        this.#count++;
    }

    get(key) {
        const hash = this.#hash(key);
        let node = this.#getBucket(hash);

        while (node) {
            if (node.key === key) {
                return node.value;
            }
            node = node.next;
        }

        return null;
    }

    has(key) {
        return this.get(key) !== null;
    }

    remove(key) {
        const hash = this.#hash(key);
        let node = this.#getBucket(hash);
        if (!node) return false;

        // head
        if (node.key === key) {
            this.#buckets[hash] = node.next;
            this.#count--;
            return true;
        }

        // not head
        while (node.next) {
            let parent = node;
            node = node.next;

            if (node.key === key) {
                parent.next = node.next;
                this.#count--;
                return true;
            }
        }

        return false;
    }

    length() {
        return this.#count;
    }

    clear() {
        this.#buckets = new Array(this.#capacity);
        this.#count = 0;
    }

    keys() {
        return this.#loop((node) => node.key);
    }

    values() {
        return this.#loop((node) => node.value);
    }

    entries() {
        return this.#loop((node) => [node.key, node.value]);
    }

    #loop(fn) {
        const out = [];
        this.#buckets.forEach((node) => {
            while (node) {
                out.push(fn(node));
                node = node.next;
            }
        });

        return out;
    }

    #hash(key = '') {
        let hashCode = 0;

        const prime = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = prime * hashCode + key.charCodeAt(i);
            hashCode = hashCode % this.#capacity;
        }

        return hashCode;
    }

    #getBucket(index) {
        if (index < 0 || index >= this.#buckets.length) {
            throw new Error('Trying to access index out of bound');
        }
        return this.#buckets[index];
    }

    #grow() {
        const percent = this.#count / this.#capacity;
        if (percent < LOAD_FACTOR) return;

        const oldBuckets = this.#buckets;
        this.#capacity *= 2;
        this.clear();

        oldBuckets.forEach((node) => {
            while (node) {
                this.set(node.key, node.value);
                node = node.next;
            }
        });

        // console.log(`GROW : ${this.#buckets}`);
    }

    toString() {
        const out = [];

        this.#buckets.forEach((node) => {
            while (node) {
                out.push(`${node}`);
                node = node.next;
            }
        });

        return `${out}`;
    }
}

export { HashMap };

function testBasic() {
    const map = new HashMap();
    map.set('name', 'John');
    map.set('age', 30);
    map.set('city', 'New York');
    console.log(map);
    console.log(`${map}`);

    console.log('\n');
    console.log(map.get('name')); // Output: John
    console.log(map.get('age')); // Output: 30
    console.log(map.get('city')); // Output: New York

    console.log('\n');
    console.log(map.remove('age')); // Output: true
    console.log(map.remove('SSS')); // Output: false
    console.log(map.get('age')); // Output: null

    console.log('\n');
    console.log('Keys: ' + map.keys());
    console.log('Values: ' + map.values());
    console.log('Entries:');
    const arr = map.entries();
    arr.forEach((x) => console.log('\t' + x));

    console.log('\n');
    console.log(map);
    console.log(`${map}`);
    console.log(map.clear());
    console.log(map);
    console.log(`${map}`);
}

function testLength() {
    const x = new HashMap(2);

    x.set('scott1', 5);
    x.set('scott2', 5);
    x.set('scott3', 5);
    x.set('scott4', 5);
    x.set('scott5', 5);
    x.set('scott6', 5);
    x.set('scott7', 5);
    x.set('scott8', 5);
    x.set('scott9', 5);
    x.set('scott10', 5);
    x.set('scott11', 5);
    x.set('scott12', 5);
    x.set('scott13', 5);
    x.set('scott14', 5);
    x.set('scott15', 5);
    x.set('scott16', 5);
    x.set('scott17', 5);
    x.set('scott18', 5);
    x.set('scott19', 5);

    console.log('\n');
    console.log(x);
    console.log(x.length());
    console.log(`${x}`);
}

// testBasic();
// testLength();

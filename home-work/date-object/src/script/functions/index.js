class Vector {
    #data;
    #capacity;
    #currentSize;
    constructor(capacity = 2) {
        this.#data = [];
        this.#capacity = capacity;
        this.#currentSize = 0;
    };

    size() {
        return this.#currentSize;
    };

    capacity() {
        return this.#capacity;
    };

    isEmpty() {
        if (this.#currentSize === 0) {
            return true;
        };
        return false;
    };

    at(index) {
        if (index < 0 || index >= this.#currentSize) {
            throw new Error("invalid index");
        } else {
            return this.#data[index];
        };

    };

    pushBack(value) {
        if (this.size() + 1 === this.#capacity) {
            this.reallocation();
        };
        this.#data[this.#currentSize] = value;
        this.#currentSize += 1;
    };

    popback() {
        if (this.#currentSize === 0) {
            throw new Error("nothing to pop");
        } else {
            let currentData = this.#data[this.#currentSize - 1];
            this.#data.length = this.#data.length - 1;
            this.#currentSize -= 1;
            return currentData;
        };
    };
    insert(index, value) {
        console.log(this.#data);
        if (index < 0 || index >= this.#currentSize) {
            throw new Error("can add here");
        };
        if (this.#currentSize + 1 === this.#capacity) {
            reallocation();
        };

        for (let i = this.#currentSize; i >= index; i--) {
            let pastData = this.#data[i - 1];
            this.#data[i] = pastData;

            console.log(i, "here", this.#data[i - 1]);
        };

        this.#data[index] = value;
        console.log(this.#data);
    };
    erase(index) {
        for (let i = index; i < this.#currentSize; i++) {
            this.#data[i] = this.#data[i + 1];
        };
        this.#data.length -= 1;

        console.log(this.#data)
    };

    find(value) {
        for (let i = 0; i < this.#currentSize; i++) {
            if (this.#data[i] === value) {
                return i;
            };
        };
        return -1;
    };

    reserve(newCapacity) {
        if (newCapacity > this.#capacity) {
            while (this.#capacity < newCapacity) {
                reallocation(newCapacity);
            };
        };
    };


    reallocation() {
        let newArray = new Array(this.#capacity * 2);

        // this.#data.forEach((value)=>{newArray.push(value)})

        // for (const value of this.#data) {
        //     newArray.push(value)
        // }


        for(let i = 0;  i < this.#data.length; i++){
            newArray[i] = this.#data[i];
        };

        if (this.#currentSize === 0) {
            this.#capacity = 2;
        } else {;
            this.#capacity *= 2;
        };
        this.#data = newArray;
    };


};


let myCustomArray = new Vector();
// myCustomArray.size();
// myCustomArray.capacity();
// myCustomArray.isEmpty();
// myCustomArray.pushBack("baca");
// myCustomArray.pushBack("nani");
// myCustomArray.at(1);
// // myCustomArray.popback()
// myCustomArray.insert(1, "bani");

// console.log(myCustomArray.erase(0))

console.log(myCustomArray.find("bacas"));
let myArray= new Vector();
export default Vector;
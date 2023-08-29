const Node = require("./Node");

class DoubleLinkedList {
    constructor() {
        this.head = new Node(undefined, undefined);
        this.tail = this.head;
    }

    push(value) {
        if (this.head.value == undefined) {
            this.head.value = value;
            this.tail = this.head;

        } else {
            const newTail = new Node(this.tail, value);
            this.tail.next = newTail;
            this.tail = newTail;
        }
        this.tail.next = this.head;
        this.head.prev = this.tail;


        return this.tail;
    }

    pop() {
        if (this.tail !== this.head) {
            const newTail = this.tail.prev;
            newTail.next = undefined;
            this.tail = newTail;
        } else {
            this.emptyList();
        }

        this.tail.next = this.head;

        return this.tail;
    }

    emptyList(){
        this.tail = this.head = new Node(undefined, undefined);
    }

    shift() {
        const length = this.getLength();

        if (length === 1){
            this.emptyList();
        }else if (length === 2){
            this.head = this.tail;
            this.tail.next = this.tail.prev = this.head;
            this.head.next = this.head.prev = this.tail;
        } else if (length > 2){
            this.head = this.head.next;
            this.head.prev = this.tail;
            this.tail.next = this.head;
        }

        return this.head;
    }

    set(index, val) {
        const element = this.getElementAt(index);
        element.value = val;
    }

    insert(index, val) {
        const length = this.getLength();

        if (length === 0 && index === 0) {
            this.push(val);

            return this.head;
        } else if (length === 1) {
            this.tail = this.head;
            this.head = new Node(this.tail, val);
            this.tail.prev = this.tail.next = this.head;
            this.head.next = this.head.prev = this.tail;
        } else if (index >= 0 && index < length) {
            const currentElement = this.getElementAt(index);
            const newElement = new Node(currentElement.prev, val);
            currentElement.prev.next = newElement;
            currentElement.prev = newElement;
            newElement.next = currentElement;
            
            if (index === 0) {
                this.head = newElement;
                this.tail.next = this.head;
            }

            return newElement
        } else {
            console.error("Enter a valid index!")
        }

        return;

    }

    remove(index) {
        const element = this.getElementAt(index);
        
        if (index === 0){
            this.shift();
        }else if (element && element.prev && element.next) {
            const prevElement = element.prev;
            const nextElement = element.next;
            
            element.next.prev = prevElement;
            element.prev.next = nextElement;
            
            if (element === this.tail){
                this.tail = element.prev;
            }

        } else if (element && element.value) {
            element.value = undefined;
        }

        return element;
    }

    getElementAt(index) {
        let counter = 0;
        let indexExists = this.checkIndexExists(index);

        if (!indexExists) {
            return -1;
        }

        let element = this.head;
        while (counter != index && element != undefined) {
            counter++;
            if (element === this.tail) {
                break;
            }

            element = element.next;

        }

        return element;
    }

    checkIndexExists(index) {

        if (index < 0 || index > this.getLength() - 1) {
            return false;
        }

        return true;
    }

    getLength() {
        let counter = 0;
        let element = this.head;

        if (element === this.tail) {
            if (element.value !== undefined) {
                return 1;
            }
            return 0;
        }

        while (element != undefined) {
            counter++;
            if (element === this.tail) {
                break;
            }
            element = element.next;
        }

        return counter;
    }

    getAllElements() {
        let counter = 0;
        let element = this.head;

        if (element == this.tail) {
            if (element.value === undefined) {
                console.log("No elements in the list.")
                return;
            }
        }

        while (element != undefined) {
            console.log(`${counter}. Prev:${element?.prev?.value} , Value: ${element?.value} , Next: ${element?.next?.value}`);

            if (element === this.tail) {
                break;
            }

            element = element.next;
            counter++;
        }
    }
}
module.exports = DoubleLinkedList;
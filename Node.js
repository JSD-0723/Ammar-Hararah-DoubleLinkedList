class Node {
    constructor(prev, value, next = undefined) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

export default Node;
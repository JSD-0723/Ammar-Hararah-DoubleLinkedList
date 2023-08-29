const DoubleLinkedList = require("./DoubleLinkedList.js");
const Test = require("./Test.js");

function main(){
    //Init Double Linked List
    const list = new DoubleLinkedList();
    const testDoubleLinkedList = new Test(list);

    testDoubleLinkedList.runTests();
}

main();
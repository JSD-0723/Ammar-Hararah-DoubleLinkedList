import DoubleLinkedList from "./DoubleLinkedList";
import Test from "./Test";

function main(){
    //Init Double Linked List
    const list = new DoubleLinkedList();
    const testDoubleLinkedList = new Test(list);

    testDoubleLinkedList.runTests();
}

main();
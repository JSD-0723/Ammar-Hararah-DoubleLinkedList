const testContentLength = 10;

class Test{
    constructor(list){
        this.list = list
    }

    runTests(){
        this.testPushFunction(this.list);
        this.testInsert(this.list);
        this.testRemove(this.list);
        this.testSet(this.list);
        this.testShift(this.list);
        this.testPopFunction(this.list);
    }

    testPushFunction(list){
        console.log("*** Adding Elements to List ***")
        for (let i = 0; i < testContentLength - 1 ; i++) {
            list.push(i);
        }
        console.log(list.getAllElements());
        console.log("--- Done Adding Test ---")
    }
    
    testPopFunction(list){
    
    }
    
    testShift(list){
    
    }
    
    testSet(list){
    
    }
    
    testInsert(list){
    
    }
    testRemove(list){
    
    }
    

}


module.exports = Test;
const testContentLength = 10;

class Test{
    constructor(list){
        this.list = list
    }

    runTests(){
        this.list.getAllElements();
        this.testPushFunction();
        this.testInsert();
        this.testRemove();
        this.testSet();
        this.testShift();
        this.testPopFunction();
    }

    testPushFunction(){
        console.log("*** Pushing Elements to List ***");

        this.PopulateList();

        console.log("===== Final List State After Pushing Elements =====");
        console.log(this.list.getAllElements());
        console.log("--- Done Pushing Test ---");
    }
    
    testPopFunction(){
        this.testTemplate("pop","Poping");
    }
    
    testShift(){
        this.PopulateList(10);
        this.testTemplate("shift","Shifting");    
    }
    
    testSet(){
        this.PopulateList();
        this.testTemplate("set","Setting",true);
    }
    
    testInsert(){
        this.PopulateList();
        this.testTemplate("insert","Inserting",true);
    }
    testRemove(){
        this.PopulateList();
        this.testTemplate("remove","Removing",true);
    }

    PopulateList(itemsCount = 10){
        console.log(":::::::::::::::Populating List:::::::::::::: ");
        Array.from(Array(itemsCount).keys()).forEach(item=>{
            console.log(`Pushing new element to list: ${item}`);
            this.list.push(item);
            console.log(`This is the current Double Linked List:`);
            this.list.getAllElements();
            console.log("---END of Current Linked List---");
        });
    }

    testTemplate(funcName,funcDesc,passIndex=false){
        console.log(`*** ${funcDesc} Elements to List ***`);
        let index = undefined;
        let length = this.list.getLength()
        while(length > 0 ){
            console.log(`${funcDesc} element from the list`);
            if (passIndex){
                index = parseInt(Math.random()*this.list.getLength());
                this.list[funcName](index);
            }else{
                this.list[funcName]();
            }
            console.log(`This is the current Double Linked List:`);
            this.list.getAllElements();
            console.log("---END of Current Linked List---");
            length--;
        }
        console.log(`===== Final List State After ${funcDesc} Elements =====`);
        console.log(this.list.getAllElements());
        console.log("--- Done Poping Test ---");
    }
    

}


module.exports = Test;
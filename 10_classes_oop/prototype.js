/*let myName="kamran          "
console.log(myName.truelength);

*/


let myHeros=["kamran","malik"]

let heroPower={
    kamran:"hammer",
    malik:"sling",
    getSpiderPower:function () {
        console.log(`kamran power is ${this.kamran}`);
    }
}

Object.prototype.affan=function () {
    console.log(`affan is present in all objects`);
}
heroPower.affan()

myHeros.affan()

Array.prototype.farhan=function () {
    console.log(`Farhan says hello`);
    
}
// heroPower.farhan()
myHeros.farhan()
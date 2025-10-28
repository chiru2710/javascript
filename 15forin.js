let cat={
    rent:3000,
    recharge:300,
    petrol:1000,
    food:10000
}
let total=0
for(key in cat){
    total+=cat[key]
}
console.log(total)
//for of
// for of only iterate the arrays only if we need to
//iterate the objects we need to use the object methods
let str="chiru";
for(value of str){
    console.log(value)
}
let ages=[20,30,40,50];
let newArray=[]
for(age of ages){
    if(age>30){
        newArray.push(age)
    }
}
console.log(newArray)
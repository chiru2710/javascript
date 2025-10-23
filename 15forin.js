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
let chiru = [1,2,3,4,5,6,7,8,9];

function india(element, index, array) {
    console.log(element);
}

chiru.forEach(india);

//map
fetch("https://dummyjson.com/quotes")
  .then(res => res.json())
  .then(data => {
    let quotesArray = data.quotes;

    let op = quotesArray.map((ele) => {
      return ele.quote;
    });

    console.log(op);
  })

  // filter
  fetch("https://dummyjson.com/quotes")
  .then(res => res.json())
  .then(data => {
    let quotesArray = data.quotes;

    let filtered = quotesArray.filter((ele) => {
      return ele.quote.toLowerCase().includes("life");
    });

    let op = filtered.map((ele) => ele.quote);

    console.log(op);
  })

  //reduce(callback)
      //callback-acc,ele,index,array
      //will give the single value
    let arr=[1,2,3,4,5];
    let getOut=arr.reduce(
      (acc,ele,index,arr)=>{
        return acc+ele
      },2
    )
    console.log(getOut)
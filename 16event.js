// //Mouse events
// let mouse=document.getElementById('mouse')
// let h1=document.getElementById('h1')
// mouse.addEventListener('mousedown',()=>
// {
//     mouse.innerHTML='Mouse down'
//    h1.textContent='Mouse Down'
//    h1.style.color="green" 
// })

// mouse.addEventListener('mouseup',()=>
// {
//     mouse.innerHTML='Mouse up'
//     h1.textContent='Mouse up'
//    h1.style.color="red"
// })
// mouse.addEventListener('mouseover',()=>
// {
//     mouse.style.color="black"
//     mouse.style.backgroundColor="yellow"
// })

// form Event
let form=document.getElementById('form');
let sub=document.getElementById('subject');
let text=document.getElementById('text');
let box=document.getElementById('con');

form.addEventListener('submit',(e)=>
{
    e.preventDefault()
    console.log(text.value)
})
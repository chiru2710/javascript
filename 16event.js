let mouse=document.getElementById('mouse')
let h1=document.getElementById('h1')
mouse.addEventListener('mousedown',()=>
{
    mouse.innerHTML='Mouse down'
   h1.textContent='Mouse Down'
   h1.style.color="green" 
})

mouse.addEventListener('mouseup',()=>
{
    mouse.innerHTML='Mouse up'
    h1.textContent='Mouse up'
   h1.style.color="red"
})
mouse,addEventListener('mouseover',()=>
{
    mouse.style.color="black"
    mouse.style.backgroundColor="yellow"
})
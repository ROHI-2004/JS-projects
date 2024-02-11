const plus = document.getElementById('incre')
const clear = document.getElementById('cl')
const p1 = document.querySelector('.box')
const p2 = document.querySelector('.count')
let c=1
let left = 0
let interval
let movement
function increment()
{
    c++
    p2.textContent=c
}
let f=0;
function move()
{
    if(f==0)
    {
        left++
    }
    if(f==1)
    {
        left--
    }
    if(left==0)
    {
        f=0
    }
    if(left==1400)
    {
        f=1
    }
    p1.style.left = left +'px'
}
plus.addEventListener('click',()=>
{
    interval = setInterval(increment,10)
    movement = setInterval(move,10)
})
clear.addEventListener('click',()=>
{
    clearInterval(interval)
    clearInterval(movement)
})
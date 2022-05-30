var like=document.querySelectorAll('.glyphicon')
console.log(like)
like.forEach(el=>{
    el.addEventListener('click',()=>{
        console.log(el.glyphicon)
        el.classList.toggle('like');
    })
})

var cl=document.querySelectorAll('.btn-close')
console.log(cl)
cl.forEach(parentnode=>{
    parentnode.addEventListener('click',()=>{
        console.log('remove')
        parentnode.parentElement.remove();
    })
})
var total=document.querySelector('.totalprice')

var plus=document.querySelectorAll('.plus')
console.log(plus)
plus.forEach(el=>{
    el.addEventListener('click',()=>{
        console.log(el.nextElementSibling)
        el.nextElementSibling.innerHTML++
        // parseInt(el.previousElementSibling.previousElementSibling.innerHTM)
        total.innerHTML=parseInt(total.innerHTML)+parseInt(el.previousElementSibling.previousElementSibling.innerHTML)
        console.log(el.previousElementSibling.previousElementSibling.innerHTML)
    })
})
var minus=document.querySelectorAll('.minus')
console.log(minus)
minus.forEach(el=>{
    el.addEventListener('click',()=>{
        console.log(el.previousElementSibling.innerHTML)
          if(el.previousElementSibling.innerHTML>0) { el.previousElementSibling.innerHTML--};   
          total.innerHTML=parseInt(total.innerHTML)-parseInt(el.previousElementSibling.innerHTML)
          console.log(el.previousElementSibling.innerHTML)
        
    })
})

var totalprice=document.querySelectorAll('.TP')
totalprice.forEach(el=>{
    el.addEventListener('click',()=>{
        Math: Quantity * TP
        el.addEventListener.innerHTML++
    })
})
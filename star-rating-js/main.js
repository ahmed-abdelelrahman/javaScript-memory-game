const stars = document.querySelectorAll('.material-icons'),
    output=document.querySelector('.output')


stars.forEach(star=>{
    star.addEventListener('click',(e)=>{
        output.innerHTML = `<p> your rating is ${e.target.dataset.star} star</p>` 
    })
})
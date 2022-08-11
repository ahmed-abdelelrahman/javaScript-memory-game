export default  function removeActive(itmes){
    itmes.forEach(item=>{
        item.classList.remove("active")
    })
}
import removeActive from "./removeActive.js"
const image=document.querySelector(".user-img")
const value=document.querySelector(".user-value")
const title=document.querySelector(".user-title")
const btns=[...document.querySelectorAll(".icon")]

console.log(btns)
const displayUsers=(person=>{
    image.src=person.image
    value.textContent = person.name;
    title.textContent = `My name is`;
    removeActive(btns);
    btns[0].classList.remove('active');
    
    btns.forEach((btn)=>{
        let label=btn.dataset.label   
        btn.addEventListener('click',()=>{
         
        title.textContent=` my label${label}is`;
        value.textContent=person[label];}

        )
    
    removeActive(btns);
      btn.classList.add('active');
  })
})
export default displayUsers

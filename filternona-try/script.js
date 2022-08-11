const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let list=[]

searchInput.addEventListener('input',(e)=>{
    const value=e.target.value
    list.map(user=>{
        const isvisible=
        user.email.includes(value)
        user.element.classList.toggle("hide",isvisible)

    })
})

fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(data=>{
    list=data.map(user=>{
    const card=userCardTemplate.content.cloneNode(true).children[0]
    const header = card.querySelector("[data-header]")
    const body = card.querySelector("[data-body]")
    header.textContent=user.name
    body.textContent=user.email
    userCardContainer.append(card)
    return{fname:user.name,email:user.email,element:card}
})
})
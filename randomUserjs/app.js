import fetchUsers from './utils/fetchUsers.js'
import displayUsers from './utils/displayUsers.js'
const randombtn=document.querySelector(".btn")

const init=async()=>{
    const persons=await fetchUsers()
    displayUsers(persons)
    
    
}
randombtn.addEventListener('click',init)

window.addEventListener('DOMContentLoaded',init)

const userTemplate = document.getElementById('temp') 
const userContainer = document.getElementById('cardC')
const search = document.getElementById('searchbox')
let usersInfo = [];

search.addEventListener('input', e=>{
  let value = e.target.value.toLowerCase();
  usersInfo.forEach(user=>{
const isVisible= 
user.name.toLowerCase().includes(value) || 
user.email.toLowerCase().includes(value);
console.log(user.name);
  user.element.classList.toggle("hide", !isVisible)
  }) 
  
  
})

//https://jsonplaceholder.typicode.com/users/

fetch('https://jsonplaceholder.typicode.com/users/')
.then(res =>{return res.json()})
.then(data =>{
   usersInfo = data.map(user =>{
  const card = userTemplate.content.cloneNode(true).children[0]
  const header = card.querySelector('#head')
  const mail = card.querySelector('#mail')
  header.textContent = user.name
  mail.textContent = user.email
  userContainer.append(card)
 return {name: user.name, email: user.email, element: card}
  })
  
})
.catch(error=>{
  console.log("ErrorFound");
  
})
console.log(usersInfo);
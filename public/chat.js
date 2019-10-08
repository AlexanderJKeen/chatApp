const socket = io()
const hi = document.getElementById('hi')
const form = document.getElementById('form')
const forminput = document.getElementById('input')
const hiya = document.getElementById('hiya')
const messageList = document.getElementById("messages")

// form.addEventListener('click', e => {
//     e.preventDefault()
//     console.log(forminput.value)
//     form.reset()
// })
hiya.addEventListener('click', e =>{
    e.preventDefault()
    socket.emit("sendMessage", forminput.value);
    form.reset()
})

socket.on('message', param => {
    messageList.innerHTML += `<li class="mo">${param}</li>`
})
/*jshint esversion: 6 */
let socket = io();
let form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    let input = document.querySelector('#message');
    let text = input.value;
    socket.emit('message', text);
    input.value = '';
});

socket.on('message', function(text) {
    if(!text) {
        return;
    }

    let container = document.querySelector('section');
    let newMessage = document.createElement('p');
    newMessage.innerHTML = text;
    container.appendChild(newMessage);

    let separator = document.querySelector('br');
    container.appendChild(separator);

    container.scrollTop = container.scrollHeight;
});
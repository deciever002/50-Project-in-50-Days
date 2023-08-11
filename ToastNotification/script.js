const toasts = document.getElementById('toasts');
const button = document.getElementById('button');

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four'
];

const types = ['info','success','danger'];

button.addEventListener('click',() => createNotification());

function createNotification(message = null, type = null){
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.classList.add(type ? type : getRandomType());


    notif.innerText = message ? message : getRandomMessage();

    toasts.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 1000);
}

function getRandomMessage(){
    return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType(){
    return types[Math.floor(Math.random() * types.length)];
}
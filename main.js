var tfaker = require('./tfaker');

window.tfaker = tfaker;

document.getElementById('the-button').addEventListener('click', tfaker.fullName());
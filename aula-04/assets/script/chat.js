let i = 1;

document.getElementById('send').addEventListener('click', () => {
    const message = document.getElementById('send-input').value;
    const messageDiv = document.getElementById(`message-${i}`);
    
    messageDiv.innerText = message;

    i++;
});
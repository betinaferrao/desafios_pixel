function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;
    const chatBox = document.getElementById('chat-box');

    if (message.trim() !== '') {
        const currentTime = new Date().toLocaleTimeString(); 

        const newMessage = document.createElement('div');
        newMessage.classList.add('message', 'sent');

        const timeSpan = document.createElement('span');
        timeSpan.classList.add('time');
        timeSpan.textContent = `Você - ${currentTime}`;

        const contentSpan = document.createElement('span');
        contentSpan.classList.add('content');
        contentSpan.textContent = message;  

        newMessage.appendChild(timeSpan);
        newMessage.appendChild(contentSpan);

        chatBox.appendChild(newMessage);
        messageInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('chatForm');
    const inputField = document.getElementById('messageInput');
    const messagesList = document.getElementById('messagesList');
 
    // Обработка отправки формы
    form.addEventListener('submit', event => {
        event.preventDefault();
 
        const userMessage = inputField.value.trim();
        if (userMessage !== '') {
            appendMessage(userMessage, true); // Добавляем сообщение пользователя
            inputField.value = ''; // Очищаем поле ввода
        }
    });
 
    // Добавление сообщения в окно чата
    function appendMessage(text, isUser) {
        const div = document.createElement('div');
        div.className = `message-bubble ${isUser ? 'user-message' : 'bot-message'}`;
        div.textContent = text;
        messagesList.appendChild(div);
 
        // Прокручиваем окно до последнего сообщения
        messagesList.scrollTop = messagesList.scrollHeight;
    }
});
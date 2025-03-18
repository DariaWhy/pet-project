let submitButton = document.getElementById('submit-button');

function sendData() {
    let emailField = document.getElementById('email-contact-form');
    let phoneField = document.getElementById('phone-number-form');
    let messageField = document.getElementById('message-contact-form');

    if (!emailField.value || !phoneField.value || !messageField.value) {
        showWarning(emailField, "Please enter your email.");
        showWarning(phoneField, "Please enter your phone number.");
        showWarning(messageField, "Please enter your message.");
        return; 
    }

    let messageData = {
        userEmail: emailField.value,
        userNumber: phoneField.value,
        textToSend: messageField.value,
    };

    localStorage.setItem('formData', JSON.stringify(messageData));

    document.cookie = `userEmail=${messageData.userEmail}; max-age=604800; path=/`;
    document.cookie = `userNumber=${messageData.userNumber}; max-age=604800; path=/`;
    document.cookie = `textToSend=${messageData.textToSend}; max-age=604800; path=/`;

    async function fetchSend() {
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(messageData),
            })   
            let data = response.json();
            console.log('Успешно:', data);
            emailField.value = '';
            phoneField.value = '';
            messageField.value = '';

            document.querySelectorAll('.warning').forEach(warning => warning.remove());
        } catch (error) { 
            console.error('Ошибка:', error);
        }
    }
    fetchSend();
};

function showWarning(inputElement, message) {
    const parent = inputElement.parentNode;
    let warning = parent.querySelector('.warning');
    
    if (!inputElement.value) {
        warning = document.createElement('p'); 
        warning.className = 'warning'; 
        warning.textContent = message;
        warning.style.color = 'red';
        warning.style.fontSize = '0.8rem';
        warning.style.marginTop = '5px';
        parent.appendChild(warning);
    } else {
        if (warning) {
            warning.remove(); 
        }
    }
}

submitButton.addEventListener('click', sendData);


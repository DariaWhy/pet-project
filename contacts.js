let submitButton = document.getElementById('submit-button');

function showWarning(inputElement, message) {
    const parent = inputElement.parentNode;
    let warning = parent.querySelector('.warning');
    
    if (!warning) {
        warning = document.createElement('p');
        warning.className = 'warning';
        warning.textContent = message;
        warning.style.color = 'red';
        warning.style.fontSize = '0.8rem';
        warning.style.marginTop = '5px';
        parent.appendChild(warning);
    } else {
        warning.textContent = message;
    }
}

function removeWarning(inputElement) {
    const parent = inputElement.parentNode;
    let warning = parent.querySelector('.warning');
    if (warning) {
        warning.remove();
    }
}

async function sendData(e) {
    e.preventDefault(); 

    let emailField = document.getElementById('email-contact-form');
    let phoneField = document.getElementById('phone-number-form');
    let messageField = document.getElementById('message-contact-form');
    let hasErrors = false;

    
    const fieldsToValidate = [
        { element: emailField, message: "Please enter your email." },
        { element: phoneField, message: "Please enter your phone number." },
        { element: messageField, message: "Please enter your message." }
    ];
    
    fieldsToValidate.forEach(({ element, message }) => {
        if (!element.value.trim()) {
            showWarning(element, message);
            hasErrors = true;
        } else {
            removeWarning(element);
        }
    });

    if (hasErrors) return;

    const messageData = {
        userEmail: emailField.value.trim(),
        userNumber: phoneField.value.trim(),
        textToSend: messageField.value.trim(),
    };

    localStorage.setItem('formData', JSON.stringify(messageData));

    const cookieSettings = '; max-age=604800; path=/';
    document.cookie = `userEmail=${messageData.userEmail}${cookieSettings}`;
    document.cookie = `userNumber=${messageData.userNumber}${cookieSettings}`;
    document.cookie = `textToSend=${messageData.textToSend}${cookieSettings}`;

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(messageData),
        });
        
        const data = await response.json();
        console.log('Успешно:', data);

        emailField.value = '';
        phoneField.value = '';
        messageField.value = '';

        document.querySelectorAll('.warning').forEach(warning => warning.remove());

    } catch (error) {
        console.error('Ошибка:', error);
        showWarning(messageField, "Error sending message. Please try again.");
    }
}

submitButton.addEventListener('click', sendData);


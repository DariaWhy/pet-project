window.onload = function() {
    const overlay = document.getElementById('overlay');
    const modal = document.getElementById('modal');
    const closeButton = document.getElementById('modal_button');
    const submitButton = document.getElementById('submit_button');
    const inputEmail = document.getElementById('modal_email');

    if (!overlay || !modal || !closeButton) {
        console.error("Ошибка: не найден один из элементов модального окна.");
        return;
    };

    function closeModal() {
        overlay.style.display = 'none';
        modal.style.display = 'none';
        localStorage.setItem('modalClosed', 'true');
    };

    closeButton.addEventListener('click', closeModal);

    submitButton.addEventListener('click', function() {
        if (inputEmail.value.trim() !== "") { 
            const days = 30;
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    
            document.cookie = `user_email=${inputEmail.value}; expires=${date.toUTCString()}; path=/;`;
            console.log("Cookie сохранены:", document.cookie);
    
            closeModal();
        } else {
            const referenceElement = document.getElementById('modal_email'); 
            const parent = referenceElement.parentNode; 

            if (!document.getElementById('email-warning')) {
                const newEl = document.createElement('p');
                newEl.id = 'email-warning'; 
                newEl.textContent = "Please add your email to get discount";
                newEl.style.textAlign = 'center';
                newEl.style.color = 'red';
                newEl.style.fontSize = '0.7rem';

                parent.insertBefore(newEl, referenceElement);
            }
        }
    });

    if (localStorage.getItem('modalClosed') !== 'true') {
        setTimeout(() => {
            console.log("Открываем модальное окно");
            modal.style.display = "block";
            overlay.style.display = "block";
        }, 2000);
    };
};
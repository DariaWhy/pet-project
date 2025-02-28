window.onload = function () {
    document.cookie = "username=John Doe; path=/";
    console.log("Все cookie:", document.cookie);

    const containers = document.querySelectorAll('.suit-class');
    
    document.addEventListener("DOMContentLoaded", function () {
        const containers = document.querySelectorAll('.suit-class');
        if (containers.length === 0) return;
    });
    
    containers.forEach((container, index) => {
        const images = [
            ['./sr1.jpg', './sr2.jpg'], 
            ['./ob1.jpg', './ob2.jpg'], 
            ['./pr1.jpg', './pr2.jpg']
        ];

        let currentIndex = 0;
        const slider = container.querySelector(`#suit-image-slider-${index + 1}`);
        const prevBtn = container.querySelector(`#prevBtn-${index + 1}`);
        const nextBtn = container.querySelector(`#nextBtn-${index + 1}`);

       
        prevBtn.addEventListener('click', () => {
            currentIndex--;
            if (currentIndex < 0) currentIndex = images[index].length - 1;
            slider.src = images[index][currentIndex];
        });

        nextBtn.addEventListener('click', () => {
            currentIndex++;
            if (currentIndex >= images[index].length) currentIndex = 0;
            slider.src = images[index][currentIndex];
        });
    });

    const overlay = document.getElementById('overlay');
    const modal = document.getElementById('modal');
    const closeButton = document.getElementById('modal_button');
    const submitButton = document.getElementById('submit_button');
    const inputEmail = document.getElementById('modal_email');

    if (!overlay || !modal || !closeButton) {
        console.error("Ошибка: не найден один из элементов модального окна.");
        return;
    }

    function closeModal() {
        overlay.style.display = 'none';
        modal.style.display = 'none';
        localStorage.setItem('modalClosed', 'true');
    }

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
            const parent = referenceElement.parentNode; // Получаем родителя input
            const newEl = document.createElement('p');
            newEl.textContent = "Пожалуйста, добавьте email";
            newEl.style.textAlign = 'center';
            newEl.style.color = 'red';
            newEl.style.fontSize = '0.7rem';
            parent.insertBefore(newEl, referenceElement);
        }
    });

    if (localStorage.getItem('modalClosed') !== 'true') {
        setTimeout(() => {
            console.log("Открываем модальное окно");
            modal.style.display = "block";
            overlay.style.display = "block";
        }, 2000);
    }
};

   

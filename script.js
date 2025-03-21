window.onload = function () {
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


    const buttons = document.querySelectorAll('.rooms-buttons');
    const rooms = document.querySelectorAll('.suit-class');

    rooms.forEach((room, index) => {
        if (index !== 0) room.style.display = 'none';
      });
      
      buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
          rooms.forEach(room => (room.style.display = 'none'));
          rooms[index].style.display = 'flex';
          buttons.forEach(btn => btn.classList.remove('active-button'));
          button.classList.add('active-button');
        });
    });

};

   

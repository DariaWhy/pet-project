window.onload = function () {
    const containers = document.querySelectorAll('.suit-class');
    
    containers.forEach((container, index) => {
        const images = [
            ['./sr1.jpg', './sr2.jpg'], 
            ['./ob1.jpg', './ob2.jpg'], 
            ['./pr1.jpg', './pr2.jpg'], 
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
};

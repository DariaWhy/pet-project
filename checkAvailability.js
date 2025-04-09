const dateInput = document.getElementById('booking-date');
const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');

const minDate = `${year}-${month}-${day}`;
dateInput.min = minDate;

document.getElementById('checkAvailability').addEventListener('click', (event) => {
    event.preventDefault();

    const form = document.getElementById('booking-form');

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    let checkIn = document.getElementById('booking-date').value;
    let days = document.getElementById('booking-days').value;
    let guests = document.getElementById('booking-guests').value;

    const bookingData = {
        checkInDate: checkIn,
        days: parseInt(days),
        guests: parseInt(guests)
    };

    // Сохраняем данные о бронировании в localStorage
    localStorage.setItem('booking', JSON.stringify(bookingData));

    // Перенаправляем на страницу с номерами
    window.location.href = 'booking-room.html';
});


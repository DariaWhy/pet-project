// booking-details.js
import { createRoomCard } from './room-card.js';

document.addEventListener('DOMContentLoaded', async () => {
    const bookingData = JSON.parse(localStorage.getItem('booking')) || {};
    const urlParams = new URLSearchParams(window.location.search);
    const container = document.getElementById('total-details');

    /*if (!bookingData.selectedRoom) {
        const roomId = urlParams.get('room');
        if (roomId) {
            bookingData.selectedRoom = roomId;
            localStorage.setItem('booking', JSON.stringify(bookingData));
        } else {
            window.location.href = 'booking-room.html';
            return;
        }
    }*/

    try {
        const response = await fetch('rooms.json');
        const data = await response.json();
        const room = data.rooms.find(r => r.id === bookingData.selectedRoom);

        if (!room) {
            throw new Error('Room not found');
        }

        const card = createRoomCard(room);
        card.classList.add('detailed-view');
        card.removeAttribute('href');

        const priceContainer = document.createElement('div');
        priceContainer.className = 'price-summary';
        
        const totalPrice = room.price * bookingData.days;
        priceContainer.innerHTML = `
            <h3>Price Details</h3>
            <p>Price per night: $${room.price}</p>
            <p>Number of nights: ${bookingData.days}</p>
            <hr>
            <p class="total-price">Total: $${totalPrice}</p>
        `;

        container.innerHTML = '';
        container.appendChild(card);
        container.appendChild(priceContainer);

    } catch (error) {
        console.error('Error:', error);
        container.innerHTML = `<p class="error">Error loading room details: ${error.message}</p>`;
    }
});
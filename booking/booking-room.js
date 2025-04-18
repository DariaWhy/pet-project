import { createRoomCard } from './room-card.js';

document.addEventListener('DOMContentLoaded', async () => {
    const bookingData = JSON.parse(localStorage.getItem('booking'));

    try {
        const response = await fetch('rooms.json');
        const data = await response.json();
       
        const availableRooms = data.rooms.filter(room => 
            room.available && 
            room.maxGuests >= bookingData.guests
        );

        renderRooms(availableRooms);
    } catch (error) {
        console.error('Error loading rooms:', error);
    }
    
    function renderRooms(rooms) {
        const container = document.querySelector('.rooms-options');
        container.innerHTML = '';
        
        rooms.forEach(room => {
            const card = createRoomCard(room);

            card.addEventListener('click', (e) => {
                e.preventDefault(); 

                const bookingData = JSON.parse(localStorage.getItem('booking')) || {};
                bookingData.selectedRoom = room.id;
                localStorage.setItem('booking', JSON.stringify(bookingData));

                window.location.href = card.href;
            });
            
            container.appendChild(card);
        });
    }
});




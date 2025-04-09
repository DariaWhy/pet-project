
export function createRoomCard(room) {
    const card = document.createElement('a');
    card.className = 'room-option';
    card.href = `booking-details.html?room=${room.id}`;
    card.id = room.id;
    
    card.innerHTML = `
        <img src="${room.picture}" alt="${room.name}">
        <h2>${room.name}</h2>
        <p><b>Beds:</b> ${room.beds}</p>
        <p>${room.description}</p>
        <ul>
            ${room.features.map(feature => `
                <li>${feature}</li>
            `).join('')}
            <li>Price: $${room.price} per night</li>
        </ul>
    `;
    
    return card;
}
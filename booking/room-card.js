export function createRoomCard(room, options = {}) {
    const card = document.createElement(options.tagName || 'a');
    card.className = 'room-option' + (options.detailed ? ' detailed-view' : '');
    
    if (!options.detailed) {
        card.href = `booking-details.html?room=${room.id}`;
    }

    card.innerHTML = `
        <img src="${room.picture}" alt="${room.name}">
        <h2>${room.name}</h2>
        <p><b>Beds:</b> ${room.beds}</p>
        <p>${room.description}</p>
        <ul>
            ${room.features.map(feature => `
                <li>${feature}</li>
            `).join('')}
            ${options.detailed ? '' : `<li>Price: $${room.price} per night</li>`}
        </ul>
    `;
    
    return card;
}
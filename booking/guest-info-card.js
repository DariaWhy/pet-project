export function createGuestForms(guestsCount, options = {}) {
    const container = document.createElement('div');
    container.className = options.containerClass || 'guest-forms-container';

    const mainForm = document.createElement('div');
    mainForm.className = 'guest-input-form';
    mainForm.innerHTML = `
        <h2>Guest Information</h2>
        <div class="guest-input-data">
            <input type="text" id="guest-first-name-1" 
                   placeholder="First Name"required>
            <input type="text" id="guest-last-name-1" 
                   placeholder="Last Name" required>
            <input type="tel" 
                   id="guest-tel-number-1" placeholder="+xxxxxxxxxxx"
                   pattern="^\+[0-9]{11,14}$" required>
            <input type="email" 
                   id="guest-email-1" placeholder="example@gmail.com"required>
            <input type="text" id="guest-country-1" 
                   placeholder="Country" required>
            <input type="text" id="guest-address-1" placeholder="Address"
                   required>
        </div>
    `;

    container.appendChild(mainForm);

    for(let i = 2; i <= guestsCount; i++) {
        const form = document.createElement('div');
        form.className = 'additional-guest-form';
        form.innerHTML = `
            <h4>Guest ${i}</h4>
            <div class="guest-input-data">
                <input type="text" 
                       id="guest-first-name-${i}" placeholder="First Name"
                       ${i > 1 ? 'required' : ''}>
                <input type="text" 
                       id="guest-last-name-${i}" placeholder="Last Name"
                       ${i > 1 ? 'required' : ''}>
            </div>
        `;
        container.appendChild(form);
    }

    return container;
}
export class Guest {
    constructor(name, ID, telNumber, birthDate, details){
        this.name = name;
        this.ID = ID;
        this.telNumber = telNumber;
        this.birthDate = birthDate;
        this.details = details;
        this.bookings = [];
    }
    introduce() {
        console.log(`${this.name}, ${this.ID}, ${this.telNumber}`);
    }
    addBooking(booking) {
        this.bookings.push(booking);
    }
    getBooking() {
        return this.bookings;
    }
}
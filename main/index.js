import {Guest} from "./guest.js"
import {Rooms} from "./rooms.js"
import {Booking} from "./booking.js"

const guest1 = new Guest('John', '01', '1234567', '01.01.1999');
const room = new Rooms(15, 'One bedroom Suit', 200, true);
const booking = new Booking(guest1.ID, room.roomNum, 3, 2);

guest1.addBooking(booking);
room.markedAsBooked();

console.log(guest1.getBooking(), guest1.introduce());

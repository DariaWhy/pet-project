export class Rooms {
    constructor(roomNum, category, price, isAvailable){
        this.roomNum = roomNum;
        this.category = category;
        this.price = price;
        this.isAvailable = isAvailable;
    }
    markedAsAvailable() {
        this.isAvailable = true;
    }
    markedAsBooked() {
        this.isAvailable = false;
    }
}
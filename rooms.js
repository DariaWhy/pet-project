export class Rooms {
    constructor(roomNum, category, price, isAvailable) {
        this.roomNum = roomNum;
        this.category = category;
        this.price = price;
        this.isAvailable = isAvailable;
    }
    availabilitySwitch() {
        if (!this.isAvailable) {
            this.isAvailable
        } else {
            this.isAvailable == true
        }
    }
    markAsBooked() {
        this.isAvailable = false;
    }
}
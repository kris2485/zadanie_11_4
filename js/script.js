// scripts.js
function Phone(name, brand, price, color) {
	this.name = name;
  	this.brand = brand;
	this.price = price;
	this.color = color;
}
Phone.prototype.printInfo = function() {
		console.log("Name of the phone is " + this.name + ", the phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + " zł");
	}
var SamsungGalaxyS6 = new Phone("Samsung Galaxy S6", "Samsung", 1600, "black");
SamsungGalaxyS6.printInfo();

var iPhone6S = new Phone("iPhone 6S", "Apple", 2198, "silver");
iPhone6S.printInfo();

var OnePlusOne = new Phone("OnePlus One", "OnePlus", 1300, "black");
OnePlusOne.printInfo();
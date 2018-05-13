var hotel = {
  hotelName: "Reddison;",
  stars: "5;",
  parking: "include;"
};

var Name = document.getElementById("hotel-name");
Name.textContent = hotel.hotelName;

var Stars = document.getElementById("stars");
Stars.textContent = hotel.stars;

var Parking = document.getElementById("parking");
Parking.textContent = hotel.parking;
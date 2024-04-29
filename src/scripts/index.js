import "../styles/main.css";

// Fungsi untuk memuat data JSON menggunakan fetch
function loadJSON(callback) {
  fetch('data/DATA.json')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          callback(data);
      })
      .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
      });
}

// Fungsi untuk menampilkan daftar restoran
function displayRestaurants(restaurants) {
  var restaurantList = document.getElementById('restaurant-list');
  restaurantList.innerHTML = '';

  restaurants.forEach(function (restaurant) {
      var restaurantCard = document.createElement('div');
      restaurantCard.classList.add('card');

      var image = document.createElement('img');
      image.src = restaurant.image;
      image.alt = restaurant.name;
      restaurantCard.appendChild(image);

      var name = document.createElement('h2');
      name.textContent = restaurant.name;
      restaurantCard.appendChild(name);

      var description = document.createElement('p');
      description.textContent = restaurant.description;
      restaurantCard.appendChild(description);

      restaurantList.appendChild(restaurantCard);
  });
}

// Memuat data JSON dan menampilkan restoran
loadJSON(displayRestaurants);

function fetchUsers() {
  fetch("https://randomuser.me/api/?results=5") 
    .then((response) => response.json())
    .then((data) => {
      const users = data.results;
      const userList = document.getElementById("user-list");
      userList.innerHTML = ""; 

      users.forEach((user) => {
        const { picture, name, location } = user;
        const userCard = document.createElement("div");
        userCard.classList.add("user-card");

        userCard.innerHTML = `
                    <img src="${picture.large}" alt="User Picture">
                    <div class="user-info">
                        <p><strong>Name:</strong> ${name.first} ${name.last}</p>
                        <p><strong>City:</strong> ${location.city}</p>
                        <p><strong>Country:</strong> ${location.country}</p>
                        <p><strong>Postcode:</strong> ${location.postcode}</p>
                    </div>
                `;

        userList.appendChild(userCard);
      });

      const status = document.getElementById("status");
      status.innerText = "Success!";
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
      const status = document.getElementById("status");
      status.innerText = "Failed to load users.";
      status.style.color = "red";
    });
}

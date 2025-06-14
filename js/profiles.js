const users = [
  {
    name: "Aisha",
    age: 24,
    location: "Nairobi",
    bio: "Love hiking and reading poetry.",
    image: "images/user1.jpg"
  },
  {
    name: "Kevin",
    age: 28,
    location: "Mombasa",
    bio: "Tech enthusiast and sunset lover.",
    image: "images/user2.jpg"
  },
  {
    name: "Joy",
    age: 22,
    location: "Kisumu",
    bio: "Spontaneous and love deep talks.",
    image: "images/user3.jpg"
  }
];

const container = document.getElementById("profile-container");

users.forEach(user => {
  const card = document.createElement("div");
  card.className = "profile-card";

  card.innerHTML = `
    <img src="${user.image}" alt="${user.name}">
    <div class="info">
      <h3>${user.name}, ${user.age}</h3>
      <p><strong>${user.location}</strong></p>
      <p>${user.bio}</p>
    </div>
    <div class="actions">
      <button class="like">❤️ Like</button>
      <button class="skip">❌ Skip</button>
    </div>
  `;

  // Add event listeners
  card.querySelector(".like").addEventListener("click", () => {
    alert(`You liked ${user.name}!`);
    card.remove();
  });

  card.querySelector(".skip").addEventListener("click", () => {
    card.remove();
  });

  container.appendChild(card);
});
card.querySelector(".like").addEventListener("click", () => {
  showMatchPopup(); // show match popup
  card.remove();    // remove the card after match
});
function showMatchPopup() {
  // Show popup
  document.getElementById("match-popup").classList.remove("hidden");

  // Play match sound
  const audio = new Audio("sounds/match.mp3");
  audio.play();

  // Drop hearts
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = `${Math.random() * 100}%`;
    heart.innerHTML = "❤️";

    document.body.appendChild(heart);

    // Remove heart after animation
    setTimeout(() => heart.remove(), 2000);
  }
}


function closeMatch() {
  document.getElementById("match-popup").classList.add("hidden");
}

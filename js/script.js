// Handle the matchmaking form
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload

    const age = document.getElementById("age").value;
    const interest = document.getElementById("interest").value;
    const location = document.getElementById("location").value;

    // Simulated match result (you can later connect to a real DB)
    const match = {
      name: "Alex",
      age: 26,
      interest: interest,
      location: location,
      bio: "Loves long walks, music, and late-night conversations."
    };

    const resultHTML = `
      <div class="match-card">
        <h3>Your Match: ${match.name}</h3>
        <p>Age: ${match.age}</p>
        <p>Interest: ${match.interest}</p>
        <p>Location: ${match.location}</p>
        <p>${match.bio}</p>
      </div>
    `;

    document.getElementById("match-result").innerHTML = resultHTML;
  });
});

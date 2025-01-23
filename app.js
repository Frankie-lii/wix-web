// Navigation Functionality
function showSection(sectionId) {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
        section.style.display = "none"; // Hide all sections
    });
    document.getElementById(sectionId).style.display = "block"; // Show selected section
}

// Initialize by showing the home section
document.addEventListener("DOMContentLoaded", () => {
    showSection("home");
});

// Leaderboard Data
const leaderboard = [
    { rank: 1, profile: "images/profile1.jpg", name: "Alice Johnson", points: 2500 },
    { rank: 2, profile: "images/profile2.jpg", name: "Bob Smith", points: 2400 },
    { rank: 3, profile: "images/profile3.jpg", name: "Carol Williams", points: 2300 },
    { rank: 4, profile: "images/profile4.jpg", name: "David Brown", points: 2200 },
    { rank: 5, profile: "images/profile5.jpg", name: "Emma Davis", points: 2100 },
    { rank: 6, profile: "images/profile6.jpg", name: "Frank Miller", points: 2000 },
    { rank: 7, profile: "images/profile7.jpg", name: "Grace Lee", points: 1900 },
    { rank: 8, profile: "images/profile8.jpg", name: "Hannah White", points: 1800 },
    { rank: 9, profile: "images/profile9.jpg", name: "Ian Green", points: 1700 },
    { rank: 10, profile: "images/profile10.jpg", name: "Jack Black", points: 1600 },

];

// Populate Leaderboard Table
const leaderboardTable = document.getElementById("leaderboard-data");
leaderboard.forEach(entry => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${entry.rank}</td>
        <td><img src="${entry.profile}" alt="Profile" class="profile-img"></td>
        <td>${entry.name}</td>
        <td>${entry.points}</td>
    `;
    leaderboardTable.appendChild(row);
});

// Sign-Up Section: Payment Form Validation
const signupForm = document.getElementById("signup-form");
signupForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const plan = document.getElementById("plan").value;

    // Validate form inputs
    if (name === "" || email === "" || plan === "") {
        alert("Please fill in all required fields.");
        return;
    }

    // Success Message
    alert(`Thank you for signing up, ${name}! Your selected plan is: ${plan}`);
    signupForm.reset(); // Clear form fields
});

// Highlight Active Navigation Link
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(nav => nav.classList.remove("active"));
        link.classList.add("active");
    });
});
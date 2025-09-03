document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBar');
    const searchResultsDiv = document.getElementById('searchResults');

    // Sample user data (you would typically fetch this from an API)
    const userData = [
        {
            id: 1,
            name: "Anjali Kejriwal",
            role: "Software Engineer",
            email: "anjali.k@example.com",
            phone: "9876543210",
            image: "woman1.jpeg" // Placeholder image
        },
        {
            id: 2,
            name: "Anjali Mehta",
            role: "Product Manager",
            email: "anjali.m@example.com",
            phone: "9123456789",
            image: "woman1.jpeg"
        },
        {
            id: 3,
            name: "Anjali Sharma",
            role: "UX Designer",
            email: "anjali.s@example.com",
            phone: "9988776655",
            image: "woman1.jpeg"
        },
         {
            id: 4,
            name: "Anjali Verma",
            role: "Data Scientist",
            email: "anjali.v@example.com",
            phone: "9000011111",
            image: "woman1.jpeg"
        },
        {
            id: 5,
            name: "Rahul Kumar",
            role: "Frontend Developer",
            email: "rahul.k@example.com",
            phone: "8765432109",
            image: "man.jpeg"

        },
        {
            id: 6,
            name: "Priya Singh",
            role: "Backend Developer",
            email: "priya.s@example.com",
            phone: "8877665544",
            image: "woman1.jpeg"
        }
    ];
// Function to create a user card HTML element
    function createUserCard(user) {
        const card = document.createElement('div');
        card.classList.add('user-card');
        card.innerHTML = `
            <img src="${user.image}" alt="${user.name}">
            <h3>${user.name}</h3>
            <p>${user.role}</p>
            <div class="contact-info">
                <span>Email: ${user.email}</span>
                <span>Phone: ${user.phone}</span>
            </div>
            <button class="view-details-btn">View Details</button>
        `;
        return card;
    }

 // Function to display user cards
    function displayUserCards(users) {
        searchResultsDiv.innerHTML = ''; // Clear previous results
        if (users.length === 0) {
            searchResultsDiv.innerHTML = '<p style="text-align: center; width: 100%; color: #888;">No users found.</p>';
            return;
        }
        users.forEach(user => {
            const card = createUserCard(user);
            searchResultsDiv.appendChild(card);
        });
    }
 // Event listener for the search bar input
    searchBar.addEventListener('input', (event) => {
        const searchTerm = event.target.value.toLowerCase().trim();

        if (searchTerm.length > 0) {
            const filteredUsers = userData.filter(user =>
                user.name.toLowerCase().includes(searchTerm) ||
                user.role.toLowerCase().includes(searchTerm) ||
                user.email.toLowerCase().includes(searchTerm)
            );
            displayUserCards(filteredUsers);
        } else {
            searchResultsDiv.innerHTML = ''; // Clear cards if search bar is empty
        }
    });

    // Event listener for the "View Details" buttons
    searchResultsDiv.addEventListener('click', (event) => {
        if (event.target.classList.contains('view-details-btn')) {
            const userId = event.target.getAttribute('data-id');
            const user = userData.find(u => u.id == userId);
            
            if (user) {
                // Populate the modal content
                modalContent.innerHTML = `
                    <span class="close-button">&times;</span>
                    <h2>Fetch Details</h2>
                    <p>Here are the details of the following employee.</p>
                    <p><strong>Name:</strong> ${user.name}</p>
                    <p><strong>Location:</strong> ${user.role}</p>
                    <p><strong>Contact Number:</strong> ${user.phone}</p>
                    <p><strong>Profile Image:</strong></p>
                    <img src="${user.image}" alt="${user.name}'s profile image">
                    <button class="close-button">Close</button>
                `;
                userDetailsModal.style.display = 'block';
            }
        }
    });

    // Event listener to close the modal
    userDetailsModal.addEventListener('click', (event) => {
        if (event.target.classList.contains('close-button') || event.target === userDetailsModal) {
            userDetailsModal.style.display = 'none';
        }
    });

    displayUserCards(userData);


 // Optionally, display all users initially or a message
    // displayUserCards(userData); // To show all users initially
    // searchResultsDiv.innerHTML = '<p style="text-align: center; width: 100%; color: #888;">Start typing to search for users.</p>';
});

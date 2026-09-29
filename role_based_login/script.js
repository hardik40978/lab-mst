const usernameInput = document.getElementById("username");
const loginSection = document.getElementById("loginSection");
const welcomeSection = document.getElementById("welcomeSection");
const welcomeMessage = document.getElementById("welcomeMessage");
const roleBadge = document.getElementById("roleBadge");
const adminContent = document.getElementById("adminContent");
const viewerContent = document.getElementById("viewerContent");
const errorMessage = document.getElementById("errorMessage");
const deleteMessage = document.getElementById("deleteMessage");
const roleButtons = document.querySelectorAll("[data-role]");
const logoutButton = document.querySelector(".logout-btn");
const deleteButton = document.querySelector(".delete-btn");

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add("show");
}

function clearError() {
    errorMessage.textContent = "";
    errorMessage.classList.remove("show");
}

function login(role) {
    const username = usernameInput.value.trim();

    if (username === "") {
        showError("Please enter a username before logging in.");
        usernameInput.focus();
        return;
    }

    clearError();
    deleteMessage.textContent = "";

    loginSection.classList.add("hidden");
    welcomeSection.classList.remove("hidden");

    welcomeMessage.textContent = `Welcome, ${username} (${role})`;
    roleBadge.textContent = role;
    roleBadge.className = `role-badge ${role.toLowerCase()}`;

    adminContent.classList.add("hidden");
    viewerContent.classList.add("hidden");

    if (role === "Admin") {
        adminContent.classList.remove("hidden");
    } else if (role === "Viewer") {
        viewerContent.classList.remove("hidden");
    }
}

function deletePost() {
    deleteMessage.textContent = "Post deleted successfully!";
    deleteButton.textContent = "Deleted";
    deleteButton.disabled = true;
    deleteButton.classList.add("disabled");
}

function logout() {
    loginSection.classList.remove("hidden");
    welcomeSection.classList.add("hidden");

    usernameInput.value = "";
    usernameInput.focus();
    clearError();
    deleteMessage.textContent = "";

    deleteButton.textContent = "Delete Post";
    deleteButton.disabled = false;
    deleteButton.classList.remove("disabled");
}

roleButtons.forEach((button) => {
    button.addEventListener("click", () => {
        login(button.dataset.role);
    });
});

logoutButton.addEventListener("click", logout);
deleteButton.addEventListener("click", deletePost);
usernameInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const activeRole = document.activeElement.dataset.role || "Viewer";
        login(activeRole);
    }
});

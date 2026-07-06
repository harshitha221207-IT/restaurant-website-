// Welcome Message
window.onload = function () {
    alert("🍽️ Welcome to Spice Garden!");
    showDateTime();
};

// Order Function
function orderFood(foodName) {
    alert("✅ Your order for " + foodName + " has been placed successfully!");
}

// Feedback Form Validation
function validateFeedback() {

    let name = document.getElementById("feedbackName").value;
    let email = document.getElementById("feedbackEmail").value;

    if (name === "" || email === "") {
        alert("Please fill all the fields.");
        return false;
    }

    alert("❤️ Thank you for your feedback!");

    return true;
}

// Book Table Validation
function bookTable() {

    let name = document.getElementById("bookName").value;
    let phone = document.getElementById("phone").value;
    let guests = document.getElementById("guests").value;

    if (name === "" || phone === "" || guests === "") {
        alert("Please fill all booking details.");
        return false;
    }

    alert("🎉 Table booked successfully!");

    return true;
}

// Dark Mode
function darkMode() {

    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";

}

// Light Mode
function lightMode() {

    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

}

// Show Date and Time
function showDateTime() {

    let today = new Date();

    document.getElementById("datetime").innerHTML =
        "📅 " + today.toLocaleString();

}
function searchStays() {

    const location = document.getElementById("location").value;
    const checkin = document.getElementById("checkin").value;
    const guests = document.getElementById("guests").value;

    if (!location) {
        alert("Please enter a location.");
        return;
    }

    alert(
        "Searching stays in " +
        location +
        (checkin ? "\nCheck-in: " + checkin : "") +
        (guests ? "\nGuests: " + guests : "")
    );

    document.getElementById("stays").scrollIntoView({
        behavior: "smooth"
    });
}


function bookStay(stayName) {

    const message =
        "Hello, I am interested in booking " +
        stayName +
        " in Darjeeling.";

    const whatsappURL =
        "https://wa.me/?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
}


function becomeHost() {

    const message =
        "Hello, I own a hotel/homestay in Darjeeling and would like to list my property on Darjeeling Stays.";

    const whatsappURL =
        "https://wa.me/?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
}
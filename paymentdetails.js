document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".checkout-form");
    const submitBtns = document.querySelectorAll(".checkout-submit");
    submitBtns.forEach(function(submitBtn) {
        submitBtn.addEventListener("click", function (e) {
            e.preventDefault();

            const firstName = form.querySelector('input[placeholder="First Name"]').value.trim();
            const lastName = form.querySelector('input[placeholder="Last Name"]').value.trim();
            const address = form.querySelector('input[placeholder="Address"]').value.trim();
            const city = form.querySelector('input[placeholder="City"]').value.trim();
            const state = form.querySelector('input[placeholder="State"]').value.trim();
            const postcode = form.querySelector('input[placeholder="Postcode"]').value.trim();
            const email = form.querySelector('input[type="email"]').value.trim();
            const mobile = form.querySelector('input[type="tel"]').value.trim();

            if (!firstName || !lastName || !address || !city || !state || !postcode || !email || !mobile) {
                alert("All fields must be filled out.");
                return;
            }

            const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|outlook\.com|hotmail\.com|yahoo\.com|icloud\.com)$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address (e.g., name@gmail.com).");
                return;
            }

            const mobilePattern = /^61\d{9}$/;
            if (!mobilePattern.test(mobile)) {
                alert("Please enter a valid Australian mobile number starting with '61' (11 digits).");
                return;
            }

            const postcodePattern = /^\d{4}$/;
            const postcodeNumber = parseInt(postcode, 10);
            if (!postcodePattern.test(postcode) || postcodeNumber < 2000 || postcodeNumber > 7999) {
                alert("Please enter a valid Australian postcode (e.g., 3000).");
                return;
            }

            alert("All details are valid. Proceeding to payment...");
            window.location.href = "orderconfirmation.html";
        });
    });
});
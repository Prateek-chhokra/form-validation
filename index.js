// Selecting the elements

let formData = document.querySelector(".form")
let submitBtn = document.querySelector(".button")
let errorMessages = document.querySelectorAll(".error-message")
let emptyFieldMessages = document.querySelectorAll(".empty-field")
let showPassword = document.querySelector(".btn")
let firstName = lastName = email = password = ""
let firstNameTarget, lastNameTarget, emailTarget, pwdTarget
let firstNameFlag, lastNameFlag, emailFlag, pwdFlag
let field

let nameRegex = /^[A-Za-z]+$/
let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let pwdRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;


// Adding display: none property to the elements of array (contains error messages and empty fields errors)
for (error of errorMessages) {
    error.classList.add("d-none")
}

for (emptyField of emptyFieldMessages) {
    emptyField.classList.add("d-none")
}

// Adding eventlistener to the parent class (Event Delegation)
formData.addEventListener("keyup", (event) => {
    event.preventDefault()
    field = event.target.dataset.key

    switch (field) {
        case "firstName":
            firstName = event.target.value  //Assigning the input value to respective variables
            firstNameTarget = event.target  //Targeting the specific inputs/elements
            break
        case "lastName":
            lastName = event.target.value
            lastNameTarget = event.target
            break
        case "email":
            email = event.target.value
            emailTarget = event.target
            break
        case "password":
            password = event.target.value
            pwdTarget = event.target
            break
        default:
            break
    }
})


submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    // Validate first name
    if (firstName) {
        emptyFieldMessages[0].classList.add("d-none")
        if (!nameRegex.test(firstName)) {
            firstNameTarget.classList.add("error")
            errorMessages[0].classList.remove("d-none")
            firstNameFlag = false
        } else {
            firstNameFlag = true
            firstNameTarget.classList.remove("error")
            errorMessages[0].classList.add("d-none")
        }
    } else {
        emptyFieldMessages[0].classList.remove("d-none")
    }

    // Validate last name
    if (lastName) {
        emptyFieldMessages[1].classList.add("d-none")
        if (!nameRegex.test(lastName)) {
            lastNameFlag = false
            lastNameTarget.classList.add("error")
            errorMessages[1].classList.remove("d-none")
        } else {
            lastNameFlag = true
            lastNameTarget.classList.remove("error")
            errorMessages[1].classList.add("d-none")
        }
    } else {
        emptyFieldMessages[1].classList.remove("d-none")
    }

    // Validate email
    if (email) {
        if (!emailRegex.test(email)) {
            emailFlag = false
            emailTarget.classList.add("error")
            errorMessages[2].classList.remove("d-none")
        } else {
            emailFlag = true
            emailTarget.classList.remove("error")
            errorMessages[2].classList.add("d-none")
        }
    } else {
        emptyFieldMessages[2].classList.remove("d-none")
    }

    // Validate password
    if (password) {
        emptyFieldMessages[3].classList.add("d-none")
        if (!pwdRegex.test(password)) {
            pwdFlag = false
            pwdTarget.classList.add("error")
            errorMessages[3].classList.remove("d-none")
        } else {
            pwdFlag = true
            pwdTarget.classList.remove("error")
            errorMessages[3].classList.add("d-none")
        }
    } else {
        emptyFieldMessages[3].classList.remove("d-none")
    }

    // If every field got validated, then jumping to the next page and setting the initial values back to the empty string.
    if (firstNameFlag && lastNameFlag && emailFlag && pwdFlag) {
        firstNameTarget.value = lastNameTarget.value = emailTarget.value = pwdTarget.value = " "
        window.location.href = "./success.html"
    }
});


// Show or Hide password button. Got the eye icon from google icons.
showPassword.addEventListener("click", (event) => {
    event.preventDefault()
    if (pwdTarget.getAttribute("type") === "text") {
        pwdTarget.setAttribute("type", "password")
    } else {
        pwdTarget.setAttribute("type", "text")
    }
})
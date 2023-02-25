const loginform = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function btnclick(event) {
    event.preventDefault();
    const username = loginInput.value;
    console.log(username);
}
loginform.addEventListener("submit", btnclick)
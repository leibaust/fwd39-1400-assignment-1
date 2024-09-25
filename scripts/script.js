// Constant variables or log in and log out buttons
const btnIn = document.getElementById('btn-log-in');
const btnOut = document.getElementById('btn-log-out');
// Constant variables for output
const out = document.getElementById('output');

// Event listener for log in button
btnIn.addEventListener('click', function() {
// Prompt user to enter name
    const username = prompt('Enter your name');
// If user enters name, display message and show log out button
    out.innerHTML = `Hello, ${username}, you are logged in. Click the log out button to log out.`;
// Hide log in button once logged in
    btnIn.style.display = 'none';
    btnIn.setAttribute('disabled', 'disabled');
// Show log out button once logged in
    btnOut.style.display = 'block';
    btnOut.removeAttribute('disabled');
}
)

// Event listener for log out button
btnOut.addEventListener('click', function() {
    let logout = confirm('Are you sure you want to log out?');
// If user confirms log out, display message and show log in button
    if (logout == true) {
// Hide log out button once logged out
        out.innerHTML = 'You are now logged out. Click the login button to log in again.';
// Show log in button once logged out
        btnIn.style.display = 'block';
        btnIn.removeAttribute('disabled');
        btnOut.style.display = 'none';
        btnOut.setAttribute('disabled', 'disabled');
    }
// If user cancels log out, display message
    else {
        out.innerHTML = 'You are still logged in.';
    }
}   
)

//Hooray! Done!
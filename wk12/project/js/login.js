const loginForm = document.querySelector('#loginForm');

function login(e) {
    e.preventDefault();
var empid = document.getElementById('empid').value;
var pwd = document.getElementById('pwd').value;
var pwdCheck = JSON.parse(localStorage.getItem(`${empid}`));

if (pwd == pwdCheck.pwd) {
    window.location.href=`clock.html?empId=${empid}`;

} else {
    alert('Please enter a valid Emp ID & password.');
}

}

loginForm.addEventListener('submit', login);


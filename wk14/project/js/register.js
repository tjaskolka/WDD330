const register = document.querySelector('#registerForm');

function addInfo(e) {
    e.preventDefault();
    var id = document.getElementById('empid').value;
    var name = document.getElementById('firstName').value + ' ' + document.getElementById('lastName').value;
    var shift = document.getElementById('shift').value;
    var pwd = id.slice(-5);
    var info = {'empName': name, 'shift': shift, 'pwd': pwd};
    localStorage.setItem(id, JSON.stringify(info));
    window.location.href="index.html";
}
register.addEventListener('submit', addInfo);

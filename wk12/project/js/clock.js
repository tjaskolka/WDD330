var url_passed = window.location.href;
var url = new URL(url_passed);
var empNo = url.searchParams.get('empId');
var empData = JSON.parse(localStorage.getItem(`${empNo}`));
var employee = empData.empName;
var shift = empData.shift;
var clockIn = empData.timeIn;


document.getElementById('info').innerHTML = `${employee} - ${shift} Sort`;

if (clockIn == undefined) {
    document.getElementById('logIn').innerHTML = "Clock In";
}

function timeIn(e) {
    e.preventDefault();
    var t = new Date();
    document.getElementById('time').innerHTML = "Time in: " + t.toLocaleString();
    
    empData.timeIn = new Date();
//    localStorage.setItem(empNo, JSON.stringify(tIn));
}

var logIn = document.querySelector("#logIn");

logIn.addEventListener('click', timeIn);
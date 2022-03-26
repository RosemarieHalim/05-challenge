// NOTES
// time of day is constant, so when task is past time turns red
var CurrentDate = document.getElementById('currentDay');

// CURRENT DATE FUNCTION
function setDate() {
    
    const date = new Date();
    const n = date.toDateString();

    CurrentDate.textContent = 'Current date: ' + n;
};

// CURRENT TIME FUNCTION
function time() {
    moment().format('h:mm:ss a');
};

setInterval(time, 1000);

// ADD TASK FUNCTION
function addTask(timeKey) {
    var inputValue = document.getElementById('task' + timeKey).value;

    localStorage.setItem(timeKey, inputValue);
};

// KEEP VALUE FUNCTION
function keepTask() {
    var keys = Object.keys(localStorage);
    var keyLength = keys.length;
    while(keyLength--) {
        document.getElementById('task' + keys[keyLength]).value = localStorage.getItem(keys[keyLength]);
    };
};


setDate();
keepTask();
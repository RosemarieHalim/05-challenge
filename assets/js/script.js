// NOTES
var CurrentDate = document.getElementById('currentDay');


// CURRENT DATE FUNCTION
function setDate() {
    
    const date = new Date();
    const n = date.toDateString();

    CurrentDate.textContent = 'Current date: ' + n;
};

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

// CHANGE COLOR OF TASK AS TIME GOES BY
function taskColor() {
    const d = new Date();
    var time = d.getHours();

    var timeArrays = ['9', '10', '11', '12', '1', '2', '3', '4', '5'];
    var timeArrays2 = ['9', '10', '11', '12', '13', '14', '15', '16', '17'];

    for(let i = 0; i < timeArrays.length; i++) {
        if (time <= timeArrays2[i])
        {
            document.getElementById('task' + timeArrays[i]).style.backgroundColor='#77dd77'
            document.getElementById('task' + timeArrays[i]).style.color='white'
        }
        else if (time - timeArrays2[i] == 1) {
            document.getElementById('task' + timeArrays[i]).style.backgroundColor='#ff6961'
            document.getElementById('task' + timeArrays[i]).style.color='white'
        }
    };
};

setDate();
keepTask();
taskColor();
// task 1
while (true) {
    var age = prompt("Enter your age");
    if (age === null) {
        break;
    } else if (age < 0) {
        alert("the age must be greater than zero")
    } else {
        checkAge(age)
    }

    function checkAge(age) {
        if (age >= 0 && age < 11) {
            alert("child")
        } else if (age >= 11 && age < 19) {
            alert("teenager")
        } else if (age >= 19 && age < 51) {
            alert("Grown")
        } else {
            alert("Old")
        }
    }
}

// // task 2
var value = String(prompt("enter string"))
var vowels = ['a', 'e', 'i', 'o', 'u']
var count = 0;
for (var i = 0; i < value.length; i++) {
    if (vowels.includes(value[i].toLowerCase())) {
        count++;
    }
}
alert("number of vowels is : " + count)

// // task 3

var hours = prompt("Enter the hour")
if (hours == 0) {
    alert("its 12AM now")
} else if (hours >= 1 && hours < 12) {
    alert("its " + hours + "AM now")
} else if (hours >= 12 && hours < 24) {
    alert("its " + (hours - 12) + "PM now")
} else {
    alert("Invalid hour")
}
function refreshAssignments() {
    //document.getElementById("ass1").value = 100;
}
//Function to grab vars from 'number' inputs on page and compute weighted average
//Finds the number of child elements of the ordered list (the number of assignments) and gathers all requirements by looping the neccessary number of times
function calcGrade() {
    var hwCount = 0;
    var pointEarned = 0;
    var pointTotal = 0;
    var totalGrade = 0;
    hwCount = document.getElementById("liAssignments").childElementCount;

    for (var i = 1; i <= hwCount; i++) {
        if (document.getElementById("weight" + i).value != 0) {
            totalGrade += ((document.getElementById("hw" + i).value) / (document.getElementById("total" + i).value)) * (document.getElementById("weight" + i).value);
        }

    }
    findLetterGrade(totalGrade);
    totalGrade = parseFloat(totalGrade).toFixed(2);
    document.getElementById("WHO").value = totalGrade;

}
//Function to return letter Grade for ease of reading
function findLetterGrade(grade) {
    var letterGrade = "N/A"
    if (grade >= 90) {
        letterGrade = "A"
    } else if (grade >= 80) {
        letterGrade = "B"
    } else if (grade >= 70) {
        letterGrade = "C"
    } else if (grade >= 60) {
        letterGrade = "D"
    } else {
        letterGrade = "F"
    };
    document.getElementById("WHO2").value = letterGrade;
}
//Function to clear entries, so users can wipe out the presets easily
function clearEntries(){
    var hwCount = 0;
    hwCount = document.getElementById("liAssignments").childElementCount;

    for (var i = 1; i <= hwCount; i++) {
            document.getElementById("hw" + i).value = 0;
            document.getElementById("total" + i).value = 0;
            document.getElementById("weight" + i).value = 0;
    }
}
//Function to add an assignment to the end of the list.
//Gets the current html construct and appends an additional numerically incremented table to the end of it.
function addAssignment() {
    var hwCount = 0;
    hwCount = document.getElementById("liAssignments").childElementCount;
    hwCount = hwCount + 1;
    //Gigantic HTML Addon to add labelled list element to numbered list
    document.getElementById("liAssignments").innerHTML = document.getElementById("liAssignments").innerHTML +
        "<li><input type=\"text\" value=\"Enter Assignment\"> <input id=\"hw" + hwCount.toString() + "\" type=\"number\" value=\"0\" min=\"0\"> <input id=\"total" + hwCount.toString() + "\" type=\"number\" value=\"0\" min=\"0\"> <input id=\"weight" + hwCount.toString() + "\" type=\"number\" value=\"0\" min=\"0\"></li>";
}
//Function to remove assignment from the list
//Copies the current table construct to a temporary string and rebuilds the list minus the last element.
//Then copies the tempstring (which is missing a table) to the main document to remove it.
function removeAssignment() {
    var hwCount = 0;
    hwCount = document.getElementById("liAssignments").childElementCount;
    var hwNode = document.getElementById("liAssignments").children;
    var tempStr = "";
    hwCount--;
    //    document.getElementById("liAssignments").innerHTML =
    //    "<li>"+hwNode[0].innerHTML+"</li>"+"<li>"+hwNode[1].innerHTML+"</li>";
    for (var i = 0; i < hwCount; i++) {
        tempStr = tempStr + "<li>" + hwNode[i].innerHTML + "</li>";
    }
    document.getElementById("liAssignments").innerHTML = tempStr;
}
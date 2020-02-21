function refreshAssignments(){
    //document.getElementById("ass1").value = 100;
}

function calcGrade(){
    var assCount = 0;
    var pointEarned = 0;
    var pointTotal = 0;
    var totalGrade = 0;
    assCount = document.getElementById("liAssignments").childElementCount;

    for(var i=1;i<=assCount;i++){
        if(document.getElementById("weight"+i).value != 0){
            totalGrade += ((document.getElementById("ass"+i).value) / (document.getElementById("total"+i).value)) * (document.getElementById("weight"+i).value);
        }
        
    }



    document.getElementById("WHO").innerHTML= totalGrade;
}

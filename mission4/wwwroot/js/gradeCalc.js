$("#calculate").click(function () {
    //Store all the grade values and calculate pctg of the whole grade
    var asgGrade = $("#assignment").val() * .5
    var gpGrade = $("#groupproject").val() * .1
    var qGrade = $("#quiz").val() * .1
    var midGrade = $("#midterm").val() * .1
    var finGrade = $("#final").val() * .1
    var intexGrade = $("#intex").val() * .1
    var finalGrade = Math.round(asgGrade + gpGrade + qGrade + midGrade + finGrade + intexGrade);

    if (finalGrade >= 94) {
        finalGrade = "Final Grade: " + finalGrade + " A";
    }
    else if (finalGrade >= 90) {
        finalGrade = "Final Grade: " + finalGrade + " A-";
    }
    else if (finalGrade >= 87) {
        finalGrade = "Final Grade: " + finalGrade + " B+";
    }
    else if (finalGrade >= 84) {
        finalGrade = "Final Grade: " + finalGrade + " B";
    }
    else if (finalGrade >= 80) {
        finalGrade = "Final Grade: " + finalGrade + " B-";
    }
    else if (finalGrade >= 77) {
        finalGrade = "Final Grade: " + finalGrade + " C+";
    }
    else if (finalGrade >= 74) {
        finalGrade = "Final Grade: " + finalGrade + " C";
    }
    else if (finalGrade >= 70) {
        finalGrade = "Final Grade: " + finalGrade + " C-";
    }
    else if (finalGrade >= 67) {
        finalGrade = "Final Grade: " + finalGrade + " D+";
    }
    else if (finalGrade >= 64) {
        finalGrade = "Final Grade: " + finalGrade + " D";
    }
    else if (finalGrade >= 60) {
        finalGrade = "Final Grade: " + finalGrade + " D-";
    }
    else {
        finalGrade = "Final Grade: " + finalGrade + " E";
    }

    //output onto the page
    $("#grade").text(finalGrade);

    //If you wanted to make inputs go back to 0 after the end, then uncomment this code
    //$("#assignment").val(0)
    //$("#groupproject").val(0)
    //$("#quiz").val(0)
    //$("#midterm").val(0)
    //$("#final").val(0)
    //$("#intex").val(0)

})
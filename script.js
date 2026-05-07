function calculateCGPA() {

    let s1 = parseFloat(document.getElementById("sub1").value) || 0;
    let s2 = parseFloat(document.getElementById("sub2").value) || 0;
    let s3 = parseFloat(document.getElementById("sub3").value) || 0;
    let s4 = parseFloat(document.getElementById("sub4").value) || 0;
    let s5 = parseFloat(document.getElementById("sub5").value) || 0;

    let cgpa = (s1 + s2 + s3 + s4 + s5) / 5;

    let grade = "";

    if (cgpa >= 9) {
        grade = "Outstanding 🌟";
    }
    else if (cgpa >= 8) {
        grade = "Excellent 🎉";
    }
    else if (cgpa >= 7) {
        grade = "Very Good 👍";
    }
    else if (cgpa >= 6) {
        grade = "Good 🙂";
    }
    else {
        grade = "Needs Improvement 📚";
    }

    document.getElementById("result").innerHTML =
        "CGPA: " +
        cgpa.toFixed(2) +
        "<br>" +
        grade;
}
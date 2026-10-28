
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    let studentName = document.getElementById("studentName").value;
    let grade = Number(document.getElementById("grade").value);
    let bonus = Number(document.getElementById("bonus").value);

    let finalGrade = grade + bonus;

    if (studentName === "") {
        document.getElementById("result").textContent =
            "Please enter your name.";

    } else if (finalGrade > 20 || finalGrade < 0 || bonus < 0) {
        document.getElementById("result").textContent =
            "Invalid grade!";

    } else if (finalGrade >= 16) {
        document.getElementById("result").textContent =
            studentName + ": Excellent! Final grade: " + finalGrade + "/20";

    } else if (finalGrade >= 10) {
        document.getElementById("result").textContent =
            studentName + ": Pass! Final grade: " + finalGrade + "/20";

    } else {
        document.getElementById("result").textContent =
            studentName + ": Fail! Final grade: " + finalGrade + "/20";
    }
});

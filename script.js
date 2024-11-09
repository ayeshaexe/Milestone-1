var button = document.getElementById('toggle-skills');
var skills = document.getElementById('sec-2');
if (button && skills) {
    button.addEventListener("click", function () {
        if (skills.style.display === "none") {
            skills.style.display = "block";
            button.value = "hide skills";
        }
        else {
            skills.style.display = "none";
            button.value = "show skills";
        }
    });
}

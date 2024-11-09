const button = document.getElementById('toggle-skills') as HTMLButtonElement |null;
const skills = document.getElementById('sec-2') as HTMLElement | null;
if (button && skills) {
    button.addEventListener("click", () =>{
        if(skills.style.display === "none"){
            skills.style.display = "block";
            button.value = "hide skills"
        }
        else {
            skills.style.display = "none";
            button.value = "show skills"
        }
    } )
}
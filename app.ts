//We access elements and type assertion
const resumeForm = document.getElementById("resumeForm") as HTMLInputElement;
const hideButton = document.getElementById("hB") as HTMLButtonElement;
const hideSkillsSection = document.getElementById("skillsHide") as HTMLInputElement;
const resumeOutput = document.getElementById("cvOutput") as HTMLDivElement;


//Now we hide the skill section
hideButton.addEventListener("click", function(){
    if(hideSkillsSection.style.display === "none"){
        hideSkillsSection.style.display = "block"
        hideButton.innerText = "Hide Skills section"

    }else{
        hideSkillsSection.style.display = "none";
        hideButton.innerText = "Show Skills Section"
    }
});



//Now we add event listner to show collected data
resumeForm.addEventListener("submit", function(event){
    event.preventDefault()

    
//Now we access the resume field and collect form data

//Cv person details
const personName = (document.getElementById("name") as HTMLInputElement).value;
const dob = (document.getElementById("dob") as HTMLInputElement).value;
const phoneNumber = (document.getElementById("number") as HTMLInputElement).value;
const email = (document.getElementById("email") as HTMLInputElement).value;

//School Details
const schoolName1 = (document.getElementById("schoolName1") as HTMLInputElement).value;
const passingYear1 = (document.getElementById("passingYear1") as HTMLInputElement).value;
const education1 = (document.getElementById("education1") as HTMLTextAreaElement).value;

const schoolName2 = (document.getElementById("schoolName2") as HTMLInputElement).value;
const passingYear2 = (document.getElementById("passingYear2") as HTMLInputElement).value;
const education2 = (document.getElementById("education2") as HTMLTextAreaElement).value;

//Experience details
const experience = (document.getElementById("exp") as HTMLTextAreaElement).value

//Skills
const skilss = (document.getElementById("skills") as HTMLTextAreaElement).value;

    const resumeHTML = `
    <h1> Personal Information </h1>
    <p> <strong> Full Name: </strong> ${personName} </P>
    <p> <strong>  Date of Birth: </strong> ${dob}  </p>
    <p> <strong> Phone Number: </strong> ${phoneNumber}  </p>
    <p> <strong> Email: </strong> ${email}  </p>
    
    <h3> Education </h3>
    <p> <strong> School Name: </strong> ${schoolName1}  </p>
    <p> <strong> Passing Year: </strong> ${passingYear1} </p>
    <p> <strong> Education Detail: </strong> ${education1}   </p>
    
    <p> <strong> School Name: </strong> ${schoolName2}  </p>
    <p> <strong> Passing Year: </strong> ${passingYear2} </p>
    <p> <strong> Education Detail: </strong> ${education2}   </p>


    <p> <strong> Experience:  </strong> ${experience}  </p>
    
    <p> <strong> Skills:  </strong> ${skilss} </p>
    `
    resumeOutput.innerHTML = resumeHTML




})
"use strict";
//We access elements and type assertion
const resumeForm = document.getElementById("resumeForm");
const hideButton = document.getElementById("hB");
const hideSkillsSection = document.getElementById("skillsHide");
const resumeOutput = document.getElementById("cvOutput");
//Now we hide the skill section
hideButton.addEventListener("click", function () {
    if (hideSkillsSection.style.display === "none") {
        hideSkillsSection.style.display = "block";
        hideButton.innerText = "Hide Skills section";
    }
    else {
        hideSkillsSection.style.display = "none";
        hideButton.innerText = "Show Skills Section";
    }
});
//Now we add event listner to show collected data
resumeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    //Now we access the resume field and collect form data
    //Cv person details
    const personName = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const phoneNumber = document.getElementById("number").value;
    const email = document.getElementById("email").value;
    //School Details
    const schoolName1 = document.getElementById("schoolName1").value;
    const passingYear1 = document.getElementById("passingYear1").value;
    const education1 = document.getElementById("education1").value;
    const schoolName2 = document.getElementById("schoolName2").value;
    const passingYear2 = document.getElementById("passingYear2").value;
    const education2 = document.getElementById("education2").value;
    //Experience details
    const experience = document.getElementById("exp").value;
    //Skills
    const skilss = document.getElementById("skills").value;
    const resumeHTML = `
    <h1> Personal Information </h1>
    <p> <strong> Full Name: </strong> ${personName} </P>
    <p> <strong>  Date of Birth: </strong> ${dob}  </p>
    <p> <strong> Phone Number: </strong> ${phoneNumber}  </p>
    <p> <strong> Email: </strong> ${email}  </p>
    
    <h3> Education </h3>
    <p> <strong> School Name: </strong> ${schoolName1}  </p>
    <p> <strong> Passing Year: </strong> ${passingYear1} </p>
    <p> <strong> Education Detail: ${education1} </strong>  </p>
    
    <p> <strong> School Name: </strong> ${schoolName2}  </p>
    <p> <strong> Passing Year: </strong> ${passingYear2} </p>
    <p> <strong> Education Detail: ${education2} </strong>  </p>


    <p> <strong> Experience: ${experience}  </strong> </p>
    
    <p> <strong> Skills: ${skilss}  </strong> </p>
    `;
    resumeOutput.innerHTML = resumeHTML;
});

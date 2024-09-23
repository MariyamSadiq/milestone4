// Listening for the form submission event
document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Type assertions for input elements
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillElement = document.getElementById('skill') as HTMLInputElement;

    // Check if all elements exist
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skill = skillElement.value;

        // Creating resume output using a template literal
        const resumeOutput = `
            <h2> Editable Resume</h2>
            <p><strong>Name:</strong><span  contenteditable="true" > ${name}</span></p>
            <p><strong>Email:</strong> <span  contenteditable="true" >${email}</span></p>
            <p><strong>Phone Number:</strong><span  contenteditable="true" > ${phone}</span></p>
            <h3>Education</h3>
            <p contenteditable="true">${education}</p>
            <h3>Experience</h3>
            <p contenteditable="true">${experience}</p>
            <h3>Skill</h3>
            <p contenteditable="true">${skill}</p>
        `;

        // Outputting the resume
        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        } else {
            console.error('The resume output element is missing');
        }
    } else {
        console.error('One or more input elements are missing');
    }
});

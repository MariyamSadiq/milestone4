var _a;
// Listening for the form submission event
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Type assertions for input elements
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillElement = document.getElementById('skill');
    // Check if all elements exist
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skill = skillElement.value;
        // Creating resume output using a template literal
        var resumeOutput = "\n            <h2> Editable Resume</h2>\n            <p><strong>Name:</strong><span  contenteditable=\"true\" > ".concat(name_1, "</span></p>\n            <p><strong>Email:</strong> <span  contenteditable=\"true\" >").concat(email, "</span></p>\n            <p><strong>Phone Number:</strong><span  contenteditable=\"true\" > ").concat(phone, "</span></p>\n            <h3>Education</h3>\n            <p contenteditable=\"true\">").concat(education, "</p>\n            <h3>Experience</h3>\n            <p contenteditable=\"true\">").concat(experience, "</p>\n            <h3>Skill</h3>\n            <p contenteditable=\"true\">").concat(skill, "</p>\n        ");
        // Outputting the resume
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The resume output element is missing');
        }
    }
    else {
        console.error('One or more input elements are missing');
    }
});

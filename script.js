const aboutText = "Jackson Pan";
const aboutInnerText = `I'm a sophomore Computer Science student at University of Rochester 
with a passion for web development, artificial intelligence, and software engineering.`;

document.getElementById("about-text").textContent = aboutText;
document.getElementById("about-inner-text").textContent = aboutInnerText;

document.getElementById("contact-button").addEventListener("click", function() {
    window.location.href = "mailto:jpan23@u.rochester.edu";
});

const showProjectsByLanguage = (language) => {
    const allProjects = document.getElementById('all-projects').children;
    for(const project of allProjects) {
        const projectLanguages = project.getAttribute('data-languages');
        if(!language || projectLanguages.includes(language)) {
            project.style.display = 'flex';
        }
        else {
            project.style.display = 'none';
        }
    }
}

const showAllProjects = () => {
    showProjectsByLanguage('');
}

const showProjects = (language) => {
    showProjectsByLanguage(language);
}



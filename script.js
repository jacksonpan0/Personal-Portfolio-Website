document.getElementById("contact-button").addEventListener("click", function() {
    window.location.href = "mailto:jpan23@u.rochester.edu";
});
function showAllProjects() {
    showProjectsByLanguage('');
}

function showProjects(language) {
    showProjectsByLanguage(language);
}

function showProjectsByLanguage(language) {
    const allProjects = document.getElementById('all-projects').children;

    for (const project of allProjects) {
        const projectLanguages = project.getAttribute('data-languages');

        if (!language || projectLanguages.includes(language)) {
            project.style.display = 'inline';
        } else {
            project.style.display = 'none';
        }
    }
}
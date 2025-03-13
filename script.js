let currentSection = 1;

function showSection(section) {
    document.querySelectorAll('.section').forEach((sec, index) => {
        sec.classList.remove('active');
        if (index + 1 === section) {
            sec.classList.add('active');
        }
    });
}

function nextSection() {
    if (currentSection < 4) {
        currentSection++;
        showSection(currentSection);
    }
}

function prevSection() {
    if (currentSection > 1) {
        currentSection--;
        showSection(currentSection);
    }
}

// Initialize the first section as active
showSection(currentSection);
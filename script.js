// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Courses search
const courseSearchInput = document.getElementById('courseSearchInput');
const courseSearchButton = document.getElementById('courseSearchButton');
const courseClearButton = document.getElementById('courseClearButton');
const coursesTable = document.getElementById('coursesTable');

function filterCourses() {
    if (!coursesTable || !courseSearchInput) return;
    const filter = courseSearchInput.value.toLowerCase();
    const rows = coursesTable.querySelectorAll('tbody tr');

    rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        row.style.display = text.includes(filter) ? '' : 'none';
    });
}

if (courseSearchButton) {
    courseSearchButton.addEventListener('click', filterCourses);
}

if (courseClearButton && courseSearchInput) {
    courseClearButton.addEventListener('click', () => {
        courseSearchInput.value = '';
        filterCourses();
    });
}

if (courseSearchInput) {
    courseSearchInput.addEventListener('keyup', event => {
        if (event.key === 'Enter') filterCourses();
    });
}

// Department selector
const deptSelect = document.getElementById('deptSelect');
if (deptSelect) {
    const blocks = {
        cs: document.getElementById('dept-cs'),
        commerce: document.getElementById('dept-commerce'),
        management: document.getElementById('dept-management'),
        languages: document.getElementById('dept-languages'),
        science: document.getElementById('dept-science')
    };

    function updateDept() {
        const value = deptSelect.value;
        Object.keys(blocks).forEach(key => {
            if (blocks[key]) {
                blocks[key].style.display = (key === value) ? 'block' : 'none';
            }
        });
    }

    deptSelect.addEventListener('change', updateDept);
    updateDept();
}

// Enquiry form validation (front-end only)
const enquiryForm = document.getElementById('enquiryForm');
const enquiryStatus = document.getElementById('enquiryStatus');

if (enquiryForm && enquiryStatus) {
    enquiryForm.addEventListener('submit', event => {
        event.preventDefault();

        const name = document.getElementById('enqName').value.trim();
        const email = document.getElementById('enqEmail').value.trim();
        const phone = document.getElementById('enqPhone').value.trim();
        const program = document.getElementById('enqProgram').value;
        const dept = document.getElementById('enqDept').value;
        const message = document.getElementById('enqMessage').value.trim();

        if (!name || !email || !phone || !program || !dept || !message) {
            enquiryStatus.textContent = 'Please fill in all fields.';
            enquiryStatus.style.color = 'red';
            return;
        }

        enquiryStatus.textContent = 'Your enquiry has been recorded (demo only).';
        enquiryStatus.style.color = 'green';
        enquiryForm.reset();
    });
}

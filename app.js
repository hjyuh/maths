// Data structure for all course materials
const courseData = {
    'Algebra 2': {
        icon: '📐',
        units: [
            { id: 'algebra2-unit1-foundations', name: 'Unit 1: Foundations' },
            { id: 'algebra2-unit2-functions', name: 'Unit 2: Functions' },
            { id: 'algebra2-unit3-exponential-logarithmic', name: 'Unit 3: Exponential & Logarithmic' },
            { id: 'algebra2-unit4-quadratic-functions', name: 'Unit 4: Quadratic Functions' },
            { id: 'algebra2-unit5-polynomial-functions', name: 'Unit 5: Polynomial Functions' },
            { id: 'algebra2-unit6-radical-functions', name: 'Unit 6: Radical Functions' },
            { id: 'algebra2-unit7-modeling', name: 'Unit 7: Modeling' }
        ]
    },
    'Precalculus': {
        icon: '📊',
        units: [
            { id: 'precalc-unit1-functions-graphs', name: 'Unit 1: Functions & Graphs' },
            { id: 'precalc-unit2-trigonometric-functions', name: 'Unit 2: Trigonometric Functions' },
            { id: 'precalc-unit3-analytic-trigonometry', name: 'Unit 3: Analytic Trigonometry' },
            { id: 'precalc-unit4-polynomial-functions', name: 'Unit 4: Polynomial Functions' },
            { id: 'precalc-unit5-exponential-logarithmic', name: 'Unit 5: Exponential & Logarithmic' },
            { id: 'precalc-unit6-sequences-series', name: 'Unit 6: Sequences & Series' }
        ]
    },
    'Calculus 1': {
        icon: '∫',
        units: [
            { id: 'calc1-unit1-limits-continuity', name: 'Unit 1: Limits & Continuity' },
            { id: 'calc1-unit2-derivatives-basics', name: 'Unit 2: Derivatives Basics' },
            { id: 'calc1-unit3-applications-derivatives', name: 'Unit 3: Applications of Derivatives' },
            { id: 'calc1-unit4-advanced-differentiation', name: 'Unit 4: Advanced Differentiation' },
            { id: 'calc1-unit5-integration-fundamentals', name: 'Unit 5: Integration Fundamentals' },
            { id: 'calc1-unit6-integration-techniques', name: 'Unit 6: Integration Techniques' },
            { id: 'calc1-unit7-applications-integration', name: 'Unit 7: Applications of Integration' },
            { id: 'calc1-unit8-differential-equations', name: 'Unit 8: Differential Equations' }
        ]
    },
    'Calculus 2': {
        icon: '∫∫',
        units: [
            { id: 'calc2-unit1-integration-techniques', name: 'Unit 1: Integration Techniques' },
            { id: 'calc2-unit2-applications-integration', name: 'Unit 2: Applications of Integration' },
            { id: 'calc2-unit3-parametric-polar', name: 'Unit 3: Parametric & Polar' },
            { id: 'calc2-unit4-sequences', name: 'Unit 4: Sequences' },
            { id: 'calc2-unit5-infinite-series', name: 'Unit 5: Infinite Series' },
            { id: 'calc2-unit6-power-series', name: 'Unit 6: Power Series' },
            { id: 'calc2-unit7-differential-equations', name: 'Unit 7: Differential Equations' }
        ]
    },
    'Calculus 3': {
        icon: '∫∫∫',
        units: [
            { id: 'calc3-unit1-vectors-3d-space', name: 'Unit 1: Vectors & 3D Space' },
            { id: 'calc3-unit2-vector-functions', name: 'Unit 2: Vector Functions' },
            { id: 'calc3-unit3-partial-derivatives', name: 'Unit 3: Partial Derivatives' },
            { id: 'calc3-unit4-multiple-integration', name: 'Unit 4: Multiple Integration' },
            { id: 'calc3-unit5-line-integrals', name: 'Unit 5: Line Integrals' },
            { id: 'calc3-unit6-surface-integrals', name: 'Unit 6: Surface Integrals' },
            { id: 'calc3-unit7-major-theorems', name: 'Unit 7: Major Theorems' }
        ]
    },
    'Linear Algebra': {
        icon: '🔢',
        units: [
            { id: 'linalg-unit1-systems-linear-equations', name: 'Unit 1: Systems of Linear Equations' },
            { id: 'linalg-unit2-matrix-algebra', name: 'Unit 2: Matrix Algebra' },
            { id: 'linalg-unit3-determinants', name: 'Unit 3: Determinants' },
            { id: 'linalg-unit4-vector-spaces', name: 'Unit 4: Vector Spaces' },
            { id: 'linalg-unit5-eigenvalues-eigenvectors', name: 'Unit 5: Eigenvalues & Eigenvectors' },
            { id: 'linalg-unit6-orthogonality', name: 'Unit 6: Orthogonality' },
            { id: 'linalg-unit7-linear-transformations', name: 'Unit 7: Linear Transformations' },
            { id: 'linalg-unit8-applications', name: 'Unit 8: Applications' }
        ]
    },
    'Geometry': {
        icon: '📐',
        units: [
            { id: 'week-15-triangle-congruence', name: 'Week 15: Triangle Congruence' },
            { id: 'week-16-triangle-properties', name: 'Week 16: Triangle Properties' },
            { id: 'week-17-quadrilaterals', name: 'Week 17: Quadrilaterals' },
            { id: 'week-18-similarity', name: 'Week 18: Similarity' },
            { id: 'week-19-trigonometry', name: 'Week 19: Trigonometry' },
            { id: 'week-20-area-volume', name: 'Week 20: Area & Volume' },
            { id: 'week-21-circles', name: 'Week 21: Circles' }
        ]
    }
};

// State management
let currentView = 'browse';
let currentSubject = null;
let currentTopic = null;
let currentTest = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    renderSubjectList();
    renderTestList();
    updateStats();
});

// Navigation between views
function initializeNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const view = btn.dataset.view;
            switchView(view);
        });
    });
}

function switchView(view) {
    currentView = view;

    // Update nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === view);
    });

    // Update views
    document.querySelectorAll('.view').forEach(v => {
        v.classList.toggle('active', v.id === `${view}-view`);
    });
}

// Render subject list for browse view
function renderSubjectList() {
    const subjectList = document.getElementById('subject-list');
    subjectList.innerHTML = '';

    Object.entries(courseData).forEach(([subject, data]) => {
        const subjectGroup = document.createElement('div');
        subjectGroup.className = 'subject-group';

        const header = document.createElement('h3');
        header.textContent = `${data.icon} ${subject}`;
        subjectGroup.appendChild(header);

        data.units.forEach(unit => {
            const topicItem = document.createElement('div');
            topicItem.className = 'topic-item';
            topicItem.innerHTML = `
                <span class="icon">📝</span>
                <span class="topic-name">${unit.name}</span>
            `;
            topicItem.addEventListener('click', () => loadNotes(subject, unit));
            subjectGroup.appendChild(topicItem);
        });

        subjectList.appendChild(subjectGroup);
    });

    // Add search functionality
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        document.querySelectorAll('.topic-item').forEach(item => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(searchTerm) ? 'flex' : 'none';
        });
    });
}

// Load and display notes
async function loadNotes(subject, unit) {
    const notesContent = document.getElementById('notes-content');
    notesContent.innerHTML = '<div class="loading">Loading notes</div>';

    // Update active state
    document.querySelectorAll('.topic-item').forEach(item => {
        item.classList.remove('active');
    });
    event.currentTarget.classList.add('active');

    try {
        const response = await fetch(`${unit.id}-notes.md`);
        if (!response.ok) throw new Error('Notes not found');

        const markdown = await response.text();
        const html = marked.parse(markdown);

        notesContent.innerHTML = `
            <div class="markdown-content">
                <div style="background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%); color: white; padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
                    <h1 style="margin: 0; border: none; color: white;">${subject}</h1>
                    <p style="margin: 0.5rem 0 0 0; opacity: 0.95; color: white;">${unit.name}</p>
                </div>
                ${html}
            </div>
        `;

        currentSubject = subject;
        currentTopic = unit;
    } catch (error) {
        notesContent.innerHTML = `
            <div class="welcome">
                <h2>Notes Not Available</h2>
                <p>Could not load notes for this topic. Please try another one.</p>
            </div>
        `;
    }
}

// Render test list for practice view
function renderTestList() {
    const testList = document.getElementById('test-list');
    const subjectFilter = document.getElementById('subject-filter');

    // Populate subject filter
    Object.keys(courseData).forEach(subject => {
        const option = document.createElement('option');
        option.value = subject;
        option.textContent = subject;
        subjectFilter.appendChild(option);
    });

    // Render all tests initially
    renderFilteredTests();

    // Add filter listener
    subjectFilter.addEventListener('change', renderFilteredTests);
}

function renderFilteredTests() {
    const testList = document.getElementById('test-list');
    const filterValue = document.getElementById('subject-filter').value;
    testList.innerHTML = '';

    Object.entries(courseData).forEach(([subject, data]) => {
        if (filterValue && filterValue !== subject) return;

        data.units.forEach(unit => {
            // Practice test
            const practiceTest = document.createElement('div');
            practiceTest.className = 'test-item';
            practiceTest.innerHTML = `
                <div class="test-title">${unit.name}</div>
                <div class="test-type">📝 Practice Problems</div>
            `;
            practiceTest.addEventListener('click', () => loadTest(subject, unit, 'practice'));
            testList.appendChild(practiceTest);

            // Final test
            const finalTest = document.createElement('div');
            finalTest.className = 'test-item';
            finalTest.innerHTML = `
                <div class="test-title">${unit.name}</div>
                <div class="test-type">🎯 Final Test</div>
            `;
            finalTest.addEventListener('click', () => loadTest(subject, unit, 'final-test'));
            testList.appendChild(finalTest);
        });
    });
}

// Load and display test
async function loadTest(subject, unit, type) {
    const testContent = document.getElementById('test-content');
    testContent.innerHTML = '<div class="loading">Loading test</div>';

    // Update active state
    document.querySelectorAll('.test-item').forEach(item => {
        item.classList.remove('active');
    });
    event.currentTarget.classList.add('active');

    try {
        const response = await fetch(`${unit.id}-${type}.md`);
        if (!response.ok) throw new Error('Test not found');

        const markdown = await response.text();
        const html = marked.parse(markdown);

        const testTypeLabel = type === 'practice' ? 'Practice Problems' : 'Final Test';
        const testTypeIcon = type === 'practice' ? '📝' : '🎯';

        testContent.innerHTML = `
            <div class="markdown-content">
                <div style="background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%); color: white; padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
                    <h1 style="margin: 0; border: none; color: white;">${testTypeIcon} ${testTypeLabel}</h1>
                    <p style="margin: 0.5rem 0 0 0; opacity: 0.95; color: white;">${subject} - ${unit.name}</p>
                </div>
                ${html}
            </div>
        `;

        currentTest = { subject, unit, type };
    } catch (error) {
        testContent.innerHTML = `
            <div class="welcome">
                <h2>Test Not Available</h2>
                <p>Could not load this test. Please try another one.</p>
            </div>
        `;
    }
}

// Update statistics
function updateStats() {
    let totalTopics = 0;
    let totalTests = 0;

    Object.values(courseData).forEach(subject => {
        totalTopics += subject.units.length;
        totalTests += subject.units.length * 2; // practice + final test
    });

    document.getElementById('total-topics').textContent = totalTopics;
    document.getElementById('total-tests').textContent = totalTests;
}

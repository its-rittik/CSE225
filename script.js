// List of all presentation files
const files = [
    { name: 'Week-1-Lesson-1.pptx', week: 1, lesson: 1 },
    { name: 'Week-2- Lesson-1.pptx', week: 2, lesson: 1 },
    { name: 'Week-2- Lesson-2.pptx', week: 2, lesson: 2 },
    { name: 'Week-3-Lesson-1.pptx', week: 3, lesson: 1 },
    { name: 'Week-3-Lesson-2.pptx', week: 3, lesson: 2 },
    { name: 'Week-4- Lesson-1.pptx', week: 4, lesson: 1 },
    { name: 'Week-4- Lesson-2.pptx', week: 4, lesson: 2 },
    { name: 'Week-5 Lesson-1.pptx', week: 5, lesson: 1 },
    { name: 'Week-5 Lesson 2_Analog-analog transmission.pptx', week: 5, lesson: 2, topic: 'Analog-Analog Transmission' },
    { name: 'Week-8- Lesson-1.pptx', week: 8, lesson: 1 },
    { name: 'Week-9- Lesson-1  2.pptx', week: 9, lesson: 1 },
    { name: 'Week-10- Lesson-1  2.pptx', week: 10, lesson: 1 },
    { name: 'Week-11- Lesson 1  2.pptx', week: 11, lesson: 1 },
    { name: 'Week-12- Lesson-1.pptx', week: 12, lesson: 1 },
    { name: 'Week-12-Lesson-2.pptx', week: 12, lesson: 2 },
    { name: 'Week 13 Lesson 1_Channelization.pptx', week: 13, lesson: 1, topic: 'Channelization' }
];

function createFileCard(file) {
    const topicDisplay = file.topic ? file.topic : '';
    return `
        <div class="file-card" data-week="${file.week}" data-topic="${file.topic ? file.topic.toLowerCase() : ''}">
            <div class="week-badge">Week ${file.week} - Lesson ${file.lesson}</div>
            ${topicDisplay ? `<div class="file-title">${topicDisplay}</div>` : ''}
            <div class="file-meta">File: ${file.name}</div>
            <a href="${file.name}" class="download-btn" download>
                <span>📥</span>
                Download
            </a>
        </div>
    `;
}

function renderFiles(filesToRender = files) {
    const filesGrid = document.getElementById('filesGrid');
    filesGrid.innerHTML = filesToRender.map(createFileCard).join('');
}

function setupSearch() {
    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        if (searchTerm === '') {
            renderFiles();
            return;
        }

        const filteredFiles = files.filter(file =>
            file.name.toLowerCase().includes(searchTerm) ||
            (file.topic && file.topic.toLowerCase().includes(searchTerm)) ||
            file.week.toString().includes(searchTerm)
        );

        renderFiles(filteredFiles);
    });
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    renderFiles();
    setupSearch();
});

// Add keyboard shortcut for search
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'f') {
        e.preventDefault();
        document.getElementById('searchInput').focus();
    }
});
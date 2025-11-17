# Math Study Portal

A comprehensive web-based mathematics learning platform featuring interactive notes and practice tests across multiple subjects.

## Features

- **Browse Notes**: View detailed notes for all topics organized by subject
- **Practice Tests**: Access practice problems and final tests for each unit
- **Search**: Quickly find specific topics using the search functionality
- **Filter**: Filter tests by subject area
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## Subjects Covered

### Algebra 2
- 7 units covering foundations, functions, exponential/logarithmic, quadratics, polynomials, radicals, and modeling

### Precalculus
- 6 units covering functions, trigonometry, analytic trigonometry, polynomials, exponentials, and sequences

### Calculus 1
- 8 units covering limits, derivatives, applications, integration, and differential equations

### Calculus 2
- 7 units covering advanced integration techniques, parametric equations, series, and more

### Calculus 3
- 7 units covering vectors, multivariable calculus, and vector calculus

### Linear Algebra
- 8 units covering systems of equations, matrices, vector spaces, eigenvalues, and applications

### Geometry
- 7 weeks covering triangles, quadrilaterals, similarity, trigonometry, area/volume, and circles

## How to Use

### Running Locally

1. Simply open `index.html` in any modern web browser
2. No server required for basic functionality
3. All notes and tests are loaded from local markdown files

### Using a Local Server (Recommended)

For best results, use a local web server:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

### Navigation

**Browse Notes Tab:**
- Click on any topic in the sidebar to view its notes
- Use the search box to find specific topics
- Notes are rendered with proper formatting including equations, code blocks, and tables

**Practice Tests Tab:**
- Select a subject from the dropdown filter (or leave as "All Subjects")
- Click on either "Practice Problems" or "Final Test" for any unit
- Tests are displayed with full formatting for easy reading

## File Structure

```
maths/
├── index.html              # Main application page
├── styles.css              # Styling and responsive design
├── app.js                  # Application logic and data management
├── README.md               # This file
├── *-notes.md             # Notes for each topic
├── *-practice.md          # Practice problems for each topic
└── *-final-test.md        # Final tests for each topic
```

## Technology Stack

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6+)**: Vanilla JavaScript for functionality
- **Marked.js**: Markdown parsing and rendering

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

## Features Breakdown

### Notes Viewer
- Clean, readable formatting
- Syntax highlighting for code
- Proper mathematical notation rendering
- Hierarchical organization by subject and unit

### Practice Tests
- Two types per unit: Practice Problems and Final Tests
- Filter by subject for focused study
- Full markdown support for questions and formatting

### Responsive Design
- Mobile-friendly interface
- Adaptive layouts for different screen sizes
- Touch-friendly navigation

## Future Enhancements

Potential features for future development:
- Progress tracking
- Answer checking for multiple choice questions
- Bookmarking favorite topics
- Dark mode toggle
- Export notes to PDF
- Print-friendly layouts
- Interactive quizzes with instant feedback

## License

Educational use - all course materials included in this repository.

## Contributing

This is a study portal for personal use. The content is based on standard mathematics curricula.

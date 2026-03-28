Pixabay Image Search Web App

A simple, elegant web application that allows users to search for images using text input and displays the results in a responsive grid using the Pixabay API.

This project was built as part of an internship assignment and follows clean folder structure, modular JavaScript, and industry coding practices.

🚀 Features
Search images by keyword
Responsive image grid layout
Uses Pixabay public API
Environment variable for API key security
Clean, modular project structure
Vanilla JavaScript (no frameworks, no Vite)
Error handling and loading state


🛠️ Tech Stack
HTML5
CSS3 (Grid/Flexbox)
JavaScript (ES6)
Pixabay REST API


📁 Project Structure
pixabay-image-search/
│
├── node_modules/
├── public/
│
├── src/
│   ├── api/
│   │   └── pixabay.js
│   ├── components/
│   │   ├── SearchBar.js
│   │   ├── ImageGrid.js
│   │   └── ImageCard.js
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── .env          
├── package.json
├── .gitignore
└── README.md

🧠 How It Works
User enters a search term
app.js captures input and calls fetchImages.js
Images are fetched from Pixabay API
Results are dynamically rendered into a grid

📸 Sample Output

Images are displayed in a responsive grid with proper spacing and scaling.
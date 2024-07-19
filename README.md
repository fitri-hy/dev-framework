# DEV Framework
DEV Framework is a full-stack framework designed for building modern web applications with ease. It combines powerful backend features with a flexible and customizable frontend.

## Features
- Backend Support: Handles API routes and business logic with a clear separation of concerns.
- Frontend Flexibility: Leverages Tailwind CSS and modular components for a customizable UI.
- Modular Design: Easy to extend and integrate with other tools and services.

## Installation
- Clone the repository:
```
git clone https://github.com/fitri-hy/dev-framework.git
cd dev-framework
npm Install
npm start or npm run dev
```

## Folder Structure
```
DEV Framework/
│
├── controllers/
│   └── ApiController.js
│
├── public/
│   ├── images/
│   ├── js/
│   └── styles/
│
├── routes/
│   ├── Api.js
│   └── Web.js
│
├── services/
│   └── Service.js
│
├── src/
│   ├── components/
│   │   └── Welcome.dev
│   │
│   ├── pages/
│   │   ├── home.dev
│   │   └── about.dev
│   │
│   ├── partials/
│   │   ├── head.dev
│   │   └── script.dev
│   │
│   ├── tailwind.css
│   └── layout.dev
│
├── utils/
│   └── Base.js
│
├── app.js
├── postcss.config.js
├── tailwind.config.js
├── webpack.config.js
├── package.json
├── README.md
└── LICENSE
```
- controllers/: Contains controllers for handling incoming requests and responses.
- ApiController.js: Manages API-related logic.
- public/: Publicly accessible files such as images, JavaScript, and CSS.
- images/: Directory for storing image assets.
- js/: Directory for JavaScript files.
- styles/: Directory for CSS files.
- routes/: Contains route definitions for API and web pages.
- Api.js: API route definitions.
- Web.js: Web route definitions.
- services/: Contains business logic services.
- Service.js: Example service file for handling business logic.
- src/: Source files for frontend development.
- components/: Reusable UI components.
- Welcome.dev: Example component file.
- pages/: Page components.
- home.dev: Home page component.
- about.dev: About page component.
- partials/: Partial views for layout and scripts.
- head.dev: Header partial.
- script.dev: Script partial.
- tailwind.css: Tailwind CSS file.
- layout.dev: Layout template.
- utils/: Utility functions and helpers.
- Base.js: Example utility file.
- app.js: Entry point for the application.
- postcss.config.js: Configuration file for PostCSS.
- tailwind.config.js: Configuration file for Tailwind CSS.
- webpack.config.js: Configuration file for Webpack.
- package.json: Project metadata and dependencies.
- README.md: Project documentation.
- LICENSE: License information.

## Contributing
Contributions are welcome! Please follow these steps to contribute:
- Fork the repository.
- Create a new branch (git checkout -b feature/your-feature).
- Commit your changes (git commit -am 'Add new feature').
- Push to the branch (git push origin feature/your-feature).
- Create a new Pull Request.

### License
This project is licensed under the MIT License. See the LICENSE file for details.
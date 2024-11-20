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
├── app/
│   │
│   ├── controllers/
│   │	└── api/
│   │	│	└── ApiController.js
│   │	└── PageController.js
│   │
│   ├── routes/
│   │	├── Api.js
│   │	└── Web.js
│   │
│   ├── services/
│   │	└── Service.js
│   │
│   └── utils/
│   │	├── Route.js
│    	└── Base.js
│
├── public/
│   │
│   ├── images/
│   ├── js/
│   └── styles/
│
├── templates/
│   │
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
├── app.js
├── postcss.config.js
├── tailwind.config.js
├── webpack.config.js
├── package.json
├── README.md
└── LICENSE
```

## Contributing
Contributions are welcome! Please follow these steps to contribute:
- Fork the repository.
- Create a new branch (git checkout -b feature/your-feature).
- Commit your changes (git commit -am 'Add new feature').
- Push to the branch (git push origin feature/your-feature).
- Create a new Pull Request.

### License
This project is licensed under the MIT License. See the LICENSE file for details.
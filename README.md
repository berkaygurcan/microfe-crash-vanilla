# Micro Front-End Crash Course - Vanilla Example

This repository contains an implementation of a Micro Front-End approach based on a crash course I watched on YouTube. The project demonstrates the basics of modular and scalable web application architecture using plain HTML, CSS, and JavaScript.

## Course Reference

Watch the original YouTube tutorial here:  
[Micro Front-End Crash Course](https://youtu.be/S84MG1eIhaI)

## Project Structure

This project is structured into three independent micro front-end modules:

```
microfe-crash-vanilla/
├── barchart/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── package-lock.json
│   └── webpack.config.js
├── container/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── package-lock.json
│   └── webpack.config.js
├── linechart/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── package-lock.json
│   └── webpack.config.js
├── .gitignore
└── README.md
```

### Modules Explanation

- **container/**: The main host application that integrates and orchestrates micro front-end modules.
- **barchart/**: A standalone micro front-end module rendering a bar chart.
- **linechart/**: A standalone micro front-end module rendering a line chart.

Each module has its own dependencies, configuration, and build setup, ensuring modularity and independent development.

## Installation and Setup

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/microfe-crash-vanilla.git
   cd microfe-crash-vanilla
   ```

2. **Install dependencies for each micro front-end**  
   Navigate into each directory and run:
   ```bash
   npm install
   ```

3. **Run the applications**  
   Start each micro front-end module separately:
   ```bash
   npm start
   ```
   Each module will run on its respective port, and the container will integrate them dynamically.

## Additional Notes

- **Webpack** is used to bundle each module independently.
- The **container module** dynamically loads the barchart and linechart components.
- You can extend this project by adding more micro front-end modules.



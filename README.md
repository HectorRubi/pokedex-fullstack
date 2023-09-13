# Pokedex

[![License](https://img.shields.io/badge/License-MIT-blue)](#license)

Welcome to the Pokedex! This repository contains the necessary files and configurations to set up a pokedex application with a frontend, backend, and database, all managed using NPM Workspaces and Docker Compose. The automation of various tasks is achieved through a Makefile.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Docker: [Installation Guide](https://docs.docker.com/get-docker/)
- Docker Compose: [Installation Guide](https://docs.docker.com/compose/install/)
- Make: [GNU Official Page](https://www.gnu.org/software/make/)

## Getting Started

1. **Clone this repository to your local machine:**

   ```bash
   git clone https://github.com/HectorRubi/pokedex-fullstack-tech-challenge.git
   cd pokedex-fullstack-tech-challenge
   ```

2. **Create .env files for the backend and frontend based on the provided examples:**

   - For the backend, create a .env file in the `apps/server` directory and set the necessary database configuration variables, this configuration only works inside the container:

     ```plaintext
     DB_URI='postgres://admin:admin123@db:5432/pokemon'
     POKEAPI='https://pokeapi.co/api/v2'
     ```

   - For the frontend, create a .env file in the `apps/web` directory and set the backend URL:

     ```plaintext
     VITE_API_URL='http://localhost:3000/api'
     ```

3. **Build and run the Docker containers using Docker Compose. From the project root directory, run:**

   ```bash
   make start
   ```

   This command will start the frontend, backend, and database containers.

4. **Access the application in your web browser:**

   Open your browser and navigate to http://localhost:8080 to access the frontend of the application.

## Usage

The Pokedex Application allows you to explore a list of Pokemon and add some to favorites section. Here's a step-by-step guide on how to use the application:

1. **Accessing the Frontend:**

   Open your web browser and navigate to http://localhost:8080 to access the frontend of the application.

1. **Set your name:**
   Upon loading the application, you will be greeted with the home page displaying a from to set your name.

1. **Viewing the List of Pokemon:**

   After setting your name, you will see a list of Pokemon. Each Pokemon shows its name and two buttons, view and add to favorites.

1. **Viewing Pokemon Details:**

   Click on view button to open a modal window with detailed information about the selected Pokemon. The modal displays data such as its general info and stats. Also, there are a button to add to favorites.

1. **Add Pokemon to Favorites:**

   To add a Pokemon to Favorites just clic at the "Add to Favorites" button, then check Favorites section to see all your favorites.

1. **Remove Pokemon from Favorites:**

   To remove a Pokemon from Favorites just clic at the "Delete from Favorites" button.

1. **Review the data stored in the database:**

   If you want to access the information in the database, you will need to have the software installed to connect, such as pgadmin.
   Once you have it installed, you will have to connect to the container, which initializes a PostgreSQL database with the following access data:

   ```plaintext
   HOST=localhost
   PORT=5432
   USER=admin
   PASSWORD=admin123
   ```

## Structure

The project is structured as follows:

- package.json: Contains the workspaces for the application
- apps/web: Contains the React frontend application.
- apps/server: Contains the Express backend application.

You can see more comprehensive documentation at the following link: [Documentation](https://docs.google.com/document/d/1byBun-G5It6hHv3C3nYUc0bN6Ks2Zi4LdbSY6YSlOy4/edit?usp=sharing)

## Contributing

We welcome contributions from the community. To contribute to the project, follow these steps:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and commit them with descriptive commit messages.
- Push your changes to your fork.
- Create a pull request to the main repository's `master` branch.

## Contact

If you have any questions, suggestions, or need assistance, please feel free to contact us:

- Project Maintainer: Hector Rubi
- Email: hector.rubi.garcia@outlook.com

## License

Released under [MIT](/LICENSE) by [@Hector Rubi](https://github.com/HectorRubi).

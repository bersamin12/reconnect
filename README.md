# Project ServeQuest
Team Reconnect

## Table of Contents

- [Prerequisites](#prerequisites)
- [Running Manually](#running-manually)
  - [Setting Up the PostgreSQL Database](#setting-up-the-postgresql-database)
  - [Setting Up the Backend](#setting-up-the-backend)
  - [Setting Up the Frontend](#setting-up-the-frontend)
- [Troubleshooting](#troubleshooting)

## Prerequisites

Ensure you have the following installed on your system:
- Docker
- Docker Compose
- Python 3.10 or later
- Node.js (version 16 or later)
- npm (Node package manager)
- PostgreSQL

## Running Manually

### Setting Up the PostgreSQL Database

1. **Install PostgreSQL** if it is not already installed on your system. Follow the instructions for your operating system from the [official PostgreSQL documentation](https://www.postgresql.org/docs/).

2. **Create the database and user:**
   ```bash
   psql -U postgres
   CREATE DATABASE postgres;
   CREATE USER postgres WITH PASSWORD '1234';
   GRANT ALL PRIVILEGES ON DATABASE postgres TO postgres;
   ```

3. **Run the initialization script:**
   ```bash
   psql -U postgres -d postgres -f db/AngelHackDB\ \(2\).sql
   ```
### Setting Up the PostgreSQL easily
1. **Create Database using uploaded SQL file in root dir**

### Setting Up the Explore ML
1. C:\...\reconnect\backend\Database\Classes\MainController.py
2. replace path for "opportunities_file" in line 149 with full path from C:\

### Setting Up the Backend
refer to readme file in backend directory
1. **Navigate to the Database directory:**
   python -m venv venv
   venv\scripts\activate
   pip install -r requirements.txt
   uvicorn main:app --reload

### Setting Up the Frontend
1. **Navigate to the frontend directory:**
   ```bash
   python -m venv venv
   venv\scripts\activate
   cd frontend
   ```

2. **Install the required dependencies:**
   ```bash
   npm install
   ```

3. **Start the frontend development server:**
   ```bash
   npm start
   ```

## Troubleshooting

- **Docker Daemon Issues:**
  Ensure that Docker Desktop is running if you're on macOS or Windows. For Linux, ensure the Docker service is started with `sudo systemctl start docker`.

- **Environment Variables:**
  Ensure your `.env` file is correctly set up with the required database credentials.

- **Database Connection Issues:**
  Verify that PostgreSQL is running and that the credentials in your `config.py` match those in your PostgreSQL setup.

- **Dependency Issues:**
  Ensure all dependencies are installed correctly by checking the output of `pip install -r requirements.txt` and `npm install`.

---

This `README.md` file provides clear instructions on how to set up and run your project, both using Docker and manually, which should help users get started quickly and troubleshoot common issues.

# Eatsee DB

This repository stores the backend of the Eatsee Telegram bot.
The frontend is stored in [this repo](https://github.com/chuajunyu/eatseebot)

## What this is

This is a project made by me and some friends in our spare time before uni. Eatsee is a social meeting telegram bot which 
matches users with other nearby users with similar food preferences, and offers food recommendations.

## Features / Tech Stack

- Backend RestAPI built with Python FastAPI
- PostgreSQL Database 
- Algorithm to search for nearest food places 

## Set-up instructions

1. Set up the postgreSQL database with the `.sql` file

    > Tested on postgreSQL 15.2

2. Fill up the configuration values in `config.config`, make sure the config file path in test.py corresponds to the path of your config file

    ```
    database_host = empty
    database_name = empty
    database_user = empty
    password = empty
    ```

3. Set up your venv

    > Tested on python 3.10.11
    ```
    python -m venv venv
    venv\scripts\activate
    pip install -r requirements.txt
    ```

4. Run `uvicorn main:app --reload`

    `main` refers to the name of the script `main.py`
    `app` refers to the name of the FastAPI object `app`
    `--reload` means that the API will reload automatically when the code changes, useful for development, DO NOT DEPLOY


5. Refer to the IP addresses provided in terminal for SwaggerUI API Documentation 



## Running Test Cases

`python -m unittest Tests`


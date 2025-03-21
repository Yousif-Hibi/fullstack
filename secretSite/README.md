# Secrets Application

## Description
The **Secrets Application** is a secure platform where users can anonymously share and view secrets. It is designed with user authentication and data privacy as core principles. The project demonstrates the practical implementation of web development concepts, focusing on secure user authentication, database management, and OAuth integration.

## Features
- User registration and login with **bcrypt** for password hashing.
- Authentication using **Passport.js** (Local & Google OAuth 2.0).
- Secure session management with **express-session**.
- PostgreSQL database to store user credentials and secrets.
- Ability to submit and view secrets upon login.
- Frontend rendering with **EJS** templates.
- Responsive UI with **Bootstrap**.

## Technologies Used
- **Backend**: Node.js, Express.js
- **Authentication**: Passport.js, bcrypt, express-session
- **Database**: PostgreSQL
- **Frontend**: EJS, Bootstrap
- **Environment Management**: dotenv
- **OAuth Integration**: Google OAuth 2.0

## Installation
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)

### Setup
1. Clone the repository.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the root directory and add the following variables:
   ```env
   SESSION_SECRET=your_secret_key
   PG_USER=your_pg_username
   PG_HOST=your_pg_host
   PG_DATABASE=your_pg_database
   PG_PASSWORD=your_pg_password
   PG_PORT=your_pg_port
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```
4. Set up your PostgreSQL database:
   ```sql
   CREATE TABLE users (
       id SERIAL PRIMARY KEY,
       email VARCHAR(255) UNIQUE NOT NULL,
       password VARCHAR(255),
       secret TEXT
   );
   ```
5. Start the server:
   ```sh
   npm start
   ```

## Usage
1. Open your browser and navigate to `http://localhost:3000`.
2. Register or log in using your email and password.
3. Optionally, log in using Google authentication.
4. Submit and view secrets securely.

## File Structure
```
secrets-app/
│── public/                  # Static assets (CSS, JS, images)
│── views/                   # EJS templates
│   ├── home.ejs
│   ├── login.ejs
│   ├── register.ejs
│   ├── secrets.ejs
│   ├── submit.ejs
│   ├── partials/
│── .env                     # Environment variables
│── index.js                  # Main server file
│── package.json              # Dependencies and scripts
│── README.md                 # Project documentation
```

## API Endpoints
| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Home page |
| GET | `/login` | Login page |
| POST | `/login` | Authenticate user |
| GET | `/register` | Registration page |
| POST | `/register` | Register new user |
| GET | `/secrets` | View user secrets |
| GET | `/submit` | Secret submission page |
| POST | `/submit` | Store user secret |
| GET | `/logout` | Log out user |
| GET | `/auth/google` | Google OAuth login |

## Security Measures
- Passwords are **hashed** before storage using **bcrypt**.
- Session management prevents unauthorized access.
- PostgreSQL database is used to securely store user data.
- **Google OAuth 2.0** is implemented for secure authentication.



## Author
- **Yousif Hibi**


# list-todo-app

list-todo-app is an application that users can use to create their own list of tasks. This project was build in order to practice basic skills of coding both front-end and back-end.  It was created using React.JS for the front-end, and Node.JS and Express.JS for the back-end, and MySQL for the database.

## Final Product

- ### General view
Only logged in user can create a list of task:

!["General view"](https://github.com/NadiaPia/list-todo-app/blob/master/screenshots/general-view.png)

- ### Registration and login functionality
In order to complete the registration process successfully, users must fill in both the username and password fields. Failure to do so will result in an inactive registration button. Similarly, for a successful login, users must input the correct username and password to activate the Login button.

!["Registration and login"](https://github.com/NadiaPia/list-todo-app/blob/master/screenshots/login-registration.png)
!["Incorrect login"](https://github.com/NadiaPia/list-todo-app/blob/master/screenshots/incorrect-login.png)

- ### Edit, Delete and Comleted task functionality

!["Edit and Delete"](https://github.com/NadiaPia/list-todo-app/blob/master/screenshots/edit-delete.png)
!["Completed task"](https://github.com/NadiaPia/list-todo-app/blob/master/screenshots/completed-task.png)

## Dependencies for the Front-end

   - "@fortawesome/fontawesome-svg-core": "^6.4.0",
   - "@fortawesome/free-regular-svg-icons": "^6.4.0",
   - "@fortawesome/free-solid-svg-icons": "^6.4.0",
   - "@fortawesome/react-fontawesome": "^0.2.0",
   - "@testing-library/jest-dom": "^5.16.5",
   - "@testing-library/react": "^13.4.0",
   - "@testing-library/user-event": "^13.5.0",
   - "axios": "^1.3.5",
   - "prop-types": "^15.8.1",
   - "react": "^18.2.0",
   - "react-dom": "^18.2.0",
   - "react-router-dom": "^6.10.0",
   - "react-scripts": "5.0.1",
   - "web-vitals": "^2.1.4"
   
  ## Dependencies for the Back-end
  
   - "cors": "^2.8.5",
   - "eslint": "^8.39.0",
   - "express": "^4.18.2",
   - "mysql2": "^3.2.0",
   - "nodemon": "^2.0.22",
   - "sequelize": "^6.31.0",
   - "sequelize-cli": "^6.6.0"
  
## Getting Started
1. Fork and clone https://github.com/NadiaPia/list-todo-app
2. Install dependencies: `npm i`
3. cd to the server directory and run `npm start`
4. cd to the client directory and run `npm start`

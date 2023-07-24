# Email Sender System

Email Sender System Web Application

##Project Description:

The goal of this project is to create a full stack application that does: 
  1. Have a client frontend interface that allows users to input their emails
  2. Have an RESTFUL API that handles client emails address where it:
      a. POST request to MySQL Database
      b. Send an email to that users email address with their email address in the email contents


## How to install and run the project 

##note: the database and backend will fail, due to the fact the MySQL database is only on my local machine, where there have been no admin protocols used to allow other developers to access it. 

1. Navigate into the back-end directory
2. Run npm install to install all dependencies listed in the package.json file
3. Run npm run dev 
4. Open another terminal
5. Navigate into the front-end directory
6. Run npm install to install all dependencies listed in the package.json file
7. Run ng serve

## Video of Email Sender in action

video link  - []

## Improvments 

Like every application out there there can always be improvements some that have come to mind are:
1. On the frontend add a dynamically changing component where if a user places an invalid email address the front end will show text to please try again, and if the email was successful sent to the person the component will show text to let the user know their email was successful sent
2. More input field in the frontend, let users put their name so the email also includes their name





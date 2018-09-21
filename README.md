#Asset Inventory Manager
An app to simplify and automate the inventory management of the hardware assets of your company, allowing requestors one quick and easy place to request assets, see the status of their requests, as well as see the assets for which they are currently responsible/own. 

#Link to Deployed Version:
https://asset-manager-jem.herokuapp.com/

#Tech Stack:
React for the frontend
Redux for state management
Node/Express for the backend
MongoDB/Mongoose for the database
JWTs for authentication

This is the frontend for this app.  The backend can be found here: https://github.com/JemDobro/asset-manager-server.

All components live in the src directory. 
The app houses the header-bar, the landing page, the create account page, and the request page.  The header-bar is always visible.
The landing page houses the login form, and the dashboard.

###App opens with always visible header and log in form/create account
![Login](img/Login.PNG)

###Successfully creating account will automatically log user in, log out button will appear in header
![CreateAccount](img/CreateAccount.PNG)

###Successful login opens dashboard
![Dashboard](img/Dashboard1.PNG)

###Clicking Request Assets opens request form
![RequestForm](img/RequestForm.PNG)

###Fill out request form and submit will add request to dashboard with a pending status
![FilledRequestForm](img/FilledRequestForm.PNG)

###Dashboard with new request added
![DashboardPostRequest](img/DashboardPostRequest.PNG)

###Clicking cancel on pending request will cancel the request
![DashboardPostCancel](img/DashboardPostCancel.PNG)

###Clicking resubmit on cancelled request will resubmit the request
![DashboardPostResubmit](img/DashboardPostResubmit.PNG)

![Asset Manager Logo][logo]

[logo]: img/logo.png

# Asset Inventory Manager
An app to simplify and automate the inventory management of the hardware assets of your company, allowing requestors one quick and easy place to request assets, see the status of their requests, as well as see the assets for which they are currently responsible/own.  Requestors can also cancel pending requests they no longer need, and resubmit cancelled requests should they discover they will be needing the asset after all.

**_[Live Demo](https://asset-manager-jem.herokuapp.com/ "Asset Inventory Manager")_**

## Screenshots
| <img alt="Landing Page" src="img/LandingPage.PNG" width="350"> | <img alt="Registration" src="img/Registration.PNG" width="350"> | <img alt="LogIn" src="img/LogIn.PNG" width="350"> |
|:---:|:---:|:---:|
| Landing Page | Registration | Login |

| <img alt="Dashboard" src="img/Dashboard.PNG" width="350"> | <img alt="Request Assets" src="img/RequestAssets.PNG" width="350"> | <img alt="Request Assets Dashboard" src="img/RequestAssetsDashboard.PNG" width="350"> |
|:---:|:---:|:---:|
| Dashboard | Request Assets | Request Assets with Dashboard |

## Tech Stack:
### Frontend

  * HTML5
  * CSS3
  * JavaScript
  * React
  * Redux
  * Deployed to Heroku

### Backend

  * Node/Express
  * MongoDB/Mongoose/mLab
  * JWTs for authentication
  * Deployed to Heroku

This is the frontend for this app.  The backend can be found here: https://github.com/JemDobro/asset-manager-server.

All components live in the src directory. 
The app houses the navigation bar, header, the landing page, the create account page, the request page, and the footer.  
The navigation bar, header, and footer are always visible.
The landing page houses the login form, and the dashboard.

## V2 Feature List
  * Request form: drop downs of available items would be nice and remove errors
  * Date picker currently allows dates in the past to be chosen, and end date can be before start date--need some restrictions here
  * Add ability to edit a pending request, for example to change the dates asset is needed
  * Add Dashboard for admin that fulfills these requests that allows them to see all pending requests, change status of requests, delete requests, update the database, and alert requesters when their assets are ready to be picked up.
  * Add auto alerts for requesters when asset is ready to be picked up.
  * Add ability to scan assets and badges upon check-out and check-in, which will also update the database, and send any auto-notifications.
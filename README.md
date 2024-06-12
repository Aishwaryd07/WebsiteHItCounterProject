# Website Hit Counter Backend

This is a Node.js application that tracks website visits by different customers using multiple devices. The application is designed to ensure each customer visit is counted only once, regardless of the device used.

## Project Structure

hit-counter-backend/
├── node_modules/
├── src/
│ ├── controllers/
│ │ └── visitController.js
│ ├── models/
│ │ └── Visit.js
│ ├── routes/
│ │ └── visitRoutes.js
│ ├── app.js
│ └── server.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md



## API Endpoints

1. **Track Visit**
   - **URL**: `/api/visit`
   - **Method**: POST
   - **Body**: 
   ```json
   {
     "customerId": "string",
     "deviceId": "string",
     "websiteId": "string"
   }


Description: Tracks a visit to a website by a specific customer using a specific device.
Get Visit Count for Customer

URL: /api/customer/:customerId/website/:websiteId
Method: GET
Description: Retrieves the number of visits a specific customer has made to a specific website.
Get Overall Visit Count

URL: /api/website/:websiteId
Method: GET
Description: Retrieves the total number of visits to a specific website by all customers.

# Zendesk-Mario-Bravo
Zendesk Solution for Co-Op Coding challenge 
- This app was created with react and react-bootstrap framework 
- Created a wrapper on top of the API that Zendesk to make requests and hide my details at the same time 
- I used React Hooks to deal with the state of the application 
- Express.js to deal with the API Wrapper built on the zendesk API
- Bootstrap to have a modern view UI
```
- I will send details through private message on how to sucessfully run the server with credentials
- My API endpoint is https://zccmario.zendesk.com/api/v2/tickets
- Create a new folder called `config` with a file named: `default.json`
- Under user and token, place the credentials I send over email
- Like so:
```
![Ticket info](/s3.png)

# Deliverables 
 Connect to the Zendesk API
● Request all the tickets for your account
● Display them in a list
● Display individual ticket details
● Page through tickets when more than 25 are returned

# Working GIF
![Ticket info](/working.gif)


## To run server 
- File is found as SERVER.JS
- This project is built on Node and React framework
- At the root of the folder, run ```npm install``` 
- To Run server do, ```node SERVER.js```

# ui-lib is where the UI for the app can be found
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the ui-lib directory, you can run:
### `npm install` 
to install dependancies and 
### `npm start`
to run in localhost

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `Errors`
I could not find the solution to a bug when you request the tickets. In order to page through the tickets and their details please select any of the tabs and page through the available tickets. 

![Ticket info](/S1.png)
![Ticket info](/S2.png)

# Resources
- https://www.npmjs.com/package/react-paginate
- https://react-bootstrap.github.io/
- https://medium.com/how-to-react/create-pagination-in-reactjs-e4326c1b9855
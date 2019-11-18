## Notes

Requesting the route may take a minute if the heroku instance is cold, I did not add a loading state.

I built this application using `create-react-app`.  I did my best to mimic what I would do in a production environment. 

I added ES-lint for code and style enforcement. I used the AirBNB standard since it's what I'm used to and I like how it handles accessibility standards (though buttons can be a pain).

Material-UI is a nice component library I don't often get a chance to use but it comes with the additional benefit of having a scoped-styling solution in the form of JSS.

Due to time constraints I didn't add all of the error handling I would have liked.

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all the dependencies

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.


### Additional installs

Material-UI: ui library with some animations and styling
axios: http request library
redux: app-wide state management
redux-thunk: middleware to allow async redux actions
prop-types: prop types for components
eslint: linter installed with Airbnb standard
react-testing-library: replaces enzyme for things like shallow rendering
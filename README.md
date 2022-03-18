# Aircraft scheduling

You can check this app over this [link](https://jeanrantunes.github.io/jean-antunes-aircraft-scheduling).

## Rules

- You must choose an aircraft before choose the flights;
- Aircrafts must be on the ground at midnight, so you can NOT choose a flight after midnight;
- The turnaround time is always 20min for our airline;
- Aircrafts cannot "teleport" and cannot move without operating a flight, which means the origin of the flight to be added must be the same of last added flight;


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.
If you are on the root folder and run this command, the unit tests will run
If you are on the e2e folder and run this command, the e2e tests will run.


### `yarn deploy`

Deploys the app to github pages, over this [link](https://jeanrantunes.github.io/jean-antunes-aircraft-scheduling)

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn storybook`

Runs the app in the storybook.\
Open [http://localhost:6006](http://localhost:6006) to view it in your browser.
## Notes

- This project was created using node v16.14.0. To avoid eslint and tests errors, use this version
- The E2E tests are in the e2e folder and covers the happy and unhappy paths of the app
- To run e2e tests it is necessary to run the app
- As the e2e is a separate project, you need to install its dependencies before running





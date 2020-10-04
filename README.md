### Preview 

![alt text](https://github.com/akulkarni9/weather-dashboard/blob/main/screenshots/screenshot-1.png)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
"# weather-dashboard"  

### Testing this React Dashboard

Dependecies used for testing: 
`"jest-dom": "^4.0.0",
"mocha": "^8.1.3",
"@testing-library/jest-dom": "^5.11.4",
"@testing-library/react": "^11.0.4",
"frisby": "^2.1.3",
"react-test-renderer": "^16.13.1"`  

To run `unit tests`, run `yarn test`. It'll automatically run all tests. 

### Building this dashboard

Run `yarn build` in root directory. It correctly bundles React in production mode and optimizes the build for the best performance. 

This has been hosted in firebase. Following steps will help to understand how I deployed this in firebase. 
1. Run `yarn build` in your project's root.
2. Go to firebase console and create a project.
3. Install firebase tools, `npm i -g firebase-tools`
4. Run `firebase login`. 
5. After authentication part is complete, run this, `fire base init` and select `>( ) Hosting: Configure and deploy Firebase Hosting sites`.  
6. Select `Use an existing project`.  
7. Select the project that you created in firebase console.
8. Let the name of public directory be `build`. For other questions, choose default answer, i.e., `N`. 
9. When it is completed, you should get `.firebaserc` and `firebase.json` files in your project's root. 
10. Deploy the project, `firebase deploy`
If everything goes good, your website should be hosted in `https://<proejctnameinfirebaseconsole>.web.app/`  
*Note:* If you get any warnings such as `Mixed Content`, make sure that you load your resources in react app via `https://`. 

You can access my weather dashboard through https://weatherdashboard-39b51.web.app/. 

### Future plans
1. Build a weather prediction system by using data got by `openweathermap`.
2. Add subscription and send updates about weather prediction to subscribers.

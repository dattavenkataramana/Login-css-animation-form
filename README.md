# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


E-commerce  
This project is an e-commerce product display application built using React. It allows users to browse through a list of products, filter them by category, search for specific products, and add them to the cart. The application also includes user authentication using JWT tokens and redirects unauthenticated users to the login page.

Features
Product Listing: Display a list of products fetched from an API.
Search: Filter products based on search queries.
Category Filter: Filter products by different categories.
Add to Cart: Users can add products to their shopping cart.
User Authentication: Redirect users to the login page if they are not authenticated.
Responsive Design: The application is fully responsive and works on all devices, including desktops, tablets, and smartphones.
Technologies Used
React: JavaScript library for building user interfaces.
Redux: State management library for React.
React Router: Library for routing in React applications.
Axios: HTTP client for making API requests.
js-cookie: Library for handling cookies in the browser.
CSS: For styling the application.
Installation
Clone the repository:

sh
Copy code
git clone https://github.com/your-username/e-commerce-app.git
cd e-commerce-app
Install dependencies:

sh
Copy code
npm install
Start the development server:

sh
Copy code
npm start
The application will be available at http://localhost:3000.

Usage
Home Page: Displays a welcome message and navigation to the registration page for new users.
Product Page: Displays a list of products with options to filter by category and search by name or description.
Add to Cart: Click the "Add To Cart" button on any product to add it to the shopping cart.
Authentication: Users must be logged in to view the products. If not authenticated, they will be redirected to the login page.
Code Structure
Components
Home.js: The homepage component that displays a welcome message and navigation to the registration page.
Products.js: The product listing component that displays products, allows filtering by category, and adding to the cart.
CSS
home.css: Styles specific to the home component.
products.css: Styles specific to the products component.
State Management
actions.js: Contains Redux actions for adding products to the cart.
reducers.js: Contains Redux reducers for managing the state of the cart and products.
API
Products are fetched from https://fakestoreapi.com/products.
Responsive Design
The application uses CSS media queries to ensure that it is fully responsive and works well on all devices, including:

Desktops
Tablets
Smartphones
 

Acknowledgements
Fake Store API for providing the product data.
Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes.
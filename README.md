# E-Commerce App

This is a simple React-based e-commerce app that allows users to add products, search for products, and manage a product list. It also features login functionality with JWT authentication and private routing to protect access to the home page.

## Live Demo

You can try out the live version of the app here: [Live Demo](https://hackerproduct.netlify.app/)

## Features

- **User Authentication**: Login system with JWT authentication. A token is stored in the browser's `localStorage`.
- **Product Management**: Users can add new products with a name and price.
- **Product Search**: A search bar to filter products based on the name.
- **Product List**: Displays a list of added products with the option to delete a product.
- **Responsive Design**: The app is fully responsive and adapts to different screen sizes.

## Technologies Used

- **Frontend**: React, React Router, JSX
- **State Management**: React Hooks (`useState`)
- **Authentication**: JWT Authentication
- **Styling**: CSS for responsive and interactive design
- **API**: Integration with the mock API for login (`https://reqres.in/api/login`)

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/react-product-app.git

2. Navigate to the project directory:

     ```bash
     cd react-product-app
3. Install dependencies:

   ```bash
     npm install
4. Start the development server:
   ```bash
     npm run dev
## How to Use

1. **Login**:  
   On the login page, enter a valid email and password. For testing, you can use the credentials:
   - **Email**: `eve.holt@reqres.in`
   - **Password**: `tailwind`

2. **Home Page**:  
   Once logged in, you will be redirected to the home page where you can:
   - Add new products with a name and price.
   - Search for products by name using the search bar.
   - Delete products from the list.

3. **Logout**:  
   The app includes a logout button to clear the authentication token from `localStorage` and redirect the user back to the login page.



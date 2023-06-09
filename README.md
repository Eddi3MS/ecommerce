# Project:
Create a small e-commerce app, integrated with a fake API, using React, React Hooks, React Context and Typescript.
- [x]  React.js with vite;
   - modularization, breaking the app in small chunks
- [x]  Hooks & Custom Hooks;
- [x]  ~~Context API~~  Redux Toolkit;
   - I think redux is a better and easy tool to manage the cart state across components and keep it imutable while doing so.
- [x]  Typescript;
- [x]  React Query;
   - A great tool to cache http responses, it even deduplicate calls that are made from diferent components at same time.
- [x]  ZOD;
   - validate the format of the api return, throwing an error if something unexpected is returned

General considerations:
Design/UI is not important, but something minimally beautiful is a plus;
What will be reviewed is code organization, componentization, good practices;
We expect to see a functional app, so error/loading/success messages should be present;

[live](https://www.ecommercee.edsonmarcelo.com.br/).

- [x]  User should be able to see all Product Categories;
- [x]  User should be able to enter into a Category to see category details;
- [x]  User should be able to see the products of a category;
- [x]  User should be able to enter into a product to see the product details;
- [x]  User should be able to see the details of a product;
- [x]  User should be able to select the amount and add the product to the cart;
- [x]  User should be able to see the active cart;
- [x]  User should be able to remove a product from the cart;
- [x]  User should be able to cancel the order, cleaning up the cart;
- [x]  User should be able to confirm his order, seeing a success screen;
- [x]  User should be able to search by product name, to easily find a product to buy;
- [x]  The system should calculate the total amount of the cart;
- [x]  The system should persist the state of the cart even closing/opening the app;
- [x]  The system should do a pre-load of the data, so the user can navigate among screens without seeing reloading every time;

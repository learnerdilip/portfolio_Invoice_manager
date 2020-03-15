# PF_Invoice_Manager

## A portfolio project that helps manage the headache of Invoices/warranty management. The app aims to let users manage their invoices and get notified by mail or message about expiring warranties so the user can act on them(renew or purchase a new one).

## ✍🏻😀 USER STORIES:

- User (SignedIn) can see their Home with various rooms of their house on the (Home) landing page
- User can see a dashboard indicating recenty expiring warranties on home page
- User is able to create a new room with a room name and add products to it
- User is able to edit and delete a device
- User can enter a room to check all the appliances there - a list of all appliances with warranty expiration date(or days left)
- Each appliance has a product page (this should display the warranty document and some other details of the appliance)
- User is able to store name of the device, warranty start and expiry date, image of device,image of invoice, warranty card
- User get notifications like mail or message about the expiration

## 💾💾 The Database Model:

- User Table with email , Password
- Room Table with a userId(multiple rooms can have one user)
- Document table with Name of device, warranty start and expiry date, purchase Date, image of device, image of invoice, name on invoice

## Wireframing:

![](/images/Invoicemanager_wireframing.png)

## Technologies Used:

### Backend

- [Express (server)](/server/index.js)
- [Postgres, Sequelize (Database and ORM)](/server/db.js)
- [jsonwebtoken,bcrypt (Authentication)](server/auth/middleWare.js)
- [moment (Date and time manipulation)](server/product/router.js)
- [node-cron, nodemailer (For scheduling and sending emails)](server/product/router.js)

### Frontend

- [React, redux, thunk, react-router (front-end framework and supporting libraries)](client/src/App.js)
- [React-Bootstrap (Styling)](client/src/components/Heading.js)
- [Axios (for requesting endpoints)](client/src/store/product/action.js)
- [cloudinary (to upload images to cloud)](client/src/components/Product/ProductForm.js)
- [moment (for Date-time)](client/src/components/HelperFunctions.js)

### miscellaneous

- Git
- VS Code
- CLI

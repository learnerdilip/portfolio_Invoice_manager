# PF_Invoice_Manager

## A portfolio project that helps manage the headache of Invoices/warranty management. The app aims to let users manage their invoices and get notified by mail or message about expiring warranties so the user can act on them(renew or purchase a new one).

## ✍🏻😀 USER STORIES:

- User can see their Home with various rooms of their house on the (Home) landing page
- user is bale to create a new room with a room name
- User can enter a room to check all the appliances there - a list of all appliances with warranty expiration date(or days left)
- Each appliance has a product page (this should display the warranty document and some other details of the appliance)
- User is able to store name of the device, warranty start and expiry date, image of device,image of invoice, warranty card
- User can upload image and data is extracted from there (optional)
- User get notifications like mail or message about the expiration

## 💾💾 The Database Model:

- User Table with email , Password
- Room Table with a userId(multiple rooms can have one user)
- Document table with Name of device, warranty start and expiry date, purchase Date, image of device, image of invoice, name on invoice

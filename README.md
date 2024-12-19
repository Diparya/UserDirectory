# User Directory App
## Overview
The User Directory App is a React Native application built using Expo. It fetches a list of users from the JSONPlaceholder API and displays their information in a user-friendly interface. The app includes the following features:
- **User List Screen**: Displays a list of users with their names and emails.
- **User Details Screen**: Provides more detailed information about the selected user, such as their address and company details.
- **Infinite Scrolling**: Dynamically loads more users as you scroll down.
- **Navigation**: Allows smooth navigation between the user list and details screen.
- **Error Handling**: Gracefully handles API failures.
- **Modern UI**: Features a clean, responsive, and visually appealing design.
## Features
### User List Screen
- Fetches a list of users from the API.
- Displays user name and email in a card-style layout.
- Implements infinite scrolling to load additional users.
- Allows navigation to the details screen when a user is selected.
### User Details Screen
- Fetches detailed user information using the user ID.
- Displays name, email, address (street, city, and zip), and company name.
- Includes a back button to return to the user list.
### Error Handling
- Displays a loading spinner while fetching data.
- Shows an error message if data fetching fails.
### Technologies Used
- **React Native**: For building the mobile app.
- **Expo**: For easy app development and testing.
- **Expo Router**: For navigation.
- **Axios**: For making API calls.
- **JSONPlaceholder API**: Mock API for user data.

## Installation
Follow these steps to run the app on your local machine:
1. Clone the Repository:
   ```bash
   git clone https://github.com/Diparya/UserDirectory.git
   cd UserDirectory
2. Install Dependencies: Make sure you have Node.js and npm installed. Then, run:
   ```bash
   npm install
3. Install Expo CLI: If you don’t have Expo CLI installed, install it globally:
   ```bash
   npm install -g expo-cli
4. Run the App: Start the Expo development server:
   ```bash
   npm start
5. View the App:
- Use the Expo Go app on your mobile device (scan the QR code).
- Alternatively, use an emulator or simulator (iOS or Android).

## File Structure
      ```bash
      app/
        |-- index.jsx       # User List Screen
        |-- user/
            |-- [id].jsx    # User Details Screen
        |-- _layout.jsx     # Layout configuration for navigation

## How to Use
1. Launch the app using the steps outlined in the Installation section.
2. View a list of users on the main screen.
3. Tap on a user to navigate to the details screen.
4. View the detailed information about the user and return to the main screen using the back button.

## Design Highlights
- **Responsive Design**: Works seamlessly on various screen sizes.
- **Intuitive Navigation**: Easy to navigate between screens.
- **Optimized Performance**: Efficient API calls and smooth scrolling.

## Known Issues
- **Network Dependency**: The app requires a stable internet connection to fetch data.
- **Mock API Limitations**: The JSONPlaceholder API may have data limitations.

## Future Enhancements
- Add search functionality to filter users by name.
- Improve error handling with retry options.
- Implement unit tests for key components.

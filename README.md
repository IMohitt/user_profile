# React Native User App

## Overview

This is a simple React Native application that fetches and displays user data from the Random Data API. The app allows users to navigate through different user profiles using a "Next" and "Previous" button.

## Features

- Fetches 80 random user profiles from an API.
- Displays user details including avatar, name, email, and other credentials.
- Navigation between users using buttons.
- Responsive UI with Tailwind CSS styling.

## Installation & Setup

### Prerequisites

Ensure you have the following installed:

- Node.js and npm
- React Native CLI
- Expo CLI (if using Expo for development)

### Steps to Run Locally

1. Clone the repository:
   ```sh
   git clone <your-repo-link>
   cd react-native-user-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npx expo start
   ```
4. Scan the QR code with the Expo Go app (for Android/iOS) or run it on an emulator.

## API Used

This application fetches user data from the following API:

```
https://random-data-api.com/api/users/random_user?size=80
```

## Notes

- The app uses Tailwind CSS classes for styling.
- Avatar images might take time to load due to API response speed.
- Ensure you have a stable internet connection for fetching data.

## Contributing

Feel free to submit issues or pull requests to improve the project.

## License

This project is licensed under the MIT License.



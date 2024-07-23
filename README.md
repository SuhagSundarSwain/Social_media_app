# 🌐 Social Media App

Welcome to the Social Media App! 🎉 This project is a React-based application that allows users to view posts, create new posts, and interact with them. The app uses React Router for navigation, Bootstrap for styling, and Material UI icons for various UI components.

## Features ✨

- **View Posts**: Display a list of posts with titles, details, tags, and reactions. 📰
- **Create Posts**: Users can create new posts with a title, details, and tags. ✍️
- **Delete Posts**: Remove posts from the list. 🗑️
- **Loading Spinner**: Visual indicator while posts are being loaded. ⏳
- **Responsive Layout**: Designed to work on both desktop and mobile devices. 📱💻

## Technologies Used 🛠️

- **React**: JavaScript library for building user interfaces. ⚛️
- **React Router**: For routing and navigation. 🗺️
- **Bootstrap**: For styling and responsive design. 🎨
- **Material UI**: For icons and additional UI components. 📦
- **JSONPlaceholder**: Dummy API for fetching posts (or replace with your own API). 🔗

## Installation 🚀

1. **Clone the repository**:

    ```bash
    git clone https://github.com/SuhagSundarSwain/Social_media_app.git
    cd Social_media_app
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Run the application**:

    ```bash
    npm start
    ```

   The app will be available at `http://localhost:3000`. 🌍

## Project Structure 📂

- `src/components/`: Contains React components such as `Header`, `Footer`, `Post`, and `SideBar`.
- `src/store/`: Contains context and reducers for managing application state.
- `src/App.js`: Main application component that sets up routing and layout.
- `src/router.js`: Defines the application's routes.
- `src/App.css` and `src/App.module.css`: Styles for the application.

## Components 🧩

- **CreatePost**: Form for creating new posts. 📝
- **Posts**: Displays a list of posts. 📑
- **Post**: Individual post card. 🖼️
- **SideBar**: Navigation sidebar. 📊
- **Header**: Top header component. 🏠
- **Footer**: Footer component with social media links. 📣
- **LoadingSpinner**: Spinner for loading state. 🔄
- **EamptyPost**: Message displayed when there are no posts. 🚫

## State Management 📈

The application uses React's Context API for state management. The `AppUIContext` provides methods to create and delete posts, as well as manage the selected tab in the sidebar.

## API Endpoints 🌐

The application currently fetches posts from [JSONPlaceholder](https://dummyjson.com/posts). You can replace this with your own API endpoint if needed.

## Development 🛠️

- **Scripts**:
  - `npm start`: Run the app in development mode. 🏃‍♂️
  - `npm build`: Build the app for production. 🚧
  - `npm test`: Run tests. 🧪

- **Linting**: Uses ESLint for code quality and formatting. ✅

## Contributing 🤝

If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes. Make sure to follow the project's coding standards and include tests for any new features.

## License 📜

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact 📬

For any questions or feedback, please open an issue on the [GitHub repository](https://github.com/SuhagSundarSwain/Social_media_app.git). 👋

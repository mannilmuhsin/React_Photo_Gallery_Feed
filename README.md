Overview of the Project
The project is a photo gallery feed application, featuring a front-end built with React and a back-end built with Express. The application fetches photo gallery data from an external API and displays it on the front-end using dynamic rendering and various UI components.

Front-End Features
Reusability: The front-end code is divided into separate components (Header, ArticleList, ArticleItem, ArticleModal) for better reusability and maintainability.
Material-UI Components: The application uses Material-UI components like CircularProgress and Skeleton to enhance the user interface and provide visual feedback.
Modal for Full View: The application uses a modal component to display the full view of selected articles.
Loading Indicators: Circular progress indicators (CircularProgress) are used to show that new data is being loaded.
Axios for Fetching Data: The axios library is used for making HTTP requests to fetch data from the back end.
Tailwind CSS for Styling: Tailwind CSS is configured to provide utility-based styling for the application, enabling efficient and consistent UI design.
Back-End Features
Allowing All CORS: The back-end uses the cors middleware to allow cross-origin requests from any origin.
Dynamic Rendering with Path Parameters: The back-end uses path parameters to handle requests dynamically and fetch data from the external API based on the requested page number.
Configuration of Tailwind CSS for Styling
Tailwind CSS is a utility-first CSS framework that provides a comprehensive set of classes for styling components efficiently. The application is configured to use Tailwind for a consistent and modern design.

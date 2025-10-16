# Mentorship Blog Platform

A full-stack CRUD application built from the ground up with Node.js and Express. This platform is designed to allow mentors and experienced individuals to share advice, insights, and guidance with a community of learners.

---

## Live Demo

You can view and interact with the live, deployed version of the project here:

**[https://mentorship-blog.onrender.com](https://mentorship-blog.onrender.com)**

*(Note: The initial load may take up to 50 seconds as the free server instance spins up.)*

---

## Screenshot

![Mentorship Blog Screenshot]([LINK_TO_YOUR_SCREENSHOT_HERE])

---

## Features

This application includes the full range of CRUD (Create, Read, Update, Delete) functionality:

-   **Create:** Easily write and publish new posts through a dedicated form.
-   **Read:** View all posts on a clean, responsive card-based layout.
-   **Update:** Edit existing posts to correct typos or add new information.
-   **Delete:** Remove posts that are no longer needed.
-   **Data Persistence:** Post data is saved to a `posts.json` file on the server, ensuring that content remains even after the server restarts.
-   **Responsive Design:** Styled with Bootstrap for a great user experience on both desktop and mobile devices.

---

## Technologies Used

-   **Backend:** Node.js, Express.js
-   **Frontend:** EJS (Embedded JavaScript templates), Bootstrap 5, CSS3, HTML5
-   **Data Storage:** JSON file using Node's built-in `fs` module.
-   **Deployment:** Render

---

## Local Setup & Installation

To run this project on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/](https://github.com/)[YOUR_GITHUB_USERNAME]/[YOUR_REPO_NAME].git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd [YOUR_REPO_NAME]
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Run the application (for development):**
    ```bash
    npx nodemon index.js
    ```
    The server will start on `http://localhost:8080`.

---

## Future Enhancements

-   [ ] **User Authentication:** Implement user accounts to associate posts with specific authors.
-   [ ] **Image Uploads:** Allow users to upload an image along with their text-based posts.
-   [ ] **Database Migration:** Upgrade from a JSON file to a robust MongoDB database for better performance and scalability.

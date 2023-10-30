# Blog Application

## Description

Welcome to our Blog Application project. This application is built using the MERN stack, TypeScript, and Material-UI for styling. As of now, the application has the following features already implemented:

1. **Database Connection:** The application is successfully connected to a MongoDB database, ensuring that data can be stored and retrieved effectively.

2. **All-Blogs Page:** This page displays all the blogs fetched from the database. Users can view a list of all the blogs available in the application.

3. **Single-Blog Page:** Users can view a single blog in detail. This page fetches a blog by its ID from the database and displays it to the user.

## What is Still Needed

The application is a work in progress, and there are several activities left to be completed to enhance its functionality and user experience. These activities are broken down into the following categories:

### Code-Creation Activities

#### 1. Create an Endpoint for "Creating a Blog" using Chat-GPT

- Implement a new POST endpoint in the Express server that allows users to create a new blog.
- Utilize Chat-GPT to generate the code for this endpoint.

#### 2. Create the React Component for the "Create-A-Blog" Form

- Use Formik for form handling, Yup for validation, and Material-UI for styling.
- The form should have fields for the blog title, subtitle, content, and image.

#### 3. Create the Service to Send the Form Values to the API on Submit

- Implement a service function using Fetch to send the form data to the backend endpoint you created in activity 1.
- Ensure proper error handling and provide feedback to the user upon submission (loading state).

### Refactoring Activities

- Refactor the single-blog page (./client/src/components/BlogPost.tsx) using Chat-GPT. This component should decrease in complexity, be better documented, and use custom hooks.

### Testing Activities

#### 1. Test the Endpoint using Insomnia

- Create a test for a custom hook using Chat-GPT. When done, all tests should pass.

### Cloud (Deployment) Activities

- Prepare the application for deployment.
- Ensure that all environment variables and configurations are set up correctly for the deployment.

## Conclusion

This project is a great opportunity for junior developers to get hands-on experience with full-stack development, utilizing the MERN stack and interacting with Chat-GPT for content generation. By completing the activities outlined above, developers will not only enhance the functionality of the application but also gain valuable insights into best practices, testing, and deployment procedures.

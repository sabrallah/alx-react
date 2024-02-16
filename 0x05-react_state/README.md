# Project: 0x05. React states | ALX Africa Intranet

## Overview
This project, titled "0x05. React state," is designed to enhance React state management skills on the ALX Africa Intranet. The project covers various topics, including local state, controlled components, React context, context consumers, advanced state management, and an introduction to React Hooks.

## Author
Johann Kerbrat, Engineering Manager at Uber Works

## Project Details
- **Weight:** 1
- **Start Date:** Feb 14, 2024, 4:00 AM
- **End Date:** Feb 20, 2024, 4:00 AM
- **Checker Release:** Feb 15, 2024, 4:00 PM
- **Review:** Manual QA review required, auto review at the deadline

## Learning Objectives
By the end of this project, participants are expected to:
- Understand the state of a React component or container
- Grasp the lifecycle of a React component
- Learn to modify state and execute code in the correct order
- Work with controlled components and forms in React
- Reuse smaller components, keeping them pure, and lifting their state to principal containers
- Utilize React Hooks and create one
- Test state changes with Enzyme

## Tasks
### 1. [Adding a local state for notifications (Task 0)](./task_0/README.md)
- Modify App component to handle displayDrawer state
- Implement functions to show/hide notifications panel
- Update Notifications component accordingly
- Add tests for functionality and state changes

### 2. [Controlled components and state callback (Task 1)](./task_1/README.md)
- Create a local state for login and handle login submission
- Implement controlled components for email and password
- Modify state callback to enable/disable submit button
- Add tests for default state and button functionality

### 3. [Context (Task 2)](./task_2/README.md)
- Create a React Context for user information and logOut function
- Implement login and logout functions in App container
- Refactor components to use context values
- Add tests for context integration

### 4. [Context consumer & advanced state (Task 3)](./task_3/README.md)
- Modify Footer component to subscribe to context changes
- Display a "Contact us" link when the user is logged in
- Set and test listNotifications within the App container
- Refactor Notifications component using PureComponent
- Add tests for Footer and Notifications components

### 5. [Introduction to React Hook (Task 4)](./task_4/README.md)
- Use React Hooks to add a new style and checkbox to CourseListRow component
- Ensure proper styling changes when the checkbox is checked or unchecked
- Follow React Hook guidelines, do not convert to a Class component

## General Tips
- Follow specified coding guidelines and use allowed editors
- Ensure no lint errors in the console
- Regularly test application functionality as per given checkpoints
- Clean unused state and props after refactoring
- Set propTypes and defaultProps for any new prop
- Submit for manual review when tasks are completed

## Copyright
© 2024 ALX, All rights reserved.

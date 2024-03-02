# Curriculum Overview

## Short Specializations

- **Performance Boost**: Average increase by 134.2%
- **Currently Featured**: 0x08. React Redux reducer+selector

### Front-end Web Development

- **Core Technologies**: JavaScript, ES6, React
- **Mentor**: Johann Kerbrat, Engineering Manager at Uber Works
- **Grading Weight**: 1
- **Schedule**: Project kickstarts on Feb 28, 2024, 7:00 PM and culminates by Mar 6, 2024, 7:00 PM
- **Assessment**: Requires a Manual QA review upon completion

## Core Resources

- **Reading Materials**:
  - Understanding Reducers
  - Quality of Selectors
  - The Art of Writing Tests
  - Immutable Map & Documentation
  - Intro to Normalizr
  - Strategy for Normalizing State Shape

## Learning Outcomes

Upon wrapping up this sprint, you'll be adept at articulating:

- Reducers' purposes and their critical role in apps
- The necessity of reducers remaining pure
- Avoiding mutations within reducers
- Implementing Immutable in reducers
- Applying Normalizr in apps
- The essence of Selectors and their application timing

## Project Requirements

- **Permitted Editors**: vi, vim, emacs, Visual Studio Code
- **Syntax Compliance**: Files should conclude with a newline
- **Tech Stack**: Node 12.x.x and npm 6.x.x on Ubuntu 18.04 LTS
- **Documentation**: A README.md at the root is a non-negotiable

## Deliverables

Tasks focus on shaping a robust understanding and functional competence:

- **Task 0**: Craft a barebones reducer to drive the UI
  - Define the initial state requirements within `reducers/uiReducer.js`
  - Concoct a reducer function adept at responding to UI action types and execute tests to ensure efficacy.
- **Task 1**: Enhance the UI Reducer using Immutable.js
  - Integrate Immutable.js and re-engineer `uiReducer.js`
  - Update the tests to cover Immutable.js integrations
- **Task 2**: Put together a Courses reducer
  - Introduce a load action for course retrieval
  - Script the course reducer, instantiate the default state, and conduct tests for assured performance
- **Task 3**: Frame the reducer for notifications
  - Orchestrate a load action for fetching notifications
  - Compose the notification reducer and default state, and then methodically test for dependability
- **Task 4**: Refine with Normalizr & Immutable
  - Employ Normalizr to simplify mutations and update the schema accordingly
  - Revisit reducers and test files, fortifying them with Normalizr and Immutable.js
- **Task 5**: Deploy selectors for enhanced state access
  - Craft selectors for the Notifications reducer and validate them with a dedicated test suite

*For a detailed exposition of the tasks, please refer to the respective directories under the '[alx-react](https://github.com/alx-community/alx-react)' GitHub repository.*

## Repository Links

- **Main Repository**: [alx-react](https://github.com/sabrallah/alx-react)
- **Project Directory**: [](https://github.com/alx-community/alx-react)

---
© 2024 ALX. All rights reserved.
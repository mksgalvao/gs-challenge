# Phones Catalog

This project was made as a code challenge.
In this system, we can see a list of mobile phones, add a new one, delete and edit.
For this project, I use typescript, React, Redux, and Pact.

## Project Structure

# Project structure explained

```bash
└── src
    ├── actions (trigger all the services and dispatch reduxies)
    ├── assets (images and static files)
    ├── components (react components)
    ├── containers (connect redux store with components)
    ├── fixtures (mocks and sample data)
    ├── redux (reducers state machine)
    └── services (business and API layer)
```

## Getting Started

### Prerequisites

- node >= v14.15.0
- docker >= 20.10.0
- docker-compose >= 1.26.0

### Installing

use `npm install` or `yarn install` to install all the dependencies.

## Running the tests

`npm test` will start all the tests,
if you wanna start just one of them
use, npm or yarn and past the relative path of the test.

```
npm test src/components/CardComponent/specs/CardComponent.test.js
```

## Running front-end in development env

Run the pact stub server

```
docker-compose up
```

Run the React project

```
npm start
```

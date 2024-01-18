## Scrum-Poker Web Application

## Scrum-Poker: An Overview

Scrum-Poker, also known as Planning Poker, is a consensus-based Agile planning and estimating technique. Team members use physical cards resembling playing cards to estimate the effort needed to complete each task or story in a sprint. This app facilitates the process in a real-time collaborative environment, thanks to WebSockets.

## WebSocket Communication

The application establishes a WebSocket connection to the server using the URL `ws://localhost:8000/ws`. This WebSocket allows real-time communication between the client and the server, enabling instant data updates.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.6.

## Technologies Used

- Angular v16.1.6
- Angular Material v16.1.6
- Tailwind CSS v3.3.3

## Getting Started

To run this application locally on your machine, follow these steps:

1. Clone this repository to your local machine:
   git clone <url>
   Using https: https://github.com/deepakjtrigent/scrum_poker.git
   Using ssh: git@github.com:deepakjtrigent/scrum_poker.git

2. Navigate to the project folder:
   cd scrum_poker/FE

3. Install the dependencies using npm:
   npm install

4. Start the development server:
   ng serve

5. Open your web browser and go to `http://localhost:4200` to access the application.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Folder Structure

`src/app/landing-page`: Contains the initial landing page component.
`src/app/shared/services/storage.service`: Provides a service for fetching data from components and storing it efficiently.
`src/app/app-routing.module`: Handles the routing in the app, enabling seamless navigation between different components.



BACKEND STRUCTURE

## Building Scrum Poker with WebSockets for Instant Data Updates - Backend

This project focuses on creating a Scrum Poker web application using Angular as the frontend framework and WebSockets for real-time communication between the client and the server. Scrum Poker, also known as "Planning Poker," is an Agile planning and estimating technique used to determine the time and effort required to complete user stories within a sprint. Participants use cards resembling playing cards to indicate their estimates.


## Features


## Getting Started

1. **Clone the Repository**
```bash
git clone git@github.com:deepakjtrigent/scrum_poker.git

## Install and usage
1. **Navigate to the cloned directory**

    ```bash
    cd PokerBE/BE
    ```

2. **Install dependencies**

    ```bash
    pip install -r requirements.txt
    ```

3. **Run the server**

    ```bash
    uvicorn app:app --reload


4. **Go to browser**   
     ```
        Open your web browser and go to `http://localhost:8000` to access the application.



Your server is now up and running and ready to serve mock data!

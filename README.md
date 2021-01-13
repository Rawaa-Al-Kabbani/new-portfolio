# My portfolio

![This is what the homepage looks like.](https://github.com/Rawaa-Al-Kabbani/new-portfolio/blob/master/preview/portfolio.jpg?raw=true)

This is the repository for [my portfolio](http://www.rawaa-kabbani.com/). The portfolio is written in React.js, Material-UI, Node.js, Express.js and TypeScript. For testing it uses Jest and for containerization it uses Docker. It is also integrated with GitHub actions.


# Installation

## Pre-requirements
To set up your version of the portfolio you first need to create a new Firebase database and then download the credentials file for it. By default the API server loads the Firebase credentials from the "secrets" directory.
You also need to have Docker installed on your system.

## Running the portfolio
To run the portfolio simply run `docker-compose up --build` and then go to [http://localhost:3000](http://localhost:3000) in your browser.

By default the frontend will be exposed on port 3000 and the API server on port 5000. If you want to switch ports, simply change the port mappings in  the docker-compose file. 

## Deployment
Since both the frontend and the API server are containerized using Docker it should be simple to deploy to most cloud platforms.

Personally I chose to deploy to Heroku.
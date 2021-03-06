# Client Side

HabiPad is an online wellbeing habit tracker, where users can add habits they wish to track daily, weekly or monthly and regularly add their own logs when that habit is completed.

This README will guide you through how to setup the client side of the application and our experiences during this project.

The repo for the server side of the application can be found [here](https://github.com/Forum-123/Lap-2-Project-Server). The server deployment can be accessed [here](https://wellbeing-habit-tracker-server.herokuapp.com/).

## Installation & Usage

### Installation

* Clone or download the repository.

### Usage

* Run `http-server` to locally open the website in your default browser

## Technologies

* Netlify for deploying the client side
* HTML, CSS and JavaScript
* Wireframe.cc for planning and designing the UI
* Jest library to test JavaScript code
* VSCode was our code editor
* Github for version control
* Zoom and Slack for collaboration and communication between team members

## Process

1. Started by creating two different repositories for both the client and server.
2. Created an initial file structure for both repositories.
3. Created a Kanban board with all the tasks required inside each of these repositories.
4. Began by working on the server side by creating RESTful routes and writing some initial test suites. All data is stored within a Postgres SQL database. 
5. Created the UI using the plan designed on Wireframe as the guide with JS events and API calls to the server side of this application.
6. Finished by adding styling to the client side to improve the user interface and fixed up test suites on both sides.

## Wins & Challenges

### Wins

* Worked really well as a team, with constant communication throughout.
* Website successfully deployed on Netlify.
* Server successfully deployed on Heroku.
* Managed to get a coverage of more than 80%.
* Successfully managed to produce a site which met all of the basic requirements.
* Disabling the checkbox once it is completed for a day/week/month.
* Routes and HTTP requests provided us with the output we intended.

### Challenges

* Experienced a few issues when attempting to deploy the server side on Heroku.
* Faced some failed tests during the unit testing from the server side.

## Future Features

* Add a special effect to the habit entry when streak reaches a certain number.
* Add an alert so the user is reminded to tick the checkbox after 1 day/7 days/31 days.
* Ability to sort habits based on user's priority or needs.

## Bugs

* 

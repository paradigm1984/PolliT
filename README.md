# Poll it!

A user authenticated poll creation app. The user can create a poll of their choosing and have other users cast their votes. The application will then calculate the poll and display the results in google charts.


## Technologies used:

- HTML
- CSS
- Javascript
- Node JS
- MySQL


## NPM Packages used:

- bcryptjs
- body-parser
- connect-flash
- cookie-parser
- express
- express-breadcrumbs
- express-handlebars
- express-messages
- express-session
- express-validator
- mysql
- nodemon
- passport
- passport-http
- passport-local
- sequelize
- uuid
- webpack


## Version

1.1.0


## Usage

#### The landing page will allow the user to create a new account or log in to an existing one.

![alt text](screenshots/login.png "Log in page")


#### Once the user is logged in, he/she has the option to create 3 different types of polls:
1. A binary poll - A poll that asks a question and calls for either an agree or disagree response.
2. A multiple option poll - A poll that asks a question and allows the user to determine the choices and how many choices (up to 4).
3. A preferrential poll = A poll that asks a question and calls for a preference choice on a scale of 1-5.

![alt text](screenshots/homepage.png "Home page")

#### Binary poll:

![alt text](screenshots/binary.png "Binary page")

#### Multi poll:

![alt text](screenshots/multi.png "Multi page")

#### Preferential poll:

![alt text](screenshots/pref.png "Pref page")

#### After the user creates the poll, they will get a link to send it out.

![alt text](screenshots/poll-link.png "Link page")

#### Other users can then vote on the poll.

![alt text](screenshots/vote-poll-page.png "Vote page")

#### The results are then displayed on the logged in users dashboard in a google pie chart.

![alt text](screenshots/dashboard-with-votes.png "Pie chart page")


### Link to the live site

https://obscure-crag-43344.herokuapp.com/users/login


### Installation

Loginapp requires [Node.js](https://nodejs.org/) v4+ to run.


```sh
$ npm install
```

```sh
$ npm start
```

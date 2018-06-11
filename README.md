[![Build Status](https://travis-ci.org/Lennerblom/08-rest.svg?branch=master)](https://travis-ci.org/Lennerblom/08-rest)

# 08: Vanilla RESTful API
___
######TRAVIS: https://travis-ci.org/Lennerblom/08-rest
######HEROKU: https://vanilla-http-server08.herokuapp.com/
######PR: 
___
This HTTP server was created using the native NodeJS http module.  The home route URL is: https://vanilla-http-server08.herokuapp.com/ and accepts an optional name query string (?name=name), which will display "Hello" or "Hello Name" if option is added.  It will handle `GET`, `POST`, `PUT` and `DELETE` requests. 

###**In order to run my app, do the following:**

**1.** Click the following link to test the GET request in the browser:  https://vanilla-http-server08.herokuapp.com/api/v1/dogs?id=1976  
  * Change the id to any number greater than 0 and less that 2018.  It will return the number.
  * Change the number outside of the parameters above ex: 2019.  It will return a 404 error and write 'not found' in the console.
  * Leave the id query blank. It will return a 400 error and write 'bad request' in the console.

**2.** Using HTTPie run the following commands in the terminal:

  * `echo '{"ID":"","content":""}' | http PUT http://localhost:3002/api/v1/dogs?id=234`


  * `echo '{"ID":"100","content":"percent"}' | http POST http://localhost:3002/api/v1/dogs?id=100`


  * `echo '{"ID":"100"}' | http DELETE http://localhost:3002/api/v1/dogs?id=100`


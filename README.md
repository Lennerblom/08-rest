08: Vanilla RESTful API
======

This HTTP server was created using the native NodeJS http module.  The home route URL is: http://localhost:3002/ and accepts an optional name query string (?name=name), which will display "Hello" or "Hello Name" if option is added.  It will handle GET, POST, PUT and DELETE requests. For a GET request, the URL is: http://localhost:3002/api/v1/dogs?id=1976 will return 1976.  This server doesn't persist data in it's current state, and only numerical ID's greater that 0 and up to 2018 are accepted.  If another valid id is entered, a 404 'not found' will display, and a 400 error for queries that are not valid id requests.

* `POST` request
 * pass data as stringifed JSON in the body of a **POST** request 
 * return a 200 response with the POST'd JSON as the content
 * (Prove that you got the JSON from the POST)
* `PUT` request
 * pass `?id=<uuid>` as a query string parameter to identify a specific resource
  * pass data as stringifed JSON in the body of a **PUT** request 
  * return a 200 response with the JSON as the content
  * (Prove that you got the JSON from the PUT)
* `GET` request
 * pass `?id=<uuid>` as a query string parameter to identify a specific resource
 * return a 200 response, and a message that states "ID: <id>" was requested
 * (Prove that you got the id from the query string)
 * `DELETE` request
  * pass `?id=<uuid>` as a query string parameter to identify a specific resource
  * return a 200 response, and a message that states "ID: <id>" was deleted
  * (Prove that you got the id from the query string)
  
## Tests
* write a test to ensure that your api returns a status code of 404 for routes that have not been registered
* write tests to ensure the `/api/simple-resource-name` endpoint responds as described for each condition below:
 * `GET`: test 404, it should respond with 'not found' for valid requests made with an id that was not found
 * `GET`: test 400, it should respond with 'bad request' if no id was provided in the request
 * `GET`: test 200, it should contain a response body for a request made with a valid id
 * `POST`: test 400, it should respond with 'bad request' if no request body was provided or the body was invalid
 * `POST`: test 200, it should respond with the body content for a post request with a valid body

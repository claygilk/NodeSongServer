## About
---

This is a little test project I made to get used to working with Node.js, Express, MongoDB and Docker. This program runs a Express server inside of a Docker container that supports (very basic) CRUD operations on a MongoDB database being hosted on Mongo Atlas.

The Express server basically follows the MVC patter, except I didn't include a View because I wanted to focus on learning back-end technologies.

## Docker Instructions
---
```
$ docker build -t songs .

$ docker run -p 3000:3000 [IMAGE ID]
```
## API Endpoints
---

* `GET /songs` - Returns a list of all songs in the database
* `POST /songs` - Adds a song to the database. Accepts a JSON object in the request body
* `DELETE /songs/:id` - Retrieves a song by its ID and deletes it
* `PUT /songs/:id` - Retrieves a song by its ID and updates it. Accepts a JSON object in the request body
# Note app

## Routes and descriptions

* GET /api/server_status *****-->***** Return { *****success*****: (**Return true if theres no errors**), *****statuscode*****: (**Return status code**), *****msg*****: (**Return server message**), *****data*****: (**Return empty object**) }

* GET /api/notes *****-->***** Return { *****success*****: (**Return true if theres no errors**), *****statuscode*****: (**Return status code**), *****msg*****: (**Return server message**), *****data*****: (**Return the array of all the notes and their info in the database**) }

* POST /api/notes *****-->***** This routes you need to pass a json with {*****title*****:  "title of the note", *****description*****: "content of the note"}; Return {*****success*****: (**Return true if theres no errors**), *****statuscode*****: (**Return status code**), *****msg*****: (**Return server message**), *****data*****: (**Return the object of the created data**) }

* PUT /api/notes/{note id} *****-->***** Return { *****success*****: (**Return true if theres no errors**), *****statuscode*****: (**Return status code**), *****msg*****: (**Return server message**), *****data*****: (**Return the note object passed in the route**) }

* DELETE /api/notes/{note id} *****-->***** Return { *****success*****: (**Return true if theres no errors**), *****statuscode*****: (**Return status code**), *****msg*****: (**Return server message**), *****data*****: (**Return empty object**) }
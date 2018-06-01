This is a MyReads project of Udacity's React Fundamentals course for Front End program.

Prerequisites:  Node.js with npm is distribute must be installed on your computer.

Installing and Run:
* install all project dependencies with `npm install`
* start the development server with `npm start`

Deployment: it can be deploy by:
* add more functionalties to the project using React  
* adding additional css styles to make the website style better

##Backend Server:
 There is provided a file BooksAPI.js contains the methods needed to perform necessary operations on the backend:

* getAll() :
Returns a Promise which resolves to a JSON object containing a collection of book objects.
This collection represents the books currently in the bookshelves in your app.

* update(book, shelf) :
book: `<Object>` containing at minimum an `id` attribute
shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
Returns a Promise which resolves to a JSON object containing the response data of the POST request

* search(query)
query: `<String>`
Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

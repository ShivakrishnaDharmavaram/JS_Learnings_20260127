fetch("https://jsonplaceholder.typicode.com/posts/12")
  .then(response => response.json()) // Convert response to JSON
  .then(post => {
    console.log("Post Title:", post.title);
    return fetch("https://jsonplaceholder.typicode.com/users/" + post.userId);
  })
  .then(response => response.json()) // Get user info
  .then(user => {
    console.log("Author Name:", user.name);
  })
  .catch(error => {
    console.error("Error:", error.message);
  });
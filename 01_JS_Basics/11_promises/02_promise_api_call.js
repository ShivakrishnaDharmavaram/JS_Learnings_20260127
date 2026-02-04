fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Convert response to JSON
  })
  .then(data => {
    console.log("Post Title:", data.title);
    console.log("Post User ID:", data.userId);
//    console.log("Full Post Data:", JSON.stringify(data)); // Uncomment to see full data as a string
    console.log("Full Post Data:", data); // Log full data as an object
  })
  .catch(error => {
    console.error("Fetch error:", error.message);
  });

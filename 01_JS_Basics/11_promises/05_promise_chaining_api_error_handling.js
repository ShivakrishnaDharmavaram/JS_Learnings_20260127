const POST_ID = 101; 

const fetchJson = url =>
  fetch(url).then(res => {
    if (!res.ok) throw new Error(`${url} -> ${res.status} ${res.statusText}`);
    return res.json();
  });

fetchJson(`https://jsonplaceholder.typicode.com/posts/${POST_ID}`)
  .then(post => {
    console.log("Post Title:", post.title);
    console.log("User Id:", post.userId);
    return fetchJson(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
  })
  .then(user => {
    console.log("Author Name:", user.name);
  })
  .catch(err => {
    console.error("Error:", err.message);
  });
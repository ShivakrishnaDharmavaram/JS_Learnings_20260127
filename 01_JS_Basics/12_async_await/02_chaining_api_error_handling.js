async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${url} -> ${response.status} ${response.statusText}`);
  return response.json();
}

async function fetchPostAndAuthor(postId) {
  try {
    const post = await fetchJson(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    console.log('Post Title:', post.title);
    console.log('User Id:', post.userId);

    const user = await fetchJson(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
    console.log('Author Name:', user.name);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

fetchPostAndAuthor(10);
fetchPostAndAuthor(1000); // Testing with an invalid post ID to trigger error handling
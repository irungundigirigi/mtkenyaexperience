async function getPosts() {
    const response = await fetch('https://mt-kenya-experience-api.vercel.app/posts');
    return response.json()
  }
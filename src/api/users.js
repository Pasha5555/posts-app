export const getUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  
  return res.json()
}

export const getUserPosts = async userId => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)

  return res.json()
}

export const addNewPost = async (newPost, userId) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(newPost),
  })

  return res.json();
}
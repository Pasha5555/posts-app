const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getUsers = async() => {
  const res = await fetch(`${BASE_URL}/users`);

  return res.json();
};

export const getUserPosts = async(userId) => {
  const res = await fetch(`${BASE_URL}/posts?userId=${userId}`);

  return res.json();
};

export const addNewPost = async(newPost) => {
  const res = await fetch(`${BASE_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(newPost),
  });

  return res.json();
};

export const getPostComments = async(postId) => {
  const res = await fetch(`${BASE_URL}/comments?postId=${postId}`);

  return res.json();
};

export const removePost = async(postId) => {
  const res = await fetch(`${BASE_URL}/posts/${postId}`, {
    method: 'DELETE',
  });

  return res.json();
};

export const editPost = async(postData) => {
  const res = await fetch(`${BASE_URL}/posts/${postData.id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      body: JSON.stringify(postData),
    },
  });

  return res.json();
};

const apiUrl = process.env.API_URL;

interface login {
    username: string;
    password: string;
}

export const loginUser = async (login: login) => {
    const username = login.username;
    const password = login.password;
    const response = await fetch(`${apiUrl}/auth/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  return response.json();
};

export const createUser = async (login: login) => {
    const username = login.username;
    const password = login.password;
    const response = await fetch(`${apiUrl}/api/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  return response.json();
};
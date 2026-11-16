const BASE_URL = 'https://randomuser.me/api/';

export const BASE_INC = ['name', 'picture', 'gender', 'nat', 'login', 'dob', 'location'];

function getUsers({ page = 1, results = 10, gender, nat, inc = [] }) {
  const incList = Array.isArray(inc) ? inc : inc.split(',');

  const finalInc = [...new Set([...BASE_INC, ...incList])];

  const params = new URLSearchParams({
    page: String(page),
    results: String(results),
    inc: finalInc.join(','),
  });

  if (gender) params.set('gender', gender);
  if (nat) params.set('nat', nat);          

  return fetch(`${BASE_URL}?${params.toString()}`).then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to load users: ${response.status}`);
    }
    return response.json();
  });
}

export default getUsers;
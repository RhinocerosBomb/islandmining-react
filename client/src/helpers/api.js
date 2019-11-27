const apiUrl = 'http://localhost:9000/api';

const fetchApi = async (method, path, params = {}) => {
  let finalPath = path;
  let options = {
    method: method.toUpperCase(),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'token-type': 'Bearer',
      'access-token': localStorage.getItem('pw_token'),
      client: localStorage.getItem('pw_client'),
      uid: localStorage.getItem('pw_uid')
    }
  };

  if (method.toUpperCase() == 'GET') {
    finalPath +=
      '?' +
      Object.entries(params)
        .map(v => {
          if (Array.isArray(v[1])) {
            return `${v[0]}=${v[1].join(',')}`;
          } else {
            return `${v[0]}=${v[1]}`;
          }
        })
        .join('&');
  } else {
    options['body'] = JSON.stringify(params);
  }

  return await fetch(apiUrl + `/${finalPath}`, options)
    .then(res => {
      if (res.status >= 400) return false;

      const uid = res.headers.get('uid');
      const accessToken = res.headers.get('access-token');
      const client = res.headers.get('client');

      if (accessToken && client && uid) {
        setToken(accessToken, client, uid);
      }

      return res.json();
    })
    .then(response => {
      return response;
    })
    .catch(err => {
      console.info('__err__', err);
    });
};

const setToken = (token, client, uid) => {
  localStorage.setItem('pw_token', token);
  localStorage.setItem('pw_client', client);
  localStorage.setItem('pw_uid', uid);
};

const isLoggedIn = () => {
  return false;
  return !!localStorage.getItem('pw_token');
};

export { fetchApi, setToken, isLoggedIn };

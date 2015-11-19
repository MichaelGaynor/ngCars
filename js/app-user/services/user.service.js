let UserService = function(PARSE, $http, $cookies, $state) {
  
  this.signup    = signup;
  this.login     = login;
  this.storeAuth = storeAuth;
  this.checkAuth = checkAuth;

  function storeAuth (token) {
    $cookies.put('car-tracker-auth', token);
    setHeaders(token);
    // THIS REALLY NEEDS TO BE BETTER!!!
    alert('you are logged in');
    // SERIOUSLY
    $state.go('root.home');
  }

  function checkAuth () {
    let t = $cookies.get('car-tracker-auth');
    if (t) {
      setHeaders(t);
    } else {
      $state.go('root.login');
    }
  }

  function setHeaders (token) {
    PARSE.CONFIG.headers['X-Parse-Session-Token'] = token;
  }

  function signup (userObj) {
    return $http.post(PARSE.URL + 'users', userObj, PARSE.CONFIG);
  }

  function login (userObj) {
    return $http.get(PARSE.URL + 'login', {
      headers: PARSE.CONFIG.headers,
      params: userObj
    });
  }
  

};

UserService.$inject = ['PARSE', '$http', '$cookies', '$state'];

export default UserService;
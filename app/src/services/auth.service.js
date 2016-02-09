class AuthService {
    
    static get UNAUTHORIZED(){
        return 'UNAUTHORIZED';
    }
    
    static get FORBIDDEN(){
        return 'FORBIDDEN';
    }
    
    constructor($http) {
        this.$http = $http;
    }

    static AuthFactory($http) {
        return function (credentials) {
            return new AuthService($http, credentials);
        }
    }
    
    IsLoggedIn() {
        return false;
    }
}

AuthService.AuthFactory.$inject = ['$http'];

export default AuthService;
import Api from './api';
import ClientSession from './client-session.js';

class User {

    static login = (email, password) => {
        const url = 'users/login?include=roles';
        if (email && password) {
            const regExp = new RegExp
            (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
            return Api.create(url, {[regExp.test(email) ? "email": "username"]: email, "password": password, "ttl": 300000000})
                .then(
                    response => {
                        ClientSession.storeAuth(response.data, err => {
                            err ? console.error('cannot save session') : ''
                        });
                        return {
                            success: true,
                            message: "Logged in successfuly",
                            user: response.data
                        }
                    },
                    error => {
                        if (error.response) {
                            if (error.response.status == 401) {
                                return {
                                    error: true,
                                    message: "Invalid username or password"
                                }
                            }
                            return {
                                error: true,
                                message: "Oops error occured please. Try Again"
                            }
                        }
                        return {
                            error: true,
                            message: "Error: Not connected"
                        }

                    }
            );
        }
    };

    static sendReset = (email) => {

    };

    static changePassword =(password, accessToken) =>{
        
    };

    static register = (values) => {

    };

    static logout = () => {
       
    };

}


export default User;

import Api from './api';
import ClientSession from './client-session.js';

const pluralName = 'users';

class User {

    static login = (email, password) => {
        const url = pluralName+'/login?include=roles';
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

    // send  email to reset password
    static sendReset = (email) => {
        if(email){
            return Api.create("users/reset",{"email":email})
                .then((response) =>{
                    return {
                        success: true,
                        message: "Email sent Successfully",
                        user: response.data
                    }
                },
                    error => {
                        if (error.response) {
                            if (error.response.status === 401) {
                                return {
                                    error: true,
                                    message: "user email is not found"
                                }
                            }
                            //todo make sure  to give correct error response rather than Oops .....
                            return {
                                error: true,
                                message: "Oops error occurred please. Try Again"
                            }
                        }
                        return {
                            error: true,
                            message: "Error: You are not connected!"
                        }

                    }

                )

        }
    };

    static changePassword =(password, accessToken) =>{
        // remove the existing token first  ....
        ClientSession.removeAuth(err => {
            err ? console.log(err) : ''
        });
        if(password){
            return Api.create('users/reset-password'+accessToken,{"newPassword":password})
                .then(
                    response =>{
                        return {
                            success: true,
                            message: "password Changed successfully",
                            user: response.data
                        }
                    },
                    //todo make sure  to give correct error response rather than Oops .....
                    error => {
                        return {
                            error: true,
                            message: "Oops error occurred please. Try Again"
                        }
                    }
                ).catch(error => {
                    return {
                        error: true,
                        message: "Oops error Occurred please. Try Again"
                    }
                });
        }
    };

    static register = (values) => {

    };

    static logout = () => {
        ClientSession.getAccessToken(function (isLoggedIn, authData) {
            if (isLoggedIn && authData != null) {
                Api.create('users/logout', {})
                    .then(response => {
                        ClientSession.removeAuth(err => {
                            err ? console.log(err) : ''
                        });
                        window.location = "#/login";
                    });
            }
        });
    };

}


export default User;

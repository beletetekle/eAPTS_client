import Api from './api';
import ClientSession from './client-session.js';

const pluralName = 'InternalUsers';

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
        // const url = pluralName;
        /**
         * this one will double check if the required field is g fill or not (email and password)
         */

        if (values.email && values.username) {
            return Api.create(pluralName, values)
                .then(
                    response => {
                        //console.log(response);
                        // Since Registration is admin only we dont store auth here
                        // ClientSession.storeAuth(response.data, err => {
                        //     err ? console.error('cannot save session') : ''
                        // });
                        // get  the user id and by checking the the role  we can

                        const userId=response.data.id;
                        // get the id where name is admin or manger
                        //create the road mapping
                        // const filter2 = `filter={"where":{"or" : [{"first_name":{"like":".*${name}.*"}},{"last_name":{"like":".*${name}.*"}}]}}`;

                        let filter = '';
                        if (values.role == 'Super Admin'){
                            filter = `filter={"where":{"name":"super-admin"}}`;
                        } else if (values.role == 'Region Admin') {
                            filter = `filter={"where":{"name":"region-admin"}}`;
                        }  else if (values.role == 'Zone Admin') {
                            filter = `filter={"where":{"name":"region-admin"}}`;
                        }  else if (values.role == 'Woreda Admin') {
                            filter = `filter={"where":{"name":"woreda-admin"}}`;
                        }  else if (values.role == 'Health Center Admin') {
                            filter = `filter={"where":{"name":"health-admin"}}`;
                        }  else if (values.role == 'Store Admin') {
                            filter = `filter={"where":{"name":"store-admin"}}`;
                        }  else if (values.role == 'Importer Supplier') {
                            filter = `filter={"where":{"name":"importer-supplier"}}`;
                        }  


                        Api.find('roles',null,filter)
                            .then((response) =>{
                                console.log("Role id ",response.data);
                                const roleId=response.data[0].id;
                                const roleData={
                                    "principalType": "USER",
                                    "principalId": userId,
                                    "roleId": roleId
                                };
                                Api.create('roleMappings',roleData)
                                    .then((response) =>{})
                            });

                        return {
                            success: true,
                            message: "Registered successfully! Check email to confirm account",
                            user: response.data
                        }
                    },
                    error => {
                        console.log("Error",error);
                        if (error.response) {
                            if (error.response.status == 422) {
                                return {
                                    error: true,
                                    message: error.response.data.error.message
                                }
                            }
                        }else{
                            console.log("the general error1 is ",error);
                            return {
                                error: true,
                                message: "Oops error occurred please. Try Again"
                        }
                        }

                    }
                ).catch(error => {
                    console.log("the general error1 is ",error);
                    return {
                        error: true,
                        message: "Oops error Occurred please. Try Again"
                    }
                })
        }

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

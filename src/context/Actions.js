export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
    isAuthenticated: true, 
});

export const LoginFailure = () => ({
    type: "LOGIN_FAILURE",   
    isAuthenticated: false 
});


export const Logout = () => ({
    type: "LOGINOUT"
});

export const UpdateStart = (userCredentials) => ({
    type: "UPDATE_START",
});

export const UpdateSuccess = (user) => ({
    type: "UPDATE_SUCCESS",
    payload: user,
    isAuthenticated: true, 
});

export const UpdateFailure = () => ({
    type: "UPDATE_FAILURE",   
    isAuthenticated: false 
});
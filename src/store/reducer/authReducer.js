const initState = {
    authError: null
};

const authReducer = (state = initState, action) => {
    console.log("reducer");
    switch (action.type) {
        case "LOGIN_ERROR":
            console.log("login erroe");
            return {
                ...state,
                authError: "Login fail"
            };
        case "LOGIN_SUCESS":
            console.log("login succ");
            return {
                ...state,
                authError: null
            };
        case "SIGNOUT_SUCESS":
            console.log("signout succ");
            return {
                ...state,
            };
        case "SIGNUP_SUCESS":
            console.log("signup succ");
            return {
                ...state,
                authError: null
            };
        case "SIGNUP_ERROR":
            console.log("signup err");
            return {
                ...state,
                authError: action.error.message
            };
        default: return state;
    }
}

export default authReducer;
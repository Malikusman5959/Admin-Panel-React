export const appState = {
    loggedIn : false,
    loading: false,
    successMsg: false
};

export const appReducer = (state, action) => {

    switch (action.type) {
        case "login":
            return {
                ...state,
                loggedIn: true
            } 
    };

    switch (action.type) {
        case "loading":
            return {
                ...state,
                loading: action.payload
            }
    };

    switch (action.type) {
        case "signout":
            return {
                ...state,
                loggedIn: false
            }
    };

};
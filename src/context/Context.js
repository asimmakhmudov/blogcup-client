import { createContext, useEffect, useReducer } from 'react';
import userReducer from './Reducer';

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    isAdmin: false,
    error: false,
};

export const Context = createContext(INITIAL_STATE);


export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
        localStorage.setItem("token", `Bearer ${state?.user?.accessToken}`);
    }, [state.user]);
    return (
        <Context.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            isAdmin: state.isAdmin,
            accessToken: state.user?.accessToken,
            dispatch
        }}>
            {children}
        </Context.Provider>
    );
}

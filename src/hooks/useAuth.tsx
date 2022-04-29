import {createContext, ReactNode, useContext, useEffect, useState} from 'react';

interface AuthProviderProps {
    children: ReactNode;
}

interface AuthContextData {
    auth:{
        token:string | null;
        name:string | null;
    },
    setAuthLS:(newAuth:any)=>void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({children}:AuthProviderProps){

    const [auth, setAuth] = useState({token:localStorage.getItem("token"),name:localStorage.getItem("name")});

    const setAuthLS = (newAuth:any) => {
        setAuth(newAuth);
        localStorage.setItem("token",newAuth.token);
        localStorage.setItem("name",newAuth.name);
    }

    console.log("HOOK",auth);

    return(
        <AuthContext.Provider value={{auth,setAuthLS}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(){
    const context = useContext(AuthContext);
    return context;
}
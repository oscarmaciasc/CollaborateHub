import { useEffect } from "react";

const AuthProvider = ({logIn, logOut}) =>{
    useEffect(()=>{
        if(true) logIn();
        else logOut();
    },[])
    return <div>Esperando</div>
}

export default AuthProvider;
import { useSelector } from "react-redux"

const tokenExprice = (token) =>{
    if(!token)
    return false;
    return true;
}

const Auth =  () =>{
    const useState = useSelector(state=>state.user);
    const currentUser = state=>state.payload;
    if(currentUser && currentUser.token && !tokenExprice(currentUser.token))
    {       
        return currentUser;
    }
    else
    {
        return null;
    }

}
export default Auth;
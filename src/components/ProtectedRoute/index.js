import Cookies from 'js-cookie'
import {  Navigate } from 'react-router-dom'

const ProtectedRoute = ({element: Component}) => {
    const jwtToken = Cookies.get('jwt_token')
    console.log(jwtToken);
    
    if (jwtToken !== undefined){
        return <Component/>
    }else{
        return <Navigate to="/login" replace />;
    }
}

export default ProtectedRoute
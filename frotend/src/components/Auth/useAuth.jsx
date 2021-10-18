import { useContext } from 'react'
import { AuthContext } from './AuthProvider';

const useAuth = () => {

    const contextvalue = useContext(AuthContext)
    return contextvalue;
}

export default useAuth

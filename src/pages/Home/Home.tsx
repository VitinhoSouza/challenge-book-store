import {useAuth} from '../../hooks/useAuth';
import history from '../../history';

import logoutIcon from '../../assets/logout.svg'

import "./Home.scss"

export function Home(){

    const {auth,setAuthLS} = useAuth();
    
    if(auth.token === 'null' || auth.token === null){
        history.push('/login');
    }

    return(
        <div className="pageHome">
            HOME

            <div className='buttonLogout' onClick={()=>setAuthLS({token:null,name:null})}>
                <img src={logoutIcon} alt="logout" />
            </div>
        </div>
    )
}
import { useState } from 'react';

import { CustomInput } from '../../components/CustomInput/CustomInput';
import {booksAPI} from '../../services/booksAPI'
import {useAuth} from '../../hooks/useAuth';
import history from '../../history';

import nozImg from '../../assets/noz.svg';

import './Login.scss'

export function Login(){

    // desafio@appnoz.com.br
    // 12341234

    const {auth,setAuthLS} = useAuth();

    console.log(auth);
    if(auth.token !== 'null' && auth.token !== null){
        history.push('/');
    }

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [wrongLogin,setWrongLogin] = useState(false);

    async function tryLogin(){
        const res = await booksAPI.signin({email,password});
        if(res.token === 'invalid'){
            setWrongLogin(true);
        }
        else{
            setWrongLogin(false);
            setAuthLS(res);
            history.push("/");
        }
    }

    return(
        <div className='pageLogin'>
            <div className="content">
                <div className='title'>
                    <img src={nozImg} alt="NOZ" />
                    <span>Books</span>
                </div>

                <div className='formLogin'>
                    <CustomInput type='email' handleEmail={setEmail} />
                    <CustomInput type='password' handlePassword={setPassword} tryLogin={tryLogin}/>
                    {
                        wrongLogin && 
                        <div className='wrongLogin'>
                            Email e/ou senha incorretos.
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
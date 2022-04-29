import nozImg from '../../assets/noz.svg';
import { CustomInput } from '../../components/CustomInput/CustomInput';

import './Login.scss'

export function Login(){

    return(
        <div className='pageLogin'>
            <div className="content">
                <div className='title'>
                    <img src={nozImg} alt="NOZ" />
                    <span>Books</span>
                </div>

                <div className='formLogin'>
                    <CustomInput type='email'/>
                    <CustomInput type='password'/>
                </div>
            </div>
        </div>
    )
}
import './CustomInput.scss'


interface CustomInputProps {
    type: 'email' | 'password'
}

function inputEmail (){

    return(
        <div className="containerInput">
            <span>Email</span>
            <input type="email" placeholder='Digite seu email'/>
        </div>
    )
}

function inputPassword (){

    return(
        <div className="containerInput">
            <span>Senha</span>
            <input type="password" placeholder='Digite sua senha'/>
            <div className='buttonSend'>
                Entrar
            </div>
        </div>
    )
}

export function CustomInput({type}:CustomInputProps){

    switch(type){
        case 'email':
            return inputEmail();
        case 'password':
            return inputPassword();
        default:
            return(
                <div>
                </div>
            )
    }

}
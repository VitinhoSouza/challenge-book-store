import api from './api';

interface SigninInput{
    email:string;
    password:string;
}

export const booksAPI = {

    signin: async (signinInput:SigninInput) => {

        let newUser:any = {
            token:'invalid'
        };
        
        await api.post('/auth/sign-in',signinInput)
            .then((res:any) => {
                newUser['name'] = res.data.name;
                newUser['token'] = res.headers.authorization;
            }).catch((e:any) => {
                console.log(e);
            })

        return newUser;
    },

}
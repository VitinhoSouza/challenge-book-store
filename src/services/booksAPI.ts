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
                newUser['refreshToken'] = res.headers['refresh-token'];
                console.log(res);
                console.log(res.headers);
            }).catch((e:any) => {
                console.log(e);
            })

        return newUser;
    },

    refreshToken: async (token:string) => {
        let newUser:any = {
            token:'invalid'
        };

        await api.post('/auth/refresh-token',{},{headers:{'authorization':token}})
            .then((res:any) => {
                newUser['name'] = res.data.name;
                newUser['token'] = res.headers.authorization;
                newUser['refreshToken'] = res.headers['refresh-token'];
            }).catch((e:any) => {
                console.log(e);
            })
        return newUser;
    },

    getBooks:async (token:string|null,refreshToken:string|null,query:string) =>{
        let books:any = [];
        await api.get('/books'+query, { headers: { 'authorization': `${token}`, 'refresh-token': `${refreshToken}`}})
            .then((res:any) => {
                books = res.data;
                // console.log(res);
            }).catch((e:any) => {
                console.log(e);
            })
        return books;
    }

}
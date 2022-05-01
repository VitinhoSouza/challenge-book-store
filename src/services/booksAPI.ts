import api from './api';

interface SigninInput{
    email:string;
    password:string;
}

export const booksAPI = {

    signin: async (signinInput:SigninInput) => {

        const newUser:any = {
            token:'invalid'
        };
        
        await api.post('/auth/sign-in',signinInput)
            .then((res:any) => {
                newUser.name = res.data.name;
                newUser.token = res.headers.authorization;
                newUser.refreshToken = res.headers['refresh-token'];
            }).catch((e:any) => {
                console.log(e);
            })

        return newUser;
    },

    refreshToken: async (token:string,refreshToken:string|null) => {
        const newUser:any = {
            token:'invalid'
        };

        await api.post('/auth/refresh-token',
            {"refreshToken":refreshToken},
            {headers:{
                'Authorization':` ${token}`,
                'Refresh-token': ` ${refreshToken}`
            }})
            .then((res:any) => {
                newUser.name = res.data.name;
                newUser.token = res.headers.authorization;
                newUser.refreshToken = res.headers['refresh-token'];
            }).catch((e:any) => {
                console.log(e);
            })
        return newUser;
    },

    getBooks:async (token:string|null,refreshToken:string|null,query:string) =>{
        let response:any = {};
        await api.get(`/books${query}`, { headers: { 
                // 'access-control-allow-origin': '*',
                // 'access-control-expose-headers': ' authorization, refresh-token',
                'Authorization': ` ${token}`, 
                'Refresh-token': ` ${refreshToken}`
            }})
            .then((res:any) => {
                response = res.data;
            }).catch((e:any) => {
                console.log(e);
            })
        return response;
    }, 

    getOneBook:async (token:string|null,refreshToken:string|null,id:string) =>{
        let response:any = {};
        await api.get(`/books/${id}`, { headers: { 'authorization': `${token}`}})
            .then((res:any) => {
                response = res.data;
            }).catch((e:any) => {
                console.log(e);
            })
        return response;
    }, 

}


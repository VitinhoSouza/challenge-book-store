import {useAuth} from '../../hooks/useAuth';
import history from '../../history';

import logoutIcon from '../../assets/logout.svg'
import logoIcon from '../../assets/noz_black.svg';
import arrowIcon from '../../assets/arrow.svg';

import "./Home.scss"
import { useEffect, useState } from 'react';
import { BookCard } from '../../components/BookCard/BookCard';
import { booksAPI } from '../../services/booksAPI';

interface Book{
    id: string,
    title:string,
    description: string,
    authors: string[],
    pageCount: number,
    category: string,
    imageUrl: string,
    isbn10: string,
    isbn13: string,
    language: string,
    publisher: string,
    published: number
}

export function Home(){

    let arrayTest:Book[] = [];
    arrayTest.push({
        "id": "8f41b92c7460b9337660427e",
        "title": "A Culpa é das Estrelas",
        "description": "Hazel foi diagnosticada com câncer aos treze anos e agora, aos dezesseis, sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões. Ela sabe que sua doença é terminal e passa os dias vendo tevê e lendo Uma aflição imperial, livro cujo autor deixou muitas perguntas sem resposta. ",
        "authors": [
          "Jonh Green"
        ],
        "pageCount": 288,
        "category": "Romance",
        "imageUrl": "https://d2drtqy2ezsot0.cloudfront.net/appnoz/Book-0.jpg",
        "isbn10": "0062856626",
        "isbn13": "978-0062856623",
        "language": "Inglês",
        "publisher": "Intrínseca",
        "published": 2002
    })
    arrayTest.push({
        "id": "8f41b92c7460b9337660427e",
        "title": "A Culpa é das Estrelas",
        "description": "Hazel foi diagnosticada com câncer aos treze anos e agora, aos dezesseis, sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões. Ela sabe que sua doença é terminal e passa os dias vendo tevê e lendo Uma aflição imperial, livro cujo autor deixou muitas perguntas sem resposta. ",
        "authors": [
          "Jonh Green"
        ],
        "pageCount": 288,
        "category": "Romance",
        "imageUrl": "https://d2drtqy2ezsot0.cloudfront.net/appnoz/Book-0.jpg",
        "isbn10": "0062856626",
        "isbn13": "978-0062856623",
        "language": "Inglês",
        "publisher": "Intrínseca",
        "published": 2002
    })
    arrayTest.push({
        "id": "8f41b92c7460b9337660427e",
        "title": "A Culpa é das Estrelas",
        "description": "Hazel foi diagnosticada com câncer aos treze anos e agora, aos dezesseis, sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões. Ela sabe que sua doença é terminal e passa os dias vendo tevê e lendo Uma aflição imperial, livro cujo autor deixou muitas perguntas sem resposta. ",
        "authors": [
          "Jonh Green"
        ],
        "pageCount": 288,
        "category": "Romance",
        "imageUrl": "https://d2drtqy2ezsot0.cloudfront.net/appnoz/Book-0.jpg",
        "isbn10": "0062856626",
        "isbn13": "978-0062856623",
        "language": "Inglês",
        "publisher": "Intrínseca",
        "published": 2002
    })
    arrayTest.push({
        "id": "8f41b92c7460b9337660427e",
        "title": "A Culpa é das Estrelas",
        "description": "Hazel foi diagnosticada com câncer aos treze anos e agora, aos dezesseis, sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões. Ela sabe que sua doença é terminal e passa os dias vendo tevê e lendo Uma aflição imperial, livro cujo autor deixou muitas perguntas sem resposta. ",
        "authors": [
          "Jonh Green"
        ],
        "pageCount": 288,
        "category": "Romance",
        "imageUrl": "https://d2drtqy2ezsot0.cloudfront.net/appnoz/Book-0.jpg",
        "isbn10": "0062856626",
        "isbn13": "978-0062856623",
        "language": "Inglês",
        "publisher": "Intrínseca",
        "published": 2002
    })
    const [books,setBooks] = useState<Book[]>(arrayTest);

    const {auth,setAuthLS} = useAuth();
    
    if(auth.token === 'null' || auth.token === null){
        history.push('/login');
    }

    function mountCards(){
        console.log(books);
        return(
            books.map((book:Book) => {
                return <BookCard 
                            id={book.id}
                            authors={book.authors}
                            category={book.category}
                            description={book.description}
                            imageUrl={book.imageUrl}
                            isbn10={book.isbn10}
                            isbn13={book.isbn13}
                            language={book.language}
                            pageCount={book.pageCount}
                            published={book.published}
                            publisher={book.publisher}
                            title={book.title}
                            key={book.id}
                        />
            })
            
        )
    }

    async function tryGetBooks(){
        const res = await booksAPI.getBooks(auth.token,auth.refreshToken,
                `?page=${1}&amount=${12}&category=${'biographies'}`);
        console.log(res);
    }

    useEffect(()=>{
        tryGetBooks();
    },[])

    return(
        <div className="pageHome">
            <div className='container'>
                <header>
                    <div className='title'>
                        <img src={logoIcon} alt="NOZ" />
                        <span>Books</span>
                    </div>
                    <div className='userWithLogout'>
                        <div className='user'>Bem vindo, 
                            <span> {auth.name}!</span>
                        </div>
                        <div className='buttonLogout' onClick={()=>setAuthLS({token:null,name:null,refreshToken:null})}>
                            <img src={logoutIcon} alt="logout" />
                        </div>
                    </div>
                </header>

                <div className='content'>
                    {mountCards()}
                </div>

                <div className='turnPage'>
                    <div className='text'>
                        Página <span> 1 </span> de <span>100</span>
                    </div>
                    <i className='previewArrow-container'>
                        <img src={arrowIcon} alt="preview" className='previewArrow'/>
                    </i>
                    <i className='nextArrow-container'>
                        <img src={arrowIcon} alt="next" className='nextArrow'/>
                    </i>
                </div>
            </div>

            
        </div>
    )
}
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import BookCard from "../../components/BookCard/BookCard";
import { booksAPI } from "../../services/booksAPI";
import { useAuth } from "../../hooks/useAuth";

import logoutIcon from "../../assets/logout.svg";
import logoIcon from "../../assets/noz_black.svg";
import arrowIcon from "../../assets/arrow.svg";

import "./Home.scss";

interface Book {
  id: string;
  title: string;
  description: string;
  authors: string[];
  pageCount: number;
  category: string;
  imageUrl: string;
  isbn10: string;
  isbn13: string;
  language: string;
  publisher: string;
  published: number;
}

export default function Home() {
  const arrayTest: Book[] = [];
  arrayTest.push({
    id: "8f41b92c7460b9337660427e",
    title: "A Culpa é das Estrelas",
    description:
      "Hazel foi diagnosticada com câncer aos treze anos e agora, aos dezesseis, sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões. Ela sabe que sua doença é terminal e passa os dias vendo tevê e lendo Uma aflição imperial, livro cujo autor deixou muitas perguntas sem resposta. ",
    authors: ["Jonh Green"],
    pageCount: 288,
    category: "Romance",
    imageUrl: "https://d2drtqy2ezsot0.cloudfront.net/appnoz/Book-0.jpg",
    isbn10: "0062856626",
    isbn13: "978-0062856623",
    language: "Inglês",
    publisher: "Intrínseca",
    published: 2002,
  });
  arrayTest.push({
    id: "8f41b92c7460b9337660427e",
    title: "A Culpa é das Estrelas",
    description:
      "Hazel foi diagnosticada com câncer aos treze anos e agora, aos dezesseis, sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões. Ela sabe que sua doença é terminal e passa os dias vendo tevê e lendo Uma aflição imperial, livro cujo autor deixou muitas perguntas sem resposta. ",
    authors: ["Jonh Green"],
    pageCount: 288,
    category: "Romance",
    imageUrl: "https://d2drtqy2ezsot0.cloudfront.net/appnoz/Book-0.jpg",
    isbn10: "0062856626",
    isbn13: "978-0062856623",
    language: "Inglês",
    publisher: "Intrínseca",
    published: 2002,
  });
  arrayTest.push({
    id: "8f41b92c7460b9337660427e",
    title: "A Culpa é das Estrelas",
    description:
      "Hazel foi diagnosticada com câncer aos treze anos e agora, aos dezesseis, sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões. Ela sabe que sua doença é terminal e passa os dias vendo tevê e lendo Uma aflição imperial, livro cujo autor deixou muitas perguntas sem resposta. ",
    authors: ["Jonh Green"],
    pageCount: 288,
    category: "Romance",
    imageUrl: "https://d2drtqy2ezsot0.cloudfront.net/appnoz/Book-0.jpg",
    isbn10: "0062856626",
    isbn13: "978-0062856623",
    language: "Inglês",
    publisher: "Intrínseca",
    published: 2002,
  });
  arrayTest.push({
    id: "8f41b92c7460b9337660427e",
    title: "A Culpa é das Estrelas",
    description:
      "Hazel foi diagnosticada com câncer aos treze anos e agora, aos dezesseis, sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões. Ela sabe que sua doença é terminal e passa os dias vendo tevê e lendo Uma aflição imperial, livro cujo autor deixou muitas perguntas sem resposta. ",
    authors: ["Jonh Green"],
    pageCount: 288,
    category: "Romance",
    imageUrl: "https://d2drtqy2ezsot0.cloudfront.net/appnoz/Book-0.jpg",
    isbn10: "0062856626",
    isbn13: "978-0062856623",
    language: "Inglês",
    publisher: "Intrínseca",
    published: 2002,
  });

  const [books, setBooks] = useState<Book[]>(arrayTest);
  const [actualPage, setActualPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);

  const { auth, setAuthLS } = useAuth();
  const navigate = useNavigate();

  if (auth !== undefined && (auth.token === "null" || auth.token === null)) {
    navigate("/");
  }

  function mountCards() {
    return books.map((book: Book) => (
      <BookCard
        id={book.id}
        authors={book.authors}
        // category={book.category}
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
    ));
  }

  function tryLogout() {
    setAuthLS({ token: null, name: null, refreshToken: null });
  }

  async function tryGetBooks(numberPage = 1) {
    setActualPage(numberPage);
    const res = await booksAPI.getBooks(
      auth?.token,
      auth?.refreshToken,
      `?page=${numberPage}&amount=${12}`
    );
    if (res.data !== undefined) {
      setBooks(res.data);
      setActualPage(res.page);
      setTotalPages(res.totalPages);
    }
  }

  async function tryRefreshToken() {
    let request = auth !== undefined ? "Y" : "N";

    request = request === "Y" && auth.token !== null ? auth.token : "";

    const res = await booksAPI.refreshToken(request, auth.refreshToken);
    console.log(res);
  }

  useEffect(() => {
    tryRefreshToken();
    tryGetBooks();
  }, []);

  return (
    <div className="pageHome">
      <div className="container">
        <header>
          <div className="title" title="appLogo">
            <img src={logoIcon} alt="NOZ" />
            <span>Books</span>
          </div>
          <div className="userWithLogout">
            <div className="user">
              Bem vindo
              <span> {auth !== undefined ? `, ${auth.name}` : ""}!</span>
            </div>
            <button
              type="button"
              className="buttonLogout"
              onClick={tryLogout}
              title="logoutButton"
            >
              <img src={logoutIcon} alt="logout" />
            </button>
          </div>
        </header>

        <div className="content">{mountCards()}</div>

        <div className="turnPage" title="pagination">
          <div className="text">
            Página
            <span title="actualPage"> {actualPage} </span>
            de
            <span title="totalPages"> {totalPages}</span>
          </div>
          <button
            type="button"
            disabled={actualPage === 1}
            className={
              actualPage === 1
                ? "previewArrow-container disabled"
                : "previewArrow-container"
            }
            onClick={() => tryGetBooks(actualPage - 1)}
            title="previewArrow"
          >
            <img src={arrowIcon} alt="preview" className="previewArrow" />
          </button>
          <button
            type="button"
            disabled={actualPage >= totalPages && true}
            className={
              actualPage >= totalPages
                ? "nextArrow-container disabled"
                : "nextArrow-container"
            }
            onClick={() => tryGetBooks(actualPage + 1)}
            title="nextArrow"
          >
            <img src={arrowIcon} alt="next" className="nextArrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

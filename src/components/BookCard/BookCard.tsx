import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { booksAPI } from "../../services/booksAPI";
import ModalBook from "../BookModal/BookModal";

import "./BookCard.scss";

interface Book {
  id: string;
  title: string;
  description: string;
  authors: string[];
  pageCount: number;
  // category?: string;
  imageUrl: string;
  isbn10: string;
  isbn13: string;
  language: string;
  publisher: string;
  published: number;
}

export default function BookCard({
  imageUrl,
  title,
  authors,
  pageCount,
  publisher,
  published,
  // category,
  description,
  id,
  isbn10,
  isbn13,
  language,
}: Book) {
  const [modalBookIsOn, setModalBookIsOn] = useState(false);
  const [book, setBook] = useState<Book>({
    authors,
    description,
    id,
    imageUrl,
    isbn10,
    isbn13,
    language,
    pageCount,
    published,
    publisher,
    title,
  });
  const { auth } = useAuth();

  const authorsTreated = authors.slice(0, 2);

  function handleModal() {
    setModalBookIsOn(!modalBookIsOn);
  }

  async function tryGetOneBook() {
    const res = await booksAPI.getOneBook(auth?.token, id);
    if (res !== undefined) {
      setBook(res);
      handleModal();
    }
  }

  return (
    <>
      {modalBookIsOn && (
        <ModalBook
          // id={id}
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
          toggleModal={handleModal}
        />
      )}

      <div className="bookCard" onClick={tryGetOneBook} title="bookCard">
        <img src={imageUrl} alt="book cover" className="photoBook" />
        <div className="info">
          <div className="header" title="bookCardHeader">
            <span className="title">
              {title.length > 25 ? `${title.substr(0, 25)}...` : title}
            </span>
            {authorsTreated.map((authorName: string) => (
              <span key={authorName} className="author">
                {authorName}
                {authors.length > 2 && authorName === authorsTreated[1]
                  ? "..."
                  : ""}
              </span>
            ))}
          </div>

          <div className="mainInfo" title="bookCardInfo">
            <span>{pageCount} páginas</span>
            <span>
              Editora{" "}
              {publisher.length > 15
                ? `${publisher.substr(0, 15)}...`
                : publisher}
            </span>
            <span>Publicado em {published}</span>
          </div>
        </div>
      </div>
    </>
  );
}

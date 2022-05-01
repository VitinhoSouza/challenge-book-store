import { useState } from "react";
// import { useAuth } from "../../hooks/useAuth";
// import { booksAPI } from "../../services/booksAPI";
import ModalBook from "../BookModal/BookModal";

import "./BookCard.scss";

interface Book {
  id: string;
  title: string;
  description: string;
  authors: string[];
  pageCount: number;
  //   category: string;
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
  //   category,
  description,
  id,
  isbn10,
  isbn13,
  language,
}: Book) {
  const [modalBookIsOn, setModalBookIsOn] = useState(false);

  // const { auth } = useAuth();

  function handleModal() {
    setModalBookIsOn(!modalBookIsOn);
  }

  // async function tryGetOneBook() {
  //   const res = await booksAPI.getBooks(auth?.token, auth?.refreshToken, id);
  //   if (res.data !== undefined) {
  //     //Create a state for Book here and update for pas by props for BookModal
  //   }
  // }

  return (
    <>
      {modalBookIsOn && (
        <ModalBook
          //   id={id}
          authors={authors}
          //   category={category}
          description={description}
          imageUrl={imageUrl}
          isbn10={isbn10}
          isbn13={isbn13}
          language={language}
          pageCount={pageCount}
          published={published}
          publisher={publisher}
          title={title}
          key={id}
          toggleModal={handleModal}
        />
      )}

      <div className="bookCard" onClick={handleModal} title="bookCard">
        <img src={imageUrl} alt="book cover" className="photoBook" />
        <div className="info">
          <div className="header" title="bookCardHeader">
            <span className="title">
              {title.length > 40 ? `${title.substr(0, 40)}...` : title}
            </span>
            {authors.map((authorName: string) => (
              <span key={authorName} className="author">
                {authorName}
              </span>
            ))}
          </div>

          <div className="mainInfo" title="bookCardInfo">
            <span>{pageCount} páginas</span>
            <span>Editora {publisher}</span>
            <span>Publicado em {published}</span>
          </div>
        </div>
      </div>
    </>
  );
}

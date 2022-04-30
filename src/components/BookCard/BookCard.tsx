/* eslint-disable react/jsx-no-bind */
import { useState } from "react";
import ModalBook from "../ModalBook/ModalBook";

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

  function handleModal() {
    setModalBookIsOn(!modalBookIsOn);
  }

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

      <div className="bookCard" onClick={handleModal}>
        <img src={imageUrl} alt="" className="photoBook" />
        <div className="info">
          <div className="header">
            <span className="title">{title}</span>
            {authors.map((authorName: string) => (
              <span key={authorName} className="author">
                {authorName}
              </span>
            ))}
          </div>

          <div className="mainInfo">
            <span>{pageCount} páginas</span>
            <span>Editora {publisher}</span>
            <span>Publicado em {published}</span>
          </div>
        </div>
      </div>
    </>
  );
}

import closeIcon from "../../assets/close.svg";
import quotesIcon from "../../assets/quotes.svg";

import "./BookModal.scss";

interface ModalBookProps {
  title: string;
  description: string;
  authors: string[];
  pageCount: number;
  imageUrl: string;
  isbn10: string;
  isbn13: string;
  language: string;
  publisher: string;
  published: number;
  toggleModal: () => void;
}

export default function ModalBook({
  imageUrl,
  title,
  authors,
  pageCount,
  publisher,
  published,
  description,
  isbn10,
  isbn13,
  language,
  toggleModal,
}: ModalBookProps) {
  return (
    <div className="overlay" data-testid="overlayBookModal">
      <div
        className="getout"
        onClick={toggleModal}
        data-testid="getoutButton-bookModal"
      >
        <img src={closeIcon} alt="getout button" />
      </div>
      <div className="modal" data-testid="bookModal">
        <div className="container">
          <img
            src={imageUrl}
            alt="book cover in the modal"
            className="photoBook"
            data-testid="bookCoverModal"
          />

          <div className="info">
            <div className="header" data-testid="cardHeader-bookModal">
              <span className="title">
                {title.length > 40 ? `${title.substr(0, 40)}...` : title}
              </span>
              {authors.map((authorName: string) => (
                <span
                  key={authorName}
                  className="author"
                  data-testid="authorCardHeader-bookModal"
                >
                  {authorName}
                </span>
              ))}
            </div>

            <div className="mainInfo" data-testid="cardInfo-bookModal">
              <span id="titleInfo">INFORMAÇÕES</span>
              <div className="pair">
                <span className="title">Páginas</span>
                <span className="contentInfo">{pageCount} Páginas</span>
              </div>
              <div className="pair">
                <span className="title">Editora</span>
                <span className="contentInfo">Editora {publisher}</span>
              </div>
              <div className="pair">
                <span className="title">Publicação</span>
                <span className="contentInfo">{published}</span>
              </div>
              <div className="pair">
                <span className="title">Idioma</span>
                <span className="contentInfo">{language}</span>
              </div>
              <div className="pair">
                <span className="title">Título Original</span>
                <span className="contentInfo">
                  {title.length > 40 ? `${title.substr(0, 40)}...` : title}
                </span>
              </div>
              <div className="pair">
                <span className="title">ISBN-10</span>
                <span className="contentInfo">{isbn10}</span>
              </div>
              <div className="pair">
                <span className="title">ISBN-13</span>
                <span className="contentInfo">{isbn13}</span>
              </div>
            </div>

            <div
              className="description"
              data-testid="cardDescription-bookModal"
            >
              <span id="titleInfo">RESENHA DA EDITORA</span>
              <span className="text">
                <img src={quotesIcon} alt="" />
                {description.length > 400
                  ? `${description.substr(0, 400)}...`
                  : description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

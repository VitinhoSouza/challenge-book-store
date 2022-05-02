import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import BookModal from "./BookModal";

describe("BookModal Component", () => {
  it("Check if you have a BookModal and if its elements are on screen", () => {
    const { getByTestId } = render(
      <Router>
        <BookModal
          authors={["Victor", "Antônio"]}
          description="ASIFNDSAJDNFSAKDFNSKJFNSJKDFNSJFNSDJFNS"
          imageUrl="sdinfsdknfksdnfsdf"
          isbn10="23423423423423"
          isbn13="34534535345"
          language="Português"
          pageCount={220}
          published={2022}
          publisher="Livre"
          title="O livro"
          key="123456789"
          toggleModal={() => console.log()}
        />
      </Router>
    );

    expect(getByTestId("overlayBookModal")).toBeInTheDocument();
    expect(getByTestId("getoutButton-bookModal")).toBeInTheDocument();
    expect(getByTestId("bookModal")).toBeInTheDocument();
    expect(getByTestId("bookCoverModal")).toBeInTheDocument();
    expect(getByTestId("cardHeader-bookModal")).toBeInTheDocument();
    expect(getByTestId("cardInfo-bookModal")).toBeInTheDocument();
    expect(getByTestId("cardDescription-bookModal")).toBeInTheDocument();
  });

  it("Don't pass any author and your div doesn't appear", () => {
    const { getByTestId, queryByTestId } = render(
      <Router>
        <BookModal
          authors={[]}
          description="ASIFNDSAJDNFSAKDFNSKJFNSJKDFNSJFNSDJFNS"
          imageUrl="sdinfsdknfksdnfsdf"
          isbn10="23423423423423"
          isbn13="34534535345"
          language="Português"
          pageCount={220}
          published={2022}
          publisher="Livre"
          title="O livro"
          key="123456789"
          toggleModal={() => console.log()}
        />
      </Router>
    );

    expect(getByTestId("overlayBookModal")).toBeInTheDocument();
    expect(getByTestId("getoutButton-bookModal")).toBeInTheDocument();
    expect(getByTestId("bookModal")).toBeInTheDocument();
    expect(getByTestId("bookCoverModal")).toBeInTheDocument();
    expect(getByTestId("cardHeader-bookModal")).toBeInTheDocument();
    expect(queryByTestId("authorCardHeader-bookModal")).not.toBeInTheDocument();
    expect(getByTestId("cardInfo-bookModal")).toBeInTheDocument();
    expect(getByTestId("cardDescription-bookModal")).toBeInTheDocument();
  });
});

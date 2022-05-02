import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import BookCard from "./BookCard";

describe("BookCard Component", () => {
  it("Check if you have a BookCard and if its elements are on screen", () => {
    const { getByTestId, getAllByTestId } = render(
      <Router>
        <BookCard
          id="123456789"
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
        />
      </Router>
    );

    expect(getByTestId("bookCard")).toBeInTheDocument();
    expect(getByTestId("bookCardCover")).toBeInTheDocument();
    expect(getByTestId("bookCardHeader")).toBeInTheDocument();
    expect(getByTestId("bookCardTitle")).toBeInTheDocument();
    expect(getAllByTestId("bookCardAuthor")[0]).toBeInTheDocument();
    expect(getByTestId("bookCardInfo")).toBeInTheDocument();
  });

  it("Don't pass any author and your div doesn't appear", () => {
    const { getByTestId, queryByTestId } = render(
      <Router>
        <BookCard
          id="123456789"
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
        />
      </Router>
    );

    expect(getByTestId("bookCard")).toBeInTheDocument();
    expect(getByTestId("bookCardCover")).toBeInTheDocument();
    expect(getByTestId("bookCardHeader")).toBeInTheDocument();
    expect(getByTestId("bookCardTitle")).toBeInTheDocument();
    expect(queryByTestId("bookCardAuthor")).not.toBeInTheDocument();
    expect(getByTestId("bookCardInfo")).toBeInTheDocument();
  });
});

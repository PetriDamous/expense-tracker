import React from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";

import DUMMY_DATA from "../data/quotes.data";

import Comments from "../components/comments/Comments";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const customStyles = {
  textAlign: "center",
};

const QuoteDetail = (props) => {
  console.log(props.dog);
  const { quoteId } = useParams();
  const match = useRouteMatch();

  const quote = DUMMY_DATA.find((quote) => quote.id === quoteId);

  if (!quote) {
    return <NoQuotesFound />;
  }

  return (
    <>
      {" "}
      <HighlightedQuote author={quote.author} text={quote.text} />
      <Route exact path={`${match.path}`}>
        <div style={customStyles}>
          <Link className="btn--flat" to={`${match.url}/comments`}>
            View Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;

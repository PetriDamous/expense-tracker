import { useEffect } from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";

import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

import Comments from "../components/comments/Comments";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const customStyles = {
  textAlign: "center",
};

const QuoteDetail = (props) => {
  const { quoteId } = useParams();
  const match = useRouteMatch();
  const {
    sendRequest,
    data: quote,
    error,
    status,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focus">{error}</p>;
  }

  if (!quote.text && status === "completed") {
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

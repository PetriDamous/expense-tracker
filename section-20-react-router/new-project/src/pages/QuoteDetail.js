import React from "react";
import { Route, useParams } from "react-router-dom";

import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const { quoteId } = useParams();

  return (
    <>
      <h1>QuoteDetail Page</h1>
      <p>Product: {quoteId}</p>
      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;

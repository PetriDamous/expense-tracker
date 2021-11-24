import React from "react";
import DUMMY_DATA from "../data/quotes.data";

import QuoteList from "../components/quotes/QuoteList";

const AllQuotes = () => {
  return (
    <>
      <QuoteList quotes={DUMMY_DATA} />
    </>
  );
};

export default AllQuotes;

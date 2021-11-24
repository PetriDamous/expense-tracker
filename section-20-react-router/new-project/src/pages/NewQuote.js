import React from "react";

import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const handleAddQuote = (quote) => {
    console.log(quote);
  };

  return (
    <>
      <QuoteForm onAddQuote={handleAddQuote} />
    </>
  );
};

export default NewQuote;

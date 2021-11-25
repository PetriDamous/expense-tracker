import { Fragment } from "react";
import { useHistory, useLocation } from "react-router";
import sortQuotes from "../../helpers/sort";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const isAscending = location.search.includes("asc");

  const sortedQuotesArray = sortQuotes(props.quotes, isAscending);

  const handleSortChange = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${isAscending ? "des" : "asc"}`,
    });
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={handleSortChange}>
          Sort {isAscending ? "Descending" : "Ascending"}
        </button>
      </div>

      <ul className={classes.list}>
        {sortedQuotesArray.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;

import { useRef, useEffect } from "react";
import useHttp from "../../hooks/use-http";
import { addComment } from "../../lib/api";

import classes from "./NewCommentForm.module.css";

import LoadingSpinner from "../UI/LoadingSpinner";

const NewCommentForm = ({ handleCloseForm, quoteId }) => {
  const commentTextRef = useRef();

  const { sendRequest, status, error } = useHttp(addComment);

  useEffect(() => {
    if (status === "completed" && !error) {
      handleCloseForm();
    }
  }, [status, error, handleCloseForm]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const textAreaValue = commentTextRef.current.value;

    // optional: Could validate here

    if (textAreaValue === "") {
      return;
    }

    // send comment to server

    sendRequest({ quoteId, commentData: textAreaValue });
  };

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

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;

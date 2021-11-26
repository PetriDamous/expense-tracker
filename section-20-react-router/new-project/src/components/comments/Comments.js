import { useState, useEffect, useCallback } from "react";

import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentsList from "./CommentsList";

const Comments = ({ quoteId }) => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const {
    sendRequest: getComments,
    data: commentsArray,
    status: getCommentStatus,
    error: getCommentError,
  } = useHttp(getAllComments, true);

  useEffect(() => {
    getComments(quoteId);
  }, [getComments, quoteId]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const handleCloseForm = useCallback(() => {
    getComments(quoteId);
    setIsAddingComment(false);
  }, [getComments, quoteId]);

  if (getCommentStatus === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (getCommentError) {
    return <p className="centered focus">{getCommentError}</p>;
  }

  const comments =
    (!commentsArray || commentsArray.length === 0) &&
    getCommentStatus === "completed" ? (
      <p className="centered focus">There are no comments for this quote.</p>
    ) : (
      <CommentsList comments={commentsArray} />
    );

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm quoteId={quoteId} handleCloseForm={handleCloseForm} />
      )}
      {comments}
    </section>
  );
};

export default Comments;

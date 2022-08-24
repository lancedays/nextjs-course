import classes from "./comment-list.module.css";

function CommentList() {
  return (
    <ul className={classes.comments}>
      {/* Render list of comments - fetched from API */}
      <li>
        <p>This is just a test Comment</p>
        <div>
          By <address>Lance Days</address>
        </div>
      </li>
    </ul>
  );
}

export default CommentList;

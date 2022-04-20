import CommentItem from './CommentItem';

function CommentsContainer({ comments, updateScore }) {
  return comments.map((item) => (
    <CommentItem key={item.id} item={item} updateScore={updateScore} />
  ));
}

export default CommentsContainer;

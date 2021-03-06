import { useState, useEffect } from 'react';

import CommentItem from './components/CommentItem';
import CommentsContainer from './components/CommentsContainer';

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    const response = await fetch(`http://localhost:4000/comments`);
    const data = await response.json();

    setComments(data);
  };

  const updateScore = async (id, itemToBeUpdated) => {
    const parentComment = comments.filter((comm) => {
      if (comm.replies.find((reply) => reply.id === id)) return comm;
    });

    if (parentComment.length > 0) {
      parentComment[0].replies.map((reply) =>
        reply.id === id ? { ...reply, ...itemToBeUpdated } : reply
      );

      itemToBeUpdated = parentComment[0];
    }

    const response = await fetch(
      `http://localhost:4000/comments/${itemToBeUpdated.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(itemToBeUpdated),
      }
    );

    const data = await response.json();

    setComments(
      comments.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  const commentsList = (item) => {
    if (item.replies.length > 0) {
      return (
        <>
          <div>
            <CommentItem key={item.id} item={item} updateScore={updateScore} />
            <div className="card-group">
              <div className="replies-bar"></div>
              <div className="replies-container">
                <CommentsContainer
                  comments={item.replies}
                  updateScore={updateScore}
                ></CommentsContainer>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <CommentItem key={item.id} item={item} updateScore={updateScore} />
      );
    }
  };

  return (
    <>
      <div className="container">{comments.map(commentsList)}</div>
    </>
  );
}

export default App;

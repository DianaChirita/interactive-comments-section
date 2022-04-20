import React, { useEffect } from 'react';

function CommentItem({ item, updateScore }) {
  const increaseScore = () => {
    item.score = parseInt(item.score) + 1;

    updateScore(item.id, item);
  };

  const decreaseScore = () => {
    item.score = parseInt(item.score) - 1;

    updateScore(item.id, item);
  };

  return (
    <div className="card">
      <div className="card-side">
        <button onClick={() => increaseScore()}>
          <img src="./images/icon-plus.svg" alt="Upvote comment button icon" />
        </button>
        <p>{item.score}</p>
        <button onClick={() => decreaseScore()}>
          <img
            src="./images/icon-minus.svg"
            alt="Downvote comment button icon"
          />
        </button>
      </div>
      <div className="card-content">
        <div className="card-header">
          <div className="card-header-left">
            <img src={item.user.image.png} alt="User picture" />
            <div className="header-text">
              <p className="username">{item.user.username}</p>
              <p className="date">{item.createdAt}</p>
            </div>
          </div>
          <div className="card-header-right">
            {'juliusomo' === item.user.username ? (
              <>
                <button className="btn-delete">
                  <img src="./images/icon-delete.svg" />
                  Delete
                </button>
                <button className="btn-reply">
                  <img src="./images/icon-edit.svg" />
                  Edit
                </button>
              </>
            ) : (
              <button className="btn-reply">
                <img src="./images/icon-reply.svg" />
                Reply
              </button>
            )}
          </div>
        </div>
        <p>{item.content}</p>
      </div>
    </div>
  );
}

export default CommentItem;

import React, { useEffect, useState } from 'react';

function CommentItem({ item }) {
  return (
    <div className="card">
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
      <div className="card-content">
        <p>{item.content}</p>
      </div>
    </div>
  );
}

export default CommentItem;

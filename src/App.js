import { useState, useEffect } from 'react';

import CommentItem from './components/CommentItem';

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

  const setCom = () => {};
  return (
    <>
      <div>
        {comments.map((item) => (
          <CommentItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default App;

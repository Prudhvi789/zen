import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Page from './Page';
import Pagebar from './Pagebar';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] =useState(false);
  const [currentPage, setCurrentPage] =useState(1);
  const [postsPerPage, setPostsPerPage]=useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
        setLoading(true);
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(res.data);
        setLoading(false);
    }

    fetchPosts();
  },[]); 

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts= posts.slice(indexOfFirstPost,indexOfLastPost);

  const paginate = (pageNumber) => { setCurrentPage(pageNumber)}
  //console.log(posts);
  return (
    <div className="App">
      <div className="container mt-5">
        <h1 className="text-primary mb-3">Comments</h1>
          <Page posts={currentPosts} loading={loading}/>
          <Pagebar postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
      </div>
    </div>
  );
}

export default App;

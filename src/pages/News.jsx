import { useState, useEffect } from "react";
import { Container, Pagination } from "react-bootstrap";
import NewsPost from "../components/NewsPost";

export default function News() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <h1 className="mb-4">Nyheter</h1>
      {currentPosts.map((post) => (
        <NewsPost key={post.id} post={post} />
      ))}
      <Pagination className="mt-4">
        {[...Array(Math.ceil(posts.length / postsPerPage)).keys()].map(
          (number) => (
            <Pagination.Item
              key={number + 1}
              active={number + 1 === currentPage}
              onClick={() => paginate(number + 1)}
            >
              {number + 1}
            </Pagination.Item>
          )
        )}
      </Pagination>
    </Container>
  );
}

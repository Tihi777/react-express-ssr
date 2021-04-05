import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Post from "../../components/Post/Post";
import { fetchPosts } from "../../store/posts/actions";

import './Blog.scss';

const Blog = () => {
  const posts = useSelector(state => state.posts.data) || []
  const dispatch = useDispatch();

  useEffect(() => {
    if (!posts.length) {
      dispatch(fetchPosts())
    }
  }, [posts]);


  return (
    <div className="blog">
      <div className="blog__title">
        All Blog Post
      </div>
      <div className="blog__posts">
        {
          posts.map(post => (
            <Post key={post.id} {...post}/>
          ))
        }
      </div>
    </div>
  );
}

export default Blog;
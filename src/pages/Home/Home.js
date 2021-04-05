import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Post from "../../components/Post/Post";
import { fetchPosts } from "../../store/posts/actions";

import './Home.scss'

const Home = () => {
  const posts = useSelector(state => state.posts.data).slice(0, 3) || []

  const dispatch = useDispatch();

  useEffect(() => {
    if (!posts.length) {
      dispatch(fetchPosts())
    }
  }, [posts]);

  return (
    <div className="most-popular">
      <div className="most-popular__title">
        Most popular posts
      </div>
      <div className="most-popular__posts">
        {
          posts.map(post => (
            <Post key={post.id} {...post}/>
          ))
        }
      </div>
    </div>
  );
};

export default Home;
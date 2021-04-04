import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

const Home = () => {
  const posts = useSelector(state => state.app.testField) || [];

  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/blog">Go to Blog</Link>
      <ul>
        {
          posts.map(({id, title}) => (
            <li key={id}>{title}</li>
          ))
        }
        </ul>
    </div>
  );
};

export default Home;
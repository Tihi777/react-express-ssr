import './Post.scss';
import Date from "../Date/Date";
import {Link} from "react-router-dom";

const Post = ({ id, title, date, content }) => {

  return (
    <div className="post">
      <Link className="post__title" to={`/blog/${id}`}>{ title }</Link>
      <div className="post__date"><Date dateString={date?.slice(0, 10)} /></div>
      <div className="post__preview">{content}</div>
      <Link className="post__read-more" to={`/blog/${id}`}>Read more</Link>
    </div>
  );
}

export default Post;
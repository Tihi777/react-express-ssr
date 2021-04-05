import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchPost } from "../../store/post/actions";
import Date from "../../components/Date/Date";

import "./Post.scss";

const Post = () => {
  const { id, title, date, content } = useSelector(state => state.post.data);
  const dispatch = useDispatch();
  const { slug } = useParams();

  useEffect(() => {
    if (id !== slug) {
      dispatch(fetchPost(slug))
    }
  }, [id]);

  if (id !== slug) {
    return (
      <div className="post-plug">
        <div className="post-plug__title"/>
        <div className="post-plug__date"/>
        <div className="post-plug__content"/>
      </div>
    )
  }

  return (
    <div className="single-post">
      <div className="single-post__title">
        {title}
      </div>
      <div className="single-post__date">
        <Date dateString={date?.slice(0, 10)} />
      </div>
      <div className="single-post__content">{content}</div>
    </div>
  );
}

export default Post;
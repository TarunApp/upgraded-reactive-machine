import { BlogContent, BlogNav, Column } from "../Styles.js";
import { Link } from "react-router-dom";

// Higher Order Component for rendering MDX Content

const BlogContainer = (props) => (WrappedComponent) => (componentprops) => {
  document.body.style.backgroundColor = "white";

  document.title = props.heading

  return (
    <BlogContent>
      <Column>
        <BlogNav>
          <Link to="/blog">Back to Blog</Link>
        </BlogNav>

        <h1>{props.heading}</h1>
        <p style={{ textAlign: "center" }}> {props.date} </p>
        <WrappedComponent {...componentprops} />
      </Column>
    </BlogContent>
  );
};

export default BlogContainer;

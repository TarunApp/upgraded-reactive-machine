import { Column, Row, Projects } from "../Styles";
import { BlogCard } from "../BlogStyles";
import Posts from "../Blog/Posts";
import { Link } from "react-router-dom";

// Component for listing Blog Cards

const Blog = (props) => {
  return (
    <Column>
      <Projects>
        <h2>Blog</h2>
        {/*<p style={{ fontSize: "18px", textAlign: "center" }}>
						Posts on Programming
					</p>*/}
        <Row center>
          {/*<Card>
						<h3>First Blog Post</h3>
						<p>Blog Post Content</p>
					</Card>	*/}
          {Posts.map((item) => {
            return (
              <BlogCard>
                <h3>
                  {" "}
                  <Link to={item.name}>{item.data.heading}</Link>{" "}
                </h3>
                <time>Date: {item.date} </time>
                <hr />
                <p>{item.data.summary ? item.data.summary : ""}</p>
              </BlogCard>
            );
          })}
        </Row>
      </Projects>
    </Column>
  );
};

export default Blog;

import {  BlogText, HeadingContent, BlogContent } from "../Styles.js";
import {Buttons, TitleLink, Nav, BlogLinks, Column} from '../Styles/Layout.js'

// Higher Order Component for rendering MDX Content

const BlogContainer = (props) => (WrappedComponent) => (componentprops) => {

  document.title = props.heading

  return (
    <Column>

      <Nav>
      <Column>
      <TitleLink href="/">TarunApp</TitleLink>


      <Buttons margin="5px">  
              <BlogLinks slab href="/">About</BlogLinks>
              <BlogLinks slab href="/blog">Blog</BlogLinks>
      </Buttons>

      </Column>
 
      </Nav>

    <BlogContent>
      <Column>



        <HeadingContent>
        <p style={{ textAlign: "left" }}> {props.date} </p>
        <h1>{props.heading}</h1>
        <p>{props.summary}</p>
        </HeadingContent>


        <BlogText>
        <WrappedComponent {...componentprops} />
        </BlogText>

      </Column>
    </BlogContent>
    </Column>
  );
};

export default BlogContainer;

import {useEffect} from 'react'
import {Buttons, BlogLinks, TitleLink, Center, Column, Row, Nav } from '../Styles/Layout.js'
import { BlogCard } from "../Styles/Layout.js";
import Posts from "../Blog/Posts";
import Footer from './Footer.js'
import { Link } from "react-router-dom";

// Component for listing Blog Cards
const Blog = (props) => {


useEffect( () => {

  document.title="Blog"

},[])

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

<Center>
          <Column>
          <h2>Blog</h2>
            <Row margintop="5px">
           <Column margintop="5px">


                {Posts.map((item) => {
                  return (
                    <BlogCard blog>
                      <time>{item.date}</time> 
                      <Link to={item.name}>{item.data.heading}</Link>
                      <p>{item.data.summary ? item.data.summary : ""}</p>
                    </BlogCard>
                    )

                })}

          </Column> 
            </Row>
          </Column>
        </Center>

<Footer/>

    </Column>
  );
};

export default Blog;

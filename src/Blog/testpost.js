/* eslint-disable import/no-webpack-loader-syntax */ 

import Post from '!babel-loader!@mdx-js/loader!./Post.mdx'
import SecondPost from '!babel-loader!@mdx-js/loader!./SecondPost.mdx'
 
let posts = [{name: "Post",content: Post},{name: "SecondPost",content: SecondPost},]
 
export default posts
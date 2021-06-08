/* eslint-disable import/no-webpack-loader-syntax */ 

import fourth from '!babel-loader!@mdx-js/loader!./fourth.mdx'
import NewPost from '!babel-loader!@mdx-js/loader!./NewPost.mdx'
import Post from '!babel-loader!@mdx-js/loader!./Post.mdx'
import SecondPost from '!babel-loader!@mdx-js/loader!./SecondPost.mdx'
 
let posts = [{name: "fourth",content: fourth},{name: "NewPost",content: NewPost},{name: "Post",content: Post},{name: "SecondPost",content: SecondPost},]
 
export default posts
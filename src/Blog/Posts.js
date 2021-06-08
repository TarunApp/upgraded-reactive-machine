/* eslint-disable import/no-webpack-loader-syntax */ 

import FirstPost from '!babel-loader!@mdx-js/loader!./Posts/FirstPost.mdx'
 
let posts = [{name: "FirstPost",content: FirstPost},]
 
export default posts
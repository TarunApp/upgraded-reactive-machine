/* eslint-disable import/no-webpack-loader-syntax */ 

import FirstPost from '!babel-loader!@mdx-js/loader!./Posts/FirstPost.mdx'
import Auth from '!babel-loader!@mdx-js/loader!./Posts/Auth.mdx'
import Test from '!babel-loader!@mdx-js/loader!./Posts/Test.mdx'
 
let posts = [{name: "FirstPost",content: FirstPost},{name: "Auth",content: Auth},{name: "Test",content: Test},]

export default posts
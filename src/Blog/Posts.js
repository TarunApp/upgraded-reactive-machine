/* eslint-disable import/no-webpack-loader-syntax */ 

import GitHubBlog,{Summary as Summary0} from '!babel-loader!@mdx-js/loader!./Posts/GitHubBlog.mdx'
import FirstPost,{Summary as Summary1} from '!babel-loader!@mdx-js/loader!./Posts/FirstPost.mdx'
import Auth,{Summary as Summary2} from '!babel-loader!@mdx-js/loader!./Posts/Auth.mdx'
import Test,{Summary as Summary3} from '!babel-loader!@mdx-js/loader!./Posts/Test.mdx'
 
let posts = [{name: "GitHubBlog",content: GitHubBlog, date: "Fri Sep  3 14:19:44 2021", data: Summary0},{name: "FirstPost",content: FirstPost, date: "Fri Sep  3 12:27:00 2021", data: Summary1},{name: "Auth",content: Auth, date: "Thu Sep  2 18:51:48 2021", data: Summary2},{name: "Test",content: Test, date: "Thu Sep  2 18:44:06 2021", data: Summary3},]
 
export default posts
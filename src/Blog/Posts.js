/* eslint-disable import/no-webpack-loader-syntax */ 

import Start,{Summary as Summary0} from '!babel-loader!@mdx-js/loader!./Posts/Start.mdx'
import KeepGoing,{Summary as Summary1} from '!babel-loader!@mdx-js/loader!./Posts/KeepGoing.mdx'
 
let posts = [{name: "Start",content: Start, date: "Sep 14 2021", data: Summary0},{name: "KeepGoing",content: KeepGoing, date: "Oct 14 2021", data: Summary1},]
 
export default posts
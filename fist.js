

import {File} from "./Internals/_Sexy_Transactions_/File.js.js.js.js.js";
String.prototype.flow = function(some){
    console.log(this)
    return new File(this).flow(some)
}

'./some'.flow("some/other/path/to/file", (data)=>{console.log(data)}).flow("some/third/path/to/file")
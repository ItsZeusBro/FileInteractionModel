

import {File} from "./File/File.js";
String.prototype.flow = function(some){
    console.log(this)
    return new File(this).flow(some)
}

'./some'.flow("some/other/path/to/file").flow("some/third/path/to/file")
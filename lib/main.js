var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var {Cc, Ci} = require("chrome");

var button = buttons.ActionButton({
  id: "mozilla-link",
  label: "Visit Mozilla",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
    
    // create an nsIFile for the executable
    
    var file = Cc["@mozilla.org/file/local;1"]
                         .createInstance(Ci.nsIFile);
    //file.initWithPath("/bin/echo");
    file.initWithPath("/usr/local/bin/livestreamer");

    // create an nsIProcess
    var process = Cc["@mozilla.org/process/util;1"]
                            .createInstance(Ci.nsIProcess);
    process.init(file);

    // Run the process.
    // If first param is true, calling thread will be blocked until
    // called process terminates.
    // Second and third params are used to pass command-line arguments
    // to the process.var {Cc, Ci} = require("chrome");
    var args = [tabs.activeTab.url, "medium"];
    process.run(false, args, args.length);
}


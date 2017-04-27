var FetchStream = require("fetch").FetchStream;

var fetch = new FetchStream(
    "https://raw.githubusercontent.com/SSG-DRD-IOT/markdown-lab-setup-development-environment/master/README.md"
);

fetch.on("data", function(chunk){
    console.log(chunk.toString();
});

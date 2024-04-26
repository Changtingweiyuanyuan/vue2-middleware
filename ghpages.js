const ghpages = require("gh-pages");

ghpages.publish(
    "deploy",
    {
        branch: "gh-pages",
        repo: "https://github.com/Changtingweiyuanyuan/vue2-middleware.git",
        message: "Deploy to GitHub pages",
    },
    (err) => {
        if(err) {
            console.error(err);
        } else {
            console.log("Deployment to GitHub pages complete");
        }
    }
);
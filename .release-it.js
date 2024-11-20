module.exports = {
  git: {
    tagName: `${process.env.ENV || "develop"}-v${
      require("./package.json").version
    }`,
    commitMessage: `Release ${process.env.ENV || "develop"} v${
      require("./package.json").version
    }`,
    requireUpstream: false,
  },
};

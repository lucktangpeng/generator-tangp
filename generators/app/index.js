const Generator = require("yeoman-generator");
const fs = require("fs");
const path = require("path");
module.exports = class extends Generator {
  prompting() {
    // 这里的prompt是一个promise函数
    return this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project title",
        default: this.appname,
      },
    ]).then((anawers) => {
      this.anawers = anawers;
    });
  }
  Writing() {
    fs.readdir(path.resolve(__dirname, "./templates"), (err, files) => {
      if (err) throw err;

      for (let file of files) {
        const tmpl = this.templatePath(file);
        const output = this.destinationPath(file);
        this.fs.copyTpl(tmpl, output, this.anawers);
      }
    });
  }
};

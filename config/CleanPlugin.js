const fs = require('fs');

class CleanPlugin {
  constructor(options = {}) {
    this.options = options;
  }
  apply(compiler) {
    const { files = [] } = this.options;
    compiler.hooks.done.tap('CleanPlugin', (complilation) => {
      console.log('done');
      for (let i = 0; i < files.length; i++) {
        const filepath = files[i];
        try {
          const isExists = fs.existsSync(filepath);
          if (isExists) {
            fs.rmSync(filepath);
          }
        } catch (err) {
          console.error('file rm error', filepath);
        }
      }
    });
  }
}

module.exports = CleanPlugin;

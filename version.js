const { execSync, exec } = require('child_process');

const versionCmd = process.env.VERSION || 'patch';

exec(`npm version ${versionCmd}`, (err) => {
  if (err) {
    throw err;
  }

  const package = require('./package.json');
  const newVersion = package.version;
  exec(`git push origin ${newVersion} && git push`, (err) => {
    if (err) {
      throw err;
    }
    console.log('complete');
  });
});

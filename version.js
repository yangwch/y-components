const { execSync } = require('child_process');

const versionCmd = process.env.VERSION || 'patch';

execSync(`npm version ${versionCmd}`);

const package = require('./package.json');
const newVersion = package.version;
execSync(
  `git add package.json && git commit -m "chore: new tag ${newVersion}" && git tag ${newVersion} && git push origin ${newVersion} && git push`,
);

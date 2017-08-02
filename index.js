const { execFile } = require('child_process');
const path = require('path');

const BIN_PATH = path.resolve(__dirname + '/bin/foo');

const getOutput = (done) => {
  execFile(BIN_PATH, [], (error, stdout, stderr) => {
    if (error) {
      throw error;
    }
    done(stdout);
  });
};

module.exports = getOutput;

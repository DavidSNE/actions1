const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
    core.notice("Hello Javascript action");
    core.exportVariable("myVar", "myValue");

}

run();

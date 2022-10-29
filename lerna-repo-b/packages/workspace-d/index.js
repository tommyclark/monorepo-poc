const cowsay = require('cowsay');

const serve = require('workspace-c/lib').serve;
serve(cowsay.say({
    text: "Hellooo froom workspace-d!",
    e: "oO",
    T: "U "
}))

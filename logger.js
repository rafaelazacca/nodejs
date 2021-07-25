const EventEmitter = require ('events')

const emitter = new EventEmitter()

emitter.on('log', (message) => {
    console.log(message)

})

function log (message){
    emitter.emit('log', message)
}
log ("Passar uma mensagem")

module.exports = log 
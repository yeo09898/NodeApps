const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();


//register a listener
logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
})

logger.log('message');
//raise: logging (data: message)
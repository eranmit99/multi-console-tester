const EventLogReporter = require('./event-log-reporter')
const ISConsole = require('./console')

const cons = new ISConsole()

const eventLogReporter = new EventLogReporter()

cons.addReporter(eventLogReporter)

cons.warn('This is an example for a warning message')

module.exports = cons




class ISConsole {
    constructor() {
        this.reporters = []
    }

    /**
     * Add reporter(s) to internal reporter chain
     * Reporters will be called in the FIFO order
     * Duplicate reporters are not allowed
     *
     * @param {...Reporter} reporters
     * @returns {ISConsole}
     */
    addReporter(reporter) {
        // @TODO: Implement
        return this
    }

    /**
     * Remove reporter from internal reporter chain
     *
     * @param {Reporter} reporters
     * @returns {ISConsole}
     */
    removeReporter(...reporters) {
        // @TODO: Implement
        return this
    }


    /**
     * Report with default log level
     *
     * @param {any} args
     * @returns {ISConsole}
     */
    log(...args) {
      // @TODO: Implement
    }

    /**
     * Report passed arguments with `info` log level
     *
     * @param {any} args
     * @returns {ISConsole}
     */
    info(...args) {
      // @TODO: Implement
    }

    /**
     * Report passed arguments with `warn` log level
     *
     * @param {any} args
     * @returns {ISConsole}
     */
    warn(...args) {
      // @TODO: Implement
    }

    /**
     * Report passed arguments with `error` log level
     *
     * @param {any} args
     * @returns {ISConsole}
     */
    error(...args) {
        // @TODO: Implement  
    }
}

module.exports = ISConsole

class BaseReporter {
    /**
     * Do not override this method. (final)
     *
     * @param {...any} args
     */
    log(...args) {
        this._log(...args)
    }

    /**
     * This method must be implemented in derived reporter.
     * Method signature is: _log(...args) {...}
     */
    _log() { /* UNIMPLEMENTED */ }

    /**
     * Do not override this method. (final)
     *
     * @param {any} args
     * @returns
     */
    error(...args) {
        this._error(...args)
    }

    /**
     * This method must be implemented in derived reporter.
     * Method signature is: _error(...args) {...}
     */
    _error() { /* UNIMPLEMENTED */ }

    /**
     * Do not override this method. (final)
     *
     * @param {any} args
     * @returns
     */
    info(...args) {
        this._info(...args)
    }

    /**
     * This method must be implemented in derived reporter.
     * Method signature is: _info(...args) {...}
     */
    _info() { /* UNIMPLEMENTED */ }

    /**
     * Do not override this method. (final)
     *
     * @param {any} args
     * @returns
     */
    warn(...args) {
        this._warn(...args)
    }

    /**
     * This method must be implemented in derived reporter.
     * Method signature is: _warn(...args) {...}
     */
    _warn() { /* UNIMPLEMENTED */ }
}

module.exports = BaseReporter
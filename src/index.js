const Server = require('./server')

const logger = require('./lib/utils/log-manager')

const server = new Server()

async function init () {
  try {
    server.start()

    const exitSignals = new Set(['SIGINT', 'SIGTERM', 'SIGQUIT'])

    for (const exitSignal of exitSignals) {
      process.on(exitSignal, async () => {
        try {
          await server.close()
          logger.info(`SERVEREXIT: App exited with success`)
          process.exit(0)
        } catch (error) {
          logger.error(`SERVEREXIT: App exited with error: ${error}`)
          process.exit(1)
        }
      })
    }
  } catch (error) {
    logger.error(`SERVEREXIT: App exited with error: ${error}`)
    process.exit(1)
  }
}

init()

process.on('unhandledRejection', (reason, promise) => {
  logger.error(
    `SERVEREXIT: App exiting due to an unhandled promise: ${promise} and reason: ${reason}`,
  )
  throw reason
})

process.on('uncaughtException', (error) => {
  logger.error(`SERVEREXIT: App exiting due to an uncaught exception: ${error}`)
  process.exit(1)
})

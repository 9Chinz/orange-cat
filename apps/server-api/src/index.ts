import { createContainer } from './container'
import { IAppServerApi } from './server/types'
import { TOKENS_SERVER_API } from './token'

async function main() {
  const container = createContainer()

  const server = await container.getAsync<IAppServerApi>(TOKENS_SERVER_API.SERVER_API)
  await server.start()

  if (import.meta.hot) {
    import.meta.hot.accept(async() => {
      await server.stop()
    })
  }
}

main()

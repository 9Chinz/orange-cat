import { injectable, multiInject } from 'inversify'
import { fastify, type FastifyInstance } from 'fastify'
import { IAppServerApi } from './types'
import process from 'process'
import { TOKENS_SERVER_API } from '@/token'
import { ApiRoute } from '@/types'
import { TypeBoxTypeProvider} from '@fastify/type-provider-typebox'

@injectable()
export class AppServerApi implements IAppServerApi {
  private server: FastifyInstance

  constructor(
    @multiInject(TOKENS_SERVER_API.API_ROUTES) private apiRoutes: ApiRoute[],
  ){
    this.server = fastify({
      logger: true,
    })
  }

  async start(): Promise<void> {
    this.apiRoutes.forEach((route) => {
      this.server.register(
        (server, opts, done) => {
          route.register(server.withTypeProvider<TypeBoxTypeProvider>())
          done()
        },
        {
          prefix: '/api/v1',
        }
      )
    })

    try {
      await this.server.listen({
        host: '0.0.0.0',
        port: 3000,
      })
    } catch (error) {
      this.server.log.error(error)
      process.exit(1)
    }
  }

  async stop(): Promise<void> {

    await this.server.close()
  }
}

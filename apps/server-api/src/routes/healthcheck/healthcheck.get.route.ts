import { ApiRoute } from '@/types'
import { FastifyInstance } from 'fastify'
import { injectable } from 'inversify'

@injectable()
export class HealthCheckGetRoute extends ApiRoute {

  async register(server: FastifyInstance): Promise<void> {
    server.get(
      '/healthcheck',
      {},
      async (request, reply) => {
        return reply.status(200).send({
          'status': 'ok'
        })
      }
    )
  }
}

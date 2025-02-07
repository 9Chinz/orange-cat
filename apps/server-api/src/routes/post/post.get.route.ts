import { commonParams } from '@/schemas/common'
import { ApiRoute, FastifyInstanceWithTypedProvider } from '@/types'
import { injectable } from 'inversify'

@injectable()
export class PostGetRoute extends ApiRoute {

  async register(server: FastifyInstanceWithTypedProvider): Promise<void> {
    server.get(
      '/posts/:identifier',
      {
        schema: {
          params: commonParams,
        }
      },
      async (request, reply) => {
        const { identifier } = request.params

        return reply.status(200).send({
          'hello': `Hello from post.get.route.ts with identifier: ${identifier}`
        })
      }
    )
  }
}

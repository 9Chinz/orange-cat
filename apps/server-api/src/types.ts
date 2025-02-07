import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import { FastifyBaseLogger, FastifyInstance, RawReplyDefaultExpression, RawRequestDefaultExpression, RawServerDefault } from 'fastify'
import { injectable } from 'inversify'

export type FastifyInstanceWithTypedProvider = FastifyInstance<
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
  FastifyBaseLogger,
  TypeBoxTypeProvider
>

@injectable()
export abstract class ApiRoute {
  abstract register(server: FastifyInstanceWithTypedProvider): void
}

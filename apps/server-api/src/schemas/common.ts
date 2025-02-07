import { Type } from '@fastify/type-provider-typebox'

export const commonParams = Type.Object({
  identifier: Type.String(),
})

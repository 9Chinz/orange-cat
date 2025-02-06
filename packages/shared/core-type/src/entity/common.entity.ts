import * as v from 'valibot'

export const CommonMetaDataSchema = v.object({
  id: v.string(),
  createdAt: v.string(),
  updatedAt: v.string(),
})

export type CommonMetaData = v.InferInput<typeof CommonMetaDataSchema>

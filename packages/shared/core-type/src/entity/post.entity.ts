import * as v from 'valibot'
import { CommonMetaDataSchema } from './common.entity'

export const PostBaseSchema = v.object({
  title: v.string(),
  content: v.string(),
})

export const PostBodySchema = PostBaseSchema

export const PostSchema = v.object({
  ...PostBaseSchema.entries,
  ...CommonMetaDataSchema.entries,
})

export type PostBody = v.InferInput<typeof PostBodySchema>
export type Post = v.InferInput<typeof PostSchema>

import * as v from 'valibot'

export const PostSchema = v.object({
  id: v.string(),
  title: v.string(),
  content: v.string(),
  createdAt: v.string(),
  updatedAt: v.string(),
})

export type Post = v.InferInput<typeof PostSchema>

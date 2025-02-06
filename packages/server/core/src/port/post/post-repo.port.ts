import { commonRepo } from '../common-repo.port'
import { Post, PostBody } from '@packages-shared/core-type'

export abstract class PostRepo<TDoc> extends commonRepo<Post, PostBody, TDoc> {}

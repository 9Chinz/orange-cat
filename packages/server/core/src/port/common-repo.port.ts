import { Paginated } from '../model'

export abstract class commonRepo <T, TBody, TDoc> {
  abstract findOne(
    identifier: string,
  ): Promise<T | null>
  abstract list(): Promise<Paginated<T>>
  abstract create(body: TBody): Promise<T>
  abstract update(identifier: string, body: TBody): Promise<T>
  abstract delete(identifier: string): Promise<void>

  abstract toEntity(doc: TDoc): T
  abstract toDocumentBody(body: TBody): Omit<TDoc, '_id'>
}

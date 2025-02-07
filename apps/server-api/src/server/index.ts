import { AsyncContainerModule, interfaces } from 'inversify'
import { AppServerApi } from './server'
import { TOKENS_SERVER_API } from '@/token'
import { IAppServerApi } from './types'

export const containerModuleServerApiApp = new AsyncContainerModule(
  async (
    bind: interfaces.Bind,
  ) => {
    bind<IAppServerApi>(TOKENS_SERVER_API.SERVER_API).to(AppServerApi).inSingletonScope()
  }
)

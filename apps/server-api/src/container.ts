import { Container } from 'inversify'
import { containerModuleServerApiApp } from './server'
import { containerModuleServerApiRoutes } from './routes'

export function createContainer(): Container {
  const container = new Container({
    defaultScope: 'Singleton',
  })

  // bind services or load container modules here
  container.load(containerModuleServerApiApp)
  container.load(containerModuleServerApiRoutes)

  return container
}

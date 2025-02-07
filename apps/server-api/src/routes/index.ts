import { AsyncContainerModule, interfaces } from 'inversify'
import { PostGetRoute } from './post/post.get.route'
import { TOKENS_SERVER_API } from '@/token'
import { HealthCheckGetRoute } from './healthcheck/healthcheck.get.route'

export const containerModuleServerApiRoutes = new AsyncContainerModule(
  async (
    bind: interfaces.Bind,
  ) => {
    const routes = [
      //! Add routes here
      HealthCheckGetRoute,
      PostGetRoute,
    ]

    routes.forEach((route) => {
      bind(TOKENS_SERVER_API.API_ROUTES).to(route)
    })
  }
)

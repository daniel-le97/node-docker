import type { OpenAPIConfig } from './generated/index'
import { ConfigService, ContainerService, DistributionService, ExecService, ImageService, NetworkService, NodeService, OpenAPI, PluginService, SecretService, ServiceService, SessionService, SwarmService, SystemService, TaskService, VolumeService } from './generated/index'

// import { unix } from './unix'

export class Docker {
  constructor(opts?: OpenAPIConfig & { unix: string }) {
    OpenAPI.BASE = opts?.BASE ?? OpenAPI.BASE
    OpenAPI.VERSION = opts?.VERSION ?? OpenAPI.VERSION
    OpenAPI.WITH_CREDENTIALS = opts?.WITH_CREDENTIALS ?? OpenAPI.WITH_CREDENTIALS
    OpenAPI.CREDENTIALS = opts?.CREDENTIALS ?? OpenAPI.CREDENTIALS
    OpenAPI.TOKEN = opts?.TOKEN ?? OpenAPI.TOKEN
    OpenAPI.USERNAME = opts?.USERNAME ?? OpenAPI.USERNAME
    OpenAPI.PASSWORD = opts?.PASSWORD ?? OpenAPI.PASSWORD
    OpenAPI.HEADERS = opts?.HEADERS ?? OpenAPI.HEADERS
    OpenAPI.ENCODE_PATH = opts?.ENCODE_PATH ?? OpenAPI.ENCODE_PATH
    // if (opts?.unix)
    //   unix.setUnix(opts.unix)
  }

  containers = ContainerService
  images = ImageService
  distibution = DistributionService
  exec = ExecService
  networks = NetworkService
  plugins = PluginService
  session = SessionService
  services = ServiceService
  secrets = SecretService
  configs = ConfigService
  system = SystemService
  volumes = VolumeService
  swarm = SwarmService
  tasks = TaskService
  nodes = NodeService
}
export * from './generated/index'
export * from './types'

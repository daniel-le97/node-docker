export interface DockerStats {
  read: string
  preread: string
  pids_stats: { current: number; limit: number }
  blkio_stats: {
    io_service_bytes_recursive: any[] // You may want to define a more specific type here
    io_serviced_recursive: null
    io_queue_recursive: null
    io_service_time_recursive: null
    io_wait_time_recursive: null
    io_merged_recursive: null
    io_time_recursive: null
    sectors_recursive: null
  }
  num_procs: number
  storage_stats: Record<string, never> // Empty object type
  cpu_stats: {
    cpu_usage: Record<string, number> // You may want to define a more specific type here
    system_cpu_usage: number
    online_cpus: number
    throttling_data: Record<string, number> // You may want to define a more specific type here
  }
  precpu_stats: {
    cpu_usage: Record<string, number> // You may want to define a more specific type here
    system_cpu_usage: number
    online_cpus: number
    throttling_data: Record<string, number> // You may want to define a more specific type here
  }
  memory_stats: { usage: number; stats: Record<string, number>; limit: number }
  name: string
  id: string
  networks: { eth0: Record<string, any> } // You may want to define a more specific type here
};

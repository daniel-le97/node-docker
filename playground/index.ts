import { Docker } from '../src/index'

async function main() {
  const docker = new Docker()

  const response = await docker.containers.containerLogs('a58d24974cf9c62eacace62f59441f13b3af039acfe0753f98f88abf9ec9a523', true, true)
  console.log(response)

  // const parse = (data:string) => console.log(JSON.parse(data))

  // response.on('data', parse)

  //   const stream = response.data;

  // stream.on('data', data => {
  //     console.log(data.toString());
  // });

  // stream.on('end', () => {
  //     console.log("stream done");
  // });
}
main()

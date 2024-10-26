import * as package1 from ':package1'
import * as package2 from ':package2'

export default function Home() {
  return <>
    <h1>{package1.greet()}</h1>
    <h1>{package2.greet()}</h1>
  </>
}

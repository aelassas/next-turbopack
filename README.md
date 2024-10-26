# Next.js 15 import alias not working with turbopack

I have a Next.js 15 project with two internal packages:
```
| - my-app/
| - packages/package1/
| - packages/package2/
```
I added aliases in tsconfig.json:
```js
{
  "compilerOptions": {
   ...
    "baseUrl": "./",
    "paths": {
      "@/*": ["./src/*"],
      ":package1": ["../packages/package1"],
      ":package2": ["../packages/package2"]
    },
  }
}
```
I have a page using `:package1` and `:package2`:
```js
import * as package1 from ':package1'
import * as package2 from ':package2'

export default function Home() {
  return <>
    <h1>{package1.greet()}</h1>
    <h1>{package2.greet()}</h1>
  </>
}
...
```

When I run the dev server without turbopack, it works fine. But when I try with turbopack I always get these errors:
```
Module not found: Can't resolve ':package1'
Import map: aliased to relative "../packages/package1" inside of [project]/

Module not found: Can't resolve ':package2'
Import map: aliased to relative "../packages/package2" inside of [project]/
```

# Resume app

## Getting started

### Install dependencies

```sh
$ yarn install
```

### Start the server

```sh
$ yarn run dev
```

Open your browser and go to http://localhost:3000/


## MY TODO CHECKLIST

### unit testing

Test the application with ViTest

#### Install the dependencies

```bash
$ yarn add -D vitest @vitejs/plugin-react jsdom @testing-library/react
```

#### Setup the configuration

- create `vitest.config.ts` file with default configs:

```ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
 
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
  },
})
```

#### Add the script

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test": "vitest"
  }
}
```

#### Generate the tests

- example component: `pages/index.tsx`

```ts
import Link from 'next/link'
 
export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </div>
  )
}
```

- example test: `__tests__/index.test.tsx`

```ts
import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from '../pages/index'
 
test('Page', () => {
  render(<Page />)
  expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined()
})
```

#### Run the tests

```sh
$ yarn test
```

### e2e testing

Test the application with Playwright

1. `yarn create playwright`

2. `playwright.config.ts`


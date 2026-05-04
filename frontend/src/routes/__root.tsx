import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import appCss from '../styles.css?url'
import Navbar from '#/components/Navbar'

import {QueryClient,QueryClientProvider} from "@tanstack/react-query"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'ClauseGuard - legal contract analyser',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className='bg-neutral-50 dark:bg-neutral-950 min-h-screen  text-neutral-900 dark:text-neutral-50 '>

        <div className="min-h-screen flex-col flex items-center overflow-x-hidden  bg-[repeating-linear-gradient(45deg,#d4d4d4_0px,#d4d4d4_1px,transparent_1px,transparent_20px)] dark:bg-[repeating-linear-gradient(45deg,#262626_0px,#262626_1px,transparent_1px,transparent_20px)]">
          <div id='navbar-frame' className='w-full flex items-center justify-center border-b border-neutral-400 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950'>
            <Navbar />
          </div>
          <main className='max-w-7xl h-[calc(100vh-65px)] w-full overflow-x-hidden py-4 px-4 border-x border-neutral-400 dark:border-neutral-800  bg-neutral-50 dark:bg-neutral-950'>
            <QueryClientProvider client={new QueryClient}>
              {children}
            </QueryClientProvider>
          </main>
        </div>
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}

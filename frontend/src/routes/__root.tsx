import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import appCss from '../styles.css?url'
import Navbar from '#/components/Navbar'


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
        title: 'TanStack Start Starter',
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
      <body className='bg-neutral-950 min-h-screen text-neutral-300 '>

        <div className="min-h-screen flex-col flex items-center  bg-[repeating-linear-gradient(45deg,#262626_0px,#262626_1px,transparent_1px,transparent_20px)] ">
          <div id='navbar-frame' className='w-full flex items-center justify-center border-b border-neutral-800 bg-neutral-950'>
            <Navbar />
          </div>
          <main className='max-w-6xl  w-full p-8 border-x border-neutral-800 flex-1 bg-neutral-950'>
            {children}
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

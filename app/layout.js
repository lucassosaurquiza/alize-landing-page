import './globals.css'
import { metadata } from './components/Metadata'


export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className='bg-gray-900'>
        {children}
      </body>
    </html>
  )
}

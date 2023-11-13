import'@styles/globals.css'
import { Children } from 'react'
import Nav from '@components/navbar'
import Foot from '@components/footer'

export const metadata ={
    title: "INF181",
    description: 'This an application that teaches ceos how tech workks'
}
const layout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='bg-color'/>
            </div>
            <main className='app'>
                <Nav/>
                {children}
                <Foot/>
            </main>
        </body>
    </html>
  )
}

export default layout
import './globals.css'
import Header from '@/components/shared/Header'

const Layout = ({ children }) => {
    return <html lang="en">
        <head>
            <title>Techvio</title>
        </head>
        <body>
            <Header />
            {children}

        </body>
    </html>

}

export default Layout
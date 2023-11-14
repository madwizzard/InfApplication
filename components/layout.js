import Head from 'next/head';
import Nav from './navbar'; // Adjust the path as per your directory structure
import Foot from './footer'; // Adjust the path as per your directory structure

const Layout = ({ children, pageTitle, pageDescription }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="d-flex flex-column min-vh-100"> {/* Bootstrap classes for full height and flex column */}
        <Nav />
        <main role="main" className="container flex-fill"> {/* Bootstrap container class and flex fill */}
          {children}
        </main>
        <Foot />
      </div>
    </>
  )
}

export default Layout;

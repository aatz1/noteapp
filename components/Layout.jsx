import Head from 'next/head';
import Navbar from './Navbar';

const Layout = ({ children }) => {
   return (
    <>
    <Head>
        <title>Note app</title>
    </Head>
    <Navbar></Navbar>
    {children}
    </>   
   )
}

export default Layout
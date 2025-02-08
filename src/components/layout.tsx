import React from 'react';
import { Header, Footer } from './partials';
interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Header/>
            <main className='flex-1 p-9'>
                {children}
            </main>
            <Footer/>
            {/* <footer>
                <p>Footer</p>
            </footer> */}
        </div>
    );
};

export default Layout;

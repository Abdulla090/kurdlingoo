import { useState, ReactNode } from 'react';
import Sidebar from './Sidebar';
import BottomNav from './BottomNav';
import PageTransition from '../PageTransition';
import './Layout.css';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className="app-layout">
            <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
            <main className={`main-content ${isCollapsed ? 'collapsed' : ''}`}>
                <PageTransition>
                    {children}
                </PageTransition>
            </main>
            <BottomNav />
        </div>
    );
};

export default Layout;

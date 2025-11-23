import React from 'react';
import Sidebar from './Sidebar';
import BottomNav from './BottomNav';
import './Layout.css';

const Layout = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = React.useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className="app-layout">
            <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
            <main className={`main-content ${isCollapsed ? 'collapsed' : ''}`}>
                {children}
            </main>
            <BottomNav />
        </div>
    );
};

export default Layout;

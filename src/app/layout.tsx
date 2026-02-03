import React from 'react';
import './globals.css';

const Layout = ({ children }) => {
    return (
        <html lang="en">
            <head>
                <title>QR Code Generator</title>
            </head>
            <body>
                <header>
                    <h1>QR Code Generator</h1>
                </header>
                <main>{children}</main>
                <footer>
                    <p>&copy; {new Date().getFullYear()} QR Code Generator. All rights reserved.</p>
                </footer>
            </body>
        </html>
    );
};

export default Layout;
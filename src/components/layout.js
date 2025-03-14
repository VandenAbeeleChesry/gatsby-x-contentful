import * as React from 'react';
import { Link } from 'gatsby';

// CSS import
import {
    container,
    navList,
    navLink,
    activeNavLink
} from './layout.module.css';

const Layout = ({children}) => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className={container}>
                        <nav>
                            <ul className={navList}>
                                <li><Link to="/" className={navLink} activeClassName={activeNavLink}>Home</Link></li>
                                <li><Link to="/blogs" className={navLink} activeClassName={activeNavLink}>Blogs</Link></li>
                            </ul>
                        </nav>
                        <main>
                            {children}
                        </main>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout
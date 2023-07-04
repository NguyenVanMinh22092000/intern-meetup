import React, { Component } from 'react';
import Link from 'next/link';
import classes from './MainNavigation.module.css';

class MainNavigation extends Component {
    render() {
        return (
            <header className={classes.header}>
                <div className={classes.logo}>Next Meetups</div>
                <nav>
                    <ul>
                        <li>
                            <Link href='/'>All Meetups</Link>
                        </li>
                        <li>
                            <Link href='/new-meetup'>Add New Meetup</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default MainNavigation;

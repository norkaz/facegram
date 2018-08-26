import React, {Component} from 'react';
import styles from './NavMenu.scss';
import {MENU_ITEMS} from './nav-menu-items';

export class NavMenu extends Component {
    render() {
        return (
            <div className={styles.navMenu}>
                <ul className={styles.navMenuItems}>
                    {this.renderMenuItems()}
                </ul>
            </div>
        )
    }

    renderMenuItems() {
        return MENU_ITEMS.map(
            (menuItem) => {
                return (
                    <li>
                        <a href={menuItem.url}>{menuItem.name}</a>
                    </li>
                )
            }
        )
    }
}

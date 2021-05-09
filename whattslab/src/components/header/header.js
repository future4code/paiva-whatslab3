import React from 'react';
import IconUser from '../../img/icon.png'

export default class HeaderConversa extends React.Component {
    render() {
        return (
            <header>
                <img src={IconUser} />
                <div>
                    <h2>Daniel Ueno</h2>
                    <p>Visto por último hoje às 11:11</p>
                </div>
            </header>)
    }
}
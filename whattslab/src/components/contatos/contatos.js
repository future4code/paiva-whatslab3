import React from 'react';
import { ConversaContainer } from '../../styles/styled'
import ImgMe from '../../img/images/placeholder-image.svg'
import Status from '../../img/images/status.svg'
import IconMessage from '../../img/images/message-icon.svg'
import MenuIcon from '../../img/images/menu-icon.svg'
import Chat from '../chats/chat'
import SearchIcon from '../../img/images/search-icon.svg'

export default class Contatos extends React.Component {

    render() {
        return (
            <ConversaContainer>
                <header>
                    <div className="header-align">
                        <div className="header-user">
                            <img src={ImgMe} />
                            <h2>Whattsapp 2</h2>
                        </div>

                        <div className="container-icons">
                            <img src={Status} />
                            <img src={IconMessage} />
                            <img src={MenuIcon} />
                        </div>
                    </div>
                    <div className="header-chats-icon">
                        <span>CONVERSAS</span>
                        <span>STATUS</span>
                        <span>CHAMADAS</span>
                    </div>
                </header>
                <div className="chats-input">
                    <div className="search-style">
                        <img src={SearchIcon} />
                        <input placeholder="Search or start new chat"></input>
                    </div>

                </div>
                <div>
                    <Chat></Chat>
                    <Chat></Chat>
                    <Chat></Chat>
                    <Chat></Chat>
                    <Chat></Chat>
                    <Chat></Chat>
                    <Chat></Chat>
                    <Chat></Chat>
                </div>

            </ConversaContainer>
        )

    }

}
import React from 'react';

function Header({ loggedIn, LogoutFunction, userAuthInfo }) {
    return (
        <header className="Header">
            <nav className="Header nav">
                {loggedIn && <a href="/"><span class="OtherNav">up for grabs</span></a>}
                {loggedIn && <a href={`/profile/${userAuthInfo.uid}`}><span class="OtherNav">my profile</span></a>}
                {!loggedIn && <a href="/create-account"><span class="OtherNav">sign up</span></a>}
                {!loggedIn && <a href="/login"><span class="OtherNav">login</span></a>}
                {loggedIn && (
                    <a href="" onClick={() => LogoutFunction()}>
                        <span class="OtherNav">log out</span> 
                    </a>
                )}
                {loggedIn && <a href="/create-listing"><span class="Plus">+</span></a>}
            </nav>
        </header>
    );
}

export default Header;
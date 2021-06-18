import React from 'react';

//Render header
function Header() {
    return (
        <header className='headerStyle bg-primary text-light p-3'>
            <h1>Employee Directory</h1>
            <p>Sort by Last Name or filter in the search bar</p>
        </header>
    )
};

export default Header;
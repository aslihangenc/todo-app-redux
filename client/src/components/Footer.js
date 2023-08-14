import React from 'react'

function Footer() {
    return (
        <footer className='info'>
            <p>Click to edit a todo</p>
            <p>Created by <a href="#">Aslı Genç</a></p>
            <p>Part of <a href="#">TodoMVC</a></p>
        </footer>
    )
}

export default React.memo(Footer);
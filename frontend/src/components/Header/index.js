import React, { useState } from 'react'

export default function Header({onTodoSubmit}) {
    const [name, setName] = useState('')

    const handleKeyDown = event => {
        if (event.key === 'Enter'){
            onTodoSubmit({name, completed: false})
            setName('')
        }
    }


    return (
    <section className='todoapp'>
        <header className='header'>
            <h1>Todos</h1>
            <input
                className='new-todo'
                placeholder='What needs to be done'
                onKeyDown={handleKeyDown}
                value={name}
                onChange={e => setName(e.target.value)}
                autoFocus
            >
            </input>
        </header>
    </section>
    )
}

import { useState } from 'react';
import './App.css';
import Logo from './components/logo';
import Form from './components/form';
import PackingList from './components/packinglist';
import Stats from './components/stats';

function App () {
    // Lifting state up is to place states in the closest related parent component of the components that will need the state
    const [items, setItems] = useState([]);

    function handleAddItem (item) {
        // When adding data into existing state array variable, need to add new data via new array
        setItems((items) => [...items, item]);
    }

    function handleDeleteItem (id) {
        setItems((items) => items.filter((item) => item.id !== id));
    }

    function handleUpdateItem (id) {
        setItems((items) => items.map((item) => item.id === id ? {...item, packed: !item.packed} : item));
    }

    function handleDeleteAllItems () {
        const confirmed = window.confirm('Are you sure you want to clear all items?');
        if(confirmed) setItems([]);
    }

    return (
        <div className='app'>
            <Logo />
            <Form onAddItem={handleAddItem} />
            <PackingList items={items} onDeleteItem={handleDeleteItem} onUpdateItem={handleUpdateItem} onDeleteAllItems={handleDeleteAllItems} />
            <Stats items={items} />
        </div>
    );
}

export default App;

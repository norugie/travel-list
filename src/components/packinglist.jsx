import { useState } from "react";
import Item from './item';

function PackingList ({items, onDeleteItem, onUpdateItem, onDeleteAllItems}) {
    const [sortBy, setSortBy] = useState('input');
    let sortedItems;

    switch (sortBy){
        case 'description':
            sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
            break;
        case 'packed':
            sortedItems = items.slice().sort((a, b) => Number(b.packed) - Number(a.packed));
            break;    
        default:
            sortedItems= items;
    }

    return (
        <div className='list'>
            <ul>
                {sortedItems.map((item) => <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onUpdateItem={onUpdateItem} />)}
            </ul>

            <div className='actions'>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value='input'>Sort by input order</option>
                    <option value='description'>Sort by description</option>
                    <option value='packed'>Sort by packed status</option>
                </select>
                <button onClick={onDeleteAllItems}>Clear List</button>
            </div>
        </div>
    );
}

export default PackingList;
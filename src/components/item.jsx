function Item ({item, onDeleteItem, onUpdateItem}) {
    return (
        <li>
            <input type='checkbox' value={item.packed} onChange={() => onUpdateItem(item.id)} />
            <span style={item.packed ? {'textDecoration': 'line-through'} : {}}>
                {item.quantity} {item.description}
            </span>
            <button style={{'color': 'red'}} onClick={() => onDeleteItem(item.id)}>X</button>
        </li>
    );
}

export default Item;
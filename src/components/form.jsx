import { useState } from "react";

function Form ({onAddItem}) {
    // It's recommended to use states for controlling form values to give Reach control over form values instead of the DOM
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(1);

    function handleSubmit (e) {
        e.preventDefault();

        if(!description) return;

        const newItem = { 
            id: Date.now(), 
            description: description, 
            quantity: quantity, 
            packed: false
        };

        onAddItem(newItem);

        setDescription('');
        setQuantity(1);
    }
    
    return (
        <form className='add-form' onSubmit={handleSubmit}>
            <h3>What do you need for your trip?</h3>
            <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                {
                    Array.from({length: 20}, (_, i) => i + 1)
                    .map((num) => <option value={num} key={num}>{num}</option>)
                }
            </select>

            {/* Need to fire off the change event to properly pass input value. The change event will need to set the new state value taken from the input element. */}
            <input type='text' placeholder='Item . . .' value={description} onChange={(e) => setDescription(e.target.value)} />
            <button type='submit'>Add</button>
        </form>
    );
}

export default Form;

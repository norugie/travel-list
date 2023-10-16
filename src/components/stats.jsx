function Stats ({items}) {
    const numItems = items.length;
    const packedItems = items.filter((item) => item.packed).length;
    const percentage = Math.round((packedItems/numItems) * 100);

    return (
        <footer className='stats'>
            <em>
                {
                    percentage === 100 
                    ? "You're packed and ready to go!"
                    : isNaN(percentage)
                    ? `You have ${numItems} item(s) on your list.`
                    : `You have ${numItems} item(s) on your list. You have already packed ${packedItems} item(s) (${percentage}% complete).`
                }
            </em>
        </footer>
    );
}

export default Stats;
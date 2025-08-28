import { useState } from 'react';

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
const [qty, setQty] = useState(initial);
const inc = () => setQty(q => Math.min(q + 1, stock));
const dec = () => setQty(q => Math.max(q - 1, 1));

return (
<div style={{ margin: '1rem 0' }}>
<button onClick={dec} disabled={qty <= 1}>-</button>
<span style={{ margin: '0 1rem', fontWeight: 'bold' }}>{qty}</span>
<button onClick={inc} disabled={qty >= stock}>+</button>
<button onClick={() => onAdd?.(qty)} disabled={stock === 0} style={{ marginLeft: 12 }}>
Agregar al carrito
</button>
</div>
);
};

export default ItemCount;
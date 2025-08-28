import ItemCount from './ItemCount';

const ItemDetail = ({ funko, onAdd }) => {
if (!funko) return null;
return (
<div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
<img src={funko.image} alt={funko.name} style={{ width: 300, height: 'auto', marginBottom: '1rem' }} />
<h1>{funko.name}</h1>
<p style={{ fontSize: '1.2rem', color: 'green' }}>Precio: ${funko.price}</p>
<p>{funko.description}</p>
<p><strong>Stock disponible: {funko.stock}</strong></p>
<ItemCount stock={funko.stock} onAdd={(qty) => onAdd(qty, funko)} />
</div>
);
};

export default ItemDetail;
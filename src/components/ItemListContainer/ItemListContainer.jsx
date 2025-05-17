import './ItemListContainer.css';

function ItemListContainer({greetings}) {
  const productos = [
    { nombre: 'Smartwatch', imagen: 'https://static.bidcom.com.ar/publicacionesML/productos/REL00210/1000x1000-REL00210.jpg' },
    { nombre: 'Cargador', imagen: 'https://pixelstore.com.ar/wp-content/uploads/2021/08/cargador-samsung-1.jpg' },
    { nombre: 'Auricular', imagen: 'https://tccommercear.vtexassets.com/arquivos/ids/160894/158062-800-auto.png?v=638677160450000000' },
    { nombre: 'Mouse', imagen: 'https://s3-sa-east-1.amazonaws.com/saasargentina/oaPmQNJPQeMZynN9AOk5/imagen' }
  ];

  return (
    <div className='lista-productos'>
      <h2>{greetings}</h2>
      <h2  style={{ textAlign: 'center' }}>Lista de Productos</h2>
      <ul>
        {productos.map((producto) => (
          <li>
            <img src={producto.imagen} width="100" />
            <p>{producto.nombre}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListContainer;

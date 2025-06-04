
function MenuItem({ key, name, description, price, image }) {
  return (
    <li className="menu-item" key={key}>
      <img src={image} alt={name} className="menu-item-image" />
      <div className="menu-item-details">
        <h3 className="menu-item-name">{name}</h3>
        <p className="menu-item-description">{description}</p>
        <span className="menu-item-price">${price.toFixed(2)}</span>
      </div>
    </li>
  );
}

export default MenuItem;
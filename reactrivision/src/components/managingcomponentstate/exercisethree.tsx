import { useState } from 'react';

const exercisethree = () => {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: 'Product 1', quantity: 1 },
      { id: 2, title: 'Product 2', quantity: 1 },
    ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.quantity === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

  return <div>exercisethree</div>;
};

export default exercisethree;

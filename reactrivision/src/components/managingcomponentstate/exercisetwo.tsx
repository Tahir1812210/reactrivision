import React, { useState } from 'react';

const exercisetwo = () => {
  const [pizza, setPizza] = useState({
    name: 'Spicy Pepperoni',
    toppings: ['Mushroom'],
  });

  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, 'Cheese'] });
  };

  return <div>exercisetwo</div>;
};

export default exercisetwo;

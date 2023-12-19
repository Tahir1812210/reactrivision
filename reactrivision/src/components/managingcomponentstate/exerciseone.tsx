import { useState } from 'react';

const exerciseone = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: 'John',
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: 'bob' } });
  };

  return <div>exerciseone</div>;
};

export default exerciseone;

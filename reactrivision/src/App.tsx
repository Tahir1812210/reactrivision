import { useState } from 'react';
import Button from './components/buildingcomponents/exerciseone.tsx/Button';
import Alert from './components/buildingcomponents/exercisetwo.tsx/Alert';

const App = () => {
  const [visibility, setVisibility] = useState(false);

  return (
    <>
      {visibility && (
        <Alert onClose={() => setVisibility(false)}>Alert Popped</Alert>
      )}
      <Button onClick={() => setVisibility(true)}>Button</Button>
    </>
  );
};

export default App;

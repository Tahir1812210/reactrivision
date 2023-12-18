import { useState } from 'react';
import Button from './components/usingcssmodules/exerciseone.css/Button/Button';
import Like from './components/usingcssmodules/exercisetwo/Like';
// import Button from './components/buildingcomponents/exerciseone.tsx/Button';
// import Alert from './components/buildingcomponents/exercisetwo.tsx/Alert';

const App = () => {
  const [visibility, setVisibility] = useState(false);

  return (
    <>
      {/* building components */}
      {/* {visibility && (
        <Alert onClose={() => setVisibility(false)}>Alert Popped</Alert>
      )}
      <Button onClick={() => setVisibility(true)}>Button</Button> */}

      {/* usingcssmodules */}
      {/* <Button>Button</Button> */}
      <Like />
    </>
  );
};

export default App;

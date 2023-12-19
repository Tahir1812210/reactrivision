import { useState } from 'react';
import Button from './components/usingcssmodules/exerciseone.css/Button/Button';
import Like from './components/usingcssmodules/exercisetwo/Like';
import ExpandableText from './components/managingcomponentstate/exercisefour/ExpandableText';
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
      {/* <Like /> */}

      <ExpandableText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor at iste
        aspernatur officia, ea fugit voluptatem corrupti voluptatum saepe totam
        error amet atque officiis odit tempore rerum possimus! Exercitationem
        nulla, eum, rem aliquid vel magni quaerat cum libero impedit autem, et
        ea labore? Non numquam vitae laboriosam cumque commodi velit placeat.
        Soluta sequi labore ipsa debitis. Aperiam sunt vel reprehenderit illum
        quisquam facere, commodi praesentium? Accusantium fugiat quae suscipit,
        soluta recusandae architecto corporis iure quo vero delectus. Aliquam
        quod, iste dolorum incidunt commodi magnam quam voluptas sint facilis
        nihil corporis quos id sapiente cum illum, debitis quibusdam architecto
        pariatur porro!
      </ExpandableText>
    </>
  );
};

export default App;

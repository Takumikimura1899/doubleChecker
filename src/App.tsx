import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { InputText } from './components/InputText';
import { CopyText } from './components/CopyText';

function App() {
  const [text, setText] = useState<string>('Input Text Default');
  const [reInputText, setReInputText] = useState<string>(
    'second Input Text Default'
  );
  const [textCheck, setTextCheck] = useState(false);

  useEffect(() => {
    text === reInputText ? setTextCheck(true) : setTextCheck(false);
  }, [text, reInputText]);

  return (
    <>
      <InputText text={text} setText={setText} />
      <InputText text={reInputText} setText={setReInputText} />
      {textCheck && <CopyText text={text} />}
    </>
  );
}

export default App;

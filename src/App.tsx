import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { InputText } from './components/InputText';

function App() {
  const [text, setText] = useState<string>('Input Text Default');
  const [reInputText, setReInputText] = useState('second Input Text Default');

  const handleTextTrim = (text: string) => {
    setText(text.trim());
  };
  return (
    <>
      <InputText text={text} setText={setText} />
      <InputText text={reInputText} setText={setReInputText} />
    </>
  );
}

export default App;

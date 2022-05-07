import React, { useState } from 'react';

export const InputText = () => {
  const [text, setText] = useState<string>('Input Text Default');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    console.log(text);
  };

  const handleTextTrim = (text: string) => {
    setText(text.trim());
  };
  return (
    <>
      <form action=''>
        <label htmlFor=''>正しいテキストを入力</label>
        {text.includes(' ') && <p>半角スペースが含まれています</p>}
        {text.includes('　') && <p>全角スペースが含まれています</p>}
        <input
          type='text'
          placeholder='ここに正しいテキストを入力してください'
          onChange={handleChange}
          value={text}
        />
        <span>{`文字数:${text.length}`}</span>
      </form>
      <button onClick={() => handleTextTrim(text)}>スペースを削除する</button>
    </>
  );
};

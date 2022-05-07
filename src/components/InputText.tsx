import React, { useState } from 'react';

export const InputText = () => {
  const [text, setText] = useState<string>('Input Text Default');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    console.log(text);
  };
  return (
    <>
      <form action=''>
        <label htmlFor=''>正しいテキストを入力</label>
        <input
          type='text'
          placeholder='ここに正しいテキストを入力してください'
          onChange={handleChange}
        />
        <span>{`文字数:${text.length}`}</span>
      </form>
    </>
  );
};

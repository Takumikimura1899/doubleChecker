import React, { useState } from 'react';

export const InputText = () => {
  const [text, setText] = useState<string>('Input Text Default');
  return <div>{text}</div>;
};

import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

type Props = {
  text: string;
};

export const CopyText: React.FC<Props> = ({ text }) => {
  const [copyCheck, setCopyCheck] = useState<boolean>(false);

  const handleCopy = () => {
    setCopyCheck(true);
    setTimeout(() => {
      setCopyCheck(false);
    }, 3000);
  };
  return (
    <div>
      <p>正しいテキストが入力されました</p>
      <p>{text}</p>
      <div>
        <CopyToClipboard text={text} onCopy={handleCopy}>
          <button>コピーする</button>
        </CopyToClipboard>
      </div>
      {copyCheck && <p>コピーしました</p>}
    </div>
  );
};

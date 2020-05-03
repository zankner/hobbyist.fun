import React from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

export default () => {
  const { width, height } = useWindowSize();
  return (
    <Confetti
      gravity={0.2}
      numberOfPieces={1000}
      recycle={false}
      width={width}
      height={height}
    />
  );
};

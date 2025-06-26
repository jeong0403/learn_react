import type { RightProps } from '@/types/commonprops';
import { useEffect } from 'react';

function Right3({ handleIncrease }: RightProps) {
  useEffect(() => {
    console.log('#### Right3 렌더링.');
  });

  return (
    <div>
      <h3>Right3</h3>
      <button onClick={handleIncrease}>+1</button>
    </div>
  );
}

export default Right3;

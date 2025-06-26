import Right3 from '@/components/Right3';
import type { RightProps } from '@/types/commonprops';
import { useEffect } from 'react';

function Right2({handleIncrease}: RightProps) {
  useEffect(()=>{
    console.log('### Right2 렌더링.');
  });
  return (
    <div>
      <h2>Right2</h2>
      <Right3 handleIncrease={handleIncrease}/>
    </div>
  );
}

export default Right2;
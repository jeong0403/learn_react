import Right2 from '@/components/Right2';
import type { RightProps } from '@/types/commonprops';
import { useEffect } from 'react';

function Right1({handleIncrease}: RightProps) {
  useEffect(()=>{
    console.log('## Right1 렌더링.');
  });
  return (
    <div>
      <h1>Right1</h1>
      <Right2 handleIncrease={handleIncrease}/>
    </div>
  );
}

export default Right1;
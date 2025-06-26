import Left2 from '@/components/Left2';
import type { LeftProps } from '@/types/commonprops';
import { useEffect } from 'react';

function Left1({count}: LeftProps) {
  useEffect(()=>{
    console.log('## Left1 렌더링.');
  });
  return (
    <div>
      <h1>Left1</h1>
      <Left2 count={count}/>
    </div>
  );
}

export default Left1;
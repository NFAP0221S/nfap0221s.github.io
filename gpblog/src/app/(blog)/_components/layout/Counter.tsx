'use client';
import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0)
  console.log('난 컴포넌트')

  useEffect(() => {
    console.log('난 이펙트')
    console.log('현재 카운트:',count)
  }, [count])

  return (
    <div>
      <h1>count test {count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>버튼</button>
    </div>
  );
}

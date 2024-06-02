'use client'
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [count, setCount] = useState<number>(0)
  console.log('난 컴포넌트')
  
  let count2 = 0
  const setCount2 = () => {
    count2 += 1
  }

  useEffect(() => {
    console.log('난 이펙트')
    console.log('현재 카운트:',count)
  }, [count])

  return (
    <div>
      <h1>about 입니다.</h1>
      <h1>count test {count}</h1>
      <h1>count test2 {count2}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>버튼</button>
      <button onClick={setCount2}>버튼2</button>
    </div>
  );
}

import { useAtom } from "jotai";
import type { NextPage } from 'next'
import Link from 'next/link';
import { useEffect, useState } from "react";

import { countAtom } from "stores/countAtom";
import { inputAtom } from "stores/inputAtom";
import { nameAtom } from "stores/nameAtom";
import { personAtom } from "stores/personAtom";

const Home: NextPage = () => {
  const [num, setNum] = useAtom(countAtom);
  const [name] = useAtom(nameAtom);
  const [, setInput] = useAtom(inputAtom);
  const [person, setPerson] = useAtom(personAtom);

  const [inputValue, setInputValue] = useState('')

  const plus = () => {
    setNum(prev => prev += 1);
  };

  const minus = () => {
    setNum(prev => prev -= 1);
  };

  const save = () => {
    setInput(inputValue);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  useEffect(() => {
    setPerson({
      ...person,
      age: 22,
    });
  },[]);


  return (
    <>
      <div>
        <div>num: {num}</div>
        <button onClick={minus}>-</button>
        <button onClick={plus}>+</button>
      </div>
      <div>
        저는 {name}입니다.
      </div>
      <div>
        <input type="text" value={inputValue}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event)}/>
        <button type="submit" onClick={save}>저장</button>
      </div>
      <div>
        <Link href="/test">
          <a>/test</a>
        </Link>
      </div>
      <div>
        {JSON.stringify(person)}
      </div>π
    </>
  )
};

export default Home

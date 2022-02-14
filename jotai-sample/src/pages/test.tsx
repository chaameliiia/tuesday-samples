import { useAtom } from "jotai";

import { inputAtom } from "stores/inputAtom";

const TestPage = () => {
  const [input] = useAtom(inputAtom);

  return (
    <>
      <div>
        input: {input}
      </div>

    </>
  )
};

export default TestPage;

'use client';

import { Button } from '@omnnitrix/packages/ui/button';
import {
  useState,
  useTransition,
  useId,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';

interface User {
  id: string | number;
  name: string;
}

const ChildComponent = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    addUser: () => {
      console.log('add user');
    },
  }));

  return (
    <div>
      <h1>Child Component</h1>
    </div>
  );
});

export default function Hooks() {
  const [inputVal, setInputVal] = useState('');
  const [isPending, startTransition] = useTransition();
  const [user, setUser] = useState<User[]>([]);

  const childRef = useRef<{ addUser: () => void }>(null);

  const handleAddUser = () => {
    startTransition(async () => {
      await new Promise((res) => setTimeout(res, 1000));
      setUser([...user, { id: user.length + 1, name: inputVal }]);
    });
  };

  const handleClickFromRef = () => {
    childRef?.current?.addUser();
  };

  return (
    <section className="h-screen flex flex-col items-center justify-center">
      <h1>Hooks</h1>
      <input
        onChange={(e) => setInputVal(e.target.value)}
        value={inputVal}
        className="border-2 border-black rounded-md p-2"
      />
      <div className="border p-3">
        {user.map((u) => (
          <div key={u.id}>
            <h1 className="text-2xl">
              {u.name}
              <span className="text-red-500">{u.id}</span>
            </h1>
          </div>
        ))}
        {isPending && (
          <div>
            <h1 className="text-gray-600 text-2xl">{inputVal}</h1>
          </div>
        )}
      </div>

      <Button onClick={handleAddUser}>Click me</Button>
      <Button onClick={handleClickFromRef}>Click from ref</Button>
      <ChildComponent ref={childRef} />
    </section>
  );
}

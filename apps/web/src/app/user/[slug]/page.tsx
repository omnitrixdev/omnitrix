import { Button } from '@omnnitrix/packages/ui/button';
import Link from 'next/link';
import { Suspense } from 'react';

async function UserWithServerData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return data.map((u: { id: number; name: string }) => (
    <div key={u.id}>
      <h1>{u.name}</h1>
    </div>
  ));
}

export default function User({ params }: { params: { slug: string } }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Button asChild>
        <Link href="/">Home</Link>
      </Button>
      <h1>User: {params.slug}</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <UserWithServerData />
      </Suspense>
    </div>
  );
}

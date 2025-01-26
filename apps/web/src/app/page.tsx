import Link from 'next/link';

import { Button } from '@omnnitrix/packages/ui/button';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@omnnitrix/packages/ui/dialog';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Link href={'/user/daniel'}>Daniel</Link>
      <Button>Hello world</Button>
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

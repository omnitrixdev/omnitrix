'use client';

import { useState } from 'react';
import { Button } from '@omnnitrix/packages/ui/button';
import { api } from '../../trpc/react';

export default function Post() {
  const [post, setPost] = useState<string>('');

  const { mutate } = api.post.createPost.useMutation({
    onSuccess: () => {
      console.log('success');
    },
    onError: (err) => {
      console.log('error', err);
    },
  });

  const handleCreatePost = () => {
    mutate({
      title: post,
    });
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <input
        onChange={(e) => setPost(e.target.value)}
        type="text"
        placeholder="Title"
        className="border-2 border-black rounded-md p-2"
      />
      <Button onClick={handleCreatePost}>Create something</Button>
    </div>
  );
}

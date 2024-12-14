'use client';

import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import Link from 'next/link';

import { Layout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto space-y-6">
          <div className="space-y-2">
            <h1 className="text-5xl font-bold tracking-tight flex items-center gap-2">
              LOG IN
              <Sparkles className="h-8 w-8 text-yellow-400" />
            </h1>
            <p className="text-muted-foreground">
              You dont have an account?{' '}
              <Link href="/signup" className="text-purple-500 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <label className="text-lg font-medium">Email</label>
              <Input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="h-12 rounded-xl border-2 border-purple-500 focus:ring-purple-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-lg font-medium">Password</label>
              <Input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="h-12 rounded-xl border-2 border-purple-500 focus:ring-purple-500"
              />
            </div>

            <Button className="w-full h-12 text-lg bg-purple-500 hover:bg-purple-600">
              LOG IN
            </Button>

            <Link
              href="/forgot-password"
              className="block text-center text-purple-500 hover:underline"
            >
              Can't log in?
            </Link>
          </form>
        </div>
      </div>
    </Layout>
  );
}

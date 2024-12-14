'use client';

import { Rocket } from 'lucide-react';

import { Layout } from '@/components/layout';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="flex items-start justify-between">
            <h1 className="text-5xl font-bold tracking-tight">
              WHAT DO YOU
              <br />
              WANT TO DO:
            </h1>
            <Rocket className="h-12 w-12 text-purple-500" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Button
              variant="outline"
              size="lg"
              className="h-16 text-xl border-2 border-purple-500 text-purple-500 hover:bg-purple-50"
            >
              NOTHING WRITTEN
            </Button>
            <Button
              size="lg"
              className="h-16 text-xl bg-purple-500 hover:bg-purple-600"
            >
              EDIT MY DRAFT
            </Button>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold">YOUR HISTORY</h2>
            <div className="space-y-2">
              <Button
                variant="outline"
                className="w-full justify-start h-12 text-lg border-2 border-purple-500 text-purple-500 hover:bg-purple-50"
              >
                DRAFT 1
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start h-12 text-lg border-2 border-purple-500 text-purple-500 hover:bg-purple-50"
              >
                DRAFT 2
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

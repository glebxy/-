'use client';

import { Layout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export default function FeedbackPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto space-y-8">
          <h1 className="text-5xl font-bold tracking-tight">
            HOW WELL
            <br />
            DID WE DO?
          </h1>

          <Textarea
            placeholder="tell us what you think.."
            className="min-h-[200px] text-lg border-2 border-purple-500 rounded-xl focus:ring-purple-500"
          />

          <div className="flex justify-end">
            <Button className="px-8 h-12 text-lg bg-purple-500 hover:bg-purple-600">
              SEND
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

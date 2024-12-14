'use client';

import {
  BookOpen,
  LanguagesIcon as GrammarIcon,
  PartyPopper,
  Sparkles,
} from 'lucide-react';

import { Layout } from '@/components/layout';
import { Button } from '@/components/ui/button';

export default function PaymentPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <div className="text-sm font-medium text-muted-foreground">
              PAYMENT
            </div>
            <h1 className="text-5xl font-bold tracking-tight flex items-baseline gap-2">
              GET UR STATEMENT DONE FOR{' '}
              <span className="relative">
                <span className="text-purple-500">£9.99</span>
                <span className="absolute top-1/2 left-0 right-0 h-0.5 bg-purple-500 -rotate-12" />
                <span className="text-purple-500 ml-2">£4.99</span>
              </span>
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Your plan includes</h2>
              <ul className="space-y-4">
                <li className="flex gap-2">
                  <Sparkles className="h-5 w-5 text-purple-500 shrink-0" />
                  <span>Personalized idea generator for your essay.</span>
                </li>
                <li className="flex gap-2">
                  <BookOpen className="h-5 w-5 text-purple-500 shrink-0" />
                  <span>Professional evaluation and feedback.</span>
                </li>
                <li className="flex gap-2">
                  <GrammarIcon className="h-5 w-5 text-purple-500 shrink-0" />
                  <span>Tips on improving structure and style.</span>
                </li>
                <li className="flex gap-2">
                  <PartyPopper className="h-5 w-5 text-purple-500 shrink-0" />
                  <span>Grammar and vocabulary suggestions.</span>
                </li>
              </ul>
            </div>

            <div>
              <Button className="w-full h-14 text-lg bg-purple-500 hover:bg-purple-600">
                STATEMENT SORTED FOR 4.99£
              </Button>
              <p className="mt-4 text-sm text-muted-foreground text-center">
                After 7 days, your weekly subscription will automatically renew
                at £9.99, billed every 7 days. Cancel any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

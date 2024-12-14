import { Star } from 'lucide-react';
import Link from 'next/link';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function Navigation() {
  return (
    <header className="border-b w-full">
      <div className="flex h-14 items-center justify-between">
        <div className="text-xl font-bold pl-20">
          <a href="/">we-hate-ps</a>
        </div>
        <Button variant="link" asChild className="pr-20">
          <Link href="/login">Log in/Sign up</Link>
        </Button>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t w-full">
      <div className="flex h-14 items-center justify-around text-sm w-full">
        <div className="flex gap-4">
          <Link href="/terms" className="text-muted-foreground hover:underline">
            Terms & Conditions
          </Link>
          <Link
            href="/privacy"
            className="text-muted-foreground hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            href="/copyright"
            className="text-muted-foreground hover:underline"
          >
            Copyright
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <span>PS.</span>
          <span className="text-muted-foreground">WITH LOVE, US</span>
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col w-screen">
      <Navigation />

      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-purple-50 pt-16">
          <div className="container relative z-10 mx-auto px-4 py-16 text-center sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              WE KNOW WHY YOU ARE HERE-{' '}
              <span className="text-purple-500">you hate PS.</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Trust us, we hate them 2 )
            </p>
            <Button className="mt-8 bg-purple-500 hover:bg-purple-600">
              GET YOUR STATEMENT SORTED
            </Button>

            <div className="mt-16 text-center">
              <div className="text-6xl font-bold">78%</div>
              <p className="mt-2 text-lg text-muted-foreground">
                of students find PS stressful
              </p>
            </div>

            <h2 className="mt-16 text-3xl font-bold">THAT'S WHY WE ARE HERE</h2>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="p-16">
          <h2 className="mb-8 text-3xl font-bold">WHO WE ARE?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Our team is 100% students who mastered the craft of writing personal
            statements and securing offers from such unis as:
          </p>
          <img
            src={`/unis_svg.svg`}
            alt={`unis logo`}
            className="h-18 w-auto"
          />
        </section>

        {/* Services Section */}
        <section className="p-16">
          <h2 className="mb-12 text-3xl font-bold">WITH US YOU CAN</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-semibold">
                  Make 1st draft in 10min
                </h3>
                <p className="mb-4 text-muted-foreground">
                  For those stuck staring at a blank page. Create your first
                  draft from scratch in just 10 minutes with our proven PS
                  generation app. We give you your first draft, no fluff.
                </p>
                <Button variant="link" className="text-purple-500">
                  "Sign me up!"
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-semibold">
                  Polish your statement to perfection
                </h3>
                <p className="mb-4 text-muted-foreground">
                  Already have a draft? Let our experts ensure that your
                  statement leaves a lasting impression on admission officers.
                </p>
                <Button variant="link" className="text-purple-500">
                  "Refine & Shine!"
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="p-16">
          <div className="mb-8 flex items-baseline gap-4">
            <h2 className="text-3xl font-bold">REVIEWS</h2>
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold">4.7</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: 'ADITI KASHYAP',
                text: 'The guided tutorial made my essay stronger and helped me get into university!',
              },
              {
                name: 'MICHAEL HOLZER',
                text: 'Detailed feedback and examples helped make my text clear and convincing',
              },
              {
                name: 'CÉLINE ERRAND',
                text: 'Finished my statement way before the deadline thanks to quick and professional help',
              },
            ].map((review, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback>{review.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{review.name}</div>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center w-full">
          <h2 className="mb-8 text-3xl font-bold">STILL NOT SURE?</h2>
          <div className="flex justify-center gap-4">
            <Button className="bg-purple-500 hover:bg-purple-600">
              GET YOUR 1ST FEEDBACK
            </Button>
            <Button variant="outline">CHECK HOW READY YOU ARE</Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

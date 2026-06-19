"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CTABanner } from "@/components/CTABanner";
import { HowItWorks } from "@/components/HowItWorks";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <main className="flex min-h-screen flex-col items-center justify-center gap-10 bg-background px-4 py-10 sm:px-6 lg:px-8">
        <section className="max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
          >
            StellarSwipe
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-4 text-base leading-7 text-foreground-muted sm:text-lg"
          >
            Trade smarter with real-time signals and a polished on-chain experience.
          </motion.p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/app">
              <Button size="lg" className="min-w-[10rem]">
                Explore Signals
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="min-w-[10rem]">
              Learn More
            </Button>
          </div>
        </section>

        <HowItWorks />
        <CTABanner />
        <Footer />
      </main>
    </PageTransition>
  );
}

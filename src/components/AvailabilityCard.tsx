'use client';

import { motion } from 'framer-motion';
import { CalendarDays, Code2, Globe, Briefcase } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface AvailabilityData {
  availability: string;
  preferences: {
    roleTypes: string[];
    industries: string[];
    workMode: string;
    location: string;
  };
  experience: {
    internshipCompleted: string;
    freelanceWork: string;
    projectExperience: string;
  };
  skills: {
    technical: string[];
    soft: string[];
  };
  achievements: string[];
  lookingFor: {
    growthOpportunities: string;
    mentorship: string;
    impactfulWork: string;
    technicalChallenges: string;
    collaboration: string;
  };
  contact: {
    email: string;
    linkedin: string;
    github: string;
    portfolio: string;
  };
}

interface AvailabilityCardProps {
  data?: AvailabilityData;
}

const AvailabilityCard = ({ data }: AvailabilityCardProps) => {
  const router = useRouter();

  const handleContactClick = () => {
    // Navigate to home page with the contact preset question
    router.push('/?query=How can I reach you?');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-accent mx-auto mt-8 w-full max-w-4xl rounded-3xl px-6 py-8 font-sans sm:px-10 md:px-16 md:py-12"
    >
      {/* Header */}
      <div className="mb-6 flex flex-col items-center sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          {/* Avatar placeholder */}
          <div className="bg-muted h-16 w-16 overflow-hidden rounded-full shadow-md">
            <img
              src="/profile.jpeg"
              alt="Juan's avatar"
              className="h-full w-full object-cover object-[center_top_-5%] scale-95"
            />
          </div>
          <div>
            <h2 className="text-foreground text-2xl font-semibold">
              Juan Isaac
            </h2>
            <p className="text-muted-foreground text-sm">
              AI × Web3 Engineer & Security-minded TPM
            </p>
          </div>
        </div>

        {/* Enhanced Live badge with availability status */}
        <div className="mt-4 flex flex-col items-center gap-2 sm:mt-0 sm:items-end">
          <span className="flex items-center gap-1 rounded-full border border-green-500 px-3 py-0.5 text-sm font-medium text-green-500">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Available Now
          </span>
          <p className="text-xs text-muted-foreground text-center sm:text-right">
            Taking 1–2 new build/advisory engagements
          </p>
        </div>
      </div>

      {/* Availability Highlight Section */}
      <div className="mb-8 rounded-2xl bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 border border-green-200 dark:border-green-800">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
            <Briefcase className="h-4 w-4 text-white" />
          </div>
          <h3 className="font-display text-2xl md:text-3xl tracking-tightish leading-tight text-foreground">Current Availability Status</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-foreground mb-1">Status</p>
            <p className="text-sm text-green-600 dark:text-green-400 font-semibold">
              ✅ Available for immediate start
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground mb-1">Looking for</p>
            <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
              Founder-level contracts • Short build sprints (2–6 weeks) • Advisory retainers in AI agents, on-chain payments, and EdTech
            </p>
          </div>
        </div>
      </div>

      {/* Internship Info */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex items-start gap-3">
          <CalendarDays className="mt-1 h-5 w-5 text-blue-500" />
          <div>
            <p className="text-foreground text-sm font-medium">Duration</p>
            <p className="text-muted-foreground text-sm">
              Available for project-based sprints now; open to longer-term if strategic fit
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Globe className="mt-1 h-5 w-5 text-green-500" />
          <div>
            <p className="text-foreground text-sm font-medium">Location</p>
            <p className="text-muted-foreground text-sm">
              New York City (EST) · Remote worldwide · English / Español
            </p>
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex items-start gap-3 sm:col-span-2">
          <Code2 className="mt-1 h-5 w-5 text-purple-500" />
          <div className="w-full">
            <p className="text-foreground text-sm font-medium">Tech stack</p>
            <div className="text-muted-foreground grid grid-cols-1 gap-y-1 text-sm sm:grid-cols-2">
              <ul className="decoration-none list-disc pl-4">
                <li>Frontend: Next.js, React, TypeScript, Tailwind</li>
                <li>AI/Agents: ElizaOS, LangGraph, OpenAI, Mistral, AWS Bedrock</li>
                <li>Web3/Payments: Coinbase AgentKit, Crossmint, ethers/viem, Stripe</li>
                <li>Smart Contracts: Solidity, Foundry, Hardhat, fuzz/invariant testing</li>
              </ul>
              <ul className="list-disc pl-4">
                <li>Data/Infra: Supabase/Postgres (pgvector), Firebase, Redis, Docker</li>
                <li>Messaging/UX: Telegram bots, webhooks, Cal/Calendly, PostHog</li>
                <li>Security: Code4rena/Secure3 background, role-based guardrails</li>
                <li>
                  <a
                    href="/?query=What%20are%20your%20skills%3F%20Give%20me%20a%20list%20of%20your%20soft%20and%20hard%20skills."
                    className="cursor-pointer items-center text-blue-500 underline"
                  >
                    See more
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* What I bring */}
      <div className="mt-10">
        <p className="font-display text-2xl tracking-tightish leading-tight text-foreground mb-2">
          What I bring
        </p>
        <div className="text-foreground text-sm space-y-2">
          <p><strong>createPersona.ai:</strong> Voice-first AI personalization — describe yourself once, get custom instructions for ChatGPT, Claude, and Grok. Live at createpersona.xyz.</p>
          <p><strong>StableShield:</strong> Trustless wallet security agent on Base — scans, scores, and revokes dangerous ERC-20 approvals across 6 chains. Live at stableshield.work with 348 tests passing.</p>
          <p><strong>AllowMe.ai:</strong> Designed TutorAgent → Evaluator flow with allow-listed payouts; GOAT wallet integration to send ETH; zero unauthorized transfers in testing; parent audit trail.</p>
          <p><strong>PromptQuest:</strong> Prompt → image/video generation → IPFS → Crossmint email minting (Solana testnet); workshop-ready UX for creators/educators.</p>
          <p><strong>Windsurf Vibe Competition (Top-3):</strong> Built and deployed a live Next.js app in &lt;45 minutes using AI-assisted development.</p>
          <p><strong>Secure3 Certified Auditor:</strong> 2 First Place wins, 5 valid submissions (3 High, 3 Medium severity), 2 solo High findings. Active on Code4rena & Sherlock.</p>
          <p><strong>Security DNA:</strong> Solidity + Foundry/Hardhat, fuzz/invariant tests, role-based guardrails, on-chain assertions.</p>
          <p><strong>Ecosystem leadership:</strong> Coinbase Ambassador/educator; bilingual (EN/ES); hands-on workshops for ElizaOS/Crossmint agent patterns.</p>
        </div>
      </div>

      {/* Goal */}
      <div className="mt-8">
        <p className="font-display text-2xl tracking-tightish leading-tight text-foreground mb-2">Goal</p>
        <p className="text-foreground text-sm">
          Partner with founders and product teams to launch agentic, transaction-capable products that are safe by design—AI tutors with evaluation loops, on-chain payment automation, and wallet UX that works for non-crypto users. Open to advisory retainers, short build sprints, and select founder roles where security and measurable outcomes matter.
        </p>
      </div>

      {/* Contact button */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={handleContactClick}
          className="cursor-pointer rounded-full bg-black px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-zinc-800"
        >
          Book a 15-min Architecture Intro
        </button>
      </div>
    </motion.div>
  );
};

export default AvailabilityCard;

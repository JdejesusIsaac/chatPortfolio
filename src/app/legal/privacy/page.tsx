import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Lock, Eye, Database, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Juan Isaac',
  description: 'Privacy policy for Juan Isaac portfolio website',
};

export default function PrivacyPage() {
  const lastUpdated = 'January 6, 2025';

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <h1 className="mb-4 text-4xl font-bold tracking-tight">Privacy Policy</h1>
            <p className="text-muted-foreground">
              Last updated: {lastUpdated}
            </p>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            {/* Introduction */}
            <section className="mb-8">
              <div className="mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold">Our Commitment to Privacy</h2>
              </div>
              <p className="text-muted-foreground">
                Juan Isaac ("we," "us," or "our") operates this portfolio website. This page informs you
                of our policies regarding the collection, use, and disclosure of personal information we
                receive from users of the site.
              </p>
            </section>

            {/* Information Collection */}
            <section className="mb-8">
              <div className="mb-4 flex items-center gap-2">
                <Database className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold">Information We Collect</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground">Analytics Data</h3>
                  <p>
                    We use Vercel Analytics to collect anonymous usage statistics. This includes pages
                    visited, time on site, and referral sources. No personally identifiable information
                    is collected.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Contact Information</h3>
                  <p>
                    When you contact us via email or scheduling tool, we collect your name, email
                    address, and any information you choose to provide in your message.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">AI Chatbot Interactions</h3>
                  <p>
                    Conversations with the AI chatbot may be temporarily stored to provide responses.
                    We do not permanently store chat history or link it to your identity.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="mb-8">
              <div className="mb-4 flex items-center gap-2">
                <Eye className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• To respond to your inquiries and communications</li>
                <li>• To improve our website and user experience</li>
                <li>• To analyze website traffic and usage patterns</li>
                <li>• To maintain the security and integrity of our services</li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="mb-8">
              <div className="mb-4 flex items-center gap-2">
                <Lock className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold">Data Security</h2>
              </div>
              <p className="text-muted-foreground">
                We implement industry-standard security measures to protect your information. All data
                transmitted to and from our site is encrypted using SSL/TLS. However, no method of
                transmission over the Internet is 100% secure.
              </p>
            </section>

            {/* Third-Party Services */}
            <section className="mb-8">
              <div className="mb-4 flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold">Third-Party Services</h2>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <p>We use the following third-party services:</p>
                <ul className="space-y-2">
                  <li>
                    <strong className="text-foreground">Vercel Analytics:</strong> Anonymous website
                    analytics
                  </li>
                  <li>
                    <strong className="text-foreground">Google Gemini API:</strong> AI chatbot
                    functionality
                  </li>
                  <li>
                    <strong className="text-foreground">Calendly:</strong> Meeting scheduling (when
                    used)
                  </li>
                </ul>
                <p>
                  These services have their own privacy policies and we encourage you to review them.
                </p>
              </div>
            </section>

            {/* Educational Content Safety Note */}
            <section className="mb-8 rounded-lg border-l-4 border-primary bg-accent/50 p-6">
              <h2 className="mb-3 text-xl font-semibold">Safety Note: Educational Content</h2>
              <p className="text-sm text-muted-foreground">
                Some portfolio projects (such as AllowMe.ai) involve educational technology for minors.
                These services have their own privacy policies and parental consent mechanisms. This
                portfolio site does not collect information from children under 13. Educational platforms
                follow COPPA and FERPA guidelines with parental controls and data minimization practices.
              </p>
            </section>

            {/* Your Rights */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">Your Rights</h2>
              <p className="mb-3 text-muted-foreground">You have the right to:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Access the personal information we hold about you</li>
                <li>• Request correction of inaccurate information</li>
                <li>• Request deletion of your personal information</li>
                <li>• Opt-out of analytics tracking (use Do Not Track browser settings)</li>
              </ul>
            </section>

            {/* Contact */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about this Privacy Policy or wish to exercise your rights, please
                contact us at:{' '}
                <a href="mailto:juandejesusisaac@gmail.com" className="text-primary hover:underline">
                  juandejesusisaac@gmail.com
                </a>
              </p>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold">Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any changes by
                posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}


import { Metadata } from 'next';
import { Mail, Phone, MapPin, Calendar, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';
import { portfolioConfig } from '@/lib/config-loader';

export const metadata: Metadata = {
  title: 'Contact | Juan Isaac',
  description: 'Get in touch with Juan Isaac for AI/Web3 projects, consulting, or opportunities.',
};

export default function ContactPage() {
  const { personal, social } = portfolioConfig;

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
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight">Get In Touch</h1>
            <p className="text-lg text-muted-foreground">
              Let's discuss your next AI × Web3 project or collaboration opportunity
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 text-2xl font-semibold">Contact Information</h2>
                <div className="space-y-4">
                  <a
                    href={`mailto:${personal.email}`}
                    className="flex items-start gap-4 rounded-lg border bg-card p-4 transition-colors hover:bg-accent"
                  >
                    <Mail className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">{personal.email}</p>
                    </div>
                  </a>

                  {personal.phone && (
                    <a
                      href={`tel:${personal.phone}`}
                      className="flex items-start gap-4 rounded-lg border bg-card p-4 transition-colors hover:bg-accent"
                    >
                      <Phone className="mt-1 h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-sm text-muted-foreground">{personal.phone}</p>
                      </div>
                    </a>
                  )}

                  <div className="flex items-start gap-4 rounded-lg border bg-card p-4">
                    <MapPin className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">{personal.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="mb-4 font-semibold">Connect Online</h3>
                <div className="flex flex-wrap gap-3">
                  {social.linkedin && (
                    <a
                      href={social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border bg-card px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </a>
                  )}
                  {social.github && (
                    <a
                      href={social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border bg-card px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              {/* Availability */}
              <div className="rounded-lg border-l-4 border-primary bg-accent/50 p-6">
                <h3 className="mb-2 font-semibold">Currently Available</h3>
                <p className="text-sm text-muted-foreground">
                  Open to consulting engagements, technical advisory roles, and full-time opportunities
                  in AI × Web3.
                </p>
              </div>
            </div>

            {/* Scheduler Embed */}
            <div>
              <div className="rounded-lg border bg-card p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">Schedule a Call</h2>
                </div>
                <p className="mb-6 text-sm text-muted-foreground">
                  Book a 30-minute intro call to discuss your project, technical challenges, or
                  collaboration opportunities.
                </p>

                {/* Calendly Embed Placeholder */}
                <div className="aspect-[4/3] rounded-lg border-2 border-dashed bg-accent/50 flex items-center justify-center">
                  <div className="text-center px-4">
                    <Calendar className="mx-auto mb-3 h-12 w-12 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-4">
                      Calendly integration placeholder
                    </p>
                    <a
                      href="https://calendly.com/juanisaac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      <Calendar className="h-4 w-4" />
                      Book on Calendly
                    </a>
                  </div>
                </div>

                {/* Instructions to add Calendly */}
                <div className="mt-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 p-4">
                  <p className="text-xs text-blue-900 dark:text-blue-100">
                    <strong>To integrate Calendly:</strong> Replace the placeholder above with your
                    Calendly inline embed code. Get it from{' '}
                    <a
                      href="https://calendly.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      calendly.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Response Time */}
              <div className="mt-6 rounded-lg border bg-card p-4">
                <p className="text-sm">
                  <strong>Response Time:</strong> I typically respond within 24 hours on weekdays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


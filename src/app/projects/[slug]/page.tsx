import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, Github, ExternalLink, CheckCircle, Shield, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { portfolioConfig } from '@/lib/config-loader';

export async function generateStaticParams() {
  return portfolioConfig.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioConfig.projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Juan Isaac`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.images?.map((img) => ({
        url: img.src,
        alt: img.alt,
      })),
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = portfolioConfig.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b bg-accent/50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {project.category}
              </span>
              <span className="text-sm text-muted-foreground">{project.date}</span>
              {project.status && (
                <span className="inline-flex items-center gap-1 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  {project.status}
                </span>
              )}
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {project.description}
            </p>

            {/* Links */}
            {project.links && project.links.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3">
                {project.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
                  >
                    {link.name.toLowerCase().includes('github') ? (
                      <Github className="h-4 w-4" />
                    ) : (
                      <ExternalLink className="h-4 w-4" />
                    )}
                    {link.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Problem Statement */}
            {project.problem && (
              <div>
                <h2 className="mb-4 text-2xl font-bold">Problem</h2>
                <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
              </div>
            )}

            {/* Solution */}
            {project.solution && (
              <div>
                <h2 className="mb-4 text-2xl font-bold">Solution & Architecture</h2>
                <p className="mb-4 text-muted-foreground leading-relaxed">
                  {project.solution.architecture}
                </p>
                {project.solution.bullets && project.solution.bullets.length > 0 && (
                  <ul className="space-y-2">
                    {project.solution.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        <span className="text-muted-foreground">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {/* Security */}
            {project.security && project.security.length > 0 && (
              <div>
                <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
                  <Shield className="h-6 w-6" />
                  Security & Safety
                </h2>
                <ul className="space-y-2">
                  {project.security.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Shield className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Metrics & Outcomes */}
            {project.metrics && (
              <div>
                <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
                  <TrendingUp className="h-6 w-6" />
                  Outcomes & Metrics
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="rounded-lg border bg-card p-4">
                      <p className="text-sm font-medium text-muted-foreground capitalize">
                        {key.replace(/_/g, ' ')}
                      </p>
                      <p className="mt-1 text-lg font-semibold">{value || 'N/A'}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quote/Testimonial */}
            {project.quote && (
              <div className="rounded-lg border-l-4 border-primary bg-accent/50 p-6">
                <blockquote className="text-lg italic text-foreground">
                  "{project.quote.text}"
                </blockquote>
                <p className="mt-2 text-sm text-muted-foreground">— {project.quote.attribution}</p>
              </div>
            )}

            {/* Lessons Learned */}
            {project.lessons && (
              <div>
                <h2 className="mb-4 text-2xl font-bold">Lessons & Future Improvements</h2>
                <p className="text-muted-foreground leading-relaxed">{project.lessons}</p>
              </div>
            )}

            {/* Images */}
            {project.images && project.images.length > 0 && (
              <div>
                <h2 className="mb-4 text-2xl font-bold">Screenshots</h2>
                <div className="grid gap-4">
                  {project.images.map((image, idx) => (
                    <div key={idx} className="overflow-hidden rounded-lg border">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={800}
                        height={600}
                        className="w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tech Stack */}
            {project.techStack && project.techStack.length > 0 && (
              <div className="rounded-lg border bg-card p-6">
                <h3 className="mb-4 font-semibold">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded-md bg-accent px-3 py-1 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Status & Date */}
            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-4 font-semibold">Project Info</h3>
              <dl className="space-y-3">
                <div>
                  <dt className="text-sm text-muted-foreground">Status</dt>
                  <dd className="mt-1 font-medium">{project.status || 'Completed'}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Timeline</dt>
                  <dd className="mt-1 font-medium">{project.date}</dd>
                </div>
                {project.featured && (
                  <div>
                    <dt className="text-sm text-muted-foreground">Featured Project</dt>
                    <dd className="mt-1">
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                        <CheckCircle className="h-4 w-4" />
                        Yes
                      </span>
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


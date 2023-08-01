import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

import { defaultAuthor } from "@/lib/metadata";
import { projects } from "@/lib/projects-data";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/copy-button";
import NewsletterSubscribe from "@/components/newsletter-subscribe";
import { Signature } from "@/components/signature";
import { SocialButton } from "@/components/social-button";
import { SpotlightCard } from "@/components/spotlight-card";

export default async function SocialPage() {
  return (
    <>
      <div className="container pt-10">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center md:flex-row">
            <Image src="/avatar-home.png" alt={defaultAuthor.name} width={200} height={200} />
            <div className="mt-4 text-center md:ml-4 md:text-left">
              <h1 className="font-heading text-4xl font-bold">{defaultAuthor.name}</h1>
              <p>{defaultAuthor.handle}</p>
            </div>
          </div>
          <h2 className="mb-2 mt-6 font-heading text-2xl font-bold">My projects</h2>
          <div className="grid items-stretch gap-4 md:grid-cols-2">
            {projects.map((item) => (
              <SpotlightCard key={item.href} {...item} />
            ))}
          </div>
          <h2 className="mb-2 mt-6 font-heading text-2xl font-bold">My socials</h2>
          <div className="mb-4 flex w-full max-w-2xl flex-col space-y-4">
            <Button asChild variant="outline">
              <Link href="https://skillshare.eqcm.net/eKqRDr" target="_blank">
                💻 Try Skillshare for FREE for 30 Days
              </Link>
            </Button>
            {defaultAuthor.socialProfiles.map((platform) => (
              <SocialButton key={platform.name} variant="outline" platform={platform} />
            ))}
            <CopyButton variant="default" copyText={defaultAuthor.email}>
              <Mail className="mr-2" /> Email address
            </CopyButton>
          </div>
        </div>
      </div>
      <NewsletterSubscribe
        title="Do you want to recieve some pretty awesome emails?"
        description="I mostly talk about learning game and web development, fantasy books and other fun things on the internet. I'll also send you a list of my favorite FREE games on Steam as a gift."
        buttonText="Send me the emails"
      />
    </>
  );
}

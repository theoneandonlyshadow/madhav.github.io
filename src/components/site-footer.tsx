import Image from "next/image";
import Link from "next/link";

import { SOURCE_CODE_GITHUB_URL } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
      <div className="screen-line-before mx-auto border-x border-edge pt-4 md:max-w-3xl">
        <p className="mb-1 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Made with Tailwind CSS & ShadCN
        </p>

        <p className="mb-4 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Built by{" "}
          <Link
            className="link"
            href="https://linkedin.com/theoneandonlyshadow"
            target="_blank"
            rel="noopener"
          >
            Madhav
          </Link>
          . The source code is available on{" "}
          <Link
            className="link"
            href={SOURCE_CODE_GITHUB_URL}
            target="_blank"
            rel="noopener"
          >
            GitHub
          </Link>
          .
        </p>

        <div className="screen-line-before screen-line-after flex w-full before:z-1 after:z-1">
          <div className="mx-auto flex items-center justify-center gap-3 border-x border-red-900 bg-background px-4">
            {/* <Link
              className="flex font-mono text-xs font-medium text-muted-foreground"
              href={'https://cronen.madhavn.com'}
              target="_blank"
              rel="noopener noreferrer"
            >
              Cronen UI
            </Link> */}
            <span className="flex text-muted-foreground transition-colors hover:text-foreground">
              <i className="devicon-nextjs-original-wordmark text-5xl"></i>
            </span>
            <Separator />

            <span>&</span>

            <Separator />

            <span className="flex text-muted-foreground transition-colors hover:text-foreground">
              <i className="devicon-cloudflare-plain-wordmark text-5xl"></i>
              <span className="sr-only">Cloudflare Protected</span>
            </span>
          </div>
        </div>
      </div>
      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-2" />
      </div>
    </footer>
  );
}

function Separator() {
  return <div className="flex h-11 w-px bg-edge" />;
}

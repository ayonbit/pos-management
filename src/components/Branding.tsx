"use client";

import Image from "next/image";
import Link from "next/link";

const Branding = () => {
  return (
    <div className="border-b border-gray-200 rounded-md py-3 px-4 hover:bg-gray-50/50 transition-colors">
      <Link
        href="/dashboard"
        className="flex items-center justify-center md:justify-start gap-2.5 group"
      >
        {/* Logo with hover effect */}
        <div className="relative shrink-0">
          <Image
            src="/file.svg"
            alt="Smart Account"
            width={32}
            height={32}
            loading="eager"
            className="transition-transform duration-200 group-hover:scale-105 group-hover:rotate-3"
            priority
          />
        </div>

        {/* Brand name - hidden on mobile, visible on md and up */}
        <span className="hidden md:block text-base font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
          Smart Account
        </span>
      </Link>
    </div>
  );
};

export default Branding;

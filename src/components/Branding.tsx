"use client";

import Image from "next/image";
import Link from "next/link";

const Branding = () => {
  return (
    <div className="border-b rounded-md border-gray-300 py-2 px-2  ">
      <Link
        href="/dashboard"
        className="flex items-center justify-center md:justify-start gap-2"
      >
        <Image src="/file.svg" alt="logo" width={32} height={32} />

        <span className="hidden md:block text-md font-semibold italic">
          Smart Account
        </span>
      </Link>
    </div>
  );
};

export default Branding;

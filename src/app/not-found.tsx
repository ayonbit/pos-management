import Button from "@/components/ui/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  ">
      <div className="max-w-md text-center space-y-6">
        <h1 className="text-6xl font-bold text-red-600">404! </h1>
        <h2 className="text-3xl font-semibold">Page Not Found !</h2>
        <p className="text-lg ">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>
        <Button size="lg" variant="primary" className="mt-4">
          <Link href="/dashboard" className="text-lg">
            Return Home
          </Link>
        </Button>
      </div>
    </div>
  );
}

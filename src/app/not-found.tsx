import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container flex h-full flex-col items-center justify-center">
      <h2 className="mb-8">
        <span className="text-xl font-semibold underline underline-offset-4">
          404
        </span>{' '}
        Not Found
      </h2>
      <Link href="/">
        <button className="rounded bg-slate-900 px-2 py-1 text-white hover:scale-105 dark:bg-slate-300 dark:text-slate-900">
          Return Home
        </button>
      </Link>
    </div>
  );
}

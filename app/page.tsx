import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-20 flex space-x-4">
      <Link
        className="border border-gray-200 p-10 shadow transition hover:bg-gray-50"
        href="/demo-1"
      >
        Demo 1
      </Link>
      <Link
        className="border border-gray-200 p-10 shadow transition hover:bg-gray-50"
        href="/demo-2"
      >
        Demo 2
      </Link>
      <Link
        className="border border-gray-200 p-10 shadow transition hover:bg-gray-50"
        href="/demo-3"
      >
        Demo 3
      </Link>
    </div>
  );
}

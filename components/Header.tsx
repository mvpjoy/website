import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between container mx-auto py-6 px-4">
      <div>
        <Image src="/logo.svg" alt="logo" width={140} height={37} />
      </div>
      <div>
        <ul className="flex gap-10 font-semibold">
          <li>
            <Link href={"/#work"} className="btn-pill flex gap-4">
              <span>Our Work</span>
              <span>↓</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="hidden md:block">
        <Link href="mailto:arvind@mvpjoy.com">
          <button className="font-semibold">Let's Talk</button>
        </Link>
      </div>
    </header>
  );
}

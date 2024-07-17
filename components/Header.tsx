import Image from "next/image";
import Link from "next/link";
import {
  BriefcaseIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon,
  Bars2Icon,
} from "@heroicons/react/24/outline";
import { Popover } from "@headlessui/react";

export default function Header() {
  return (
    <>
    <div className="bg-black p-2 flex items-center justify-center text-white text-sm">
      <div></div>
      <div className="flex gap-10">
        <span>+91 720 626 4120</span>
        <span>hr@mvpjoy.com</span>
      </div>
    </div>
      <div className="gradient-blur">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <header className="flex justify-between py-2 px-4 mx-auto sticky top-2 max-w-7xl z-20">
        <div>
          <Image
            src="/logo.svg"
            className="mx-auto md:mx-0"
            alt="logo"
            width={140}
            height={37}
          />
        </div>
        <div className="">
          <ul className="gap-2 justify-end text-base hidden md:inline-flex">
            {/* <li className="flex justify-end">
              <Link
                className="inline-flex px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 gap-1.5 items-center"
                href="/blog"
              >
                <DocumentTextIcon className="w-5 h-5" /> Blog
              </Link>
            </li> */}
            <li className="flex justify-end">
              <Link
                className="inline-flex px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 gap-1.5 items-center"
                href="/#work"
              >
                <BriefcaseIcon className="w-5 h-5" /> Work
              </Link>
            </li>
            <li className="flex justify-end">
              <Link
                className="inline-flex px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 gap-1.5 items-center"
                href="/#about"
              >
                <QuestionMarkCircleIcon className="w-5 h-5" /> About
              </Link>
            </li>
          </ul>

          <div className="flex justify-end md:hidden">
            <Popover className="relative">
              <Popover.Button as="div" className="p-3 rounded-lg">
                <div>
                  <Bars2Icon className="w-5 h-5" />
                </div>
              </Popover.Button>

              <Popover.Panel className="fixed z-10 inset-x-0 p-4 bg-[#131313]">
                <div className="grid grid-cols-2 gap-4">
                  <Link href="/blog">Blog</Link>
                  <Link href="/#work">Work</Link>
                  <Link href="/#pricing">Pricing</Link>
                  <Link href="/#about">About</Link>
                </div>

                <img src="/solutions.jpg" alt="" />
              </Popover.Panel>
            </Popover>
          </div>
        </div>
      </header>
    </>
  );
}

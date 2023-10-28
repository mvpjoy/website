import { Layout, WorkSection } from "@/components";
import { Inter } from "next/font/google";
import {
  ArrowRightIcon,
  CommandLineIcon,
  DocumentTextIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({
  weight: "500",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Web App Devlopment agency | MVPJoy</title>
        <meta
          name="description"
          content="We are a web app development agency that helps startups build their MVPs in 10 days. We have worked with 100+ startups and helped them launch their products."
        />
      </Head>

      <div className="fixed flex flex-col gap-3 top-0 right-20 bg-white w-[250px] p-4 rounded-b-3xl shadow-lg z-10 text-center">
        <p>Starting From</p>
        <h3 className="playFont">$3,999</h3>
        <button>Get Started</button>
      </div>

      <section className="pb-10 flex gap-10 justify-center md:h-screen items-center container mx-auto text-center md:text-left">
        <div className="flex-1">
          <div className="flex items-center pt-10">
            <Image
              src="/logo.svg"
              className="mx-auto md:mx-0"
              alt="logo"
              width={140}
              height={37}
            />
          </div>
          <div className="my-10 md:my-14">
            <div className="leading-loose">
              <h1
                className={`text-5xl playFont md:text-6xl xl:text-8xl max-w-5xl mx-auto font-semibold`}
              >
                Ready, Set,
                <br />
                <span className="relative inline-flex flex-col text-[#055192]">
                  Launch!
                  <img src="/img/underline.svg" className="h-10 mx-auto" />
                </span>
              </h1>
            </div>

            <p className="max-w-xl balanced  mt-6 text-lg text-slate-600">
              15 days from now, you'll look back and be grateful you took the
              first step towards your MVP.
            </p>
            <div className="mt-10">
              <Link href="mailto:heyarviind@gmail.com">
                <button className="btn btn-lg shadow-xl">
                  Let&apos;s Connect →
                </button>
              </Link>
            </div>
          </div>
        </div>
        <aside className=" flex-1 items-center relative justify-center hidden md:flex">
          <img
            src="/img/shapeBg.svg"
            className="absolute w-[450px] scale-150"
          />
          <div className="w-full max-w-[350px] bg-white group squircle py-10 shadow-black/5 h-screen max-h-[600px] rounded-3xl flex flex-col items-center justify-center">
            <div className="text-center pt-10 grayscale group-hover:grayscale-0">
              <img
                src="/img/bulb.svg"
                className="transition-scale duration-300 ease-in-out scale-90 group-hover:scale-100"
              />
            </div>
            <div className="flex-1 flex items-center">
              <div>
                <h3 className="font-regular text-base text-center">
                  Starting From
                </h3>
                <h1 className="text-6xl font-bold playFont">$3,999</h1>
              </div>
            </div>
            <div>
              <div className="bg-black rounded-full flex items-center justify-center w-14 h-14">
                <ArrowRightIcon className="w-8 h-8 text-white mx-auto" />
              </div>
            </div>
          </div>
          <img
            src="/img/shape.svg"
            className="absolute w-[200px] top-0 right-10 mix-blend-multiply"
          />
        </aside>
      </section>
      {/* 
          <section>
            <Marquee />
          </section> */}

      <label htmlFor="mvp" className="group">
        <div
          className="h-10 bg-repeat-x -mt-10"
          style={{
            backgroundImage: "url('/img/curvyBorderTop.svg')",
          }}
        />
        <div className="bg-[#fff] py-10 transition-all duration-200 ease-in-out">
          <h2 className="text-center text-5xl playFont">What is an MVP?</h2>
          <input type="checkbox" className="peer" id="mvp" />
          <p className="text-xl max-w-4xl mx-auto mt-6 text-center ">
            <span className="">
              A minimum viable product (MVP) is like making the simplest version
              of your idea that works, just to check if people like it.
            </span>
            <br />
            <br />
            It's like starting with a small, basic robot that can dance a
            little, and if people like it, you can make it better.{" "}
            <span className="underline bg-yellow-100">
              If not, you haven't wasted too much time or money.
            </span>
          </p>
        </div>
        <div
          className="h-10 bg-repeat-x -mb-10 rotate-180"
          style={{
            backgroundImage: "url('/img/curvyBorderTop.svg')",
          }}
        />
      </label>

      <svg width="10" height="10" viewBox="0 0 10 10">
        <clipPath
          id="squircleClip"
          clipPathUnits="objectBoundingBox"
          className="shadow-lg"
        >
          <path
            fill="red"
            stroke="none"
            d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5"
          />
        </clipPath>
      </svg>

      <div className="py-20 bg-[#f0f4f7]">
        <section
          className="container mx-auto"
          // add dotted background
        >
          <h2 className={`text-3xl text-center playFont`}>
            What is our approach of building an MVP?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">
            <div>
              <DocumentTextIcon className="w-10 h-10 text-[#5134FF] mb-6" />
              <h3>Research</h3>
              <p className="mt-2 text-slate-600">
                We dig deep into your product and spy on the competition. Then
                we whip up a genius plan.
              </p>
              <p className="mt-2 text-slate-600">
                Write it down share it with you and move to next step
              </p>
            </div>
            <div>
              <CommandLineIcon className="w-10 h-10 text-[#5134FF] mb-6" />
              <h3>Develop</h3>
              <p className="mt-2 text-slate-600">
                Our crack team of designers and developers work like caffeinated
                squirrels to make your brand shine, all without sacrificing
                quality or speed.
              </p>
            </div>
            <div>
              <RocketLaunchIcon className="w-10 h-10 text-[#5134FF] mb-6" />
              <h3>Launch</h3>
              <p className="mt-2 text-slate-600">
                When the curtain rises, we shoot your product into the digital
                universe with a launch more exciting than a rollercoaster ride.
                Because it's not just about making the baby; it's about throwing
                the ultimate baby shower!
              </p>
            </div>
          </div>
        </section>
      </div>

      <section
        className="container mx-auto my-10 py-10 px-4 bg-white squircle"
        id="work"
      >
        <h2 className="text-center">Our Work</h2>
        <WorkSection />
      </section>

      <footer className="container mx-auto px-4 text-center py-10 text-slate-600">
        {/* add simple footer */}© 2023 MVPJoy. All rights reserved.
      </footer>
    </Layout>
  );
}

function Marquee() {
  return (
    <div className="marquee text-lg font-semibold uppercase px-2 bg-yellow-100 py-2.5 text-black rotate-3">
      <span className="marquee--inner flex items-center gap-4">
        Say goodbye to endless development cycles and hello to a fully
        functional product{" "}
        <div className="w-40 h-2 border-t-2 border-black inline-block" /> Say
        goodbye to endless development cycles and hello to a fully functional
        product
        <div className="w-40 h-2 border-t-2 border-black inline-block" /> Say
        goodbye to endless development cycles and hello to a fully functional
        product
        <div className="w-40 h-2 border-t-2 border-black inline-block" /> Say
        goodbye to endless development cycles and hello to a fully functional
        product
        <div className="w-40 h-2 border-t-2 border-black inline-block" /> Say
        goodbye to endless development cycles and hello to a fully functional
        product
      </span>
    </div>
  );
}

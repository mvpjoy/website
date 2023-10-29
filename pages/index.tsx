import { Layout, WorkSection } from "@/components";
import { Inter } from "next/font/google";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  CommandLineIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon,
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

      <header className="flex justify-between py-2 container mx-auto">
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
          <ul className="inline-flex flex-col gap-2 justify-end text-base">
            <li className="flex justify-end">
              <Link
                className="inline-flex px-3 border-b py-1.5 rounded-xl bg-white shadow-sm gap-1.5 items-center"
                href="/blog"
              >
                <DocumentTextIcon className="w-5 h-5" /> Blog
              </Link>
            </li>
            <li className="flex justify-end">
              <Link
                className="inline-flex px-3 border-b py-1.5 rounded-xl bg-white shadow-sm gap-1.5 items-center"
                href="/#work"
              >
                <BriefcaseIcon className="w-5 h-5" /> Work
              </Link>
            </li>
            <li className="flex justify-end">
              <Link
                className="inline-flex px-3 border-b py-1.5 rounded-xl bg-white shadow-sm gap-1.5 items-center"
                href="/#about"
              >
                <QuestionMarkCircleIcon className="w-5 h-5" /> About
              </Link>
            </li>
          </ul>
        </div>
      </header>

      {/* <div className="fixed flex flex-col gap-3 top-0 right-20 bg-white w-[250px] p-4 rounded-b-3xl shadow-lg z-10 text-center">
        <p>Starting From</p>
        <h3 className="playFont">$3,999</h3>
        <button>Get Started</button>
      </div> */}

      <section className="pb-10 flex flex-col gap-10 justify-center items-center container mx-auto text-center md:text-left">
        {/* <aside className="flex-1 items-center relative justify-center hidden md:flex ">
          <img
            src="/img/shapeBg.svg"
            className="absolute w-[450px] scale-150"
          />
          <div className="w-full max-w-[300px] bg-white group squircle py-10 shadow-black/5 h-screen max-h-[500px] rounded-3xl flex flex-col items-center justify-center">
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
        </aside> */}
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
            15 days from now, you&apos;ll look back and be grateful you took the
            first step towards your MVP.
          </p>
          <div className="mt-10">
            <Link href="#work">
              <button className="btn btn-lg bg-blue-500 text-white">
                See our work ↓
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* 
          <section>
            <Marquee />
          </section> */}

      <div className="group">
        <div
          className="h-10 bg-repeat-x -mt-10"
          style={{
            backgroundImage: "url(&apos;/img/curvyBorderTop.svg&apos;)",
          }}
        />
        <div className="bg-[#fff] py-20 transition-all duration-200 ease-in-out">
          <h2 className="text-center text-5xl playFont">What is an MVP?</h2>

          <p className="text-xl max-w-4xl mx-auto mt-6 text-center ">
            <span className="">
              A minimum viable product (MVP) is like making the simplest version
              of your idea that works, just to check if people like it.
            </span>
            <br />
            <br />
            It&apos;s like starting with a small, basic robot that can dance a
            little, and if people like it, you can make it better.{" "}
            <span className="underline bg-yellow-100">
              If not, you haven&apos;t wasted too much time or money.
            </span>
          </p>
        </div>
        <div
          className="h-10 bg-repeat-x -mb-10 rotate-180"
          style={{
            backgroundImage: "url(&apos;/img/curvyBorderTop.svg&apos;)",
          }}
        />
      </div>

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
                Because it&apos;s not just about making the baby; it&apos;s
                about throwing the ultimate baby shower!
              </p>
            </div>
          </div>
        </section>
      </div>

      <section
        className="container mx-auto my-10 py-10 px-4 bg-gradient-to-b from-white/60 to-white/30 border shadow border-white/70 rounded-3xl"
        id="work"
      >
        <h2 className="text-center">Our Work</h2>
        <WorkSection />
      </section>

      <section className="my-20 flex flex-col lg:flex-row gap-10 w-full container items-center">
        {/* FAQ */}
        <div className="flex-1 order-2 lg:order-1">
          <div className=" pt-8 text-left md:gap-16 dark:border-gray-700 ">
            <div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <QuestionMarkCircleIcon className="w-5 h-5" />
                  What tech stack do you use?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We use React, Next.js, TailwindCSS, and/or Supabase,
                  Pocketbase, MongoDb or PostgreSQL for our projects.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <QuestionMarkCircleIcon className="w-5 h-5" />
                  We know nothing about tech, can you still help us?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Yes, we can. We will help you with everything from buying a
                  domain name to launching your product and everything in
                  between.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <QuestionMarkCircleIcon className="w-5 h-5" />
                  Can it take longer than 15 days?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  It totally depends on the complexity of the project. We will
                  give you a timeline before starting the project.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* pricing */}
        <div className="w-full max-w-[350px] order-1 lg:order-2">
          <h2 className="text-center">Pricing</h2>

          <div className="flex justify-center my-10">
            <div className="w-full max-w-[350px] bg-white group squircle py-10 shadow-black/5 h-screen max-h-[600px] rounded-3xl flex flex-col gap-10 items-center justify-center">
              <div className="flex items-center">
                <div className="flex-1 items-center">
                  <div>
                    <h3 className="font-regular text-base text-center">
                      Starting From
                    </h3>
                    <h1 className="text-6xl font-bold playFont">$3,999</h1>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <ul className="flex flex-col gap-2">
                    <li className="flex gap-1.5">
                      <CheckCircleIcon className="w-6 h-6 text-green-500" />
                      Mobile app or Website
                    </li>
                    <li className="flex gap-1.5">
                      <CheckCircleIcon className="w-6 h-6 text-green-500" />
                      Unlimited revisions
                    </li>
                    <li className="flex gap-1.5">
                      <CheckCircleIcon className="w-6 h-6 text-green-500" />
                      Post launch help
                    </li>
                    <li className="flex gap-1.5">
                      <CheckCircleIcon className="w-6 h-6 text-green-500" />
                      No unnecessary meetings
                    </li>
                    <li className="flex gap-1.5">
                      <CheckCircleIcon className="w-6 h-6 text-green-500" />
                      No hidden charges
                    </li>
                    <li className="flex gap-1.5">
                      <CheckCircleIcon className="w-6 h-6 text-green-500" />
                      Market stadndard product
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <Link href="mailto:heyarviind@gmail.com">
                  <div className="bg-black rounded-full flex items-center justify-center w-14 h-14">
                    <ArrowRightIcon className="w-8 h-8 text-white mx-auto" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* testimonials */}
        <div className="flex-1 order-3">
          <figure className="max-w-screen-md mx-auto text-center">
            <svg
              className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <blockquote>
              <p className="text-2xl italic font-medium text-gray-900 dark:text-white">
                &quot;MVPJoy is awesome, we were able to launch our product in
                very short time, and there was no compromise in quality.&quot;
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <img
                className="w-6 h-6 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                  Jatin Walia
                </cite>
                <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                  Co-Founder at Tuicus
                </cite>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="about">
        <h2 className="text-center">Who is behind MVPJoy?</h2>

        <div className="flex gap-10 max-w-3xl mx-auto w-full items-center mt-10">
          <div className="text-center text-gray-500 dark:text-gray-400 shrink-0">
            <img
              className="mx-auto mb-4 w-36 h-36 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
              alt="Bonnie Avatar"
            />
          </div>
          <div>
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Arvind Singh</a>
            </h3>
            <p className="text-slate-500">Indie Hacker</p>
            <p className="text-lg mt-2">
              I am a self-taught developer and designer. I have been building
              MVPs for startups since 2018. I have worked with 100+ startups
              from all over the world.
            </p>
            <ul className="flex mt-4 space-x-4">
              <li>
                <a
                  target="_blank"
                  href="https://twitter.com/heyarviind"
                  className="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/heyarviind"
                  className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://dribbble.com/heyarviind"
                  className="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
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

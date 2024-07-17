import { Header, Layout, WorkSection } from "@/components";
import { Inter } from "next/font/google";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  CommandLineIcon,
  DocumentTextIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import Head from "next/head";
import Link from "next/link";

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

        

      <Header />

      <section className="pb-10 flex flex-col gap-10 justify-center items-center container mx-auto text-center md:text-left -mt-10">
        <div className="my-10 md:my-14 text-center relative z-10">
          <svg
            width="142"
            height="132"
            viewBox="0 0 142 132"
            className="mx-auto"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.49977 130C2.49977 126.184 2.21217 122.55 3.77755 118.972C5.3002 115.492 6.67724 111.701 7.49977 108C8.79145 102.187 11.1543 96.6882 12.7498 90.9444C15.272 81.8645 17.5621 72.5215 22.4998 64.3889C26.2655 58.1866 30.1346 52.2499 33.9998 46.1111C37.467 40.6044 40.5827 34.4171 45.2498 29.75C48.7328 26.267 50.7054 21.4234 54.7498 18.2778C56.2698 17.0955 58.0071 16.2705 59.3887 14.8889C61.3039 12.9737 63.1078 10.5181 65.4998 9.11111C68.221 7.5104 69.5445 3.47761 72.4998 2"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
            />
            <path
              d="M73 2C77.0403 6.04033 82.0513 8.8291 86.1111 12.8889C87.827 14.6048 89.4682 16.4682 91.25 18.25C93.5564 20.5564 96.1515 22.7071 98.4722 25.0278C100.565 27.1206 102.001 30.8785 103.389 33.5C104.536 35.667 106.258 37.7383 107.389 40C109.145 43.5128 112.383 46.1127 114 49.75C114.611 51.1249 115.832 52.6055 116.722 53.75C117.661 54.9573 118.04 56.5494 119 57.75C121.153 60.4407 121.214 64.5973 123 67.6111C125.068 71.101 126.095 75.0816 127.75 78.7222C128.975 81.418 129.442 84.3688 130.611 87C131.94 89.9891 133.5 94.346 133.5 97.6111C133.5 100.296 134.786 103.376 135.472 105.778C136.304 108.688 136.372 111.801 137.028 114.75C137.488 116.821 137.659 121.573 138.889 123.111C140.031 124.539 139.172 129.836 140.5 130.5"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
            />
            <path
              d="M63.9998 72.5C61.8726 72.7364 60.2183 76.3408 59.3887 78C58.1632 80.451 57.4998 81.886 57.4998 84.75C57.4998 89.5968 56.6583 94.7395 59.7776 98.75C62.5718 102.343 69.4713 106 73.9998 106C78.9763 106 85.7318 106.99 89.611 103.111C93.1946 99.5275 92.9998 94.4404 92.9998 89.75C92.9998 84.9308 92.3678 80.1229 87.7776 77.5C86.3084 76.6605 84.3337 75.4882 82.7221 75.0278C80.7123 74.4536 78.8923 72.7366 76.9998 72.5C74.8961 72.237 73.1607 71.5 70.7498 71.5C68.7696 71.5 66.25 71 63.9998 71"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>

          <div className="leading-loose">
            <h1
              className={`text-5xl playFont md:text-7xl max-w-5xl mx-auto font-bold text-white`}
            >
              Ready, Set, <br />
              Launch!
            </h1>
          </div>

          <p className="max-w-xl balanced  mt-6 text-xl text-white/50 mx-auto">
            15 days from now, you&apos;ll look back and be grateful you took the
            first step towards your MVP.
          </p>
          <div className="mt-6">
            <Link href="#work">
              <button className="btn btn-lg ">See our work ↓</button>
            </Link>
          </div>

          <svg
            width="119"
            height="94"
            viewBox="0 0 119 94"
            fill="none"
            className="mx-auto mt-3"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 5C1.5 8.37037 1.5 11.7407 1.5 15.1111C1.5 19.0268 2.79185 23.0451 3 27C3.15273 29.9019 4 32.8997 4 35.8889C4 38.9986 4.47697 42.9252 5.38889 45.8889C6.9747 51.0428 6.40089 55.1207 11.1111 58.8889C12.9154 60.3323 15.1696 60 17.5 60C19.4777 60 21.6071 56.6707 22.8889 55.3889C24.6206 53.6571 26.2218 51.7782 28 50C30.2349 47.7651 30.4945 45.4218 32.3889 49C35.1331 54.1834 37.284 60.284 41.5 64.5C46.8482 69.8482 50.0695 77.7241 54 84.1111C55.3791 86.3522 56.1664 89.0585 58 91C59.4779 92.5648 64.0213 92.5668 65.75 91.2222C70.4453 87.5703 72.8075 81.2414 74.0278 75.75C74.6003 73.1738 76.3976 70.8357 76.9722 68.25C77.4689 66.0149 79.1072 62.8071 80.25 60.75C83.0466 55.7162 84.7224 48.8331 88.7778 44.7778C90.0021 43.5535 98.6631 56.5906 100.75 57.75C102.822 58.9008 105.928 58.1537 107 56.2778C107.49 55.4201 108.401 54.9207 108.889 54C109.215 53.3837 109.882 51.2945 110.25 51C111.249 50.2009 111.5 45.0945 111.5 43.75C111.5 40.8248 113 37.6588 113 34.75C113 31.6916 114 28.7107 114 25.75C114 23.0277 114.375 19.4353 114.972 16.75C116.078 11.7727 115.382 6.35327 117 1.5"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        </div>

        <div className="absolute circqle-2 hidden md:flex" />
        <div className="absolute circqle-1 hidden md:flex" />
      </section>

      {/* <section>
        <Marquee />
      </section> */}

      <div className="group hidden">
        <div
          className="h-10 bg-repeat-x -mt-10"
          style={{
            backgroundImage: "url(&apos;/img/curvyBorderTop.svg&apos;)",
          }}
        />
        <div className=" py-20 transition-all duration-200 ease-in-out">
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

      <div className="py-20 ">
        <section className="container mx-auto">
          <h2 className={`text-3xl text-center playFont`}>
            What is our approach of building an MVP?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">
            <div>
              <div className="w-20 h-20 relative -mb-6">
                <DocumentTextIcon className="w-20 h-20 text-white mb-6" />
                <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#131313] to-transparent" />
              </div>

              <h3 className="relative z-10">Research</h3>
              <p className="mt-2 text-white/40">
                We dig deep into your product and spy on the competition. Then
                we whip up a genius plan.
              </p>
              <p className="mt-2 text-white/40">
                Write it down share it with you and move to next step
              </p>
            </div>
            <div>
              <div className="w-20 h-20 relative -mb-6">
                <CommandLineIcon className="w-20 h-20 text-white mb-6" />
                <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#131313] to-transparent" />
              </div>

              <h3 className="relative z-10">Develop</h3>
              <p className="mt-2 text-white/40">
                Our crack team of designers and developers work like caffeinated
                squirrels to make your brand shine, all without sacrificing
                quality or speed.
              </p>
            </div>
            <div>
              <div className="w-20 h-20 relative -mb-6">
                <RocketLaunchIcon className="w-20 h-20 text-white mb-6" />
                <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#131313] to-transparent" />
              </div>

              <h3 className="relative z-10">Launch</h3>
              <p className="mt-2 text-white/40">
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
        className="container mx-auto my-10 py-10 px-4 bg-gradient-to-b from-white/5 to-transparent shadow rounded-3xl"
        id="work"
      >
        <h2 className="text-center">Our Work</h2>
        <WorkSection />
      </section>

      <section className="my-40 relative flex flex-col lg:flex-row gap-10 w-full container items-center bg-gradient-to-b from-white/5 to-transparent p-20 rounded-3xl">
        <div className="flex-1 order-3">
          <figure className="max-w-screen-md mx-auto text-center">
            <svg
              className="w-10 h-10 mx-auto mb-3 text-white/40"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <blockquote>
              <p className="text-2xl italic font-medium text-white ">
                &quot;Very accommodating, highly skilled in bringing my project to life — I&apos;m thoroughly impressed and definitely look forward to collaborating with them again. Their attention to detail and willingness to assist with every aspect make them the ideal partner for any project.&quot;
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <img
                className="w-6 h-6 rounded-full"
                src="https://www.samwebstudio.com/resources/assets/frontend/img/cl1.jpg"
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 divide-white/40">
                <cite className="pr-3 font-medium text-white ">
                  Qamar Pasha
                </cite>
                <cite className="pl-3 text-sm text-white/40 ">
                  Dubai, UAE
                </cite>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="my-20 container" id="pricing">
        <div className="w-full order-1 lg:order-2">
          <h2 className="text-center mb-6">Pricing</h2>

          <div className="w-full bg-white/5 group squircle p-10 md:p-20 shadow-black/5 rounded-3xl flex flex-col md:flex-row gap-10 items-center justify-between">
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
              <div className="flex flex-col md:flex-row gap-2 md:gap-10">
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
                </ul>
                <ul className="flex flex-col gap-2">
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
      </section>

      <section className="max-w-2xl mx-auto px-4 md:px-0">
        <h2>FAQ</h2>
        <div className="flex-1 order-2 lg:order-1">
          <div className=" pt-8 text-left md:gap-16 dark:border-gray-700 ">
            <div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium">
                  What tech stack do you use?
                </h3>
                <p className="text-white/40">
                  We use React, Next.js, TailwindCSS, and/or Supabase,
                  Pocketbase, MongoDb or PostgreSQL for our projects.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium">
                  We know nothing about tech, can you still help us?
                </h3>
                <p className="text-white/40">
                  Yes, we can. We will help you with everything from buying a
                  domain name to launching your product and everything in
                  between.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium">
                  Can it take longer than 15 days?
                </h3>
                <p className="text-white/40">
                  It totally depends on the complexity of the project. We will
                  give you a timeline before starting the project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-40 relative flex flex-col lg:flex-row gap-10 w-full container items-center bg-gradient-to-b from-white/5 to-transparent p-20 rounded-3xl">
        <div className="flex-1 order-3">
          <figure className="max-w-screen-md mx-auto text-center">
            <svg
              className="w-10 h-10 mx-auto mb-3 text-white/40"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <blockquote>
              <p className="text-2xl italic font-medium text-white ">
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
              <div className="flex items-center divide-x-2 divide-white/40">
                <cite className="pr-3 font-medium text-white ">
                  Jatin Walia
                </cite>
                <cite className="pl-3 text-sm text-white/40 ">
                  Co-Founder at Tuicus
                </cite>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="about" className="hidden">
        <h2 className="text-center">Who is behind MVPJoy?</h2>

        <div className="flex flex-col md:flex-row text-center md:text-left gap-10 max-w-3xl mx-auto w-full items-center mt-10">
          <div className="text-center text-white/40 shrink-0">
            <img
              className="mx-auto mb-4 w-36 h-36 rounded-full"
              src="https://pbs.twimg.com/profile_images/1737369153999392768/aMmQitPN_400x400.jpg"
              alt="Arvind Singh"
            />
          </div>
          <div>
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
              <a href="#">Arvind Singh</a>
            </h3>
            <p className="text-white/40">Indie Hacker</p>
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
    <div className="marquee text-lg font-semibold uppercase px-2 bg-yellow-50 py-2.5 text-black rotate-3">
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

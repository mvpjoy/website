import { Layout, WorkSection } from "@/components";
import { Inter } from "next/font/google";
import {
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

      <section className="container mx-auto px-4">
        <div className="my-10 md:my-20">
          <div className=" leading-loose">
            <h1
              className={`text-3xl lg:text-4xl xl:text-6xl ${inter.className} max-w-5xl text-center mx-auto`}
            >
              Ready, Set, Launch! Our Agency Will Get You Started in 10 Days
            </h1>
          </div>

          <p className="max-w-3xl mx-auto text-center mt-6 text-lg text-slate-600">
            Launch your startup confidently in just 10 days with our
            agency&apos;s expert guidance. We&apos;ll build a product that your
            customers will love.
          </p>
          <div className="text-center mt-10">
            <Link href="mailto:arvind@mvpjoy.com">
              <button className="bg-[#5134FF] text-lg px-8 py-4 rounded-full text-white font-semibold shadow-lg shadow-[#5134ff]/20 hover:bg-opacity-90 active:scale-95 transition-all ">
                Let&apos;s Connect →
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <Marquee />
      </section>

      <section className="py-10 md:py-20 container mx-auto p-10 bg-[#F9F9F9] mt-10 md:rounded-3xl">
        <h2 className={`${inter.className} text-2xl md:text-6xl text-center`}>
          How we go from <br />
          <span className=" border-2 md:border-4 border-black rounded-full px-6 py-2 mt-4 inline-flex">
            0 → 1
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">
          <div>
            <DocumentTextIcon className="w-10 h-10 text-[#5134FF] mb-6" />
            <h3>Research</h3>
            <p className="mt-2 text-slate-600">
              We begin by collecting all the necessary information about your
              product and conducting in-depth research on your competitors. From
              there, our team creates a comprehensive plan for your MVP launch.
            </p>
          </div>
          <div>
            <CommandLineIcon className="w-10 h-10 text-[#5134FF] mb-6" />
            <h3>Develop</h3>
            <p className="mt-2 text-slate-600">
              Our team of talented designers and developers work together to
              create a cohesive brand identity that captures the essence of your
              business. We understand the importance of a timely launch, so we
              strive to complete each project as quickly as possible without
              compromising on quality.
            </p>
          </div>
          <div>
            <RocketLaunchIcon className="w-10 h-10 text-[#5134FF] mb-6" />
            <h3>Launch</h3>
            <p className="mt-2 text-slate-600">
              Once your product is ready, our experienced team deploys it and
              provides you with guidance on how to launch it effectively on
              various platforms, including ProductHunt. We believe that a
              successful launch is not just about building a product, but also
              about executing a well-thought-out launch plan.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto my-10 py-10 px-4" id="work">
        <h2>
          Our Work <span className="w-40 border-t-2 inline-flex"></span>
        </h2>
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
    <div className="marquee text-lg font-semibold uppercase px-2 bg-black py-2 text-white">
      <span className="marquee--inner flex items-center gap-4">
        Say goodbye to endless development cycles and hello to a fully
        functional product <div className="w-40 h-2 border-t-2 inline-block" />{" "}
        Say goodbye to endless development cycles and hello to a fully
        functional product
        <div className="w-40 h-2 border-t-2 inline-block" /> Say goodbye to
        endless development cycles and hello to a fully functional product
        <div className="w-40 h-2 border-t-2 inline-block" /> Say goodbye to
        endless development cycles and hello to a fully functional product
        <div className="w-40 h-2 border-t-2 inline-block" /> Say goodbye to
        endless development cycles and hello to a fully functional product
      </span>
    </div>
  );
}

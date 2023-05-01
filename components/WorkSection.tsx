import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const workInfo = [
  {
    name: "SideInvest.io",
    logo: "/img/sideinvest.svg",
    description: `SideInvest.io is a marketplace where you can find people who are
    interested in buying your business or invest in your business and
    provide you proper guidance, and in return, you can offer some
    equity of the business.`,
    link: "https://www.producthunt.com/products/sideinvest-io",
    cover: "/img/sideinvest-screenshots.png",
  },
  {
    name: "ConvertX",
    logo: "/img/convertx-logo.svg",
    description: `ConvertX tries to recover all the abandoned stripe checkout sessions by sending a reminder email and then a discount email. 
    This is done in the 24-hour time frame (which increases the chance of conversion).`,
    link: "https://convertx.io",
    cover: "/img/convertx-screenshot.png",
  },
  {
    name: "Tilburg Science Hub",
    logo: "/img/tilburgsciencehub.svg",
    description: `Learn to work more efficiently on empirical research projects, 
    using tools like R, Python, and Stata – flavored with open science made in Tilburg.`,
    link: "https://tilburgsciencehub.com/",
    cover: "/img/tilburgsciencehub.png",
  },
  {
    name: "SecondFounder",
    logo: "/img/secondfounder.svg",
    description: `Secondfounder is a marketplace where products are sorted in kanban-style order, 
    making it super simple to explore side projects. You can also collaborate with founders to buy a side project`,
    link: "https://secondfounder.com",
    cover: "/img/secondfounder.png",
  },
  {
    name: "Heey.app",
    logo: "/img/heeyapp.svg",
    description: `Heey.app is a platfrom where creators can create a paid community, sell their premium content and offerings. This is built on pocketbase, next.js and SQLite.`,

    cover: "/img/heeyapp.png",
  },
];

export default function WorkSection() {
  const [currentWorkIndex, setCurrentWorkIndex] = useState(0);

  return (
    <section className="my-16">
      <div className="flex items-center flex-col md:flex-row max-w-4xl w-full mx-auto mb-20 md:space-x-14 space-y-10 md:space-y-0">
        <div className="shrink-0 md:w-1/3 relative">
          <img
            loading="lazy"
            alt={`${workInfo[currentWorkIndex].name} screenshot`}
            src={workInfo[currentWorkIndex].cover}
            className="rounded-lg relative z-[3]"
          />

          <div className="border-2 rounded-lg absolute bg-white w-full scale-95 z-[2] inset-y-0 left-4 inset-x-full" />
          <div className="border-2 rounded-lg absolute bg-white w-full scale-90 z-[1] inset-y-0 left-8 inset-x-full" />
        </div>
        <div className="flex-1">
          <div className="h-[30px] flex mb-8">
            <Image
              src={workInfo[currentWorkIndex].logo}
              alt={`${workInfo[currentWorkIndex].name} logo`}
              width={200}
              height={140}
              className="object-contain left-0"
            />
          </div>

          <p className="mb-6 text-lg text-slate-600">
            {workInfo[currentWorkIndex].description}
          </p>

          {workInfo[currentWorkIndex].link && (
            <Link
              target="_blank"
              rel="noreferrer"
              href={workInfo[currentWorkIndex]?.link || ""}
            >
              <button className="btn-primary">Visit Site</button>
            </Link>
          )}

          <div className="mt-10 flex space-x-2 justify-center">
            {workInfo.map((work, index) => (
              <span
                className={`w-3 h-3 ${
                  currentWorkIndex === index ? "bg-slate-600" : "bg-slate-300"
                } rounded-full cursor-pointer`}
                key={`pointer-${index}`}
                onClick={() => setCurrentWorkIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

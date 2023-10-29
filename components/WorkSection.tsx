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
      {workInfo.map((work, index) => (
        <div
          className="flex items-center flex-col md:flex-row even:flex-row-reverse max-w-4xl w-full mx-auto mb-20 gap-10"
          key={`work-${index}`}
        >
          <div className="shrink-0 md:w-1/3 relative">
            <img
              loading="lazy"
              alt={`${work.name} screenshot`}
              src={work.cover}
              className="rounded-lg relative z-[3]"
            />
          </div>
          <div className="flex-1">
            <div className="h-[30px] flex mb-8">
              <img src={work.logo} alt={`${work.name} logo`} />
            </div>

            <p className="mb-6 text-lg text-slate-600">{work.description}</p>

            {work.link && (
              <Link target="_blank" rel="noreferrer" href={work?.link || ""}>
                <button className="btn-primary">Visit Site</button>
              </Link>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}

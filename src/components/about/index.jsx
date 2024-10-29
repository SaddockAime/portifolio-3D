import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-1 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full  flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize text-accent">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            My journey in web development is powered by an array of mystical
            tools and languages, with JavaScript casting the core of my
            enchantments. I wield frameworks like React.js and Next.js with
            precision, crafting seamless portals (websites) that connect realms
            (users) across the digital universe. The ancient arts of the
            Jamstack empower me to create fast, secure, and dynamic experiences,
            while my design skills ensure every creation is not only functional
            but visually captivating. Join me as I continue to explore new
            spells and technologies to shape the future of the web.
          </p>
        </ItemLayout>

        {/* <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            25+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout> */}

        {/* <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            4+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout> */}

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=saddockAime&theme=transparent&hide_border=true&title_color=ffb703&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="SaddockAime"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=saddockAime&theme=transparent&hide_border=true&title_color=ffb703&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="SaddockAime"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=appwrite,bootstrap,cloudflare,css,docker,figma,firebase,git,github,graphql,html,ipfs,js,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,sass,tailwind,threejs,vercel,vite,vscode,yarn`}
            alt="SaddockAime"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=saddockAime&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=ffb703`}
            alt="SaddockAime"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/codebucks27/Nextjs-contentlayer-blog"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=saddockAime&repo=My-Brand-Saddock&theme=transparent&hide_border=true&title_color=ffb703&text_color=FFFFFF&icon_color=ffb703&text_bold=false&description_lines_count=2`}
              alt="SaddockAime"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;

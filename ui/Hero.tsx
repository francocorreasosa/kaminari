import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="container mx-auto text-center">
      <div className="px-2 pt-20">
        {/* badge */}
        <div className="mx-auto flex max-w-[15rem] items-center justify-around rounded-3xl border border-[#212121] bg-[#161616] p-2 text-center text-white">
          <Image src="/rocket.webp" width={20} height={20} alt="rocket" />
          <p className="text-sm font-bold">#1 Next.js Starter Template</p>
        </div>
        {/* text */}
        <h2 className="mx-auto max-w-xl px-2 pb-5 pt-6 text-3xl font-bold leading-relaxed text-[#fdffa8] sm:text-5xl md:max-w-2xl md:px-6 md:text-[54px]">
          <span>Starter Template</span>{" "}
          <span className="mt-1 inline-block">For Your Next Project</span>
        </h2>
        <p className="mx-auto max-w-xl px-2 pb-6 text-base font-medium leading-relaxed text-[#a5a5a5] md:max-w-2xl md:px-6">
          Power packed, no nonsense, production-ready Next.js starter template
          to get you up to speed in your next project.
        </p>
        <div className="flex items-center justify-center">
          <a
            href="https://github.com/lucky-chap/nextjs-starter-template"
            target="_blank"
            rel="noreferrer"
          >
            <button className="relative inline-flex h-8 items-center rounded-md border border-transparent bg-white px-5 py-5 text-sm font-bold text-[#0D0D0D] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 sm:px-10">
              <Image
                src="/assets/github.png"
                className="mr-2"
                width={20}
                height={20}
                alt="GitHub"
              />
              Fork Code
            </button>
          </a>
          <Link href="/demos">
            <button
              disabled
              className="hover:bg-brand-400 focus:ring-brand-500 mt- relative inline-flex h-8 cursor-not-allowed items-center rounded-md border border-transparent px-10 py-5 text-sm font-bold text-white transition-colors duration-150 ease-linear hover:text-[#fdffa8] focus:outline-none"
            >
              Explore demos
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-1 h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
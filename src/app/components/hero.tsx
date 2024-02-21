import Image from "next/image";

export default function Hero() {
  return (
    <section className="">
      <div className="py-16 px-4 mx-auto max-w-screen-xl text-center lg:py-32 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
          AI Solutions for Your Business
        </h1>
        <p className="mb-8 text-lg font-normal lg:text-2xl sm:px-16 xl:px-48 text-gray-200">
          Leverage a network of industry experts and professionals to take your
          business to the next level with automations and AI.
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center border border-gray-700 text-white rounded-lg hover:bg-gray-700 focus:ring-4 focus:ring-primary-300"
          >
            Learn more
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="mailto:hi@splenderai.co"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg border focus:ring-4  text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800"
          >
            Get in Contact
          </a>
        </div>
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <span className="font-semibold text-white uppercase">
            powered from
          </span>
          <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
            <a
              href="#"
              className="mx-2 md:mr-5 mb-5 lg:mb-0 hover:text-gray-200"
            >
              <Image
                src="/images/bocconi.png"
                alt="ethzurich"
                width={180}
                height={0}
              />
            </a>
            <a
              href="#"
              className="mx-2 md:mr-5 mb-5 lg:mb-0 hover:text-gray-200"
            >
              <Image
                src="/images/ethzurich.png"
                alt="ethzurich"
                width={190}
                height={0}
              />
            </a>
            <a
              href="#"
              className="mx-2 md:mr-5 mb-5 lg:mb-0 hover:text-gray-200"
            >
              <Image
                src="/images/oxford.png"
                alt="oxford"
                width={170}
                height={0}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

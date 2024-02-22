import Image from "next/image";

export default function PartnershipHero() {
  return (
    <section className="">
      <div className="py-64 px-4 mx-auto max-w-screen-xl text-center lg:py-64 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
          Join our partnership
        </h1>
        <p className="mb-8 text-lg font-normal lg:text-2xl sm:px-16 xl:px-48 text-gray-200">
          Your connection, our expertise. Refer us a client and get a share of
          the earnings.
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="mailto:hi@splenderai.co"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg border focus:ring-4  text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800"
          >
            Get in Contact
          </a>
        </div>
      </div>
    </section>
  );
}

export default function SocialProof() {
  return (
    <section className="">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center md:py-16 lg:py-16 lg:px-6">
        <h1 className="pb-5 md:pb-12 mb-4 text-4xl font-extrabold tracking-tight leading-none text-white">
          Our Numbers
        </h1>
        <dl className="grid max-w-screen-md gap-8 mx-auto sm:grid-cols-3 text-white">
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-5xl md:text-5xl font-extrabold">100+</dt>
            <dd className="text-1xl md:text-2xl font-light text-gray-200">
              experts in our network
            </dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-5xl md:text-5xl font-extrabold">1M€+</dt>
            <dd className="text-1xl md:text-2xl font-light text-gray-200">
              value of gained efficiency
            </dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="text-6xl md:text-6xl font-extrabold">∞</dt>
            <dd className="text-1xl md:text-2xl font-light text-gray-200">
              love for AI and innovation
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function ContentInverted({
  title,
  desc1,
  desc2,
  img1,
  img2,
}: {
  title: string;
  desc1: string;
  desc2: string;
  img1: string;
  img2: string;
}) {
  return (
    <section className="">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image
            className="w-full rounded-lg"
            src={img1}
            alt="office content 1"
            width={200}
            height={500}
          />
          <Image
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src={img2}
            alt="office content 2"
            width={200}
            height={500}
          />
        </div>
        <div className="pt-8 md:pt-0 font-light  sm:text-lg text-gray-200">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
            {title}
          </h2>
          <p className="mb-4">{desc1}</p>
          <p>{desc2}</p>
        </div>
      </div>
    </section>
  );
}

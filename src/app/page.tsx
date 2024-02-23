import Hero from "./components/hero";
import Testimonial from "./components/testimonial";
import Content from "./components/content";
import ContentInverted from "./components/content_inverted";
import SocialProof from "./components/social_proof";

export default function Home() {
  return (
    <main className="main">
      <Hero></Hero>
      <Content
        title="What We Do"
        desc1="We leverage our network of experts and professionals in the field of AI to develop custom solutions for businesses that are wanting to automate or innovate their processes and products. When you come to us, we will analyze your case in depth and personally take care of the whole development process - from allocating the right people, to polishing the end result and implementing it into your current systems."
        desc2="If you want to bring AI into your business but don't know how, then we will be your state-of-the-art AI team for the duration of the project and, if needed, even further."
        img1="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
        img2="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
      ></Content>
      <SocialProof></SocialProof>
      <ContentInverted
        title="Why Us"
        desc1="The quality of a solution, is only as good as the team behind it. If you are looking for an energetic, innovative and committed team of experts to guide you on your AI development processes then look no further. At SplenderAI we have a community of talented and hungry individuals from different backgrounds that can be leveraged in almost any realm of this ground-breaking field."
        desc2="If you do not know where to start, reach out and trust us to be your dedicated partner in unleashing the full potential of AI for your organization."
        img1="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
        img2="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
      ></ContentInverted>
      <Testimonial></Testimonial>
    </main>
  );
}

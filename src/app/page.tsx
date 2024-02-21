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
        title="What exactly do we do?"
        desc1="We leverage our network of experts and professionals in the field of AI to develop custom solutions for businesses that are wanting to automate or innovate their processes and products. When you come to us, we will analyze your case in depth and personally take care of the whole development process - from allocating the right people, to polishing the end result and implementing it in your current systems."
        desc2="If you want to bring AI into your business but don't know how, then we will be your state-of-the-art AI team for the duration of the project and, if needed, even further."
        img1="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
        img2="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
      ></Content>
      <SocialProof></SocialProof>
      <ContentInverted
        title="We didn't reinvent the wheel"
        desc1="We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick, but big enough to
            deliver the scope you want at the pace you need. Small enough to be
            simple and quick, but big enough to deliver the scope you want at
            the pace you need."
        desc2="We are strategists, designers and developers. Innovators and problem
        solvers. Small enough to be simple and quick."
        img1="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
        img2="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
      ></ContentInverted>
      <Testimonial></Testimonial>
    </main>
  );
}

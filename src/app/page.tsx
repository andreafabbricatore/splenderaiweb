import Image from "next/image";
import Hero from "./hero";
import Footer from "./footer";
import Testimonial from "./testimonial";
import Content from "./content";
import ContentInverted from "./content_inverted";
import NavBar from "./navbar";
import SocialProof from "./social_proof";

export default function Home() {
  return (
    <main className="main">
      <NavBar></NavBar>
      <Hero></Hero>
      <Content
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
      <Footer></Footer>
    </main>
  );
}

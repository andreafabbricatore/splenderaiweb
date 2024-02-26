import Content from "../components/content";
import ContentInverted from "../components/content_inverted";
import TechnologiesHero from "../components/technologies_hero";

export default function Technologies() {
  return (
    <main className="main">
      <TechnologiesHero></TechnologiesHero>
      <Content
        title="Client Acquisition 2.0"
        desc1="Stop spending countless hours managing conversations with hundreds or even thousands of prospects, it is distracting you from your core business. With Sarah AI you can use a plug-and-play state-of-the-art AI sales agent which will do all this for you. Give the AI a list of leads and let it go after them like a human would."
        desc2="Let your sales schedule fill up thoughtlessly and win back time to work on your business and close clients like never before."
        img1="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
        img2="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
      ></Content>
      <ContentInverted
        title="Outreach Anywhere"
        desc1="We understand the importance of a varied client acquisition process to make sure that all the prospects in your target market are optimally reached. Sarah AI integrates into all the major communication platforms from emails to social networks to messages and so forth."
        desc2="Letting an AI takeover your sales conversations has never been so easy and effective. Give Sarah access, sit back and enjoy."
        img1="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
        img2="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
      ></ContentInverted>
    </main>
  );
}

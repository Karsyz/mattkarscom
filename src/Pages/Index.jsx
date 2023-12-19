import Navbar from "../Components/Navbar"
import FromTheBlog3Col from "../Components/FromTheBlog3Col"
import NewsletterLatestPrev from "../Components/NewsletterLatestPrev"
import NewsletterSub from "../Components/NewsletterSub"
import Footer from "../Components/Footer"
import DevWork from "../Components/DevWork"
import Contact from "../Components/Contact"
import Hero from "../Components/Hero"
import TwitterPost from "../Components/TwitterPost"
import AboutMe from "../Components/AboutMe"
import Projects from "../Components/Projects"
import LivePortrait from "../Components/LivePortrait"

const Index = () => {
  return (
    <div className="scroll-smooth w-full">
      <Navbar />
      <div className="w-full flex flex-row justify-center relative mt-4">
        <LivePortrait />
        <Hero />
      </div>
      <DevWork />
      <AboutMe />
      <FromTheBlog3Col />
      <NewsletterLatestPrev />
      <NewsletterSub />
      <Projects />
      <TwitterPost />
      <Contact />
      <Footer />
    </div>
  )
}

export default Index
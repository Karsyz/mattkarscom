import Navbar from "../Components/Navbar"
import FromTheBlog3Col from "../Components/FromTheBlog3Col"
import NewsletterLatestPrev from "../Components/NewsletterLatestPrev"
import NewsletterSub from "../Components/NewsLetterSub"
import Footer from "../Components/Footer"
import DevWork from "../Components/DevWork"
import Contact from "../Components/Contact"
import Hero from "../Components/Hero"
import TwitterPost from "../Components/TwitterPost"

const Index = () => {


  return (
    <div className="">

      <Navbar />
      
      <Hero />
      
      <DevWork />

      <FromTheBlog3Col />

      

      <NewsletterLatestPrev />

      <TwitterPost />

      <NewsletterSub />
      <Contact />
      <Footer />


    </div>

  )
}

export default Index
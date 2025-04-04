import { PhoneCall, MessagesSquare } from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Images from "../components/Images";
import { SquiredButton } from "../components/UI/Button";
import Input from "../components/UI/Input";

const Contact = () => {
  return (
    <>
      <Header />
      <main>
        <section className="heading h-96 absolute top-0 left-0 right-0 flex flex-col justify-center items-center gap-3" style={{ background: `url(${Images.contactImgs.c1}) no-repeat center / cover` }}>
          <h1 className="text-5xl text-white font-medium mt-6">Contact Us for any Request</h1>
          <p className="max-w-3xl text-balance text-center text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur amet, mollis cras felis vestibulum integer nec vel commodo. Ultrices a sapien faucibus augue.</p>
        </section>
        <section className="contact-box h-[900px] relative z-10 grid place-content-center">
          <div className="container mx-auto max-w-11/12 relative top-6 p-8 bg-neutral-100 shadow-2xl grid grid-cols-4 justify-center gap-6 rounded-lg">
            <div className="left space-y-3">
              <div className="box h-52 flex flex-col justify-evenly items-center bg-white px-6 shadow-2xl rounded-md">
                <div className="top flex items-center gap-2">
                  <PhoneCall className="border-2 rounded-full p-2 text-orange-400" size={50} />
                  <div>
                    <h3 className="text-2xl font-medium">Direct Call</h3>
                    <span className="text-lg">Make call on</span>
                  </div>
                </div>
                <div className="bottom">
                  <span className="text-xl font-medium">+33 012 455 0047</span>
                </div>
              </div>
              <div className="box h-52 flex flex-col justify-evenly bg-white px-6 shadow-2xl rounded-md">
                <div className="top flex items-center gap-2">
                  <MessagesSquare className="border-2  p-2 text-orange-400" size={50} />
                  <div>
                    <h3>Direct Message</h3>
                  </div>
                </div>
                <div className="bottom space-y-4">
                  <span className="block">chatwith one of our customer care</span>
                  <SquiredButton className="text-white bg-orange-400 hover:bg-orange-500 w-full py-2 rounded-md">Let's Chat</SquiredButton>
                </div>
              </div>
            </div>
            <div className="right col-span-3 bg-white text-center p-10 space-y-3">
              <h2 className="text-orange-400 text-2xl font-medium">Book a meeting</h2>
              <p className="max-w-2/3 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus adipiscing consectetur duis mi.</p>
              <form className="space-y-3">
                <div className="flex space-x-2">
                  <Input type="text" name="Name" placeholder="Name" />
                  <Input type="email" name="Email" placeholder="Email" />
                </div>
                <textarea rows={4} className="w-full bg-zinc-100 px-4 py-3 mb-2 outline-none rounded-md focus:shadow-md resize-none" name="reason" placeholder="Reason" />
                <Input type="text" name="Date" placeholder="Date" />
                <Input type="text" name="Time" placeholder="Time" />
                <SquiredButton className="text-white text-lg block ml-auto mt-10 bg-orange-400 hover:bg-orange-500 py-2 px-6 rounded-md">Send Request</SquiredButton>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;

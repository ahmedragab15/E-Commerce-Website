import Images from "../components/Images";

const AboutUs = () => {
  return (
    <>

      <main className="mt-37">
        <section className="hero py-16 bg-zinc-50">
          <div className="container mx-auto flex flex-col-reverse justify-between md:flex-row gap-4 py-8 px-6">
            <div className="content flex-1/2 space-y-10">
              <div className="space-y-4">
                <h2 className="text-4xl font-medium">About Us</h2>
                <p className="text-neutral-700 leading-snug max-w-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia vitae, erat aliquam posuere dolor id tempor vel pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia vitae, erat aliquam posuere dolor id tempor vel pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia vitae, erat aliquam posuere dolor id tempor vel pulvinar.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-medium">Our Vision</h3>
                <p className="text-neutral-700 leading-snug max-w-2xl ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia vitae, erat aliquam posuere dolor id tempor vel pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia vitae, </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-medium">Our Mission</h3>
                <p className="text-neutral-700 leading-snug max-w-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia vitae, erat aliquam posuere dolor id tempor vel pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia vitae, </p>
              </div>
            </div>
            <div className="images">
              <div className="images-box grid sm:grid-cols-2 gap-4 justify-center">
                <img className="rounded-md" src={Images.aboutImgs.h1} alt="shopping" />
                <img className="rounded-md relative xl:top-20" src={Images.aboutImgs.h2} alt="shopping" />
                <img className="rounded-md" src={Images.aboutImgs.h3} alt="shopping" />
                <img className="rounded-md relative xl:top-20" src={Images.aboutImgs.h4} alt="shopping" />
              </div>
            </div>
          </div>
        </section>
        <section className="services py-10">
          <div className="container mx-auto px-6 space-y-4">
            <div className="content space-y-4">
              <h3 className="text-2xl font-medium">Our Services</h3>
              <p className="max-w-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia vitae, erat aliquam posuere dolor id tempor vel pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia vitae, </p>
            </div>
            <div className="images">
              <div className="images-box grid sm:grid-cols-2 md:grid-cols-3 justify-center">
                <img src={Images.aboutImgs.s1} alt="services" />
                <img src={Images.aboutImgs.s2} alt="services" />
                <img src={Images.aboutImgs.s3} alt="services" />
                <img src={Images.aboutImgs.s4} alt="services" />
                <img src={Images.aboutImgs.s5} alt="services" />
                <img src={Images.aboutImgs.s6} alt="services" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutUs;

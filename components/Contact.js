import ContactCard from './ContactCard';
import Button from './Button';

const Contact = () => {
  return (
    <section className="bg-[#1D1E22] py-28 px-4 md:px-20 lg:px-32">
      <div>
        <div className="text-white text-center">
          <h2 className="text-5xl font-bold font-main my-3">
            Let’s Discuss Your <span className="text-[#0DB760] ">Project</span>
          </h2>
          <p className="font-medium font-main my-3">
            Let’s make something new, different and more meaningful or make
            thing more visual or conceptual
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row  gap-16 mt-16">
        <div>
          <ContactCard
            imgSrc={'/phone.svg'}
            title="Call me"
            content={'+2349011192868'}
          />
          <ContactCard
            imgSrc={'/phone.svg'}
            title="Call me"
            content={'+2349011192868'}
          />
          <ContactCard
            imgSrc={'/phone.svg'}
            title="Call me"
            content={'+2349011192868'}
          />
        </div>
        <div>
          <form>
            <div className="flex flex-col md:flex-row  gap-5 mb-6">
              <input
                type="text"
                className="w-full md:w-80 h-14 rounded-md py-4 px-6 outline-none font-main"
                placeholder="Full name"
              />
              <input
                type="email"
                className="w-full md:w-80 h-14 rounded-md py-4 px-6 outline-none font-main"
                placeholder="Your email"
              />
            </div>
            <div className="flex flex-col md:flex-row  gap-5 mb-6">
              <input
                type="tel"
                className="w-full md:w-80 h-14 rounded-md py-4 px-6 outline-none font-main"
                placeholder="Phone number"
              />
              <input
                type="number"
                className="w-full md:w-80 h-14 rounded-md py-4 px-6 outline-none font-main"
                placeholder="Budget"
              />
            </div>
            <textarea
              className="w-full h-40 rounded-md py-4 px-6 outline-none font-main"
              placeholder="Message"
            />
            <div className="flex justify-end mt-2">
              <Button title={'Submit Message'} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

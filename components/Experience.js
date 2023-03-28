const Experience = () => {
  return (
    <section className="bg-[#1D1E22] py-28 px-4 md:px-20 lg:px-32  flex flex-col-reverse lg:flex-row items-center justify-between">
      <div>
        <div className="text-white">
          <h2 className="text-4xl font-bold text-white font-main my-3">
            Education
          </h2>
          <div className="my-6">
            <h3 className="font-main font-bold text-3xl">
              University of Africa Toru, orua
            </h3>
            <div className="font-main font-normal text-sm flex justify-between">
              <p>Bsc (Computer science)</p>
              <p>2020 - 2024</p>
            </div>
          </div>
          <div>
            <h3 className="font-main font-bold text-3xl">Yaba Tech</h3>
            <div className="font-main font-normal text-sm flex justify-between">
              <p>Computer Engineering</p>
              <p>2010 - 2015</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-white md:w-[430px] mb-7 lg:mb-0">
          <h2 className="text-4xl font-bold text-white font-main my-3">
            Experience
          </h2>
          <div className="my-6">
            <h3 className="font-main font-bold text-3xl">BOI-UAT TECH HUB</h3>
            <div className="font-main font-normal text-sm flex justify-between">
              <p>UI/UX Designer Bayelsa, Nigeria</p>
              <p>2022 - present</p>
            </div>
          </div>
          <div>
            <h3 className="font-main font-bold text-3xl">UX Freelancer</h3>
            <div className="font-main font-normal text-sm flex justify-between">
              <p className="w-[330px]">
                Worked closely with programmers to meet client project
                requirements, goals, and desired functionality. - Designing user
                interface screens
              </p>
              <p>2022- present</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

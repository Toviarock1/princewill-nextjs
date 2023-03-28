import Card from './Card';

const Skills = () => {
  return (
    <section className="bg-[#1D1E22] py-28 px-4 md:px-20 lg:px-32 flex flex-col md:flex-row  items-center">
      <div>
        <div className="text-white lg:w-7/12">
          <h2 className="text-5xl font-bold font-main my-3">
            Why Hire Me For Your Next{' '}
            <span className="text-[#0DB760]">Project?</span>
          </h2>
          <p className="font-medium font-main my-3">
            I’m specialist in UI/UX Design. My passion is designing & solving
            problems through user experience and research.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mt-8">
        <div>
          <Card
            imgsrc={'/diamond.svg'}
            title="Visual Design"
            content={'Create user interface design with unique & modern ideas'}
          />
          <div className="mt-10">
            <Card
              imgsrc={'/diamond.svg'}
              title="UX Research"
              content={'Create digital user products with updated ideas'}
            />
          </div>
        </div>
        <div className="flex items-center lg:pl-7 mt-10 lg:mt-0">
          <Card
            imgsrc={'/diamond.svg'}
            title="Design Prototype"
            content={'Create advance design prototype with Figma apps.'}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;

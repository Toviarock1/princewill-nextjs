import Image from 'next/image';

const ContactCard = ({ imgSrc, title, content }) => {
  return (
    <div className="bg-white w-fit px-6 py-4 pr-16 rounded m-auto mb-10">
      <div className="flex gap-5">
        <div className="bg-[#0DB760] w-fit rounded-md p-3">
          <Image src={imgSrc} width={25} height={25} alt="" />
        </div>
        <div>
          <h6 className="font-main font-normal text-base text-[#92929D]">
            {title}
          </h6>
          <p className="font-main font-medium text-base text-[#11142D]">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;

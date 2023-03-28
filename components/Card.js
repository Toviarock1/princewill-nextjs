import Image from 'next/image';
import Tilt from 'react-parallax-tilt';

const Card = ({ imgsrc, title, content }) => {
  return (
    <Tilt>
      <div className="w-64 bg-white p-4 rounded h-fit">
        <Image src={imgsrc} width={30} height={30} />
        <div className="my-3">
          <h6 className="font-main font-semibold text-xl text-black">
            {title}
          </h6>
        </div>
        <p className="font-main font-normal text-sm text-[#323433]">
          {content}
        </p>
      </div>
    </Tilt>
  );
};

export default Card;

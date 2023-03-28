import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-[#1B1C20] py-6 px-4 md:px-20 lg:px-32">
      <nav>
        <ul className="flex items-center justify-end gap-3">
          <li>
            <a href="#">
              <Image
                src={'/twitter.svg'}
                alt="twitter icon"
                width={25}
                height={25}
              />
            </a>
          </li>
          <li className="pr-6">
            <a href="#">
              <Image
                src={'/instagram.svg'}
                alt="twitter icon"
                width={25}
                height={25}
              />
            </a>
          </li>
          <li>
            <a
              className="text-white border px-7 py-3 rounded-md font-main font-bold text-base"
              href="#"
              download
            >
              Download CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

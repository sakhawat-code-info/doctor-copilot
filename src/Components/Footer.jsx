const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-300 py-6 px-16 font-sans tracking-wide mt-6">
        <div className="flex justify-between items-center max-lg:flex-col text-center flex-wrap gap-4">
          <p className="text-[15px] leading-loose">
            © PTSCanteen. All rights reserved.
          </p>

          <ul className="flex space-x-6 gap-y-2 max-lg:justify-center flex-wrap">
            <li>
              <a
                href="javascript:void(0)"
                className="text-[15px] hover:text-white"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="text-[15px] hover:text-white"
              >
                Canteen Policy
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="text-[15px] hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

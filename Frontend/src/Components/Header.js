import { MdOutlineNotificationsActive } from 'react-icons/md';
import Logo from "../Images/Logo.png";

const Header = () => {
  return (
    <>
      <div className="Header flex justify-between items-center gap-3 w-full">

        <div className="flex Left-header gap-3">
          <div className="flex w-12 mt-2 mb-2 ml-2">
            <img srcSet={Logo} alt="Logo"></img>
          </div>
          <h1 className="text-2xl font-bold mt-4 mb-2 ">Cipher Schools</h1>
        </div>

        <div className="Right-header flex flex-end gap-5 mr-5">
          <div className="flex items-center justify-end">
            <input
              className="bg-gray mt-3 md:w-96 rounded-full p-2 mb-2"
              type="text"
              placeholder="Search and Learn"
            />
          </div>
          <button>
            <MdOutlineNotificationsActive size={30} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;

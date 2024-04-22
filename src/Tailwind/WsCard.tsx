import profile from "../img/yuta.png";
import logo from "../img/Jujutsu_Kaisen_logo.png";
import barcode from "../img/barcode.gif";

const WsCard = () => {
  return (
    <div className="flex flex-col overflow-auto items-center body  bg-hero h-screen py-10 gap-8 border-double border-8 ">
      <div>
        <div className="flex   relative 	  shadow-2xl shadow-black rounded-xl  w-64 h-[525px] lg:w-[525px] lg:h-64 bg-white border-double border-8 border-black overflow-hidden">
          <div className="flex flex-col lg:flex-row  w-full ">
            <div className="relative flex flex-1 p-4 justify-center items-center">
              <img
                className="flex z-10  border-solid border-4 border-black w-36 h-48 object-cover rounded-sm "
                src={profile}
                alt=""
              />
              <div className="flex flex-col lg:flex-row   justify-center items-center gap-12 absolute top-0 left-0 w-full h-full">
                <div className="flex relative  border-double border-4 border-black  w-72 h-16 lg:w-16 lg:h-72 bg-slate-50 "></div>
                <div className="flex relative  border-double border-4 border-black  w-72 h-16 lg:w-16 lg:h-72 bg-slate-50  "></div>
              </div>
            </div>

            <div className="flex flex-col flex-1  text-3xl  text-center p-4">
              <img
                className="flex text-xl font-bold text-black   text-center px-14"
                src={logo}
                alt="logo"
              />
              <strong className="flex text-xl font-bold  gap-5   text-center justify-center">
                <p className="text-black italic">Jujutsu </p>
                <p className="text-rose-700  italic">High School</p>
              </strong>
              <p className="flex text-sm text-black text-center px-16">
                www.jujutsu-kaisen.com
              </p>
              <a href="https://jujutsu-kaisen.fandom.com/wiki/Yuta_Okkotsu">
                <button
                  type="button"
                  className="text-black bg-white hover:bg-black hover:text-white border-solid border-2 boder-black rounded-lg text-sm mx-10 px-1  py-1  mt-16   "
                >
                  www.student-profile.com
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* .................................................................................... */}
        <div className="flex   relative 	  shadow-2xl shadow-black rounded-xl  w-64 h-[525px] lg:w-[525px] lg:h-64 bg-white border-double border-8 border-black overflow-hidden">
          <div className="flex flex-col lg:flex-row  w-full ">
            <div className="flex flex-col flex-1  text-3xl  text-center p-4">
              <img
                className="flex text-xl font-bold text-black   text-center px-14"
                src={logo}
                alt="logo"
              />
              <p className="flex text-sm text-black text-center px-2 pt-2 font-bold">
                ID : 100004
              </p>
              <p className="flex text-xl text-black text-center px-2 pt-2 font-bold">
                Name : Akotsu Packta
              </p>
              <p className="flex text-sm text-black text-center px-2 pt-2 font-bold">
                Class : Special
              </p>
              <p className="flex text-sm text-black text-center px-2 pt-2 font-bold">
                Date : 2001/03/07
              </p>
              <img
                className="flex-block  px-1 pt-4 -mb-5 h-12"
                src={barcode}
                alt=""
              />
            </div>
            <div className="relative flex flex-1 p-4 justify-center items-center">
              <img
                className="flex z-10  border-solid border-4 border-black w-36 h-48 object-cover rounded-sm "
                src={profile}
                alt=""
              />
              <div className="flex flex-col lg:flex-row   justify-center items-center gap-12 absolute top-0 left-0 w-full h-full ">
                <div className="flex relative  border-double border-4 border-black  w-72 h-16 lg:w-16 lg:h-72 bg-slate-50 "></div>
                <div className="flex relative  border-double border-4 border-black  w-72 h-16 lg:w-16 lg:h-72 bg-slate-50  "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WsCard;

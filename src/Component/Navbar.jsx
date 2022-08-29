import React, { useState } from "react";
import logo from "./image/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [backdrop, setBackdrop] = useState(false);
  const navHandler = () => {
    setOpen(!open);
    setBackdrop(!backdrop);
  };
  const blurBody = () => {
    setOpen(false);
    setBackdrop(false);
  };

  return (
    <div className="bg-[#FDDB93] fixed w-full z-30">
      <nav className="flex  p-5 items-center justify-between">
        <div
          className="pl-7 cursor-pointer lg:pl-8"
          onClick={navHandler}
          onBlur={blurBody}
          tabIndex={40}
        >
          <span className="w-10 h-[0.2rem] lg:w-14 lg:h-1  rounded-full  bg-[#495371] block after:content-[''] after:relative before:w-12 before:h-[0.2rem] before:lg:w-16 before:lg:h-1 after:w-10 after:h-[0.2rem] after:lg:w-14 after:lg:h-1 after:bg-[#495371] after:block after:mt-2 after:float-right after:ml-auto before:content-[''] before:relative   before:mt-3 before:float-right before:ml-auto before:bg-[#495371] before:block self-end before:self-end after:self-end before:rounded-full after:rounded-full"></span>
        </div>
        <div
          className={`${
            !backdrop ? "left-[-90rem]" : "left-0"
          } w-full h-full fixed top-[4.0rem] lg:top-[4.5rem] z-30 bg-[#495371]/90 transition-all duration-500 ease-in`}
        ></div>
        <ul
          className={`${
            !open ? "left-[-24rem]" : "left-0"
          } bg-[#495371] flex flex-col gap-16 px-12 pt-14 h-full fixed top-[4.0rem] lg:top-[4.5rem] font-semibold text-[#FDDB93] transition-all duration-500 ease-in z-30  overflow-hidden`}
        >
          <li>
            <Link to="/" className="flex gap-2 items-center">
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 90 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M83.1885 44.3848L46.9863 8.20897C46.7257 7.9478 46.416 7.74059 46.0752 7.59922C45.7344 7.45784 45.369 7.38507 45 7.38507C44.631 7.38507 44.2656 7.45784 43.9248 7.59922C43.5839 7.74059 43.2743 7.9478 43.0137 8.20897L6.81152 44.3848C5.75684 45.4394 5.15918 46.8721 5.15918 48.3662C5.15918 51.4687 7.68164 53.9912 10.7842 53.9912H14.5986V79.8047C14.5986 81.3603 15.8555 82.6172 17.4111 82.6172H39.375V62.9297H49.2188V82.6172H72.5889C74.1445 82.6172 75.4014 81.3603 75.4014 79.8047V53.9912H79.2158C80.71 53.9912 82.1426 53.4023 83.1973 52.3389C85.3857 50.1416 85.3857 46.582 83.1885 44.3848Z"
                    fill="#FDDB93"
                  />
                </svg>
              </span>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/about" className="flex gap-2 items-center">
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 90 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M69.375 75H20.625L9.375 86.25V22.5C9.375 16.3125 14.4375 11.25 20.625 11.25H69.375C75.5625 11.25 80.625 16.3125 80.625 22.5V63.75C80.625 69.9375 75.5625 75 69.375 75Z"
                    fill="#FDDB93"
                  />
                  <path
                    d="M41.25 37.5H48.75V58.125H41.25V37.5Z"
                    fill="#495371"
                  />
                  <path
                    d="M45 31.875C47.0711 31.875 48.75 30.1961 48.75 28.125C48.75 26.0539 47.0711 24.375 45 24.375C42.9289 24.375 41.25 26.0539 41.25 28.125C41.25 30.1961 42.9289 31.875 45 31.875Z"
                    fill="#495371"
                  />
                </svg>
              </span>
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link to="/hub" className="flex gap-2 items-center">
              <span>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 90 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="90" height="90" fill="#495371" />
                  <rect
                    width="90"
                    height="90"
                    fill="#495371"
                    fill-opacity="0.2"
                  />
                  <path
                    d="M24.0606 21.799C27.8629 21.799 30.9452 18.7166 30.9452 14.9144C30.9452 11.1121 27.8629 8.02979 24.0606 8.02979C20.2584 8.02979 17.176 11.1121 17.176 14.9144C17.176 18.7166 20.2584 21.799 24.0606 21.799Z"
                    fill="#FDDB93"
                  />
                  <path
                    d="M73.6144 54.4088H51.6489L51.0184 57.6638C50.9262 58.1403 51.0517 58.633 51.3603 59.0077C51.6692 59.3823 52.1293 59.6009 52.6148 59.6009C53.2444 59.6009 54.0028 59.6009 54.8483 59.6009V78.3893C54.8483 80.3292 56.4208 81.9019 58.3608 81.9019C60.3007 81.9019 61.8734 80.3294 61.8734 78.3893V59.6009C62.3783 59.6009 62.885 59.6009 63.3899 59.6009V78.3893C63.3899 80.3292 64.9626 81.9019 66.9025 81.9019C68.8423 81.9019 70.415 80.3294 70.415 78.3893V59.6009C71.2607 59.6009 72.0191 59.6009 72.6485 59.6009C73.1343 59.6009 73.5945 59.3837 73.9036 59.0089C74.2126 58.634 74.3373 58.1407 74.2451 57.6638L73.6144 54.4088Z"
                    fill="#FDDB93"
                  />
                  <path
                    d="M16.0974 78.3893C16.0974 80.3668 17.7005 81.9701 19.6782 81.9701C21.6559 81.9701 23.2587 80.367 23.2587 78.3893V54.4088H16.0974V78.3893Z"
                    fill="#FDDB93"
                  />
                  <path
                    d="M24.8047 78.3893C24.8047 80.3668 26.4077 81.9701 28.3852 81.9701C30.3627 81.9701 31.966 80.367 31.966 78.3893V54.4088H24.8047V78.3893Z"
                    fill="#FDDB93"
                  />
                  <path
                    d="M53.04 17.3014C54.204 17.3014 55.2205 16.6814 55.7857 15.7555C56.1494 19.2154 59.0754 21.9123 62.6317 21.9123C66.188 21.9123 69.1141 19.2156 69.4777 15.7555C70.0427 16.6814 71.0593 17.3014 72.2234 17.3014C74.0007 17.3014 75.3599 17.4644 76.5818 20.3157C78.8628 15.7882 75.034 10.8655 72.2234 10.8655C70.836 10.8655 69.6572 11.7453 69.2053 12.9759C68.3323 10.1758 65.7194 8.14307 62.6319 8.14307C59.5443 8.14307 56.9316 10.1758 56.0585 12.9759C55.6066 11.7451 54.4277 10.8655 53.0404 10.8655C50.2299 10.8655 46.4008 15.7884 48.682 20.3157C49.9035 17.4642 51.2628 17.3014 53.04 17.3014Z"
                    fill="#FDDB93"
                  />
                  <path
                    d="M87.044 45.0805C85.8323 45.0805 76.9685 45.0805 75.7016 45.0805C76.2872 44.9011 76.8124 44.5479 77.1945 44.0511C77.7605 43.3154 77.9519 42.358 77.7121 41.4611C77.1592 39.3937 75.6177 33.3826 75.383 31.3489C74.935 27.4674 71.9735 24.6503 68.3413 24.6503C67.0149 24.6503 58.2336 24.6503 56.9213 24.6503C53.2891 24.6503 50.3278 27.4674 49.8798 31.3491C49.6433 33.3975 48.0848 39.4639 47.5509 41.4611C47.3111 42.358 47.5024 43.3154 48.0684 44.0511C48.4506 44.5479 48.9756 44.9011 49.5613 45.0805C40.7648 45.0805 46.1644 45.0805 37.1175 45.0805C37.6311 44.9216 38.0984 44.6274 38.4635 44.2178C39.0309 43.5817 39.2992 42.733 39.2006 41.8864C39.0605 40.6838 38.1399 32.7832 37.989 31.488C37.8699 27.7006 34.7425 24.6501 30.9311 24.6501C28.0585 24.6501 19.9 24.6501 17.1462 24.6501C13.335 24.6501 10.2074 27.7006 10.0883 31.4878C9.93737 32.7829 9.01701 40.6836 8.87688 41.8864C8.77815 42.733 9.04637 43.5817 9.61396 44.2178C9.97915 44.6274 10.4464 44.9216 10.96 45.0805C6.47329 45.0805 7.45397 45.0805 2.9562 45.0805C1.32359 45.0805 0 46.4041 0 48.0367C0 49.6693 1.32359 50.9929 2.9562 50.9929H87.0438C88.6764 50.9929 90 49.6693 90 48.0367C90.0002 46.4041 88.6766 45.0805 87.044 45.0805ZM22.0629 45.0805C22.9799 44.8174 23.7133 44.1276 24.0389 43.2393C24.3642 44.1276 25.0978 44.8174 26.0146 45.0805H22.0629ZM26.8441 39.2303C26.8421 39.2303 26.8403 39.2303 26.8386 39.2303C25.5518 39.2303 24.4578 40.0468 24.0392 41.1893C23.6236 40.0545 22.5369 39.2303 21.2344 39.2303C19.7051 39.2331 16.7191 39.2386 15.1937 39.2414C15.9446 32.7927 16.0961 31.209 16.0961 31.209V36.312L22.0178 36.3019C22.0211 36.3019 22.0247 36.3019 22.028 36.3019C22.7342 36.3019 23.4112 36.4261 24.039 36.6533C24.6669 36.4263 25.3437 36.3019 26.0499 36.3019C26.0534 36.3019 26.0566 36.3019 26.0601 36.3019L31.9014 36.3118V31.2088L32.8848 39.2414L26.8441 39.2303ZM60.6556 45.0805C61.5726 44.8174 62.3061 44.1276 62.6315 43.2393C62.9569 44.1276 63.6904 44.8174 64.6072 45.0805H60.6556ZM65.4367 39.2305C65.4347 39.2305 65.4332 39.2305 65.4312 39.2305C64.1445 39.2305 63.0505 40.047 62.6321 41.1895C62.2164 40.0547 61.1297 39.2305 59.8272 39.2305C58.5082 39.2329 57.6501 39.2345 54.2841 39.2408C54.5145 38.3104 54.7587 37.2988 54.984 36.3116L60.6106 36.3019C60.614 36.3019 60.6175 36.3019 60.6209 36.3019C61.3268 36.3019 62.004 36.4261 62.6319 36.6533C63.2596 36.4263 63.9365 36.3019 64.6427 36.3019C64.6462 36.3019 64.6494 36.3019 64.6529 36.3019L70.2794 36.3116C70.5046 37.2986 70.7488 38.3104 70.9796 39.2408L65.4367 39.2305Z"
                    fill="#FDDB93"
                  />
                </svg>
              </span>
              <span>Our Hub</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="flex gap-2 items-center">
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 75 61"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M66.5625 0C68.8003 0 70.9464 0.888949 72.5287 2.47129C74.111 4.05363 75 6.19974 75 8.4375V51.5812C75 53.819 74.111 55.9651 72.5287 57.5475C70.9464 59.1298 68.8003 60.0187 66.5625 60.0187H8.4375C7.32947 60.0187 6.23229 59.8005 5.20861 59.3765C4.18492 58.9525 3.25478 58.331 2.47129 57.5475C1.68779 56.764 1.06629 55.8338 0.642267 54.8101C0.218242 53.7865 0 52.6893 0 51.5812V8.4375C0 6.19974 0.888948 4.05363 2.47129 2.47129C4.05362 0.888949 6.19974 0 8.4375 0H66.5625ZM29.0625 31.875H15.9375C15.2579 31.875 14.6012 32.1212 14.089 32.5679C13.5768 33.0146 13.2437 33.6317 13.1512 34.305L13.125 34.6875V36.5325L13.155 36.9375C13.7625 41.115 17.2575 43.125 22.5 43.125C27.4912 43.125 30.9 41.3025 31.74 37.5225L31.845 36.9412L31.875 36.5363V34.6875C31.875 34.0079 31.6288 33.3512 31.1821 32.839C30.7354 32.3268 30.1183 31.9937 29.445 31.9012L29.0625 31.875ZM59.0625 33.735H42.195L41.8125 33.7612C41.1393 33.8539 40.5225 34.1871 40.0759 34.6993C39.6294 35.2115 39.3834 35.868 39.3834 36.5475C39.3834 37.227 39.6294 37.8835 40.0759 38.3957C40.5225 38.9079 41.1393 39.2411 41.8125 39.3338L42.195 39.36H59.0625L59.445 39.3338C60.1182 39.2411 60.735 38.9079 61.1816 38.3957C61.6281 37.8835 61.8741 37.227 61.8741 36.5475C61.8741 35.868 61.6281 35.2115 61.1816 34.6993C60.735 34.1871 60.1182 33.8539 59.445 33.7612L59.0625 33.735ZM22.5 16.8825C21.0082 16.8825 19.5774 17.4751 18.5225 18.53C17.4676 19.5849 16.875 21.0157 16.875 22.5075C16.875 23.9993 17.4676 25.4301 18.5225 26.485C19.5774 27.5399 21.0082 28.1325 22.5 28.1325C23.9918 28.1325 25.4226 27.5399 26.4775 26.485C27.5324 25.4301 28.125 23.9993 28.125 22.5075C28.125 21.0157 27.5324 19.5849 26.4775 18.53C25.4226 17.4751 23.9918 16.8825 22.5 16.8825ZM59.0625 20.625H42.195L41.8125 20.6512C41.1393 20.7439 40.5225 21.0771 40.0759 21.5893C39.6294 22.1015 39.3834 22.758 39.3834 23.4375C39.3834 24.117 39.6294 24.7735 40.0759 25.2857C40.5225 25.7979 41.1393 26.1311 41.8125 26.2238L42.195 26.25H59.0625L59.445 26.2238C60.1182 26.1311 60.735 25.7979 61.1816 25.2857C61.6281 24.7735 61.8741 24.117 61.8741 23.4375C61.8741 22.758 61.6281 22.1015 61.1816 21.5893C60.735 21.0771 60.1182 20.7439 59.445 20.6512L59.0625 20.625Z"
                    fill="#F1E0AC"
                  />
                </svg>
              </span>
              <span>Contact</span>
            </Link>
          </li>
        </ul>
        <div className="flex items-center pr-6 gap-2 lg:pr-8">
          <img src={logo} alt="" className="w-4 h-5 lg:w-6 lg:h-8" />
          <h3 className="font-bold text-[#495371] text-sm lg:text-xl">
            ChemsCrystals
          </h3>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

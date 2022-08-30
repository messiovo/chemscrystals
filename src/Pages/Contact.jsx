import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <section className="flex flex-col gap-8 lg:flex-row justify-center mt-[7rem]  items-center mb-20">
        <div className="w-full lg:w-2/4 ">
          <div className="w-60 h-60 bg-white m-auto">Map</div>
        </div>
        <div className="w-full lg:w-2/4">
          <div className="w-60 h-[20rem] bg-dark m-auto relative px-4 shadow-md"
          data-aos="fade-left">
            <div className="pt-2">
              <span className="flex gap-2 justify-center items-center pb-4">
                <svg
                  width="50"
                  height="60"
                  viewBox="0 0 69 95"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30 72.5C26.8424 69.8066 23.9155 66.8538 21.25 63.6725C17.25 58.895 12.5 51.78 12.5 45C12.4983 41.5374 13.5238 38.1521 15.4467 35.2726C17.3697 32.393 20.1037 30.1486 23.3027 28.8235C26.5017 27.4983 30.0219 27.152 33.4178 27.8282C36.8137 28.5045 39.9327 30.1729 42.38 32.6225C44.0094 34.2446 45.3009 36.1738 46.1797 38.2984C47.0586 40.423 47.5073 42.7008 47.5 45C47.5 51.78 42.75 58.895 38.75 63.6725C36.0845 66.8538 33.1576 69.8065 30 72.5ZM30 37.5C28.0109 37.5 26.1032 38.2902 24.6967 39.6967C23.2902 41.1032 22.5 43.0109 22.5 45C22.5 46.9891 23.2902 48.8968 24.6967 50.3033C26.1032 51.7098 28.0109 52.5 30 52.5C31.9891 52.5 33.8968 51.7098 35.3033 50.3033C36.7098 48.8968 37.5 46.9891 37.5 45C37.5 43.0109 36.7098 41.1032 35.3033 39.6967C33.8968 38.2902 31.9891 37.5 30 37.5Z"
                    className="fill-light"
                  />
                </svg>

                <p className="text-sm lg:text-md  text-light">
                  174, Ugbowo Lagos Road, Benin-city, Nigeria
                </p>
              </span>
              <span className="flex gap-2 justify-center items-center pb-4">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M51.2177 42.85L41.0552 33.61C40.5748 33.1734 39.9436 32.9405 39.2947 32.9606C38.6459 32.9806 38.0302 33.252 37.5777 33.7175L31.5952 39.87C30.1552 39.595 27.2602 38.6925 24.2802 35.72C21.3002 32.7375 20.3977 29.835 20.1302 28.405L26.2777 22.42C26.7437 21.9678 27.0156 21.352 27.0356 20.703C27.0557 20.054 26.8224 19.4226 26.3852 18.9425L17.1477 8.78249C16.7103 8.30088 16.1024 8.00875 15.4531 7.96814C14.8038 7.92752 14.1642 8.14163 13.6702 8.56499L8.24522 13.2175C7.81299 13.6513 7.55502 14.2286 7.52022 14.84C7.48272 15.465 6.76772 30.27 18.2477 41.755C28.2627 51.7675 40.8077 52.5 44.2627 52.5C44.7677 52.5 45.0777 52.485 45.1602 52.48C45.7715 52.4458 46.3485 52.1866 46.7802 51.7525L51.4302 46.325C51.8552 45.8326 52.0709 45.1935 52.0312 44.5442C51.9915 43.895 51.6996 43.2869 51.2177 42.85Z"
                    className="fill-light"
                  />
                </svg>

                <p className="text-sm lg:text-md  text-light">
                  +2347032096957 +2348038835457
                </p>
              </span>
              <span className="flex gap-2 justify-center items-center pb-4 pr-4">
                <svg
                  width="20"
                  height="25"
                  viewBox="0 0 55 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M54.205 31.5V4.5C54.205 2.01 52.0752 0 49.4367 0H4.90108C2.26264 0 0.132812 2.01 0.132812 4.5V31.5C0.132812 33.99 2.26264 36 4.90108 36H49.4367C52.0752 36 54.205 33.99 54.205 31.5ZM50.0407 4.17C51.0897 5.16 50.5175 6.18 49.9453 6.69L37.0392 17.85L49.4367 30.03C49.8182 30.45 50.0725 31.11 49.6274 31.56C49.2142 32.04 48.2605 32.01 47.8473 31.71L33.9557 20.52L27.153 26.37L20.3821 20.52L6.4905 31.71C6.07725 32.01 5.1236 32.04 4.71035 31.56C4.26531 31.11 4.51962 30.45 4.90108 30.03L17.2986 17.85L4.39247 6.69C3.82027 6.18 3.24808 5.16 4.2971 4.17C5.34612 3.18 6.42693 3.66 7.317 4.38L27.153 19.5L47.0208 4.38C47.9109 3.66 48.9917 3.18 50.0407 4.17Z"
                    className="fill-light"
                  />
                </svg>

                <p className="text-sm lg:text-md  text-light">
                  chemscrystals@gmail.
                  <br />
                  com
                </p>
              </span>
            </div>
            <div className="flex justify-start gap-6 pt-20 items-center">
              <Link to="/">
                <span>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_15_105)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 32.1787C0 48.088 11.5547 61.3173 26.6667 64V40.888H18.6667V32H26.6667V24.888C26.6667 16.888 31.8213 12.4453 39.112 12.4453C41.4213 12.4453 43.912 12.8 46.2213 13.1547V21.3333H42.1333C38.2213 21.3333 37.3333 23.288 37.3333 25.7787V32H45.8667L44.4453 40.888H37.3333V64C52.4453 61.3173 64 48.0907 64 32.1787C64 14.48 49.6 0 32 0C14.4 0 0 14.48 0 32.1787Z"
                        className="fill-light"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_15_105">
                        <rect width="64" height="64" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </Link>
              <Link to="/">
                <span>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M63.048 13.1654C60.8213 14.152 58.4293 14.8187 55.9147 15.12C58.5093 13.5675 60.4505 11.124 61.376 8.24538C58.9383 9.69335 56.2703 10.7126 53.488 11.2587C51.617 9.26102 49.1388 7.93691 46.4382 7.49197C43.7376 7.04703 40.9656 7.50615 38.5526 8.79805C36.1397 10.0899 34.2207 12.1423 33.0937 14.6366C31.9668 17.1308 31.6948 19.9274 32.32 22.592C27.3805 22.344 22.5483 21.0602 18.1371 18.8238C13.7259 16.5874 9.83424 13.4485 6.71466 9.61071C5.648 11.4507 5.03467 13.584 5.03467 15.856C5.03347 17.9014 5.53715 19.9154 6.50101 21.7193C7.46486 23.5233 8.8591 25.0615 10.56 26.1974C8.5874 26.1346 6.65833 25.6016 4.93333 24.6427V24.8027C4.93313 27.6713 5.92542 30.4517 7.74182 32.672C9.55822 34.8923 12.0869 36.4159 14.8987 36.984C13.0688 37.4793 11.1502 37.5522 9.288 37.1974C10.0813 39.6657 11.6267 41.8241 13.7076 43.3705C15.7886 44.9169 18.3011 45.7739 20.8933 45.8214C16.4929 49.2758 11.0584 51.1496 5.464 51.1414C4.47301 51.1416 3.48287 51.0838 2.49866 50.968C8.17727 54.6192 14.7876 56.5569 21.5387 56.5494C44.392 56.5494 56.8853 37.6214 56.8853 21.2054C56.8853 20.672 56.872 20.1334 56.848 19.6C59.2781 17.8426 61.3758 15.6664 63.0427 13.1734L63.048 13.1654V13.1654Z"
                      className="fill-light"
                    />
                  </svg>
                </span>
              </Link>
              <Link to="/">
                <span>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.9067 2.8425C23.0347 2.6985 24.032 2.6665 32 2.6665C39.968 2.6665 40.9653 2.70117 44.0907 2.8425C47.216 2.98384 49.3493 3.4825 51.216 4.20517C53.1707 4.94384 54.944 6.0985 56.4107 7.59184C57.904 9.05584 59.056 10.8265 59.792 12.7838C60.5173 14.6505 61.0133 16.7838 61.1573 19.9038C61.3013 23.0372 61.3333 24.0345 61.3333 31.9998C61.3333 39.9678 61.2987 40.9652 61.1573 44.0932C61.016 47.2132 60.5173 49.3465 59.792 51.2132C59.056 53.1708 57.9021 54.9444 56.4107 56.4105C54.944 57.9038 53.1707 59.0558 51.216 59.7918C49.3493 60.5172 47.216 61.0132 44.096 61.1572C40.9653 61.3012 39.968 61.3332 32 61.3332C24.032 61.3332 23.0347 61.2985 19.9067 61.1572C16.7867 61.0158 14.6533 60.5172 12.7867 59.7918C10.8291 59.0557 9.05552 57.9019 7.58933 56.4105C6.09701 54.9456 4.94217 53.1729 4.20533 51.2158C3.48266 49.3492 2.98666 47.2158 2.84266 44.0958C2.69866 40.9625 2.66666 39.9652 2.66666 31.9998C2.66666 24.0318 2.70133 23.0345 2.84266 19.9092C2.984 16.7838 3.48266 14.6505 4.20533 12.7838C4.94326 10.8267 6.09898 9.05401 7.592 7.58917C9.05611 6.09717 10.8279 4.94235 12.784 4.20517C14.6507 3.4825 16.784 2.9865 19.904 2.8425H19.9067ZM43.8533 8.1225C40.76 7.98117 39.832 7.95184 32 7.95184C24.168 7.95184 23.24 7.98117 20.1467 8.1225C17.2853 8.25317 15.7333 8.7305 14.6987 9.13317C13.3307 9.6665 12.352 10.2985 11.3253 11.3252C10.3521 12.272 9.60315 13.4246 9.13333 14.6985C8.73066 15.7332 8.25333 17.2852 8.12266 20.1465C7.98133 23.2398 7.952 24.1678 7.952 31.9998C7.952 39.8318 7.98133 40.7598 8.12266 43.8532C8.25333 46.7145 8.73066 48.2665 9.13333 49.3012C9.60266 50.5732 10.352 51.7278 11.3253 52.6745C12.272 53.6478 13.4267 54.3972 14.6987 54.8665C15.7333 55.2692 17.2853 55.7465 20.1467 55.8772C23.24 56.0185 24.1653 56.0478 32 56.0478C39.8347 56.0478 40.76 56.0185 43.8533 55.8772C46.7147 55.7465 48.2667 55.2692 49.3013 54.8665C50.6693 54.3332 51.648 53.7012 52.6747 52.6745C53.648 51.7278 54.3973 50.5732 54.8667 49.3012C55.2693 48.2665 55.7467 46.7145 55.8773 43.8532C56.0187 40.7598 56.048 39.8318 56.048 31.9998C56.048 24.1678 56.0187 23.2398 55.8773 20.1465C55.7467 17.2852 55.2693 15.7332 54.8667 14.6985C54.3333 13.3305 53.7013 12.3518 52.6747 11.3252C51.7278 10.352 50.5752 9.60307 49.3013 9.13317C48.2667 8.7305 46.7147 8.25317 43.8533 8.1225V8.1225ZM28.2533 41.0425C30.3458 41.9135 32.6757 42.0311 34.8451 41.3751C37.0146 40.7191 38.889 39.3303 40.1483 37.4458C41.4075 35.5614 41.9735 33.2982 41.7495 31.0428C41.5254 28.7874 40.5253 26.6798 38.92 25.0798C37.8966 24.0571 36.6592 23.274 35.2969 22.7869C33.9345 22.2998 32.4811 22.1208 31.0413 22.2628C29.6015 22.4048 28.2111 22.8643 26.9701 23.6082C25.7292 24.3521 24.6686 25.3618 23.8648 26.5648C23.061 27.7677 22.5338 29.1339 22.3214 30.5651C22.1089 31.9962 22.2164 33.4566 22.6361 34.8412C23.0558 36.2258 23.7773 37.5001 24.7486 38.5724C25.7199 39.6447 26.9169 40.4883 28.2533 41.0425ZM21.3387 21.3385C22.7387 19.9384 24.4009 18.8278 26.2301 18.0701C28.0594 17.3124 30.02 16.9224 32 16.9224C33.98 16.9224 35.9406 17.3124 37.7699 18.0701C39.5991 18.8278 41.2613 19.9384 42.6613 21.3385C44.0614 22.7386 45.172 24.4007 45.9297 26.23C46.6874 28.0592 47.0774 30.0198 47.0774 31.9998C47.0774 33.9798 46.6874 35.9404 45.9297 37.7697C45.172 39.599 44.0614 41.2611 42.6613 42.6612C39.8338 45.4887 35.9988 47.0772 32 47.0772C28.0012 47.0772 24.1662 45.4887 21.3387 42.6612C18.5111 39.8336 16.9226 35.9986 16.9226 31.9998C16.9226 28.0011 18.5111 24.1661 21.3387 21.3385V21.3385ZM50.4213 19.1678C50.7683 18.8406 51.046 18.447 51.2381 18.0104C51.4303 17.5739 51.5328 17.1032 51.5398 16.6263C51.5467 16.1494 51.4579 15.676 51.2786 15.234C51.0993 14.792 50.8332 14.3905 50.4959 14.0533C50.1586 13.716 49.7571 13.4499 49.3152 13.2706C48.8732 13.0912 48.3998 13.0024 47.9229 13.0094C47.4459 13.0163 46.9753 13.1189 46.5387 13.311C46.1022 13.5031 45.7086 13.7809 45.3813 14.1278C44.7448 14.8026 44.3963 15.6988 44.4099 16.6263C44.4234 17.5538 44.7978 18.4395 45.4537 19.0954C46.1097 19.7513 46.9954 20.1258 47.9229 20.1393C48.8503 20.1528 49.7466 19.8043 50.4213 19.1678V19.1678Z"
                      className="fill-light"
                    />
                  </svg>
                </span>
              </Link>
            </div>
            <div className="w-20 h-20 bg-medium absolute top-[15rem] rounded-t-full rounded-l-full left-[10rem]">
              <div className="w-14 h-14 bg-light rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark pb-20">
        <h2 className="text-xl lg:text-2xl font-bold py-8 text-light text-center ">
          Request a demo class
        </h2>
        <div>
          <form action="">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-20 justify-center items-center mb-8">
              <span className="flex flex-col">
                <label
                  htmlFor="first name"
                  className="text-light text-sm lg:text-lg font-semibold"
                >
                  First name
                </label>
                <input
                  type="text"
                  className="w-[17rem] h-10 px-4 outline-none placeholder-dark bg-medium text-dark text-sm lg:text-md font-semibold "
                  placeholder="First name"
                />
              </span>
              <span className="flex flex-col">
                <label
                  htmlFor="last name"
                  className="text-light text-sm lg:text-lg font-semibold"
                >
                  Last name
                </label>
                <input
                  type="text"
                  className="w-[17rem] h-10 px-4 placeholder-dark outline-none bg-medium text-dark text-sm lg:text-md font-semibold  "
                  placeholder="Last name"
                />
              </span>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-20 justify-center items-center mb-8">
              <span className="flex flex-col">
                <label
                  htmlFor="School title"
                  className="text-light text-sm lg:text-lg font-semibold"
                >
                  School title
                </label>
                <input
                  type="text"
                  className="w-[17rem] h-10 px-4 outline-none placeholder-dark bg-medium text-dark text-sm lg:text-md font-semibold "
                  placeholder="School director"
                />
              </span>
              <span className="flex flex-col">
                <label
                  htmlFor="school name"
                  className="text-light text-sm lg:text-lg font-semibold"
                >
                  School name
                </label>
                <input
                  type="text"
                  className="w-[17rem] h-10 px-4 outline-none placeholder-dark bg-medium text-dark text-sm lg:text-md font-semibold  "
                  placeholder="Name of school"
                />
              </span>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-20 justify-center items-center mb-8">
              <span className="flex flex-col">
                <label
                  htmlFor="phone number"
                  className="text-light text-sm lg:text-lg font-semibold"
                >
                  Phone number
                </label>
                <input
                  type="number"
                  className="w-[17rem] h-10 outline-none appearance-none placeholder-dark bg-medium text-dark text-sm lg:text-md font-semibold px-4"
                  placeholder="+2347000000000"
                />
              </span>
              <span className="flex flex-col">
                <label
                  htmlFor="address"
                  className="text-light text-sm lg:text-lg font-semibold"
                >
                  Address
                </label>
                <input
                  type="text"
                  className="w-[17rem] h-10 outline-none placeholder-dark bg-medium text-dark text-sm lg:text-md font-semibold px-4 "
                  placeholder="No 1, street name, lga, city, state"
                />
              </span>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <label
                htmlFor="text area"
                className="text-light text-sm lg:text-lg font-semibold"
              >
                Text area
              </label>
              <textarea
                name=""
                id=""
                cols="28"
                rows="6"
                className="outline-none bg-medium mx-4 placeholder-dark text-dark text-sm lg:text-md py-4 font-semibold px-4 placeholder:"
                placeholder="How many classes do you have in your school? The number of students in your school? How many students per class? "
              ></textarea>
            </div>
            <Link to="/contact">
              <button
                className="rounded-full px-[6.8rem] py-2 mt-4 bg-light font-bold m-auto block text-dark text-sm lg:text-md hover:scale-110 transition-all duration-300 ease-in "
              >
                Submit
              </button>
            </Link>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;

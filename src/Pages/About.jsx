import React from "react";
import coding from "../Component/image/coding.jpg";

const About = () => {
  return (
    <>
      <section className="px-12 text-[#495371] mb-10 mt-20">
        <h1 className=" font-bold text-xl lg:text-3xl md:text-2xl py-4  text-center">
          Our aim is to radically improve the cognitive and technological skill
          of children and young adult through our specialized educational
          program
        </h1>
        <p className="text-sm lg:text-lg leading-8 pb-8 ">
          Because we understand the importance of technological skills in our
          today’s world, we believe that every child should be harness with this
          skill to meet tomorrow’s opportunity.
        </p>
        <img
          src={coding}
          alt="chemscrystals coding class"
          className="w-[50%] m-auto"
        />
      </section>
      <section className=" bg-[#495371] rounded-t-[100%] mt-20 pb-20 px-12">
        <div>
          <h2 className="text-xl lg:text-2xl font-bold pt-8 text-[#FDDB93] text-center ">
            Our Values
          </h2>
          <p className="text-sm lg:text-lg leading-8 text-[#FDDB93] px-10 pt-4 text-center">
            Our values are the propelling force that continually drive us <br />
            towards delivering a better service
          </p>
        </div>
        <div className="flex flex-col gap-6 lg:gap-16 px-10 mt-10 lg:flex-row">
          <div className="w-full lg:w-2/4">
            <span className="flex gap-2 justify-center items-center pb-4 ">
              <svg
                width="20"
                height="20"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.0623 56.3901V40.2037L0 48.3552L15.0623 56.3901ZM31.1203 0.262002C30.498 -0.087334 29.502 -0.087334 28.8797 0.262002L13.3195 8.6463L43.3195 24.8326V57.3216L58.8796 48.9375C59.502 48.5883 60 47.773 60 47.0743V15.866L31.1203 0.262002ZM13.9418 17.3799L0 24.8326L21.6597 36.5939V60L35.6016 52.5473C36.224 52.198 36.7219 51.3828 36.7219 50.684V28.4425L16.1826 17.38C15.5602 17.0307 14.5643 17.0307 13.942 17.38L13.9418 17.3799Z"
                  fill="#FDDB93"
                />
              </svg>
              <h2 className="text-[#FDDB93] lg:text-xl text-lg font-bold">
                Progress
              </h2>
            </span>
            <p className="text-sm lg:text-lg leading-8 text-[#FDDB93]">
              The progress of our student is very paramount to us. This is why
              it is one of our key values.
            </p>
          </div>
          <div className="w-full lg:w-2/4">
            <span className="flex gap-2 justify-center items-center pb-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 0C13.458 0 0 13.458 0 30C0 46.542 13.458 60 30 60C46.542 60 60 46.542 60 30C60 13.458 46.542 0 30 0ZM40.479 21C41.0771 20.9847 41.6723 21.0894 42.2294 21.3078C42.7864 21.5262 43.2941 21.8539 43.7225 22.2716C44.1509 22.6893 44.4913 23.1886 44.7237 23.74C44.956 24.2914 45.0756 24.8837 45.0754 25.482C45.0752 26.0804 44.9552 26.6726 44.7225 27.2239C44.4898 27.7751 44.149 28.2741 43.7204 28.6916C43.2917 29.109 42.7838 29.4364 42.2266 29.6544C41.6694 29.8724 41.0741 29.9767 40.476 29.961C39.3078 29.9304 38.1977 29.4447 37.3824 28.6075C36.5671 27.7702 36.111 26.6477 36.1114 25.479C36.1118 24.3104 36.5686 23.1882 37.3845 22.3515C38.2004 21.5148 39.3108 21.0298 40.479 21ZM19.5 21C20.0911 21.0002 20.6765 21.1168 21.2225 21.3432C21.7686 21.5696 22.2647 21.9014 22.6826 22.3195C23.1005 22.7377 23.4319 23.234 23.6579 23.7802C23.884 24.3265 24.0002 24.9119 24 25.503C23.9998 26.0941 23.8832 26.6795 23.6568 27.2255C23.4304 27.7716 23.0986 28.2677 22.6805 28.6856C22.2623 29.1035 21.766 29.4349 21.2198 29.6609C20.6735 29.887 20.0881 30.0032 19.497 30.003C18.3031 30.0026 17.1583 29.528 16.3144 28.6835C15.4705 27.839 14.9966 26.6939 14.997 25.5C14.9974 24.3061 15.472 23.1613 16.3165 22.3174C17.161 21.4735 18.3061 20.9996 19.5 21ZM30 48C18 48 15 36 15 36H45C45 36 42 48 30 48Z"
                  fill="#FDDB93"
                />
              </svg>

              <h2 className="text-[#FDDB93] lg:text-xl text-lg font-bold">
                Client's Satisfaction
              </h2>
            </span>
            <p className="text-sm lg:text-lg leading-8 text-[#FDDB93]">
              We endeavour to create value for our client to meet their
              expectations. We understand that our client’s success is what
              propel us.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10 px-10 lg:px-[20rem]">
          <div>
            <span className="flex gap-2 justify-center items-center pb-4">
              <svg
                width="25"
                height="25"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.5 13.5C37.5 15.4891 36.7098 17.3968 35.3033 18.8033C33.8968 20.2098 31.9891 21 30 21C28.0109 21 26.1032 20.2098 24.6967 18.8033C23.2902 17.3968 22.5 15.4891 22.5 13.5C22.5 11.5109 23.2902 9.60322 24.6967 8.1967C26.1032 6.79018 28.0109 6 30 6C31.9891 6 33.8968 6.79018 35.3033 8.1967C36.7098 9.60322 37.5 11.5109 37.5 13.5V13.5ZM52.5 15C52.5 16.5913 51.8679 18.1174 50.7426 19.2426C49.6174 20.3679 48.0913 21 46.5 21C44.9087 21 43.3826 20.3679 42.2574 19.2426C41.1321 18.1174 40.5 16.5913 40.5 15C40.5 13.4087 41.1321 11.8826 42.2574 10.7574C43.3826 9.63214 44.9087 9 46.5 9C48.0913 9 49.6174 9.63214 50.7426 10.7574C51.8679 11.8826 52.5 13.4087 52.5 15V15ZM13.5 21C15.0913 21 16.6174 20.3679 17.7426 19.2426C18.8679 18.1174 19.5 16.5913 19.5 15C19.5 13.4087 18.8679 11.8826 17.7426 10.7574C16.6174 9.63214 15.0913 9 13.5 9C11.9087 9 10.3826 9.63214 9.25736 10.7574C8.13214 11.8826 7.5 13.4087 7.5 15C7.5 16.5913 8.13214 18.1174 9.25736 19.2426C10.3826 20.3679 11.9087 21 13.5 21V21ZM18 27.75C18 25.68 19.68 24 21.75 24H38.25C40.32 24 42 25.68 42 27.75V42C42 45.1826 40.7357 48.2348 38.4853 50.4853C36.2348 52.7357 33.1826 54 30 54C26.8174 54 23.7652 52.7357 21.5147 50.4853C19.2643 48.2348 18 45.1826 18 42V27.75ZM15 27.75C15 26.361 15.42 25.074 16.137 24H9.75C7.68 24 6 25.68 6 27.75V39C5.99986 40.2844 6.27462 41.5539 6.80581 42.7232C7.33699 43.8926 8.11231 44.9347 9.07966 45.7796C10.047 46.6245 11.184 47.2525 12.4142 47.6215C13.6444 47.9905 14.9393 48.092 16.212 47.919C15.4093 46.0491 14.9969 44.0349 15 42V27.75ZM45 42C45 44.1 44.568 46.104 43.788 47.919C45.0607 48.092 46.3556 47.9905 47.5858 47.6215C48.816 47.2525 49.953 46.6245 50.9203 45.7796C51.8877 44.9347 52.663 43.8926 53.1942 42.7232C53.7254 41.5539 54.0001 40.2844 54 39V27.75C54 25.68 52.32 24 50.25 24H43.863C44.583 25.074 45 26.361 45 27.75V42Z"
                  fill="#FDDB93"
                />
              </svg>

              <h2 className="text-[#FDDB93] lg:text-xl text-lg font-bold">
                Collaboration
              </h2>
            </span>
            <p className="text-sm lg:text-lg leading-8 text-[#FDDB93]">
              We collaborate with our clients to ensure we deliver outstanding
              learning. We take opinions and feedback from clients to
              continually improve on our services.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

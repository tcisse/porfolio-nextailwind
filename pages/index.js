import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import profil from "../public/profil.png";

export default function Home() {
  return (
    <>
      <div className="lg:w-[1440px] lg:h-[904px] bg-black">
        <div>
          <div className="w-[1440px] h-16 bg-[#12B8FFEB] flex items-center justify-center">
            <ul className="flex justify-center space-x-6">
              <li>WELCOME</li>
              <li>ABOUT</li>
              <li>PROJECTS</li>
              <li>CONTACT</li>
            </ul>
          </div>
          <div className="text-white lg:grid grid-cols-2 lg:mt-32 mt-10 md:10 sm:10">
            <div>
              <h1 className="lg:text-6xl md:text-4xl text-2xl lg:ml-36 md:ml-10 ml-10">
                Luis Rodrigues
              </h1>
              <h1 className="lg:text-6xl text-2xl lg:ml-48 ml-10 lg:mt-5 mt-5 ">
                Full Stack Developer
              </h1>
              <p className="mt-12 lg:mx-20 mx-5 text-xl leading-10">
                I am in love with the endless possibilities that web development
                gives us. Currently, I am focused on building projects using
                React to make it second nature.
              </p>
              <p className="lg:mx-20 mx-5 lg:mt-20 mt-5">
                Based in Manchester, UK.
              </p>
            </div>
            <div className="lg:ml-10 ml-3 mr-3 lg:mt-1 mt-10 ">
              <Image
                src={profil}
                alt="profil picture"
                width={382}
                height={449}
              />
            </div>
          </div>
          <div className="flex justify-end mr-36 -mt-10">
            <div className="rounded-lg bg-white w-[59px] h-[154px]">
              <div className="space-y-10 mx-3">
                <div className="mt-1">
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 mt-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                      />
                    </svg>
                  </a>
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 mt-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                      />
                    </svg>
                  </a>
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 mt-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                      />
                    </svg>
                  </a>
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 mt-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[1440px] lg:h-[904px] bg-[#EEECEC]">
        <h1></h1>
        <p></p>
      </div>
    </>
  );
}

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import profil from "../public/profil.png";

export default function Home() {
  return (
    <>
      <div className="lg:w-[1440px] lg:h-[700px] bg-black">
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
              <h1 className="lg:text-6xl md:text-4xl text-2xl lg:ml-36 md:ml-10 ml-10 animate__animated animate__bounce">
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
          <div className="flex justify-end mr-44 -mt-28">
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
      <div className="lg:w-[1440px] lg:h-[700px] bg-[#EEECEC]">
        <div className="">
          <h1 className="font-bold text-6xl ml-56">About me</h1>
        </div>
        <div className="mx-56 text-xl leading-10">
          <p>
            Hi! My interest in web development started back in 2019 when I
            decided to create a website for a family company.
          </p>
          <p className="mt-10">
            In 2021 had the privilege to be selected for a 16 weeks Full-Stack
            Development Bootcamp with School Of Code. It was terrific, from
            understanding the proccess of{" "}
            <span className="font-bold">Computational Thinking</span> breaking
            down problems up to using{" "}
            <span className="font-bold">Pair-Programiming</span> and{" "}
            <span className="font-bold">Agile</span> methodologies during{" "}
            <span className="font-bold">teamwork</span> projects to plan and
            build a full-stack app for the final project.
          </p>
        </div>
        <div className="flex justify-center mt-5">
          <div className=" bg-white w-[593px] h-[216px] rounded-lg">
            <h1 className="ml-10 text-2xl mt-2">Skills</h1>
            <div className="flex space-x-14 ml-4 text-2xl mt-3">
              <div>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>SQL</li>
              </div>
              <div>
                <li>REACT</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Bootstrap</li>
              </div>
              <div>
                <li>Jest</li>
                <li>Cypress</li>
                <li>Postman</li>
              </div>
            </div>
          </div>
        </div>
        <p className="flex justify-center text-2xl mt-10">
          Dripping water hollows out a stone. Perseverance is what distinguish
          me the most.
        </p>
      </div>
      <div className="lg:w-[1440px] lg:h-[700px] bg-[#F8F9FA]">
        <div className="">
          <h1 className="text-6xl font-bold">Project</h1>
        </div>
        <div className="mt-10">
          <button className="rounded-lg bg-[#12B8FF] w-10 h-10 text-white">All</button>
          <button className="rounded-lg bg-white border-2 border-[#12B8FF] w-36 h-10 text-black">Front end</button>
          <button className="rounded-lg bg-white border-2 border-[#12B8FF] w-10 h-10 text-black">Full stack</button>
          <button className="rounded-lg bg-white border-2 border-[#12B8FF] w-10 h-10 text-black">Personal</button>
          <button className="rounded-lg bg-white border-2 border-[#12B8FF] w-10 h-10 text-black">Team</button>
          <button className="rounded-lg bg-white border-2 border-[#12B8FF] w-10 h-10 text-black">Bootstrap</button>
          <button className="rounded-lg bg-white border-2 border-[#12B8FF] w-10 h-10 text-black">React</button>
          <button className="rounded-lg bg-white border-2 border-[#12B8FF] w-10 h-10 text-black">JavaScript</button>
        </div>
      </div>
    </>
  );
}

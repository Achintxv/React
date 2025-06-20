import { easeInOut, motion, useAnimation } from "framer-motion";
import { Power4 } from "gsap";

function Project() {
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];
  const handleHover = (index) => {
    cards[index].start({ y: "1%" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div data-scroll data-scroll-section className="w-full py-5">
      <div className="px-5 border-b-2 border-zinc-600 pb-8">
        <h1 className="text-6xl tracking-tight">Featured Projects</h1>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 cards w-full py-5 px-4 gap-15">
        <div className="cardcontainer relative w-full h-[70vh] rounded-2xl mb-20">
          <div className="flex items-center mb-3">
            <div className="circle w-2 h-2 bg-white rounded-full"></div>
            <h1 className="px-1">Salience Lab</h1>
          </div>
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="card w-full h-full rounded-2xl overflow-hidden"
          >
            <h1 className="absolute text-yellow-300 left-full flex -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-6xl tracking-tighter overflow-hidden">
              {"Salience Lab".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.01 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <img
              className="w-full h-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png"
              alt=""
            />
          </motion.div>
          <div className="flex items-center gap-2">
            <button className="flex items-center border-bg-white cursor-pointer border-1 rounded-2xl text-white px-2 py-1 mt-2 hover:bg-white hover:text-black hover:border-black hover:border-1">
              Brand Identity
            </button>
            <button className="flex items-center border-bg-white cursor-pointer border-1 rounded-2xl text-white px-2 py-1 mt-2 hover:bg-white hover:text-black hover:border-black hover:border-1">
              Pitch Deck
            </button>
          </div>
        </div>
        <div className="cardcontainer relative w-full h-[70vh] rounded-2xl mb-20">
          <div className="flex items-center mb-3">
            <div className="circle w-2 h-2 bg-white rounded-full"></div>
            <h1 className="px-1">Cardboard Spaceship</h1>
          </div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className=" card w-full h-full rounded-2xl overflow-hidden"
          >
            <h1 className="absolute text-yellow-300 right-full flex translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-6xl tracking-tighter overflow-hidden">
              {"Cardboard Spaceship".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.01 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <img
              className="w-full h-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png"
              alt=""
            />
          </motion.div>
          <div className="flex items-center gap-2">
            <button className="flex items-center border-bg-white cursor-pointer border-1 rounded-2xl text-white px-2 py-1 mt-2 hover:bg-white hover:text-black hover:border-black hover:border-1">
              Brand Template
            </button>
            <button className="flex items-center border-bg-white cursor-pointer border-1 rounded-2xl text-white px-2 py-1 mt-2 hover:bg-white hover:text-black hover:border-black hover:border-1">
              Sales Deck
            </button>
            <button className="flex items-center border-bg-white cursor-pointer border-1 rounded-2xl text-white px-2 py-1 mt-2 hover:bg-white hover:text-black hover:border-black hover:border-1">
              Social Media Templates
            </button>
          </div>
        </div>
        <div className="cardcontainer relative w-full h-[70vh] rounded-2xl">
          <div className="flex items-center mb-3">
            <div className="circle w-2 h-2 bg-white rounded-full"></div>
            <h1 className="px-1">Ah2 & Matt Horn</h1>
          </div>
          <motion.div
            onHoverStart={() => handleHover(2)}
            onHoverEnd={() => handleHoverEnd(2)}
            className="card w-full h-full rounded-2xl overflow-hidden"
          >
            <h1 className="absolute text-yellow-300 left-full flex -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-6xl tracking-tighter overflow-hidden">
              {"AH2 & Matt Horn".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[2]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.01 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <img
              className="w-full h-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png"
              alt=""
            />
          </motion.div>
          <div className="flex items-center gap-2">
            <button className="flex items-center border-bg-white cursor-pointer border-1 rounded-2xl text-white px-2 py-1 mt-2 hover:bg-white hover:text-black hover:border-black hover:border-1">
              Pitch Deck
            </button>
          </div>
        </div>
        <div className="cardcontainer relative w-full h-[70vh] rounded-2xl">
          <div className="flex items-center mb-3">
            <div className="circle w-2 h-2 bg-white rounded-full"></div>
            <h1 className="px-1">Fyde</h1>
          </div>
          <motion.div
            onHoverStart={() => handleHover(3)}
            onHoverEnd={() => handleHoverEnd(3)}
            className="card w-full h-full rounded-2xl overflow-hidden"
          >
            <h1 className="absolute text-yellow-300 right-full flex translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-6xl tracking-tighter overflow-hidden">
              {"Fyde".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[3]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.01 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <img
              className="w-full h-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png"
              alt=""
            />
          </motion.div>
          <div className="flex items-center gap-2">
            <button className="flex items-center border-bg-white cursor-pointer border-1 rounded-2xl text-white px-2 py-1 mt-2 hover:bg-white hover:text-black hover:border-black hover:border-1">
              Audit
            </button>
            <button className="flex items-center border-bg-white cursor-pointer border-1 rounded-2xl text-white px-2 py-1 mt-2 hover:bg-white hover:text-black hover:border-black hover:border-1">
              Sales Deck
            </button>
            <button className="flex items-center border-bg-white cursor-pointer border-1 rounded-2xl text-white px-2 py-1 mt-2 hover:bg-white hover:text-black hover:border-black hover:border-1">
              Copywriting
            </button>
            <button className="flex items-center border-bg-white cursor-pointer border-1 rounded-2xl text-white px-2 py-1 mt-2 hover:bg-white hover:text-black hover:border-black hover:border-1">
              Slide Design
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;

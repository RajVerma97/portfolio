import { useContext } from "react";
import { CursorContext } from "./CursorProvider";
import RobotSpiderBackground from "./RobotSpiderBackground";

const ExperienceSection = () => {
  const cursorState = useContext(CursorContext);
  const setCursorType = cursorState ? cursorState[1] : undefined;
  return (
    <div className="w-full min-h-screen text-white ">
      <div className="flex justify-center items-center gap-10 mb-8">
        <h1
          className="tracking-tight inline font-semibold text-4xl lg:text-6xl text-white"
          onPointerEnter={() => setCursorType?.("hovered")}
          onPointerLeave={() => setCursorType?.("default")}
        >
          Experience
        </h1>
      </div>
      <div className="mt-10 relative">
        <div
          className="absolute top-4 left-8 bg-opacity-80 bg-gray-900 border border-gray-700 p-8 rounded-xl shadow-lg"
          style={{
            borderRadius: "1em",
            zIndex: 10,
            backdropFilter: "blur(10px)",
          }}
        >
          <h1 className="text-2xl text-amber-400 font-bold capitalize mb-3">
             Full Stack Software Developer
          </h1>
          <h3 className="text-lg font-light text-gray-400">2 Year</h3>
        </div>
        <div className="w-full">
          <RobotSpiderBackground />
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;

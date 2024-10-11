import { Button, Card, CardBody, Image, Slider } from "@nextui-org/react";
import { HeartIcon, PauseCircleIcon } from "lucide-react";
import { motion } from "framer-motion";
import React, { useContext } from "react";
import { CursorContext } from "./CursorProvider";

// Icons for Next and Previous
export const NextIcon = ({ size = 24, width, height, ...props }) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M3.76172 7.21957V16.7896C3.76172 18.7496 5.89172 19.9796 7.59172 18.9996L11.7417 16.6096L15.8917 14.2096C17.5917 13.2296 17.5917 10.7796 15.8917 9.79957L11.7417 7.39957L7.59172 5.00957C5.89172 4.02957 3.76172 5.24957 3.76172 7.21957Z"
      fill="currentColor"
    />
    <path
      d="M20.2383 18.9303C19.8283 18.9303 19.4883 18.5903 19.4883 18.1803V5.82031C19.4883 5.41031 19.8283 5.07031 20.2383 5.07031C20.6483 5.07031 20.9883 5.41031 20.9883 5.82031V18.1803C20.9883 18.5903 20.6583 18.9303 20.2383 18.9303Z"
      fill="currentColor"
    />
  </svg>
);

export const PreviousIcon = ({ size = 24, width, height, ...props }) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M20.2409 7.21957V16.7896C20.2409 18.7496 18.1109 19.9796 16.4109 18.9996L12.2609 16.6096L8.11094 14.2096C6.41094 13.2296 6.41094 10.7796 8.11094 9.79957L12.2609 7.39957L16.4109 5.00957C18.1109 4.02957 20.2409 5.24957 20.2409 7.21957Z"
      fill="currentColor"
    />
    <path
      d="M3.76172 18.9303C3.35172 18.9303 3.01172 18.5903 3.01172 18.1803V5.82031C3.01172 5.41031 3.35172 5.07031 3.76172 5.07031C4.17172 5.07031 4.51172 5.41031 4.51172 5.82031V18.1803C4.51172 18.5903 4.17172 18.9303 3.76172 18.9303Z"
      fill="currentColor"
    />
  </svg>
);

// MusicCard component with animation and styling improvements
interface MusicCardProps {
  title: string;
  artist: string;
  album: string;
  image: string;
}
export default function MusicCard({ title, artist, image }: MusicCardProps) {
  const [liked, setLiked] = React.useState(false);
  const cursorState = useContext(CursorContext);
  const setCursorType = cursorState ? cursorState[1] : undefined;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="bg-white p-4 rounded-xl flex justify-center items-center" // Light green background
      onPointerEnter={() => setCursorType?.("hovered")}
      onPointerLeave={() => setCursorType?.("default")}
    >
      <Card
        isBlurred
        className="bg-black dark:bg-gray-900 max-w-[610px] rounded-xl p-4" // Black background for Card
        shadow="md"
      >
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative col-span-6 md:col-span-4"
            >
              <Image
                alt="Album cover"
                className="object-fit rounded-lg"
                height={220}
                src={image}
                width="100%"
              />
            </motion.div>

            <div className="flex flex-col col-span-6 md:col-span-8">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-0">
                  <h3 className="font-semibold text-gray-200 dark:text-white">
                    {" "}
                    {/* Updated to gray-200 for better visibility */}
                    {artist}
                  </h3>
                  <h1 className="text-xl font-bold mt-1 text-white dark:text-white">
                    {" "}
                    {/* Set to white for better contrast */}
                    {title}
                  </h1>
                </div>
                <Button
                  isIconOnly
                  className="text-default-900/60 hover:bg-foreground/20"
                  radius="full"
                  variant="light"
                  onPress={() => setLiked((v) => !v)}
                >
                  <motion.div
                    whileTap={{ scale: 0.8 }}
                    animate={{ scale: liked ? 1.1 : 1 }}
                  >
                    <HeartIcon
                      className={liked ? "[&>path]:stroke-transparent" : ""}
                      fill={liked ? "currentColor" : "none"}
                    />
                  </motion.div>
                </Button>
              </div>

              <div className="flex flex-col mt-4 gap-2">
                <Slider
                  aria-label="Music progress"
                  classNames={{
                    track: "bg-default-500/20",
                    thumb:
                      "w-3 h-3 after:w-2 after:h-2 after:bg-gray-800 dark:after:bg-gray-300",
                  }}
                  color="primary"
                  defaultValue={33}
                  size="md"
                />
                <div className="flex justify-between">
                  <p className="text-sm text-gray-300 dark:text-gray-400">
                    {" "}
                    {/* Updated to gray-300 for better visibility */}
                    1:23
                  </p>
                  <p className="text-sm text-gray-200">
                    {" "}
                    {/* Updated to gray-200 for better visibility */}
                    4:32
                  </p>
                </div>
              </div>

              <div className="flex w-full items-center justify-center mt-4">
                <Button
                  isIconOnly
                  className="hover:bg-gray-200 dark:hover:bg-gray-700"
                  radius="full"
                  variant="light"
                >
                  <PreviousIcon width={undefined} height={undefined} />
                </Button>
                <Button
                  isIconOnly
                  className="w-auto h-auto hover:bg-gray-200 dark:hover:bg-gray-700"
                  radius="full"
                  variant="light"
                >
                  <PauseCircleIcon size={54} />
                </Button>
                <Button
                  isIconOnly
                  className="hover:bg-gray-200 dark:hover:bg-gray-700"
                  radius="full"
                  variant="light"
                >
                  <NextIcon width={undefined} height={undefined} />
                </Button>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
}

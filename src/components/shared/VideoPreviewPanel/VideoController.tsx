"use client";

import {
  ScissorsIcon,
  PlayIcon,
  PauseIcon,
  SpeakerLoudIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

const VideoController = () => {
  return (
    <div className="mt-8 flex justify-between text-[rgb(155,158,163)]">
      <div className="flex">
        <Button variant="ghost">
          <ScissorsIcon className="w-6 h-6 mr-2" />
          Cut
        </Button>
      </div>

      <div className="flex gap-x-8 items-center">
        <Button variant="ghost" size="icon">
          <PlayIcon className="w-6 h-6" />
        </Button>

        <Button variant="ghost" size="icon">
          <SpeakerLoudIcon className="w-6 h-6" />
        </Button>

        <div className="flex items-end gap-x-2">
          <p className="text-5xl font-bold leading-none">
            <span className="flex text-center">
              <span className="w-[0.6em] ">0</span>
              <span className="w-[0.6em]">0</span>
              <span className="w-[0.6em]">:</span>
              <span className="w-[0.6em]">0</span>
              <span className="w-[0.6em]">0</span>
            </span>
          </p>
          <p className="mb-2 font-medium text-sm leading-none">00:38</p>
        </div>
      </div>
    </div>
  );
};

export default VideoController;

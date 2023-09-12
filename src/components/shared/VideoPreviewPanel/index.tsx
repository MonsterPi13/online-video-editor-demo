"use client";

import TimelineController from "./TimelineController";
import VideoController from "./VideoController";

const VideoPreviewPanel = () => {
  return (
    <div className="flex flex-col h-full px-4 pb-4">
      {/* video view */}
      <div className="flex-1 bg-[rgb(20,23,31)] rounded-[80px]"></div>
      {/* video controller */}
      <VideoController />
      {/* keyframe panel */}
      <TimelineController />
    </div>
  );
};

export default VideoPreviewPanel;

"use client";

import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import { CURATED_CLIP_DEMO, EMOJI_URL_MAP } from "@/constants";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type IWordItem = {
  type: "word" | "image";
  id: string;
  content: string;
  offsetStartMs: number;
  offsetEndMs: number;
  color?: number;
  wrap?: boolean;
};

const CaptionPanel = () => {
  // TODO: How to merge the caption array & emoji array content
  // currently leave the emoji alone, just calculate the entire text
  const [captionsList, setCaptionList] = useState<IWordItem[][]>();

  useEffect(() => {
    const { captionPlans, emojiPlans } = CURATED_CLIP_DEMO.overlayPlans;
    captionPlans.map((caption, index) => {
      const emojiPlan = emojiPlans[index];
      const { sceneId, frames, source } = caption;
      const { frames: emojiFrames } = emojiPlan;

      const totalFrames: IWordItem[][] = frames.map((frame, index) => {
        const frames: IWordItem[] = frame.elements.map((word, innerIndex) => {
          return {
            type: "word",
            id: `${sceneId}-${index}-${innerIndex}`,
            ...word,
          };
        });
        if (emojiFrames[index].elements.length !== 0) {
          frames.unshift({
            type: "image",
            id: `${sceneId}-${index}-0`,
            ...emojiFrames[index].elements[0],
          });
        }
        return frames;
      });

      setCaptionList(totalFrames);
    });
  }, []);

  return (
    <section className="mt-2 pt-4 pr-6 pb-2 pl-2">
      <div className="flex flex-col gap-3 mb-10 p-4 rounded-xl border">
        <div className="flex gap-4 justify-between">
          <p className="text-gray-100">Auto intro caption</p>
          <Switch />
        </div>

        <p className="text-gray-400">
          Elon Musk is warning on the dangers of AI
        </p>
      </div>

      <div className="flex flex-col text-gray-500">
        <div className="flex items-end">
          <p className="text-base leading-none">00:00</p>
          <p className="text-xs leading-none">.00</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center mt-8 mb-8">
        {captionsList?.map((caption, index) => (
          <>
            {caption.map((word, innerIndex) => (
              <div
                className="flex gap-1 shrink-0 border-[2px] border-transparent items-center h-8"
                key={`${index}-${innerIndex}-${word.id}`}
              >
                {word.type === "image" && (
                  <div className="pl-[2px] cursor-pointer">
                    <div className="flex items-center justify-center bg-[rgb(43,47,59)] rounded w-[22px] h-[22px] hover:bg-[rgb(86,94,118)]">
                      <Image
                        alt={word.content}
                        width={16}
                        height={16}
                        src={EMOJI_URL_MAP[word.content]}
                        style={{ color: "transparent" }}
                        decoding="async"
                      />
                    </div>
                  </div>
                )}
                {word.type === "word" && (
                  <div
                    className={cn(
                      "relative cursor-pointer  hover:bg-[rgb(43,47,59)]",
                      word.color === 2
                        ? "text-[rgb(255,253,3)]"
                        : word.color === 1
                        ? "text-[rgb(4,248,39)]"
                        : "text-slate-200"
                    )}
                    data-word-id={word.id}
                  >
                    {word.content}
                  </div>
                )}
              </div>
            ))}
          </>
        ))}
      </div>
    </section>
  );
};

export default CaptionPanel;

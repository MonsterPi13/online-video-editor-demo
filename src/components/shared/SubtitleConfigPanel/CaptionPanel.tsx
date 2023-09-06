"use client";

import { Switch } from "@/components/ui/switch";

const CaptionPanel = () => {
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
    </section>
  );
};

export default CaptionPanel;

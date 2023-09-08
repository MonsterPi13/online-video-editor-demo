"use client";

import { FileTextIcon, MixerHorizontalIcon } from "@radix-ui/react-icons";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import CaptionPanel from "./CaptionPanel";

const SubtitleEditorPanel = () => {
  return (
    <Tabs defaultValue="Caption" className="h-full">
      <TabsList>
        <TabsTrigger value="Caption" className="flex gap-x-2">
          <FileTextIcon />
          Caption
        </TabsTrigger>
        <TabsTrigger value="Design" className="flex gap-x-2">
          <MixerHorizontalIcon />
          Design
        </TabsTrigger>
      </TabsList>
      <TabsContent value="Caption">
        <CaptionPanel />
      </TabsContent>
      <TabsContent value="Design">Change your password here.</TabsContent>
    </Tabs>
  );
};

export default SubtitleEditorPanel;

import SubtitleEditorPanel from "@/components/shared/SubtitleConfigPanel";
import VideoPreviewPanel from "@/components/shared/VideoPreviewPanel";

export default function Home() {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] overflow-hidden">
      <header className="h-24 xl:h-20 sm:h-10 flex items-center px-14 py-4">
        <h1 className="text-white">online-video-editor</h1>
      </header>

      <main className="flex-1 flex gap-x-6 p-6">
        <div className="min-w-[490px] w-[30%] p-4 h-full">
          <SubtitleEditorPanel />
        </div>
        <div className="min-w-[500px] flex-1 h-full">
          <VideoPreviewPanel />
        </div>
      </main>
    </div>
  );
}

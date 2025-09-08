import AnimatedTabs from "@/components/animated-tabs";
import AppStoreList from "@/components/app-store-list";
// import ConfirmButton from "@/components/confirm-button";
// import FamilyDialog from "@/components/family-dialog";
// import ImageReveal from "@/components/image-reveal";
// import MultiStateButton from "@/components/multi-state-button";
// import MultiStepForm from "@/components/multi-step-form";
// import StaggeredImages from "@/components/staggered-images";

export default function Home() {
  return (
    <div className="space-y-16 pb-24 p-4 text-sm">
      <div className="min-w-72 max-w-xl mx-auto pt-24">
        <h1 className="text-lg">Motion Showcase</h1>
        <div className="text-zinc-400 mt-2">
          <p>
            An Interactive UI and motion experiments with Motion (prev Framer
            Motion) — built for learning and inspiration
          </p>
        </div>
      </div>
      <AnimatedTabs />
      <AppStoreList />
      {/*<FamilyDialog />
      <ConfirmButton />
      <ImageReveal />
      <StaggeredImages />
      <MultiStepForm />
      <MultiStateButton /> */}
    </div>
  );
}

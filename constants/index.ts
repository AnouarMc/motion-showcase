import { Home, Settings, OctagonAlert, ShieldCheck } from "lucide-react";

export const tabs = [
  {
    label: "Home",
    icon: Home,
    textColor: "text-white",
    bgColor: "bg-zinc-400/20",
  },
  {
    label: "Settings",
    icon: Settings,
    textColor: "text-white",
    bgColor: "bg-zinc-400/20",
  },
  {
    label: "Security",
    icon: ShieldCheck,
    textColor: "text-green-500",
    bgColor: "bg-green-300/20",
  },
  {
    label: "Danger Zone",
    icon: OctagonAlert,
    textColor: "text-red-500",
    bgColor: "bg-red-300/20",
  },
];

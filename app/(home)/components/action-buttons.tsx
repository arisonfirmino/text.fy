import { HeartIcon, MessageSquareIcon, Share2Icon } from "lucide-react";

export default function ActionButtons() {
  const button_items = [
    {
      icon: <HeartIcon size={16} />,
      lenght: "6",
    },
    {
      icon: <MessageSquareIcon size={16} />,
      lenght: "4",
    },
    {
      icon: <Share2Icon size={16} />,
      lenght: "",
    },
  ];

  return (
    <div className="flex items-center gap-5">
      {button_items.map((item, index) => (
        <button key={index} className="flex items-center gap-1.5">
          {item.icon} <span className="text-sm">{item.lenght}</span>
        </button>
      ))}
    </div>
  );
}

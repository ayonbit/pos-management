"use client";

import { SlRefresh } from "react-icons/sl";
import Tooltip from "./ui/ToolTips";

interface RefreshButtonProps {
  onRefresh?: () => void;
}

const RefreshButton = ({ onRefresh }: RefreshButtonProps) => {
  const handleRefresh = () => {
    onRefresh?.();
  };

  return (
    <Tooltip content="Refresh" position="bottom">
      <div
        className="rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
        onClick={handleRefresh}
      >
        <SlRefresh size={16} className="text-gray-600" />
      </div>
    </Tooltip>
  );
};

export default RefreshButton;

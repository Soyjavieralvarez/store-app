import { cn } from "@/lib/utils"
import { MouseEventHandler } from "react"

interface IconButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    icon: React.ReactElement;
    className?: string;
}

const IconButton: React.FC <IconButtonProps> = ({
    onClick,
    icon,
    className
}) => {
  return (
    <button
    onClick={onClick}
    className={cn(
        "rounden-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transiton",
        className
    )}
    >
    {icon}
    </button>
  )
}

export default IconButton
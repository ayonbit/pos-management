// Card.tsx
import { CardProps } from "@/types/Card.types";

const Card = ({
  title,
  description,
  action,
  children,
  footer,
  className = "",
}: CardProps) => {
  return (
    <div
      className={`rounded-sm shadow-xl transition p-4 bg-white flex flex-col ${className}`}
    >
      {(title || action) && (
        <div className="flex items-start justify-between mb-3 gap-2">
          <div className="min-w-0 flex-1">
            {" "}
            {/* Added min-w-0 for text truncation */}
            {title && (
              <h3 className="text-sm sm:text-base font-semibold truncate">
                {title}
              </h3>
            )}
            {description && (
              <p className="text-xs sm:text-sm text-gray-500">{description}</p>
            )}
          </div>

          {action && <div className="shrink-0">{action}</div>}
        </div>
      )}

      {/* REMOVED h-full w-full, added flex-1 and min-h-0 */}
      <div className="text-sm sm:text-base flex-1 min-h-0">{children}</div>

      {footer && (
        <div className="mt-4 pt-3 border-t text-xs sm:text-sm">{footer}</div>
      )}
    </div>
  );
};

export default Card;

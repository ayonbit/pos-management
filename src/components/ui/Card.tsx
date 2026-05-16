// Card.tsx
import { CardProps } from "@/types/Card.types";
import clsx from "clsx";

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
      className={clsx(
        `
        bg-white
        border border-gray-100
        rounded-2xl
        shadow-sm
        hover:shadow-md
        transition-all duration-300

        flex flex-col
        overflow-hidden

        p-4 sm:p-5 lg:p-6
        `,
        className,
      )}
    >
      {/* Header */}
      {(title || description || action) && (
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
          <div className="flex-1 min-w-0">
            {title && (
              <h3
                className="
                  text-base sm:text-lg
                  font-semibold
                  text-gray-800
                  leading-tight
                  wrap-break-word
                "
              >
                {title}
              </h3>
            )}

            {description && (
              <p
                className="
                  mt-1
                  text-sm
                  text-gray-500
                  leading-relaxed
                  wrap-break-word
                "
              >
                {description}
              </p>
            )}
          </div>

          {action && (
            <div className="flex items-center sm:justify-end shrink-0">
              {action}
            </div>
          )}
        </div>
      )}

      {/* Body */}
      <div className="flex-1 text-sm sm:text-base min-h-0">{children}</div>

      {/* Footer */}
      {footer && (
        <div
          className="
            mt-5
            pt-4
            border-t border-gray-100
            text-xs sm:text-sm
            text-gray-500
          "
        >
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;

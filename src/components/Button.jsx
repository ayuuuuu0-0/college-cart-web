// import clsx from "clsx";
// import { Marker } from "./Marker";

// export const Button = ({
//   icon,
//   children,
//   href,
//   containerClassName,
//   onClick,
//   markerFill,
//   download,
// }) => {
//   const Inner = () => (
//     <>
//       <span className="relative flex items-center min-h-[60px] px-4 g4  rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
//         <span className="absolute -left-[1px]">
//           <Marker markerFill={markerFill} />
//         </span>
//         {icon && (
//           <img
//             src={icon}
//             alt="circle"
//             className="size-10 mr-5 object-contain z-10"
//           />
//         )}
//         <span className="relative z-2 font-poppins base-bold text-p1 uppercase">
//           {children}
//         </span>
//       </span>
//       <span className="glow-before glow-after" />
//     </>
//   );
//   return href ? (
//     <a
//       className={clsx(
//         "relative p-0.5 g5 rounded-2xl shadow-500 group",
//         containerClassName
//       )}
//       href={href}
//     >
//       <Inner />
//     </a>
//   ) : (
//     <button
//       className={clsx(
//         "relative p-0.5 g5 rounded-2xl shadow-500 group",
//         containerClassName
//       )}
//       onClick={onClick}
//     >
//       <Inner />
//     </button>
//   );
// };

import clsx from "clsx";
import { Marker } from "./Marker";

export const Button = ({
  icon,
  children,
  href,
  containerClassName,
  onClick,
  markerFill,
  download, // New prop for download functionality
}) => {
  const handleClick = async (e) => {
    if (onClick) {
      onClick(e);
    }

    if (download) {
      try {
        const response = await fetch(download);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", download.split("/").pop() || "download");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error("Download failed:", error);
      }
    }
  };

  const Inner = () => (
    <>
      <span className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
        <span className="absolute -left-[1px]">
          <Marker markerFill={markerFill} />
        </span>
        {icon && (
          <img
            src={icon}
            alt="circle"
            className="size-10 mr-5 object-contain z-10"
          />
        )}
        <span className="relative z-2 font-poppins base-bold text-p1 uppercase">
          {children}
        </span>
      </span>
      <span className="glow-before glow-after" />
    </>
  );

  return href ? (
    <a
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName
      )}
      href={href}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName
      )}
      onClick={handleClick}
    >
      <Inner />
    </button>
  );
};

import { IoIosArrowBack } from "react-icons/io";
export default function Modal({ open, onClose, children }) {
  return (
    // backdrop
    <div
      onClick={onClose}
      className={`
        fixed z-50 inset-0 flex justify-end transition-colors
        ${open ? "visible bg-black/20" : "invisible"}
      `}
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          relative bg-white w-[400px] md:w-[440px] rounded-l-xl shadow px-6 py-10 transition-all ease-in-out duration-300
          ${open ? "" : "translate-x-full"}
        `}
      >
        <button
          onClick={onClose}
          className="absolute top-4 left-6 p-1 bg-gray-200 rounded-lg text-gray-600  hover:bg-gray-300"
        >
          <IoIosArrowBack className="text-lg" />
        </button>
        {children}
      </div>
    </div>
  );
}

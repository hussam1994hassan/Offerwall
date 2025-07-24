import { IoMdClose } from "react-icons/io";

const PopupDialog = ({ open, onClose, title, children }) => {
    if (!open) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/10 backdrop-blur-lg animate-fade animate-duration-500 p-5 box-border">
            <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative animate-jump animate-duration-300">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-red-600"
                    aria-label="Close"
                >
                    <IoMdClose size={24} />
                </button>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    {title}
                </h2>
                <div className="max-h-[65vh] overflow-y-auto text-gray-700">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default PopupDialog;

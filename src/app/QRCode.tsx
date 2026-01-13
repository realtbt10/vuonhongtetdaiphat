import { QRCodeCanvas } from "qrcode.react";

export default function QRCodeComponent({ websiteUrl, open, setOpen }: any) {
  
  return (
    <>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl p-6 w-[300px] text-center relative">
            
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-3 text-gray-400 hover:text-black cursor-pointer"
            >
              ✕
            </button>

            <h2 className="text-lg font-semibold mb-4 text-emerald-700">
              Vườn hồng tết Đại Phát
            </h2>

            <div className="flex justify-center mb-4">
              <QRCodeCanvas
                value={websiteUrl}
                size={180}
                level="H"
              />
            </div>

            <p className="text-sm text-gray-500 break-all">
              {websiteUrl}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

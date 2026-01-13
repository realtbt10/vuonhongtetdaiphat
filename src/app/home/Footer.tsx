
"use client"

export default function Footer({gardenName, setOpen}: any) {
    return (
        <footer style={{paddingTop: '10px', marginTop: '10px'}} className="bg-emerald-900 text-white py-12 px-4">
            <div className=" mx-auto text-center">
            <h4 className="text-2xl font-bold mb-1">{gardenName}</h4>
            <p className="text-emerald-200 mb-1 whitespace-pre">{`VƯỜN HỒNG TẾT ĐẠI PHÁT - BỀN CÂY _BỀN CHỮ TÍN`}</p>
            <p onClick={() => setOpen(true)}  className="text-emerald-300 text-sm leading-none">© 2026 {gardenName}. All rights reserved.</p>
            </div>
        </footer>
    );
}
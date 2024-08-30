import { Outlet, useNavigate } from "react-router-dom"

export default function VerticalProfileComponent() {
    const nav = useNavigate();

    const editClickHandler = () => {
        nav("/edit");
    };

    return (
        <>
            <div className="bg-stone-950 h-screen text-slate-50 flex items-center justify-center" onClick={editClickHandler}>
                <div className="hover:underline cursor-pointer">
                    Click Me
                </div>
            </div><Outlet /></>
    )
}
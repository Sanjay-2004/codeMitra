import { useNavigate } from "react-router-dom";

export function Navbar() {
    const isLoggedIn = false;
    const nav = useNavigate();
    const logoClickHandler = () => {
        nav("/");
    };

    const rankingClickHandler = () => {
        nav("/ranking");
    };

    const contestClickHandler = () => {
        nav("/contests");
    };

    const discussionClickHandler = () => { };

    const profileClickHandler = () => { };

    const signinClickHandler = () => { };

    const signupClickHandler = () => { };

    return (
        <>
            <div className="sticky top-0 flex justify-between bg-stone-950 text-slate-50 items-center border-stone-800 border-b h-[72px] z-50">
                <div className="ml-12 font-semibold text-3xl cursor-pointer" onClick={logoClickHandler}>
                    CodeMitra
                </div>
                <div className="flex justify-between">
                    <div className="m-8 text-secondary cursor-pointer hover:underline text-2xl" onClick={rankingClickHandler}>
                        Rankings
                    </div>
                    <div className="m-8 text-secondary cursor-pointer hover:underline text-2xl" onClick={contestClickHandler}>
                        Contests
                    </div>
                    <div className="m-8 text-secondary cursor-pointer hover:underline text-2xl" onClick={discussionClickHandler}>
                        Discussions
                    </div>
                </div>
                <div className="flex justify-between mr-16 text-xl cursor-pointer">
                    {isLoggedIn ? (
                        <div className="flex items-center justify-center cursor-pointer rounded-full h-[65px] w-[65px] hover:bg-stone-800">
                            <div className="cursor-pointer bg-primary rounded-full h-[52px]  w-[52px] flex items-center justify-center text-slate-50" onClick={profileClickHandler} />
                        </div>
                    ) : (
                        <div className="flex items-center justify-between">
                            <button
                                type="button"
                                className="mr-8 inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground border border-transparent hover:border-stone-800 h-10 px-4 py-2 w-full"
                                onClick={signinClickHandler}
                            >
                                Login
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                                onClick={signupClickHandler}
                            >
                                Signup
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
export function Navbar() {
    const isLoggedIn = false;

    const logoClickHandler = () => {

    };

    const rankingClickHandler = () => {

    };

    const contestClickHandler = () => {

    };

    const discussionClickHandler = () => {

    };

    const profileClickHandler = () => {

    };

    const signinClickHandler = () => {

    };

    return (
        <>
            <div className="sticky top-0 flex justify-between bg-stone-950 text-slate-50 items-center border-stone-800 border-b h-[72px]">
                <div className="ml-12 font-semibold text-3xl cursor-pointer" onClick={logoClickHandler}>
                    codeMitra
                </div>
                <div className="flex justify-between">
                    <div className="m-4 text-yellow-500 cursor-pointer hover:underline text-xl" onClick={rankingClickHandler}>
                        Rankings
                    </div>
                    <div className="m-4 cursor-pointer hover:underline text-xl" onClick={contestClickHandler}>
                        Contests
                    </div>
                    <div className="m-4 cursor-pointer hover:underline text-xl" onClick={discussionClickHandler}>
                        Discussions
                    </div>
                </div>
                <div className="flex justify-between mr-16 text-xl cursor-pointer">
                    {isLoggedIn ?
                        <div className="cursor-pointer bg-red-700 rounded-full h-[52px]  w-[52px] flex items-center justify-center" onClick={profileClickHandler}>
                            P
                        </div> :
                        <div className="hover:underline" onClick={signinClickHandler}>
                            SignUp/Login
                        </div>
                    }
                </div>
            </div>
        </>
    );
}


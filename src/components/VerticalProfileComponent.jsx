import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import leetcode from "../images/leetcode.png";
import codeforces from "../images/codeforces.png";
import codechef from "../images/codechef.jpeg";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import website from "../images/website.png";
import email from "../images/email.png";
import coding from "../images/coding.png";
import algo from "../images/algo.png";

// Box Component
function Box() {
    return (
        <div className="w-[7vh] h-[7vh] bg-stone-950 rounded-lg border border-stone-700 flex items-center justify-center text-2xl">
            {/* Add content here if needed */}
        </div>
    );
}

export default function VerticalProfileComponent() {
    const isYourProfile = true;
    const [userEmail, setUserEmail] = useState("");
    const [favLang, setFavLang] = useState("");
    const [favAlgo, setFavAlgo] = useState("");
    const [emoji, setEmoji] = useState("🐣");
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [codeforcesURL, setCodeforcesURL] = useState("");
    const [leetcodeURL, setLeetcodeURL] = useState("");
    const [codechefURL, setCodechefURL] = useState("");
    const [linkedinURL, setLinkedinURL] = useState("");
    const [githubURL, setGithubURL] = useState("");
    const [websiteURL, setWebsiteURL] = useState("");

    const nav = useNavigate();

    const handleLinkClick = (url) => {
        if (url) {
            window.open(url, '_blank');
        }
    };

    const editClickHandler = () => {
        nav("/edit");
    };

    const emojiClickHandler = () => {
        setIsDialogOpen(true);
    };

    const closeDialogHandler = () => {
        setIsDialogOpen(false);
    };

    return (
        <div className="basis-1/3 ml-16 mr-4">
            <div className="relative w-[50vh] h-[90vh]  bg-stone-900 rounded-lg mb-32">
                {/* Outer Circle */}
                <div className="ml-[6vh] absolute top-[6vh] left-[4vh] w-[30vh] h-[30vh] rounded-full flex items-center justify-center bg-stone-800">
                    {/* Inner Circle */}
                    <div className="absolute right-0 bottom-0 w-[7vh] h-[7vh] rounded-full bg-stone-950 transform -translate-x-[20%] translate-y-[10%] flex items-center justify-center text-3xl cursor-pointer" onClick={emojiClickHandler}>
                        <span className="text-[4vh]">{emoji}</span>
                    </div>
                </div>
                {/* Small Circle Overlapping Rectangle */}
                {isYourProfile && (
                    <div className="absolute top-0 right-0 w-[6vh] h-[6vh] rounded-full bg-primary transform translate-x-[33%] -translate-y-[33%] flex items-center justify-center cursor-pointer hover:bg-primary/90" onClick={editClickHandler}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="3.5vh"
                            height="3.5vh"
                            viewBox="0 0 32 32"
                            style={{ fill: '#FFFFFF' }}
                        >
                            <path d="M 23.90625 3.96875 C 22.859375 3.96875 21.8125 4.375 21 5.1875 L 5.1875 21 L 5.125 21.3125 L 4.03125 26.8125 L 3.71875 28.28125 L 5.1875 27.96875 L 10.6875 26.875 L 11 26.8125 L 26.8125 11 C 28.4375 9.375 28.4375 6.8125 26.8125 5.1875 C 26 4.375 24.953125 3.96875 23.90625 3.96875 Z M 23.90625 5.875 C 24.410156 5.875 24.917969 6.105469 25.40625 6.59375 C 26.378906 7.566406 26.378906 8.621094 25.40625 9.59375 L 24.6875 10.28125 L 21.71875 7.3125 L 22.40625 6.59375 C 22.894531 6.105469 23.402344 5.875 23.90625 5.875 Z M 20.3125 8.71875 L 23.28125 11.6875 L 11.1875 23.78125 C 10.53125 22.5 9.5 21.46875 8.21875 20.8125 Z M 6.9375 22.4375 C 8.136719 22.921875 9.078125 23.863281 9.5625 25.0625 L 6.28125 25.71875 Z"></path>
                        </svg>
                    </div>
                )}

                {/* Top Row of Boxes */}
                <div className="absolute top-[37.5vh] left-1/2 transform -translate-x-1/2 flex justify-center">
                    <div
                        className={`w-[6vh] h-[6vh] mt-[4vh] m-[2vh] rounded-lg flex items-center justify-center cursor-pointer ${codeforcesURL ? 'opacity-100' : 'opacity-40'}`}
                        onClick={() => handleLinkClick(codeforcesURL)}
                    >
                        <img
                            src={codeforces}
                            alt="codeforces"
                            className="w-[4.5vh] h-[4.5vh] object-contain"
                        />
                    </div>
                    <div
                        className={`w-[6vh] h-[6vh] mt-[4vh] m-[2vh] rounded-lg flex items-center justify-center cursor-pointer ${leetcodeURL ? 'opacity-100' : 'opacity-40'}`}
                        onClick={() => handleLinkClick(leetcodeURL)}
                    >
                        <img
                            src={leetcode}
                            alt="leetcode"
                            className="w-[4.5vh] h-[4.5vh] object-contain"
                        />
                    </div>
                    <div
                        className={`w-[6vh] h-[6vh] mt-[4vh] m-[2vh] rounded-lg flex items-center justify-center cursor-pointer ${codechefURL ? 'opacity-100' : 'opacity-40'}`}
                        onClick={() => handleLinkClick(codechefURL)}
                    >
                        <img
                            src={codechef}
                            alt="codechef"
                            className="w-[4.5vh] h-[4.5vh] object-contain rounded-xl"
                        />
                    </div>
                </div>

                {/* Bottom Row of Boxes */}
                <div className="absolute top-[47vh] left-1/2 transform -translate-x-1/2 flex justify-center">
                    <div
                        className={`w-[6vh] h-[6vh] mt-[4vh] m-[2vh] rounded-lg flex items-center justify-center cursor-pointer ${linkedinURL ? 'opacity-100' : 'opacity-40'}`}
                        onClick={() => handleLinkClick(linkedinURL)}
                    >
                        <img
                            src={linkedin}
                            alt="linkedin"
                            className="w-[4.5vh] h-[4.5vh] object-contain"
                        />
                    </div>
                    <div
                        className={`w-[6vh] h-[6vh] mt-[4vh] m-[2vh] rounded-lg flex items-center justify-center cursor-pointer ${githubURL ? 'opacity-100' : 'opacity-40'}`}
                        onClick={() => handleLinkClick(githubURL)}
                    >
                        <img
                            src={github}
                            alt="github"
                            className="w-[4.5vh] h-[4.5vh] object-contain"
                        />
                    </div>
                    <div
                        className={`w-[6vh] h-[6vh] mt-[4vh] m-[2vh] rounded-lg flex items-center justify-center cursor-pointer ${websiteURL ? 'opacity-100' : 'opacity-40'}`}
                        onClick={() => handleLinkClick(websiteURL)}
                    >
                        <img
                            src={website}
                            alt="website"
                            className="w-[4.5vh] h-[4.5vh] object-contain rounded-lg"
                        />
                    </div>
                </div>

                {/* Divider */}
                <div class="border-divider-3 dark:border-dark-divider-3 ml-[5vh] mt-[2vh] border-b absolute top-[58vh] left-0 w-[40vh] border-stone-700"></div>

                {/* Additional Boxes and Text */}
                <div className="absolute top-[60vh] left-[3vh] space-y-[3vh] mt-[3vh]">
                    <div className="flex items-center space-x-[2vh]">
                        <div className="w-[6vh] h-[6vh] bg-stone-950 rounded-lg flex items-center justify-center">
                            <img
                                src={email} // your logo comes here
                                alt="logo"
                                className="w-[3.5vh] h-[3.5vh] object-contain opacity-60 transition ease-in-out delay-150 cursor-pointer"
                            />
                        </div>
                        <span className="text-[2vh] font-semibold text-stone-400">Email: <br /><span className="font-normal text-[2vh] text-secondary">{userEmail}</span></span>
                    </div>
                    <div className="flex items-center space-x-[2vh]">
                        <div className="w-[6vh] h-[6vh] bg-stone-950 rounded-lg flex items-center justify-center">
                            <img
                                src={coding} // your logo comes here
                                alt="logo"
                                className="w-[3.5vh] h-[3.5vh] object-contain opacity-60 transition ease-in-out delay-150 cursor-pointer"
                            />
                        </div>
                        <span className="text-[2vh] font-semibold text-stone-400">Favourite language: <br /><span className="font-normal text-[2vh] text-secondary">{favLang}</span></span>
                    </div>
                    <div className="flex items-center space-x-[2vh]">
                        <div className="w-[6vh] h-[6vh] bg-stone-950 rounded-lg flex items-center justify-center">
                            <img
                                src={algo} // your logo comes here
                                alt="logo"
                                className="w-[4.5vh] h-[4.5vh] object-contain opacity-60 transition ease-in-out delay-150 cursor-pointer"
                            />
                        </div>
                        <span className="text-[2vh] font-semibold text-stone-400">Favourite algorithm: <br /><span className="font-normal text-[2vh] text-secondary">{favAlgo}</span></span>
                    </div>
                </div>

                {/* Dialog */}
            {isDialogOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="relative bg-stone-900 text-slate-50 p-8 rounded-lg shadow-lg w-[600px] h-[430px]">
                        {/* Close Button */}
                        <button
                            className="absolute top-2 right-2 text-slate-400 text-4xl font-bold mr-4 mt-[12px] hover:text-slate-50"
                            onClick={closeDialogHandler}
                        >
                            &times;
                        </button>
                        <h2 className="text-4xl font-bold mb-8">Contest Levels</h2>
                        <ul className="list-disc pl-5 text-2xl">
                            <li className="pb-4">1-5 contests: 🐣 (Newbie)</li>
                            <li className="pb-4">6-10 contests: 🌱 (Growing)</li>
                            <li className="pb-4">11-20 contests: 🔥 (On Fire)</li>
                            <li className="pb-4">21-50 contests: 📈 (Ascending)</li>
                            <li className="pb-4">51-100 contests: 🦍 (Powerhouse)</li>
                            <li>100+ contests: 👑 (Champion)</li>
                        </ul>
                    </div>
                </div>
            )}
            </div>
        </div>
    );
}

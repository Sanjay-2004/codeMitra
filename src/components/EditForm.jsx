import React, { useState } from "react";
import { EyeIcon } from '@heroicons/react/24/outline';
import DragAndDropBox from "./DragAndDropBox";
import { useNavigate } from "react-router-dom";

export function EditForm() {
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const nav = useNavigate();
    const togglePasswordVisibility1 = () => {
        setShowPassword1(!showPassword1);
    };
    const togglePasswordVisibility2 = () => {
        setShowPassword2(!showPassword2);
    };

    const personalDetailHandler = async (event) =>{
        event.preventDefault();
    };

    const socialLinksHandler = async (event) => {
        event.preventDefault();
    };

    const passwordChangeHandler = async (event) => {
        event.preventDefault();
    };

    const backToProfile = () => {
        nav("/");
    };

    return (
        <div className="flex items-center justify-around bg-stone-950 h-fit">
            <div className="flex flex-col p-8">
                <button className="mt-16 mb-8 w-[200px] bg-stone-900 text-slate-200 rounded-lg text-xl h-[60px] font-semibold border border-stone-800 flex items-center justify-center px-4 space-x-2 hover:bg-stone-800" onClick={backToProfile}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-slate-200">
                        <path d="M12 19L5 12l7-7"></path>
                        <path d="M19 12H5"></path>
                    </svg>
                    <div>Back to Profile</div>
                </button>

                <div className="flex flex-col items-center">
                    <div className="text-slate-50 bg-stone-900 rounded-t-lg">
                        <div className="flex items-start mt-8 p-8">
                            <div className="text-3xl text-slate-50 ml-8 mr-[400px] font-bold">Personal Details
                                <div className="text-lg text-stone-400 font-semibold">
                                    Use a permanent address where you can receive mail.
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-around p-16">
                                    <form className="space-y-6 w-[350px]" onSubmit={personalDetailHandler}>
                                        <DragAndDropBox />
                                
                                        <div className="flex flex-col">
                                            <label htmlFor="name" className="text-slate-200 font-semibold">Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="mt-2 p-2 w-[350px] bg-stone-800 text-slate-200 rounded-lg border border-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-600"
                                                placeholder="Your name"
                                            />
                                        </div>

                                        <div className="flex flex-col">
                                            <label htmlFor="email" className="text-slate-200 font-semibold">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="mt-2 p-2 w-[350px] bg-stone-800 text-slate-200 rounded-lg border border-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-600"
                                                placeholder="Your email"
                                            />
                                        </div>

                                        <div className="flex flex-col">
                                            <label htmlFor="favorite-languages" className="text-slate-200 font-semibold">Favorite Languages</label>
                                            <select
                                                id="favorite-languages"
                                                name="favorite-languages"
                                                className="mt-2 p-2 w-[350px] bg-stone-800 text-slate-200 rounded-lg border border-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-600"
                                            >
                                                <option value="javascript">JavaScript</option>
                                                <option value="python">Python</option>
                                                <option value="java">Java</option>
                                                <option value="c++">C++</option>
                                                <option value="c#">C#</option>
                                                <option value="ruby">Ruby</option>
                                                <option value="go">Go</option>
                                            </select>
                                        </div>

                                        <div className="flex flex-col">
                                            <label htmlFor="favorite-algorithm" className="text-slate-200 font-semibold">Favorite Algorithm</label>
                                            <input
                                                type="text"
                                                id="favorite-algorithm"
                                                name="favorite-algorithm"
                                                className="mt-2 p-2 w-[350px] bg-stone-800 text-slate-200 rounded-lg border border-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-600"
                                                placeholder="e.g., Dijkstra, QuickSort"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                                        >
                                            Save Details
                                        </button>
                                    </form>
                                
                            </div>
                        </div>
                    </div>
                    <div class="border-divider-3 dark:border-dark-divider-3 mt-[-2px] w-[1200px] border-b"></div>
                    <div className="text-slate-50 bg-stone-900">
                        <div className="flex justify-between text-slate-50 bg-stone-900 rounded-lg mt-8 p-8">
                            <div className="text-3xl text-slate-50 ml-8 mr-[400px] font-bold">Social Links
                                <div className="text-lg text-stone-400 font-semibold">
                                    Your Social Links.
                                </div>
                            </div>
                            <div className="mt-8">
                                <form className="space-y-6 w-[718px] ml-8 mb-16" onSubmit={socialLinksHandler}>
                                    <div className="flex justify-between">
                                        <div className="flex flex-col">
                                            <label htmlFor="Codeforces" className="text-slate-200 font-semibold">Codeforces</label>
                                            <input
                                                type="url"
                                                id="Codeforces"
                                                name="Codeforces"
                                                className="mt-2 w-[200px] p-2 bg-stone-800 text-slate-200 rounded-lg border border-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-600"
                                                placeholder="Your Codeforces Url"
                                            />
                                        </div>

                                        <div className="flex flex-col">
                                            <label htmlFor="LeetCode" className="text-slate-200 font-semibold">LeetCode</label>
                                            <input
                                                type="url"
                                                id="LeetCode"
                                                name="LeetCode"
                                                className="mt-2 p-2 w-[200px] bg-stone-800 text-slate-200 rounded-lg border border-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-600"
                                                placeholder="Your Leetcode Url"
                                            />
                                        </div>

                                        <div className="flex flex-col">
                                            <label htmlFor="CodeChef" className="text-slate-200 font-semibold">CodeChef</label>
                                            <input
                                                type="url"
                                                id="CodeChef"
                                                name="CodeChef"
                                                className="mt-2 p-2 w-[200px] bg-stone-800 text-slate-200 rounded-lg border border-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-600"
                                                placeholder="Your CodeChef Url"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="flex flex-col">
                                            <label htmlFor="github" className="text-slate-200 font-semibold">Github</label>
                                            <input
                                                type="url"
                                                id="github"
                                                name="github"
                                                className="mt-2 p-2 w-[200px] bg-stone-800 text-slate-200 rounded-lg border border-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-600"
                                                placeholder="Your Github Url"
                                            />
                                        </div>

                                        <div className="flex flex-col">
                                            <label htmlFor="linkedin" className="text-slate-200 font-semibold">LinkedIn</label>
                                            <input
                                                type="url"
                                                id="linkedin"
                                                name="linkedin"
                                                className="mt-2 p-2 w-[200px] bg-stone-800 text-slate-200 rounded-lg border border-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-600"
                                                placeholder="Your LinkedIn Url"
                                            />
                                        </div>

                                        <div className="flex flex-col">
                                            <label htmlFor="Portfolio" className="text-slate-200 font-semibold">Portfolio</label>
                                            <input
                                                type="url"
                                                id="Portfolio"
                                                name="Portfolio"
                                                className="mt-2 p-2 w-[200px] bg-stone-800 text-slate-200 rounded-lg border border-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-600"
                                                placeholder="Your Portfolio Url"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                                    >
                                        Save
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="border-divider-3 dark:border-dark-divider-3 mt-[-2px] w-[1200px] border-b"></div>
                    <div className="text-slate-50 bg-stone-900 w-fit rounded-b-lg">
                        <div className="flex justify-between text-slate-50 bg-stone-900 mt-8 p-8 rounded-b-lg mb-8">
                            <div className="text-3xl text-slate-50 ml-8 mr-[164px] font-bold">Set Password
                                <div className="text-lg text-stone-400 font-semibold">
                                    Set your password associated with your account.
                                </div>
                            </div>
                            <div className="mt-8 mb-8">
                                <form className="space-y-6 w-[722px] ml-8" onSubmit={passwordChangeHandler}>
                                    <div className="flex space-x-4">
                                        <div className="flex flex-col">
                                            <label htmlFor="new-password" className="text-slate-200 font-semibold">New Password</label>
                                            <div className="relative">
                                                <input
                                                    type={showPassword1 ? "text" : "password"}
                                                    id="new-password"
                                                    name="new-password"
                                                    className="mt-2 w-[350px] p-2 bg-stone-800 text-slate-200 rounded-lg border border-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-600"
                                                    placeholder="New Password"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={togglePasswordVisibility1}
                                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400"
                                                >
                                                    {showPassword1 ? (
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mt-2 mr-[-4px] absolute inset-1 left-auto right-[22px] top-[10px] w-[20px] h-[20px] stroke-gray-300 dark:stroke-zinc-600">
                                                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                                            <circle cx="12" cy="12" r="3"></circle>
                                                        </svg>
                                                    ) : (
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mt-2 mr-[-4px] absolute inset-1 left-auto right-[22px] top-[10px] w-[20px] h-[20px] stroke-gray-300 dark:stroke-zinc-600">
                                                            <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                                                            <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                                                            <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                                                            <line x1="2" x2="22" y1="2" y2="22"></line>
                                                        </svg>
                                                    )}
                                                </button>
                                            </div>
                                        </div>

                                        <div className="flex flex-col">
                                            <label htmlFor="confirm-password" className="text-slate-200 font-semibold">Confirm Password</label>
                                            <div className="relative">
                                                <input
                                                    type={showPassword2 ? "text" : "password"}
                                                    id="confirm-password"
                                                    name="confirm-password"
                                                    className="mt-2 w-[350px] p-2 bg-stone-800 text-slate-200 rounded-lg border border-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-600"
                                                    placeholder="Confirm Password"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={togglePasswordVisibility2}
                                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400"
                                                >
                                                    {showPassword2 ? (
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mt-2 mr-[-4px] absolute inset-1 left-auto right-[22px] top-[10px] w-[20px] h-[20px] stroke-gray-300 dark:stroke-zinc-600">
                                                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                                            <circle cx="12" cy="12" r="3"></circle>
                                                        </svg>
                                                    ) : (
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mt-2 mr-[-4px] absolute inset-1 left-auto right-[22px] top-[10px] w-[20px] h-[20px] stroke-gray-300 dark:stroke-zinc-600">
                                                            <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                                                            <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                                                            <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                                                            <line x1="2" x2="22" y1="2" y2="22"></line>
                                                        </svg>
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                                    >
                                        Save
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

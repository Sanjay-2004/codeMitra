import React from 'react';

const Footer = () => {

    return (
        <footer className='bottom-0 flex justify-between bg-stone-950 text-slate-50 items-center border-stone-800 border-t h-16'>
            <div className="ml-12 font-semibold text-2xl cursor-pointer">
                Created By
            </div>
            <div className="flex justify-between">
                <a href="https://github.com/Sanjay-2004" target='_blank' className="m-4 text-slate-300 cursor-pointer hover:underline text-xl" >
                    Sanjay Agamamidi
                </a>
                <a href="https://github.com/RavindranathReddy21" target='_blank' className="m-4 text-slate-300 cursor-pointer hover:underline text-xl" >
                    K Ravindranath Reddy
                </a>

            </div>
        </footer>
    );
}

export default Footer;

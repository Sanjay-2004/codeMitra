import React from 'react'

const ProfileDetails = ({ contestLevel = "newbie", studentName, year, branch, attendedContests, currentRanking }) => {
    return (
        <div className='bg-stone-900 flex flex-col justify-around px-5 py-2 rounded-lg h-[35vh] text-lg'>
            <div className="flex flex-col">
                <p className='text-stone-600 font-medium text-lg'>{contestLevel} </p>
                <p className='text-stone-200 font-semibold text-4xl'>
                    {studentName}</p>
            </div>
            <p className='text-stone-200 font-semibold text-2xl'>
                <span className='text-stone-600 font-medium text-lg'>Current Rank: </span># {currentRanking}</p>
            <div className="flex justify-start gap-3 items-center">
                <p className='text-stone-200 font-semibold text-2xl'>
                    <span className='text-stone-600 font-medium text-lg'>Year: </span> {year}</p>
                <p className='text-stone-200 font-semibold text-2xl'>
                    <span className='text-stone-600 font-medium text-lg'>Branch: </span>{branch}</p>
            </div>
            <p className='text-stone-200 font-semibold text-2xl'>
                <span className='text-stone-600 font-medium text-lg'>Contests Attended: </span>{attendedContests}</p>
        </div>
    )
}

export default ProfileDetails

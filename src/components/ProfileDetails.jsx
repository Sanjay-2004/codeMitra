import React from 'react'

const ProfileDetails = ({ studentName, year, branch, attendedContests, currentRanking, preferredCodingLanguage, favouriteAlgo }) => {
    return (
        <div className=' bg-stone-900 p-10 text-lg'>
            <h1 className=' text-5xl'>{studentName}</h1>
            <h1 className=' text-5xl'>{year}</h1>
            <h1 className=' text-5xl'>{branch}</h1>
            <h1 className=' text-5xl'>{attendedContests}</h1>
            <h1 className=' text-5xl'>{currentRanking}</h1>
            <h1 className=' text-5xl'>{preferredCodingLanguage}</h1>
            <h1 className=' text-5xl'>{favouriteAlgo}</h1>
        </div>
    )
}

export default ProfileDetails

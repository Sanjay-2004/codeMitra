import ProfileDetails from '@/components/ProfileDetails'
import VerticalProfileComponent from '@/components/VerticalProfileComponent'
import React from 'react'

const Profile = () => {
    return (
        <div className='flex bg-stone-950 h-full gap-2 items-center justify-around pt-12'>
            <VerticalProfileComponent />
            <div className="flex flex-col">
                <ProfileDetails
                    studentName="Sanjay Agamamidi"
                    year="4th"
                    branch="CSE"
                    attendedContests="20"
                    currentRanking="1"
                    preferredCodingLanguage="C++"
                    favouriteAlgo="Memoisation" />
            </div>
        </div>
    )
}

export default Profile

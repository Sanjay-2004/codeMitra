import ProfileDetails from '@/components/ProfileDetails'
import VerticalProfileComponent from '@/components/VerticalProfileComponent'
import React from 'react'

const Profile = () => {
    return (
        <div className='flex bg-stone-950 h-[100vh] justify-around pt-12'>
            <VerticalProfileComponent />
            <div className="basis-[85%] mr-8 flex flex-col">
                <ProfileDetails
                    studentName="Sanjay Agamamidi"
                    year="4th"
                    branch="CSE"
                    attendedContests="20"
                    currentRanking="1" />
                {/* <UserGraph /> */}
            </div>

        </div>
    )
}

export default Profile

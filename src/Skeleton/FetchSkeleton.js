import React from 'react'
import Skeleton from './Skeleton'
import SkeletonAnimation from './SkeletonAnimation'

function FetchSkeleton() {
    return (
        <div>
            <div className='Skeletoncontainer'>
                <div className="Skeletonfield">

                    {[1, 2, 3,4,5,6,7,8].map(() => {
                        return (
                            <div className="itemContainer">
                                <div className='SkeletonCard'>
                                    <div className='SkeletonimgContainer'>
                                        <Skeleton type='img' />
                                    </div>
                                    <div>
                                        <div className='SkeletoncardText'>
                                            <Skeleton type='price' />
                                            <Skeleton type='category' />
                                            <Skeleton type='title' />
                                            <Skeleton type='carddes' />
                                        </div>
                                        <div className='SkeletonbtnContainer'>
                                            <Skeleton type='button' />
                                            <Skeleton type='button' />
                                        </div>
                                    </div>

                                    <SkeletonAnimation />
                                </div>

                            </div>)
                    }
                    )}

                </div>
            </div>

        </div>
    )
}

export default FetchSkeleton

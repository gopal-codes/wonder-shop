import React from 'react';
import './Skeleton.css'


function Skeleton({type}) {

    const  skeletonclasses = `skeleton ${type}`;

    return (
        <div className={skeletonclasses}>  </div>
    )
}

export default Skeleton

import React from 'react'
import ThreeDView from '../components/ThreeDView';
import React360Viewer from './../components/ThreedViewCreate'

export default function Test3DView() {
    return (
        <div>
            <div className="container">
                {/* <ThreeDView
                    dataFolder="https://scaleflex.ultrafast.io/https://scaleflex.airstore.io/demo/chair-360-36/"
                    dataFileName="chair_{index}.jpg?v1"
                    dataAmount="36"
                /> */}
                <React360Viewer
                    amount={2}
                    imagePath="/Assets/img"
                    fileName="image-{index}.jpg"
                    spinReverse
                    autoplay
                    buttonClass="dark"
                />
                <img src="/Assets/img/image-1.jpg" alt='' />
                <img src="/Assets/img/image-2.jpg" alt='' />
                <img src="/Assets/img/image-3.jpg" alt='' />

            </div>
        </div>
    )
}

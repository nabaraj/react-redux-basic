import React, { useEffect } from 'react'
import useAddLibrary from './AddLibrary';
export default function ThreeDView({ dataFolder, dataFileName, dataAmount, dataMagnifier, dataFullScreen }) {
    const [scriptLoaded] = useAddLibrary('https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/2/js-cloudimage-360-view.min.js', 'CI360');

    useEffect(() => {
        if (scriptLoaded) {
            window.CI360.init();
        }
        return () => {
            window.CI360.destroy();
        }
    }, [scriptLoaded])
    return (
        <div>
            loaded {scriptLoaded}
            {scriptLoaded && <span>{typeof CI360}</span>}

            {(dataFolder && dataFileName && dataAmount) && <div
                className="cloudimage-360"
                data-folder={dataFolder}
                data-filename={dataFileName}
                data-amount={dataAmount}
                data-magnifier="3"
                data-full-screen
            >
                <div className="v360-header text-light bg-dark">
                    <span className="v360-header-title">36 Images - Autoplay (1 loop) - Reverse Spin</span>
                    <span className="v360-header-description"></span>
                </div>

            </div>}
            <div id="v360-menu-btns" className="dark">
                <div className="v360-navigate-btns">
                    <div className="v360-menu-btns">
                        <i className="fa fa-play"></i>
                        play
                    </div>
                    <div className="v360-menu-btns">
                        <i className="fa fa-search-plus"></i>
                        pause
                    </div>
                    <div className="v360-menu-btns">
                        <i className="fa fa-search-minus"></i>
                        zoom out
                    </div>
                    <div className="v360-menu-btns">
                        <i className="fa fa-hand-paper"></i>
                    </div>
                    <div className="v360-menu-btns">
                        <i className="fa fa-chevron-left"></i>
                    </div>
                    <div className="v360-menu-btns">
                        <i className="fa fa-chevron-right"></i>
                    </div>
                    <div className="v360-menu-btns">
                        <i className="fa fa-sync"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

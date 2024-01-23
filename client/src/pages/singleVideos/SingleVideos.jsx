import React from 'react';
import { useParams } from 'react-router-dom';
import Description from './Description';
import Player from './Player';
import RelatedVideos from './RelatedVideos';

const SingleVideos = () => {
    const { videoId } = useParams();
    return (
        <section className='pt-6 pb-20'>
            <div className='max-w-7xl mx-auto px-2 pb-20 min-h-[400px]'>
                {/* video details  */}
                <div className='grid grid-cols-3 gap-2 lg:gap-16'>
                    <div className='col-span-full w-full h-full space-y-8 lg:col-span-2'>
                        <Player />
                        <Description />
                    </div>

                     {/* releted videos  */}
                     <RelatedVideos/>
                </div>

               
            </div>
        </section>
    )
}

export default SingleVideos
import React, { PropTypes } from 'react';

// First, we extract videos, onHandleSelectVideo, and selectVideo
// from props using destructuring assignment and then render
const VideosPage = ({ videos, onHandleSelectVideo, selectedVideo }) => {
    return (
        <div className="col-md-6">
            <h2>Videos</h2>
            <div className="selected-video">
                <div id={selectedVideo.id}>
                    <h6 className="title">{selectedVideo.description}</h6>
                    <video controls src={selectedVideo.mediaUrl} alt={selectedVideo.description} />
                </div>
            </div>
            <div className="video-thumbnail">
                {videos.map((video, i) => (
                    <div key={i} onClick={onHandleSelectVideo.bind(this, video)}>
                        <video controls src={video.mediaUrl} alt={video.description} />
                    </div>
                ))}
            </div>
        </div>
    );
};

// Define PropTypes 
VideosPage.propTypes = {
    videos: PropTypes.array.isRequired,
    selectedVideo: PropTypes.object,
    onHandleSelectVideo: PropTypes.func.isRequired
};

export default VideosPage;

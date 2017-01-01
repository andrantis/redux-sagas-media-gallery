import React, {Component} from 'react';
import { flickrImages, shutterStockVideos } from '../Api/api';

// MediaGalleryPage Component
class MediaGalleryPage extends Component {

    // We want to get images and videos from the API right after our component renders.
    componentDidMount() {
        flickrImages('rain').then(images => console.log(images, 'images'));
        shutterStockVideos('rain').then(videos => console.log(videos, 'videos'));
    }
    
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default MediaGalleryPage;
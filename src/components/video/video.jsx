import video from './../../video/grs.mp4';
import'./Video.css';
import { useTranslation } from 'react-i18next';
const Video = () => {
    const { t } = useTranslation();
    return ( <div className="container">
        <div className="video">
            <video controls className="video_item" src={video}></video>
        </div>
        <div className='rum'>{t('video1')}</div>
    </div> );
}
 
export default Video;
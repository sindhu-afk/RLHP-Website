import React, { useState, useRef, useEffect } from 'react';
import { X, Download, Check, FileText, Image as ImageIcon, Video, Play, Pause } from 'lucide-react';
import { downloadFileInBrowser, downloadPDFDocument } from '../utils/fileDownloader';

export default function ImageModal({ item, onClose }) {
  const [downloadingDoc, setDownloadingDoc] = useState(false);
  const [downloadedDoc, setDownloadedDoc] = useState(false);
  const [downloadingMedia, setDownloadingMedia] = useState(false);
  const [downloadedMedia, setDownloadedMedia] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [currentVideoSrcIndex, setCurrentVideoSrcIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    setIsPlaying(false);
    setVideoError(false);
    setCurrentVideoSrcIndex(0);
  }, [item]);

  if (!item) return null;

  const isVideo = item.videoUrl || item.type?.toLowerCase().includes('video') || item.format?.toLowerCase().includes('video') || item.isVideo;

  // Fallback video sources for maximum reliability across browsers
  const videoSources = [
    item.videoUrl,
    item.downloadUrl,
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
  ].filter(Boolean);

  const targetVideoUrl = isVideo ? (videoSources[currentVideoSrcIndex] || videoSources[0]) : null;
  const targetFileUrl = isVideo ? targetVideoUrl : (item.image || item.remoteImage || item.downloadUrl || item.fileUrl);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.log("Autoplay restriction encountered, attempting playback with mute:", err);
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setVideoError(true));
        }
      });
    }
  };

  const handleVideoError = () => {
    console.warn("Video failed to load from:", targetVideoUrl);
    if (currentVideoSrcIndex + 1 < videoSources.length) {
      setCurrentVideoSrcIndex(prev => prev + 1);
    } else {
      setVideoError(true);
    }
  };

  const handleDownloadDoc = async () => {
    setDownloadingDoc(true);
    await downloadPDFDocument(item);
    setDownloadingDoc(false);
    setDownloadedDoc(true);
    setTimeout(() => setDownloadedDoc(false), 3000);
  };

  const handleDownloadMedia = async () => {
    if (!targetFileUrl) return;
    setDownloadingMedia(true);
    await downloadFileInBrowser(targetFileUrl, item.title);
    setDownloadingMedia(false);
    setDownloadedMedia(true);
    setTimeout(() => setDownloadedMedia(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden border border-gray-100 flex flex-col font-sans">
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/70 hover:bg-black/90 text-white transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Video Player, YouTube Embed or Image View */}
        {item.youtubeId ? (
          <div className="bg-black aspect-video w-full max-h-[60vh] flex items-center justify-center">
            <iframe 
              src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&rel=0`} 
              title={item.title}
              className="w-full h-full border-0 min-h-[360px]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : isVideo ? (
          <div className="bg-black flex items-center justify-center max-h-[60vh] overflow-hidden relative group">
            {videoError ? (
              <div className="p-12 text-center text-white space-y-3">
                <Video size={48} className="mx-auto text-gray-500" />
                <p className="text-sm font-semibold">Video stream loading failed on current network.</p>
                <button 
                  onClick={handleDownloadMedia}
                  className="px-4 py-2 bg-rlhp-green hover:bg-rlhp-darkgreen text-white font-bold text-xs rounded-xl"
                >
                  Download MP4 Video File Directly
                </button>
              </div>
            ) : (
              <>
                <video 
                  ref={videoRef}
                  src={targetVideoUrl}
                  controls 
                  playsInline
                  preload="auto"
                  poster={item.image || item.poster || '/images/gallery/ashakirana_activities.jpg'} 
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onError={handleVideoError}
                  className="w-full max-h-[60vh] object-contain cursor-pointer"
                />

                {/* Big Center Play Overlay Button */}
                {!isPlaying && (
                  <button 
                    onClick={togglePlay}
                    className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-rlhp-green/90 hover:bg-rlhp-green text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer z-10 border-4 border-white/30"
                    title="Click to Play Video"
                  >
                    <Play size={36} className="ml-1.5 fill-white" />
                  </button>
                )}
              </>
            )}
          </div>
        ) : item.image ? (
          <div className="bg-black flex items-center justify-center max-h-[60vh] overflow-hidden">
            <img src={item.image} alt={item.title} className="max-h-[60vh] w-auto object-contain" />
          </div>
        ) : null}

        <div className="p-6 bg-white space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-rlhp-orange uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full flex items-center space-x-1.5">
              {isVideo ? <Video size={14} /> : null}
              <span>{item.category || item.type || 'RLHP Resource'}</span>
            </span>
            {(item.year || item.date) && <span className="text-xs text-gray-500 font-bold">{item.year || item.date}</span>}
          </div>

          <h3 className="text-xl font-bold text-gray-900 leading-snug">{item.title}</h3>
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 space-y-3 max-h-[45vh] overflow-y-auto">
            {item.excerpt && item.content && !item.content.startsWith(item.excerpt) && (
              <p className="text-xs font-semibold text-gray-800 leading-relaxed border-b border-gray-200 pb-2">
                {item.excerpt}
              </p>
            )}
            {(item.content || item.fullStory || item.description || item.summary || 'Official media resource from Rural Literacy & Health Programme (RLHP), Mysore.')
              .split('\n\n')
              .map((para, idx) => (
                <p key={idx} className="text-xs text-gray-700 leading-relaxed">
                  {para}
                </p>
              ))}
          </div>

          <div className="pt-2 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-gray-500 font-medium self-start sm:self-center">
              {isVideo ? `Format: ${item.format || 'MP4 Video'} (${item.size || '45 MB'})` : `Location: ${item.location || 'Mysuru, Karnataka'}`}
            </span>
            
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-end">
              {/* Direct Play/Pause Button for Video */}
              {isVideo && !videoError && (
                <button 
                  onClick={togglePlay}
                  className="px-4 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold flex items-center space-x-1.5 transition-all cursor-pointer text-xs"
                >
                  {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                  <span>{isPlaying ? 'Pause Video' : 'Play Video'}</span>
                </button>
              )}

              {/* Video / Image File Direct Download Button */}
              {targetFileUrl && (
                <button 
                  onClick={handleDownloadMedia}
                  disabled={downloadingMedia}
                  className="px-4 py-2.5 rounded-xl border border-gray-300 hover:bg-gray-100 text-gray-700 font-bold flex items-center space-x-1.5 transition-all cursor-pointer text-xs"
                  title={isVideo ? "Download MP4 video file to your computer" : "Download raw image"}
                >
                  {downloadedMedia ? (
                    <Check size={16} className="text-rlhp-green" />
                  ) : isVideo ? (
                    <Download size={16} className="text-rlhp-green" />
                  ) : (
                    <ImageIcon size={16} />
                  )}
                  <span>
                    {downloadedMedia 
                      ? (isVideo ? 'Video Saved' : 'Image Saved') 
                      : (isVideo ? 'Download Video (MP4)' : 'Image Only')}
                  </span>
                </button>
              )}

              {/* PDF Document Download Button */}
              <button 
                onClick={handleDownloadDoc}
                disabled={downloadingDoc}
                className={`font-bold px-5 py-2.5 rounded-xl flex items-center space-x-2 shadow-sm transition-all cursor-pointer text-xs ${
                  downloadedDoc 
                    ? 'bg-emerald-600 text-white' 
                    : downloadingDoc 
                    ? 'bg-rlhp-darkgreen text-white opacity-80' 
                    : 'bg-rlhp-green hover:bg-rlhp-darkgreen text-white shadow-rlhp-green/20'
                }`}
              >
                {downloadedDoc ? <Check size={16} /> : <FileText size={16} />}
                <span>
                  {downloadedDoc ? 'PDF Downloaded!' : downloadingDoc ? 'Generating PDF...' : 'Download Document'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




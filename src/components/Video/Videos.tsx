// import React, { useState } from 'react';
// import './VideoPlayer.scss';

// const VideoPlayer: React.FC = () => {
//   const [mainVideoSrc, setMainVideoSrc] = useState<string | null>(null);
//   const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
//   const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

//   const courses = [
//     {
//       name: 'Java',
//       hours: '10 hours',
//       videos: ['Video 1', 'Video 2', 'Video 3'],
//     },
//     {
//       name: 'Course 2',
//       hours: '8 hours',
//       videos: ['Video 4', 'Video 5'],
//     },
//     // Add more courses as needed
//   ];

//   const handleCourseClick = (courseName: string) => {
//     setSelectedCourse(courseName);
//     setSelectedTopic(null); // Reset selected topic when a course is clicked
//     setMainVideoSrc(null); // Reset main video when a course is clicked
//   };

//   const handleVideoItemClick = (videoSrc: string) => {
//     setMainVideoSrc(videoSrc);
//     setSelectedTopic(null); // Reset selected topic when a video is clicked
//   };

//   const handleTopicItemClick = (topic: string) => {
//     setSelectedTopic(topic);
//   };

//   return (
//     <div className={`video-player-udemy ${selectedCourse ? 'course-selected' : ''}`}>
//       <div className="course-list">
//         {courses.map((course, index) => (
//           <div
//             key={index}
//             className={`course-card ${selectedCourse === course.name ? 'active' : ''}`}
//             onClick={() => handleCourseClick(course.name)}
//           >
//             <h3>{course.name}</h3>
//             <p>{course.hours}</p>
//           </div>
//         ))}
//       </div>
//       <div className="content">
//         <div className="main-video">
//           {selectedCourse && mainVideoSrc && (
//             <video controls>
//               <source src={`${mainVideoSrc}.mp4`} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           )}
//         </div>
//         <div className="video-list">
//           <ul>
//             {selectedCourse &&
//               courses.find((course) => course.name === selectedCourse)?.videos.map((videoTopic, index) => (
//                 <li
//                   key={index}
//                   className={`video-item ${mainVideoSrc === videoTopic ? 'active' : ''}`}
//                   onClick={() => handleVideoItemClick(videoTopic)}
//                 >
//                   {videoTopic}
//                 </li>
//               ))}
//           </ul>
//         </div>
//         <div className="topic-list">
//           <ul>
//             {selectedCourse && selectedTopic &&
//               courses.find((course) => course.name === selectedCourse)?.videos.map((videoTopic, index) => (
//                 <li
//                   key={index}
//                   className={`topic-item ${selectedTopic === videoTopic ? 'active' : ''}`}
//                   onClick={() => handleTopicItemClick(videoTopic)}
//                 >
//                   {videoTopic}
//                 </li>
//               ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;


import React from 'react';
import ReactPlayer from 'react-player';
import './VideoPlayer.scss';

interface VideoPlayerProps {
  videoUrl: string; 
  onClose: () => void; 
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, onClose }) => {
  return (
    <div className="video-popup modal fade" tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="embed-responsive embed-responsive-16by9">
              <ReactPlayer url={videoUrl} controls className="embed-responsive-item" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;

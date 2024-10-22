import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Header/Navbar';
import ReactPlayer from 'react-player';

import './CourseDetail.scss';

interface CourseDetailProps {
  id: string;
}

interface Course {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  batchTime: string;
  description: string;
  courseOutline: Array<{
    id: string;
    topicName: string;
    details: string;
    videoUrl: string | null;
  }>;
}

const CourseDetail: React.FC<CourseDetailProps> = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);

  useEffect(() => {
    // Fetch course data for the specified ID
    axios
      .get<Course>(`http://localhost:8090/trainings/${id}`)
      .then((response) => {
        console.log('Course Data:', response.data);
        setCourse(response.data);
      })
      .catch((error) => {
        console.error('Error fetching course data:', error.response || error.message);
      });
  }, [id]);

  const handleVideoSelection = (videoUrl: string | null) => {
    setSelectedVideoUrl(videoUrl);
  };


  const handlePreviousVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
      setSelectedVideoUrl(course?.courseOutline[currentVideoIndex - 1].videoUrl || null);
    }
  };

  const handleNextVideo = () => {
    if (course && currentVideoIndex < course.courseOutline.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
      setSelectedVideoUrl(course.courseOutline[currentVideoIndex + 1].videoUrl || null);
    }
  };

  const handleCloseModal = () => {
    setSelectedVideoUrl(null); 
  };

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="course-detail-container">
        <div className="course-content">
          <h1>{course.name}</h1>

          <h2>Course Outline</h2>
          <ul>
            {course.courseOutline.map((topic) => (
              <li
                key={topic.id}
                onClick={() => handleVideoSelection(topic.videoUrl)}
              >
                <h3 className="card-title">{topic.topicName}</h3>
                <p className="card-subtitle">{topic.details}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="video-player">
          {selectedVideoUrl && (
            <div className="video-container">
              <ReactPlayer url={selectedVideoUrl} controls={true} />
              <div className='video-control-btns'>
                <button
                  className="btn-secondary"
                  onClick={handlePreviousVideo}
                  disabled={currentVideoIndex === 0}
                >
                  Previous
                </button>
                <button
                  className="btn-secondary"
                  onClick={handleNextVideo}
                  disabled={currentVideoIndex === course.courseOutline.length - 1}
                >
                  Next
                </button>

              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CourseDetail;

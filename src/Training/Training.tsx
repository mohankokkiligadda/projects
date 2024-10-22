

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Training.scss';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '../Common/Header/Header';
import { Footer } from '../Common/Footer/Footer';


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

const Training: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [cart, setCart] = useState<Course[]>([]);
  const [selectedTraining, setSelectedTraining] = useState<Course | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = (course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleCheckoutClick = (course: Course) => {
    
    navigate(`/course/${course.id}`);
  };

  const handleOpenDialog = (training: Course) => {
    setSelectedTraining(training);
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
    setSelectedTraining(null);
    setIsOpen(false);
  };

  // const handleAddToCart = (event: React.MouseEvent, training: Course) => {
  //   event.stopPropagation();

  //   const itemExists = cart.some((item) => item.id === training.id);

  //   if (!itemExists) {
  //     console.log('Added to cart:', training.name);

  //     const updatedCart = [...cart, training];
  //     setCart(updatedCart);
  //     localStorage.setItem('cart', JSON.stringify(updatedCart));
  //     console.log('cart = ', updatedCart);

  //     console.log("asdfghjkl"+localStorage.getItem('cart'));
  //     console.log("asdfghjkl"+localStorage.getItem('token'));
  //   }
  // };

  const handleAddToCart = (event: React.MouseEvent, training: Course) => {
    event.stopPropagation();
  
    const itemExists = cart.some((item) => item.id === training.id);
  
    if (!itemExists) {
      console.log('Added to cart:', training.name);
  
      // Log the 'training' data to confirm it contains the expected values
      console.log('Training:', training);
  
      const updatedCart = [...cart, training];
      setCart(updatedCart);
  
      // Log the 'updatedCart' to verify it's updated correctly
      console.log('Updated Cart:', updatedCart);
  
      try {
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        console.log('Cart stored in localStorage:', localStorage.getItem('cart'));
      } catch (error) {
        console.error('Error storing cart in localStorage:', error);
      }
    }
  };
  useEffect(() => {
    // Check if cart data exists in localStorage
    const storedCart = localStorage.getItem('cart');
  
    if (storedCart) {
      // Parse the stored data and update the cart state
      const parsedCart = JSON.parse(storedCart);
      setCart(parsedCart);
    }
  }, []);
    

  const handleBuy = (event: React.MouseEvent, training: Course) => {
    event.stopPropagation();

    console.log('Buy:', training.name);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    const isClickedOutside = cardRefs.current.every(
      (ref) => !ref.current?.contains(event.target as Node)
    );
    if (isClickedOutside) {
      handleCloseDialog();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    axios
      .get<{ futureTrainings: Course[] }>('http://localhost:8090/trainings')
      .then((response) => {
        console.log('API Response:', response.data);
        setCourses(response.data.futureTrainings);
      })
      .catch((error) => {
        console.error('Error fetching course data:', error.response || error.message);
      });
  }, []);

  return (
    <>
    <Header/>
    <div className="training-card-container">
      {courses.map((course) => (
        <div key={course.id} className="training-card-ed">
          <div
            className="training-card-button checkout"
            onClick={() => handleCheckoutClick(course)}
            >
            <div className="training-card-divider" onClick={() => handleModalOpen(course)}>
              <h5 className="training-card-title">{course.name}</h5>
              <p className="training-card-text">{course.description}</p>
            </div>
            <div className="training-card-body">
              <p className="training-card-text">
                Starts on<span className="start-date">{course.startDate}</span>and ends on{' '}
                <span className="end-date">{course.endDate}</span>
              </p>
              <p className="training-card-text">Batch time: {course.batchTime}</p>
            </div>
          </div>
          <div className="training-card-body">
            {cart.some((item) => item.id === course.id) ? (
              <button className="training-card-button go-to-cart" onClick={() => handleCheckoutClick(course)}>
                Go to Cart
              </button>
            ) : (
              <button className="training-card-button add-to-cart" onClick={(event) => handleAddToCart(event, course)}>
                Add to Cart
              </button>
            )}
            <button className="training-card-button buy" onClick={(event) => handleBuy(event, course)}>
              Buy
            </button>
          </div>
        </div>
      ))}
    </div>
    <Footer/>
      </>
  );
};

export default Training;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './AcademicProject.scss';
// import { useParams, useNavigate } from 'react-router-dom';

// interface Course {
//   id: string;
//   name: string;
//   startDate: string;
//   endDate: string;
//   batchTime: string;
//   description: string;
//   courseOutline: Array<{
//     id: string;
//     topicName: string;
//     details: string;
//     videoUrl: string | null;
//   }>;
// }

// const AcademicProject: React.FC = () => {
//   const [courses, setCourses] = useState<Course[]>([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
//   const [cart, setCart] = useState<Course[]>([]);
//   const [selectedTraining, setSelectedTraining] = useState<Course | null>(null);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleModalOpen = (course: Course) => {
//     setSelectedCourse(course);
//     setIsModalOpen(true);
//   };

//   const { id } = useParams<{ id: string }>();
//   const navigate = useNavigate();

//   const handleCheckoutClick = (course: Course) => {
    
//     navigate(`/course/${course.id}`);
//   };

//   const handleOpenDialog = (training: Course) => {
//     setSelectedTraining(training);
//     setIsOpen(true);
//   };

//   const handleCloseDialog = () => {
//     setSelectedTraining(null);
//     setIsOpen(false);
//   };

//   // const handleAddToCart = (event: React.MouseEvent, training: Course) => {
//   //   event.stopPropagation();

//   //   const itemExists = cart.some((item) => item.id === training.id);

//   //   if (!itemExists) {
//   //     console.log('Added to cart:', training.name);

//   //     const updatedCart = [...cart, training];
//   //     setCart(updatedCart);
//   //     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   //     console.log('cart = ', updatedCart);

//   //     console.log("asdfghjkl"+localStorage.getItem('cart'));
//   //     console.log("asdfghjkl"+localStorage.getItem('token'));
//   //   }
//   // };

//   const handleAddToCart = (event: React.MouseEvent, training: Course) => {
//     event.stopPropagation();
  
//     const itemExists = cart.some((item) => item.id === training.id);
  
//     if (!itemExists) {
//       console.log('Added to cart:', training.name);
  
//       // Log the 'training' data to confirm it contains the expected values
//       console.log('Training:', training);
  
//       const updatedCart = [...cart, training];
//       setCart(updatedCart);
  
//       // Log the 'updatedCart' to verify it's updated correctly
//       console.log('Updated Cart:', updatedCart);
  
//       try {
//         localStorage.setItem('cart', JSON.stringify(updatedCart));
//         console.log('Cart stored in localStorage:', localStorage.getItem('cart'));
//       } catch (error) {
//         console.error('Error storing cart in localStorage:', error);
//       }
//     }
//   };
//   useEffect(() => {
//     // Check if cart data exists in localStorage
//     const storedCart = localStorage.getItem('cart');
  
//     if (storedCart) {
//       // Parse the stored data and update the cart state
//       const parsedCart = JSON.parse(storedCart);
//       setCart(parsedCart);
//     }
//   }, []);
    

//   const handleBuy = (event: React.MouseEvent, training: Course) => {
//     event.stopPropagation();

//     console.log('Buy:', training.name);
//   };

//   const handleOutsideClick = (event: MouseEvent) => {
//     const isClickedOutside = cardRefs.current.every(
//       (ref) => !ref.current?.contains(event.target as Node)
//     );
//     if (isClickedOutside) {
//       handleCloseDialog();
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('click', handleOutsideClick);

//     return () => {
//       document.removeEventListener('click', handleOutsideClick);
//     };
//   }, []);

//   useEffect(() => {
//     axios
//       .get<{ futureTrainings: Course[] }>('http://localhost:8090/trainings')
//       .then((response) => {
//         console.log('API Response:', response.data);
//         setCourses(response.data.futureTrainings);
//       })
//       .catch((error) => {
//         console.error('Error fetching course data:', error.response || error.message);
//       });
//   }, []);

//   return (
//     <div className="training-card-container">
//       {courses.map((course) => (
//         <div key={course.id} className="training-card-ed">
//           <div
//             className="training-card-button checkout"
//             onClick={() => handleCheckoutClick(course)}
//           >
//             <div className="training-card-divider" onClick={() => handleModalOpen(course)}>
//               <h5 className="training-card-title">{course.name}</h5>
//               <p className="training-card-text">{course.description}</p>
//             </div>
//             <div className="training-card-body">
//               <p className="training-card-text">
//                 Starts on<span className="start-date">{course.startDate}</span>and ends on{' '}
//                 <span className="end-date">{course.endDate}</span>
//               </p>
//               <p className="training-card-text">Batch time: {course.batchTime}</p>
//             </div>
//           </div>
//           <div className="training-card-body">
//             {cart.some((item) => item.id === course.id) ? (
//               <button className="training-card-button go-to-cart" onClick={() => handleCheckoutClick(course)}>
//                 Go to Cart
//               </button>
//             ) : (
//               <button className="training-card-button add-to-cart" onClick={(event) => handleAddToCart(event, course)}>
//                 Add to Cart
//               </button>
//             )}
//             <button className="training-card-button buy" onClick={(event) => handleBuy(event, course)}>
//               Buy
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AcademicProject;
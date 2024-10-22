






import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AcademicProject.scss';
import {  useNavigate } from 'react-router-dom';
import { Footer } from '../Common/Footer/Footer';
import { Header } from '../Common/Header/Header';

interface Project {
  id: string;
  name: string;
  description: string;
  courseOutline: Array<{
    topicName: string;
    detailedDescription: string;
  }>;
}

const AcademicProject: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [cart, setCart] = useState<Project[]>([]); 
  const navigate = useNavigate();

  const handleModalOpen = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };
  

  const handleCheckoutClick = () => {
    navigate('/cart');
  };

  const handleAddToCart = (academicProject: Project) => {
    const itemExists = cart.some((item) => item.id === academicProject.id);

    if (!itemExists) {
      console.log('Added to cart:', academicProject.name);

      const updatedCart = [...cart, academicProject];
      setCart(updatedCart);

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

  // const handleBuy = (academicProject: projects) => {
  //   console.log('Buy:', academicProject.name);
  // };

  const handleBuy = (event: React.MouseEvent, academicProject: Project) => {
    event.stopPropagation();

    console.log('Buy:', academicProject.name);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    const modal = document.querySelector('.modal') as HTMLElement;

    if (modal && !modal.contains(event.target as Node)) {
      handleModalClose();
    }
  };

  // useEffect(() => {
  //   document.addEventListener('click', handleOutsideClick);

  //   return () => {
  //     document.removeEventListener('click', handleOutsideClick);
  //   };
  // }, []);

  useEffect(() => {
    axios.get<Project[]>('http://localhost:8090/academic-projects')
      .then(response => {
        console.log('API Response:', response.data); 
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching project data:', error.response || error.message);
      });
  }, []);

  // const cardColors = ['#007bff', '#dc3545', '#28a745', '#ffc107', '#17a2b8', '#e83e8c', '#6c757d', '#6610f2', '#fd7e14', '#20c997'];

  const cardColors =[''];
  return (
    <>
    <Header/>
    <div className="academic-card-container">
      {projects.map((project, index) => (
        <div key={project.id} className="academic-card" style={{ backgroundColor: cardColors[index % cardColors.length] }}>
          <div className="academic-card-divider" onClick={() => handleModalOpen(project)}>
            <h5 className="academic-card-title">{project.name}</h5>
            <p className="academic-card-text">{project.description}</p>
          </div>
          <div className='academic-btn'>
            {cart.some((item) => item.id === project.id) ? (
              <button className="academic-card-button go-to-cart" onClick={handleCheckoutClick}>
                Go to Cart
              </button>
            ) : (
              <button className="academic-card-button add-to-cart" onClick={() => handleAddToCart(project)}>
                Add to Cart
              </button>
            )}
            <button className="academic-card-button buy" onClick={() => handleBuy(project)}>
              Buy
            </button>
          </div>
        </div>
      ))}

      {selectedProject && (
        <div className={`modal ${isModalOpen ? 'show' : ''}`} tabIndex={-1} style={{ display: isModalOpen ? 'block' : 'none' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedProject.name} Course Outline</h5>
                <button type="button" className="btn-close" onClick={handleModalClose}></button>
              </div>
              <div className="modal-body">
                <ul>
                  {selectedProject.courseOutline.map((topic, index) => (
                    <li key={index}>
                      <h6>{topic.topicName}</h6>
                      <p>{topic.detailedDescription}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleModalClose}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    <Footer/>
      </>
  );
};

export default AcademicProject;
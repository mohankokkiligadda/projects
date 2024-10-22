
import React from 'react';
import { Container } from 'react-bootstrap';
// import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';

import './Footer.scss'; 
import UpscalingLogo from '../Logo/UpscalingLogo';

const navLinks = [
  {
    title: 'About',
    links: [
      { label: 'Features', link: '#' },
      { label: 'Pricing', link: '#' },
      { label: 'Support', link: '#' },
      { label: 'Forums', link: '#' },
    ],
  },
  {
    title: 'Project',
    links: [
      { label: 'Contribute', link: '#' },
      { label: 'Media assets', link: '#' },
      { label: 'Changelog', link: '#' },
      { label: 'Releases', link: '#' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Join Discord', link: '#' },
      { label: 'Follow on Twitter', link: '#' },
      { label: 'Email newsletter', link: '#' },
      { label: 'GitHub discussions', link: '#' },
    ],
  },
];

export function Footer() {
  const groups = navLinks.map((group, index) => {
    const links = group.links.map((link) => (
      <a key={link.label} className="link" href={link.link} onClick={(event) => event.preventDefault()}>
        {link.label}
      </a>
    ));

    return (
      <div className="wrapper" key={index}>
        <div className="title">{group.title}</div>
        {links}
      </div>
    );
  });

  return (
    <footer className="footer">
      <Container className="inner">
        <div className="logo">
          {/* <MantineLogo size={30} /> */}
          <UpscalingLogo />

          <div className="description">Build fully functional accessible web applications faster than ever</div>
        </div>
        <div className="groups">{groups}</div>
      </Container>
      <Container className="after-footer">
<<<<<<< HEAD
        <div className="copy-right">© 2020 mantine.dev. All rights reserved.</div>
=======
        <div className="copy-right">&copy; 2023 Upscaling All rights reserved.</div>
>>>>>>> bfd2c72 (Adding Header Changes)
        {/* <div className="social">
          <a href="#" className="social-link">
            <IconBrandTwitter size="1.05rem" stroke={1.5} />
          </a>
          <a href="#" className="social-link">
            <IconBrandYoutube size="1.05rem" stroke={1.5} />
          </a>
          <a href="#" className="social-link">
            <IconBrandInstagram size="1.05rem" stroke={1.5} />
          </a>
        </div> */}
      </Container>
    </footer>
  );
}
<<<<<<< HEAD
=======




// import React from 'react';
// import './Footer.scss'; // Import your SCSS stylesheet

// export function Footer() {
//   return (
//     <div className="footer">
//       <div className="container inner">
//         <img src="path-to-mantine-logo" alt="Mantine Logo" width="28" />
//         <div className="d-flex links justify-content-end">
//           <a href="#">
//             <i className="bi bi-twitter"></i>
//           </a>
//           <a href="#">
//             <i className="bi bi-youtube"></i>
//           </a>
//           <a href="#">
//             <i className="bi bi-instagram"></i>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
>>>>>>> bfd2c72 (Adding Header Changes)

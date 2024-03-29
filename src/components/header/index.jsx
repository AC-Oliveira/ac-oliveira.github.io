/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
import { RiLinkedinFill } from 'react-icons/ri';
import { AiOutlineGithub } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import styles from './header.module.scss';
import { GlobalContext } from '../../context/GlobalContext';

export function Header() {
  const { active } = useContext(GlobalContext);
  const [expanded, setExpanded] = useState(false);
  const { pathname } = useLocation();

  const customToggle = (
    <Container
      onClick={() => setExpanded((current) => !current)}
      className={`${styles['menu-btn']} ${expanded && styles.open} mx-0`}
    >
      <div className={`${styles['menu-btn__burger']} `} />
    </Container>
  );

  const socilNetwork = (
    <Container
      className={
        window.innerWidth >= 991 && !isMobile ? 'd-flex justify-content-end' : 'd-flex justify-content-center mt-1 mb-3'
      }
    >
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={`${styles.github} mx-3`} href="https://github.com/AC-Oliveira" target="_blank" rel="noreferrer">
        <div>
          <AiOutlineGithub size={30} />
        </div>
      </a>
      <a
        className={`${styles.linkedin} mx-3`}
        href="https://www.linkedin.com/in/ac-oliveira-d2/"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <RiLinkedinFill size={30} />
        </div>
      </a>
    </Container>
  );

  return (
    // eslint-disable-next-line react/jsx-boolean-value
    <Navbar className="pt-3 p-0" expand="lg" expanded={expanded}>
      <Container className={styles.mainContainer}>
        <Container className={active ? 'mx-0' : ''}>
          <Navbar.Brand className={`${styles.logo} fs-4 me-3 font-weight-bold ${styles['selected-route']}`}>
            Allan Oliveira
          </Navbar.Brand>
        </Container>
        {window.innerWidth <= 991 && active && customToggle}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100 flex justify-content-center">
            <Nav.Link
              onClick={() => setExpanded(false)}
              className={`${!active && styles['underline-hover-effect']} ${styles.taCenter} font-weight-bold ${
                pathname === '/' && styles.selectedLink
              }`}
            >
              <Link
                to="/"
                // eslint-disable-next-line prettier/prettier
                className={`${pathname === '/' && styles['selected-route']} text-decoration-none`}
              >
                Sobre mim
              </Link>
            </Nav.Link>
            <Nav.Link
              onClick={() => setExpanded(false)}
              className={`${!active && styles['underline-hover-effect']} ${styles.taCenter} font-weight-bold ${
                pathname.includes('sites') && styles.selectedLink
              } ${pathname.includes('repositories') && styles.selectedLink}`}
            >
              <Link
                to="/sites"
                className={`${pathname.includes('sites') && styles['selected-route']} ${
                  pathname.includes('repositories') && styles['selected-route']
                }  text-decoration-none`}
              >
                Projetos
              </Link>
            </Nav.Link>
            <Nav.Link
              onClick={() => setExpanded(false)}
              className={`${!active && styles['underline-hover-effect']} ${styles.taCenter} font-weight-bold ${
                pathname === '/contact' && styles.selectedLink
              } `}
            >
              <Link
                to="/contact"
                className={`${pathname === '/contact' && styles['selected-route']} text-decoration-none`}
              >
                Fale Comigo
              </Link>
            </Nav.Link>
            <Nav.Link
              onClick={() => setExpanded(false)}
              className={`${!active && styles['underline-hover-effect']} ${styles.taCenter} font-weight-bold ${
                pathname === '/technologies' && styles.selectedLink
              }`}
            >
              <Link
                to="/technologies"
                className={`${pathname === '/technologies' && styles['selected-route']} text-decoration-none`}
              >
                Tecnologias
              </Link>
            </Nav.Link>
            <Nav.Link
              onClick={() => setExpanded(false)}
              className={`${!active && styles['underline-hover-effect']} ${styles.taCenter} font-weight-bold`}
            >
              <a
                onClick={() => {
                  window.open(
                    'https://drive.google.com/uc?export=download&id=1CQCZ19n7SeBisQ0C9_cYhrQuJVloNM3n',
                    '_blank'
                  );
                }}
                href="#/"
                className="text-decoration-none"
                target="_blank"
                rel="noreferrer"
              >
                Baixar Currículo
              </a>
            </Nav.Link>
            {window.innerWidth <= 991 && active && socilNetwork}
          </Nav>
        </Navbar.Collapse>
        {window.innerWidth > 991 && !active && socilNetwork}
      </Container>
    </Navbar>
  );
}

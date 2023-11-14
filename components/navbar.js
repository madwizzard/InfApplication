import React, { useState, useEffect } from 'react'; 
import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
  // State for controlling the collapse of the navbar
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  // Function to toggle the navbar collapse
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  // Effect to add padding top to the body when the navbar is expanded
  useEffect(() => {
    const bodyPaddingTop = isNavCollapsed ? '56px' : '200px'; 
    document.body.style.paddingTop = bodyPaddingTop;
  }, [isNavCollapsed]); 

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        {/* Logo and link to home page */}
        <Link href="/" legacyBehavior>
          <a className="navbar-brand d-flex align-items-center gap-2">
            <Image
              src="/belgium.png"
              alt="Belgium logo"
              width={30}
              height={30}
              priority={true}
            />
            Belgium Campus INF181
          </a>
        </Link>

        {/* Toggler/collapsible Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavCollapse}
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                        <Link href="/datavis" legacyBehavior>
                                <a className="nav-link">Data Visibility</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/infoquality" legacyBehavior>
                                <a className="nav-link">Information Quality</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/dataethics" legacyBehavior>
                                <a className="nav-link">Data Ethics</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/aibus" legacyBehavior>
                                <a className="nav-link">AI and Information Systems in Business</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/infobus" legacyBehavior>
                                <a className="nav-link">Information System Integration in Business</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/infosys" legacyBehavior>
                                <a className="nav-link">Customising Information Systems</a>
                            </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

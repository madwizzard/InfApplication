
// Import necessary modules
import Link from "next/link";
import Image from "next/image";

// Define functional component Nav
const Nav = () => {
    return (

        <>
  


      <nav className="  dark:bg-gray-800 dark:border-gray-600 fixed lg:flex hidden justify-between w-full z-20 top-0 start-0 mb-16 pt-3 items-center ">
            {/* Link to home page with logo */}
            <Link href="/" className="flex gap-2 items-center">
                <Image
                    src="/assets/images/belgium.png"
                    alt="Image of belgium logo"
                    width={30}
                    height={30}
                    className="object-contain"
                />
                <p className="logo_text">Belgium Campus INF181</p>
            </Link>
            <Link href="/datavis" className="datavis_btn">
                Data Visibility
            </Link>
            <Link href="/infoquality" className="datavis_btn">
                Information Quality
            </Link>
            <Link href="/dataethics" className="datavis_btn">
                Data Ethics
            </Link>
            <Link href="/aibus" className="datavis_btn">
                AI and information systems in business
            </Link>
            <Link href="/infobus" className="datavis_btn">
                Information system integration in business
            </Link>
            <Link href="/infosys" className="datavis_btn">
                Customising information systems
            </Link>

            {/* Desktop navigation */}
            <div className="lg:hidden flex items-center">
                <div className="flex gap-3 md:gap-5">
                    {/* Link to data visibility page */}
                   <Link href="/datavis" className="datavis_btn">
                        Data Visibility
                        </Link> 
                </div>
            </div>
        </nav>
     




        </>
    );
};

// Export Nav component as default
export default Nav;

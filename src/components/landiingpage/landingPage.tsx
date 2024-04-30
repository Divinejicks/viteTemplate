import { useEffect, useState } from "react";

export const LandingPage = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

    useEffect(() => {
        // Check screen size on mount and resize
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768); // Adjust the breakpoint as needed
        };
    
        handleResize(); // Check on mount
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    useEffect(() => {
        document.body.classList.add("overflow-x-hidden");
        return () => {
            document.body.classList.remove("overflow-x-hidden");
        };
    }, []);

    return (
        <>
            <div className="relative min-h-screen min-w-screen bg-homeimage bg-no-repeat bg-cover bg-center">
                {/* <img src="/assets/hero.jpg" alt="Hero" className="absolute inset-0 w-full h-full object-cover"  /> */}
                <div className="inset-0 flex justify-between mt-3 md:mt-5 mx-3 md:mx-8 fixed">
                    <p className="text-lg md:text-3xl cursor-pointer" style={{fontFamily: "sans-serif", color: "#5a5752"}}>FORNER</p>
                    <div className="flex">
                        {!isSmallScreen ? (<>
                            <img src="/assets/menu-arrow.svg" className="mr-2 mt-2" style={{height: "15px"}} />
                        </>) : (
                            <>
                                <img src="/assets/menu-arrow.svg" className="mr-2 mt-2" style={{height: "10px"}} />
                            </>
                        )}
                        <p className="text-lg md:text-3xl cursor-pointer" style={{fontFamily: "sans-serif", color: "#5a5752"}}>Menu</p>
                    </div>
                </div>
                <div className="absolute inset-0 flex items-end mb-5 mx-3 md:mx-8 md:max-w-[70%]">
                    <h1 className="font-semibold text-5xl md:text-9xl" style={{color:"#ecece4"}}>Considered creative for elevated brands.</h1>
                </div>
            </div>
            <div className="my-10">
                <h1 className="font-semibold text-3xl md:text-5xl mx-5" >
                    This is to show an example of the parallax effect you asked for. I just did this in a rush to show you I can do it and it is possible.
                </h1>
            </div>
            <div className="bg-image1 min-h-screen bg-center bg-no-repeat bg-fixed">

            </div>
            <div className="bg-image2 min-h-screen bg-center bg-no-repeat bg-fixed">

            </div>
            <div className="bg-image3 min-h-screen bg-center bg-no-repeat bg-fixed">

            </div>
            <div className="bg-image4 min-h-screen bg-center bg-no-repeat bg-fixed">

            </div>
        </>
    )
}

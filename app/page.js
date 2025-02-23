
import Navbar from "@/app/components/navbar";
import Footer from "./components/footer";
import About1 from "./sections/about1";
import Sponsor from "./sections/sponsors";
import Crowdfund from "./sections/gallery";
import Landing from "./sections/landing1";

export default function Home() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate loading for 3 seconds
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);

  //   // Clean up the timer
  //   return () => clearTimeout(timer);
  // }, []);
  // const router = useRouter();
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   if (!router.isReady) return; // Wait until the router is mounted

  //   const handleStart = () => setLoading(true);
  //   const handleComplete = () => setLoading(false);

  //   router.events.on("routeChangeStart", handleStart);
  //   router.events.on("routeChangeComplete", handleComplete);
  //   router.events.on("routeChangeError", handleComplete);

  //   return () => {
  //     router.events.off("routeChangeStart", handleStart);
  //     router.events.off("routeChangeComplete", handleComplete);
  //     router.events.off("routeChangeError", handleComplete);
  //   };
  // }, [router.isReady]);

  return (
    <>
    {/* {loading ? (
       <Loader></Loader>
      ) : (
        <div id="content">
          <Navbar />
        <Landing />
        <About1 />
        <Crowdfund />
        <Sponsor />
        <Footer />        
        </div>
      )} */}
      <div id="content" className="relative">
  <Navbar />
  <div className="relative z-0">
    <Landing />
    <About1 />
    <Crowdfund />
    <Sponsor />
    <div className="relative z-20">
    <Footer />
    </div>
  </div>
</div>

    </>
  );
}


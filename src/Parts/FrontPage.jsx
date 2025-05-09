import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const FrontPage = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showBackgroundAnimation, setShowBackgroundAnimation] = useState(false);
  const [waveData, setWaveData] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const heroRef = useRef(null);
  const pricingRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);
  const [heroText, setHeroText] = useState('');
  const heroTextOptions = [];
  const [heroTextIndex, setHeroTextIndex] = useState(0);
  const backgroundStars = useRef([]);

  const navigate = useNavigate();
  const handleSignIn = () => navigate('/login');

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const offsets = {
      home: heroRef.current.offsetTop,
      pricing: pricingRef.current.offsetTop,
      blog: blogRef.current.offsetTop,
      contact: contactRef.current.offsetTop,
    };
    if (scrollY >= offsets.contact) {
      setActiveSection('contact');
      setShowBackgroundAnimation(true);
    } else if (scrollY >= offsets.blog) {
      setActiveSection('blog');
      setShowBackgroundAnimation(true);
    } else if (scrollY >= offsets.pricing) {
      setActiveSection('pricing');
      setShowBackgroundAnimation(true);
    } else {
      setActiveSection('home');
      setShowBackgroundAnimation(false);
    }
  };

  useEffect(() => {
    const onResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Wave data init & animate
  useEffect(() => {
    const waves = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      amplitude: Math.random() * 20 + 30,
      frequency: Math.random() * 0.02 + 0.01,
      phase: Math.random() * 2 * Math.PI,
      speed: Math.random() * 0.5 + 0.5,
      opacity: Math.random() * 0.3 + 0.2,
      color: `rgba(124, 58, 237, ${Math.random() * 0.4 + 0.2})`,
    }));
    setWaveData(waves);
    const id = setInterval(() => {
      setWaveData(w => w.map(x => ({ ...x, phase: x.phase + x.speed * 0.02 })));
    }, 30);
    return () => clearInterval(id);
  }, []);

  // Hero text cycle
  useEffect(() => {
    const iv = setInterval(() => setHeroTextIndex(i => (i + 1) % heroTextOptions.length), 3000);
    return () => clearInterval(iv);
  }, []);
  useEffect(() => {
    let idx = 0;
    const tl = setInterval(() => {
      if (idx <= heroTextOptions[heroTextIndex].length) {
        setHeroText(heroTextOptions[heroTextIndex].slice(0, idx));
        idx++;
      } else clearInterval(tl);
    }, 100);
    return () => clearInterval(tl);
  }, [heroTextIndex]);

  // Stars init
  useEffect(() => {
    const stars = [];
    if (showBackgroundAnimation) {
      for (let i = 0; i < 200; i++) stars.push({ x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,size:Math.random()*3+1,speed:Math.random()*2+1});
    }
    backgroundStars.current = stars;
  }, [showBackgroundAnimation]);

  const scrollToSection = ref => window.scrollTo({ top: ref.current.offsetTop, behavior:'smooth' });

  const featureCards = [
    { title:'Personalized Skill Assessments', description:'Identify where you stand with adaptive assessments that deliver accurate, actionable insights tailored to your needs. Get actionable insights for targeted improvement.', image:'https://energipeople.com/wp-content/uploads/2023/01/Skills-Gap-Analysis-who-or-what-is-missing.jpg' },
    { title:'AI Powered Speech and Student Detection', description:'Harness cutting-edge AI to monitor classroom interactions, ensuring academic integrity and detecting any attempts to cheat. This intelligent system enhances fairness and accountability in the learning process.', image:'https://specials-images.forbesimg.com/imageserve/61c4dab3dcce70ad2cdf606a/960x0.jpg' },
    { title:'Gamified and Structured Learning', description:'Experience a dynamic and engaging learning journey with gamified lessons and a structured curriculum designed to keep you motivated and on track. Earn rewards and see measurable progress as you master new skills.', image:'https://miro.medium.com/v2/resize:fit:750/1*GdYEKCQeLhjOHDKGc_gg3Q.jpeg' },
  ];
  const codeImages = ['https://via.placeholder.com/600x400?text=Code1','https://via.placeholder.com/600x400?text=Code2','https://via.placeholder.com/600x400?text=Code3'];
  const allShowcaseItems = [];
  for(let i=0;i<Math.max(featureCards.length,codeImages.length);i++){
    if(featureCards[i]) allShowcaseItems.push({type:'feature',data:featureCards[i]});
    if(codeImages[i]) allShowcaseItems.push({type:'code',data:codeImages[i]});
  }

  const pricingPlans = [
    {title:'Basic',price:'$19/month',features:['Access to basic courses','Community support']},
    {title:'Pro',price:'$49/month',features:['All basic features','Real-time feedback','Advanced projects']},
    {title:'Enterprise',price:'$99/month',features:['All pro features','Dedicated mentor','Custom projects']},
  ];
  const blogPosts = [
    {title:'The Future of Web Development',date:'Oct 26, 2023',excerpt:'Explore the latest trends and technologies shaping the future of web development.'},
    {title:'Tips for Learning React Faster',date:'Oct 20, 2023',excerpt:'Learn effective strategies to accelerate your React learning journey.'},
    {title:'Building Scalable APIs with Node.js',date:'Oct 15, 2023',excerpt:'Discover best practices for designing and building scalable APIs using Node.js.'},
  ];

  return(
    <div className="landing-page font-sans text-white bg-black overflow-x-hidden relative">
      {/* Wave Background */}

      {/* Shooting Stars */}
      {showBackgroundAnimation&&<div className="animated-background fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none">
        {backgroundStars.current.map((s,i)=><motion.div key={i} initial={{x:s.x,y:s.y,rotate:0,opacity:0.8}} animate={{x:[s.x,s.x+300],y:[s.y,s.y+300],rotate:[0,45],opacity:[0.8,0.3,0.8]}} transition={{duration:s.speed*5,repeat:Infinity,ease:'linear',repeatType:'loop'}} className="absolute rounded-full bg-white" style={{width:s.size,height:s.size}}/>)}</div>}

      {/* Navbar */}
      <nav className="navbar fixed top-0 left-0 w-full bg-black bg-opacity-80 p-4 flex justify-center z-10 shadow-md">
  {['home', 'pricing', 'blog', 'contact'].map(sec => (
    <a
      key={sec}
      href={`#${sec}`}
      onClick={() =>
        scrollToSection(
          { home: heroRef, pricing: pricingRef, blog: blogRef, contact: contactRef }[sec]
        )
      }
      className={`mx-4 transition-colors duration-300 ${
        activeSection === sec ? 'text-violet-400' : 'hover:text-violet-300'
      }`}
    >
      {sec.charAt(0).toUpperCase() + sec.slice(1)}
    </a>
  ))}

  {/* Only this item routes to a different page */}
  <div
    onClick={() => navigate('/company-signup')}
    className="ml-6 px-4 py-2 rounded-md bg-black-600 hover:bg-black-700 text-white transition duration-300"
  >
    Company Sign Up
    </div>
</nav>

      {/* Hero */}
      <section
  ref={heroRef}
  id="home"
  className="hero-section relative min-h-screen flex flex-col justify-center items-center p-8 bg-gradient-to-b from-purple-900 via-black to-black"
>
  {/* WAVE BACKGROUND */}
  <div className="absolute inset-0 pointer-events-none z-0">
    {waveData.map((w) => (
      <motion.svg
        key={w.id}
        viewBox={`0 0 ${windowWidth} 100`}
        preserveAspectRatio="none"
        style={{ opacity: w.opacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
      >
        {/* Primary wave */}
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            loop: Infinity,
            duration: 3,
            ease: "easeInOut",
            delay: w.id * 0.2,
          }}
          d={`M0,${50 + w.amplitude * Math.sin(w.phase)}
              C${windowWidth * 0.25},${50 + w.amplitude * Math.sin(w.frequency * (windowWidth * 0.25) + w.phase)}
              ${windowWidth * 0.75},${50 + w.amplitude * Math.sin(w.frequency * (windowWidth * 0.75) + w.phase)}
              ${windowWidth},${50 + w.amplitude * Math.sin(w.frequency * windowWidth + w.phase)}`}
          fill="none"
          stroke={w.color}
          strokeWidth={2}
        />
        {/* Secondary wave */}
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            loop: Infinity,
            duration: 3,
            ease: "easeInOut",
            delay: w.id * 0.2 + 1.5,
          }}
          d={`M0,${50 + (w.amplitude / 1.5) * Math.sin(w.phase + Math.PI / 4)}
              C${windowWidth * 0.25},${50 + (w.amplitude / 1.5) * Math.sin(w.frequency * (windowWidth * 0.25) + w.phase + Math.PI / 4)}
              ${windowWidth * 0.75},${50 + (w.amplitude / 1.5) * Math.sin(w.frequency * (windowWidth * 0.75) + w.phase + Math.PI / 4)}
              ${windowWidth},${50 + (w.amplitude / 1.5) * Math.sin(w.frequency * windowWidth + w.phase + Math.PI / 4)}`}
          fill="none"
          stroke={w.color}
          strokeWidth={1.5}
        />
      </motion.svg>
    ))}
  </div>

  {/* TEXT CONTENT */}
  <div className="relative z-10 text-center max-w-2xl">
    <h1 className="text-5xl text-gray-100 md:text-6xl font-bold mb-6">
      Start Your Journey in Coding
    </h1>
    <button
      onClick={handleSignIn}
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg mt-4"
    >
      Sign In
    </button>
    <div className="image-slider mt-8"></div>
    <div className="mt-8 text-xl text-gray-300">
      <p>{heroText}</p>
    </div>
  </div>
</section>

      {/* Showcase */}
      <section className="showcase-section min-h-screen flex flex-col justify-center items-center p-8 bg-black">
        <h2 className="text-4xl font-bold mb-10">Showcase</h2>
        {allShowcaseItems.map((item,i)=>(
          <motion.div key={i} className={`flex flex-col md:flex-row ${i%2?'md:flex-row-reverse':''} items-center mb-12 w-full max-w-5xl`} initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.8,delay:i*0.2}}>
            {item.type==='feature'?<><img src={item.data.image} alt={item.data.title} className="w-full md:w-1/2 rounded-md shadow-2xl hover:shadow-violet-400 transition-shadow duration-300"/><div className="p-6 md:w-1/2"><h3 className="text-3xl font-semibold mb-4">{item.data.title}</h3><p className="text-gray-300">{item.data.description}</p></div></>:<img src={item.data} alt={`Code ${i+1}`} className="w-full md:w-1/2 rounded-md shadow-2xl hover:shadow-violet-400 transition-transform duration-300 cursor-pointer"/>}
          </motion.div>
        ))}
      </section>

      {/* Pricing */}
      <section ref={pricingRef} id="pricing" className="pricing-section min-h-screen flex flex-col justify-center items-center p-8 bg-gradient-to-br from-black via-purple-800 to-black">
        <h2 className="text-4xl font-bold mb-10">Pricing Plans</h2>
        <div className="pricing-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {pricingPlans.map((plan,i)=>(
            <motion.div key={i} className="pricing-card bg-gray-800 p-8 rounded-xl shadow-2xl hover:shadow-violet-400 transition-shadow duration-300" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.8,delay:i*0.2}}>
              <h3 className="text-3xl font-semibold mb-4">{plan.title}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}</p>
              <ul className="list-disc list-inside text-gray-300 mb-6">{plan.features.map((f,j)=><li key={j}>{f}</li>)}</ul>
              <button className="bg-violet-600 hover:bg-violet-700 text-white py-2 px-6 rounded-lg transition-colors duration-300 w-full">Get Started</button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section ref={blogRef} id="blog" className="blog-section min-h-screen flex flex-col justify-center items-center p-8 bg-black">
        <h2 className="text-4xl font-bold mb-10">Blog</h2>
        <div className="blog-posts grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post,i)=>(
            <motion.div key={i} className="blog-post bg-gray-800 p-8 rounded-xl shadow-2xl hover:shadow-violet-400 transition-shadow duration-300" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.8,delay:i*0.2}}>
              <h3 className="text-3xl font-semibold mb-4">{post.title}</h3>
              <p className="text-gray-400 mb-4">{post.date}</p>
              <p className="text-gray-300 mb-6">{post.excerpt}</p>
              <a href="#" className="text-violet-400 hover:text-violet-300 transition-colors duration-300 inline-block">Read More</a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section ref={contactRef} id="contact" className="contact-section min-h-screen flex flex-col justify-center items-center p-8 bg-gradient-to-b from-purple-900 to-black">
        <h2 className="text-4xl font-bold mb-10">Contact Us</h2>
        <p className="text-gray-300 mb-6">Have any questions or need assistance? Reach out to us!</p>
        <form className="w-full max-w-md">
          <input type="text" placeholder="Your Name" className="bg-gray-700 p-3 rounded-md w-full mb-4 focus:outline-none focus:ring-2 focus:ring-violet-400" />
          <input type="email" placeholder="Your Email" className="bg-gray-700 p-3 rounded-md w-full mb-4 focus:outline-none focus:ring-2 focus:ring-violet-400" />
          <textarea rows="4" placeholder="Your Message" className="bg-gray-700 p-3 rounded-md w-full mb-4 focus:outline-none focus:ring-2 focus:ring-violet-400"></textarea>
          <button className="bg-violet-600 hover:bg-violet-700 text-white py-2 px-6 rounded-lg transition-colors duration-300 w-full">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 p-8 text-center">
        <p className="text-gray-400">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FrontPage;
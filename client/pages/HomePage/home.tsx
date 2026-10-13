import React, { useState, useEffect, useRef } from 'react';
import { FaBalanceScale, FaChild, FaHandshake, FaFileAlt, FaMoneyBillWave, FaGavel } from 'react-icons/fa';
import "./home.css";

const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [counts, setCounts] = useState({
    success: 0,
    clients: 0,
    commitment: 0,
    experience: 0
  });
  const [hasStartedCounting, setHasStartedCounting] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  const images = [
    '/home.png',
    '/home.png',
    '/home.png',
    '/home.png',
  ];

  // Auto slide functionality
  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(autoSlide);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Counter animation functions
  const easeOutQuad = (t: number) => t * (2 - t);

  const animateCounter = (start: number, end: number, duration: number, setter: (value: number) => void) => {
    const startTime = Date.now();
    
    const updateCounter = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easedProgress = easeOutQuad(progress);
      const currentValue = Math.floor(start + (end - start) * easedProgress);
      
      setter(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };
    
    requestAnimationFrame(updateCounter);
  };

  // Counter intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStartedCounting) {
          setHasStartedCounting(true);
          
          // Start all counters
          animateCounter(0, 98, 2000, (value) => 
            setCounts(prev => ({ ...prev, success: value })));
          animateCounter(0, 2000, 2000, (value) => 
            setCounts(prev => ({ ...prev, clients: value })));
          animateCounter(0, 100, 2000, (value) => 
            setCounts(prev => ({ ...prev, commitment: value })));
          animateCounter(0, 30, 2000, (value) => 
            setCounts(prev => ({ ...prev, experience: value })));
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasStartedCounting]);

  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="header-section">
        <img src="/home.png" alt="עורכת דין עירית רן כהן" className="header-image" />
        <div className="header-text">
          <h1>       
          Irit Ran Cohen - עירית רן כהן</h1>
          <div className="header-text-second">
          <h2>עורכת דין המתמחה בתחום דיני גירושין ומשפחה</h2>
          <p>לצדך בכל שלב ובכל החלטה</p>
        </div> </div>
      </header>

      {/* Intro Section */}
      <div className="intro-container">
      <div className="intro-slider">
          <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((image, index) => (
              <img src={image} alt={`Image ${index + 1}`} key={index} />
            ))}
          </div>
          <button className="prev-btn" onClick={prevSlide}>
            ←
          </button>
          <button className="next-btn" onClick={nextSlide}>
            →
          </button>
        </div>
        <div className="intro-text">
    <p>
        עורכת דין המתמחה בליווי מקצועי ואישי בתחום דיני המשפחה.
    </p>
    <p>
        בעבודה שלי אני שמה דגש על רגישות, אמפתיה ושמירה על האינטרסים של לקוחותיי, תוך מתן פתרונות מותאמים אישית לכל מקרה.
    </p>
    <p>
        מטרתי היא לספק ייעוץ וליווי משפטי מהימן ומדויק גם ברגעים המאתגרים ביותר. אני מאמינה בשילוב של מקצועיות בלתי מתפשרת עם יחס אישי, כדי להבטיח תהליך שקט, מכבד ויעיל עבור כל אחד ואחת.
    </p>
    <p>
        יחד נבנה אסטרטגיה שתוביל לתוצאות הטובות ביותר עבורכם, תוך שמירה על ערכים של שקיפות, יושרה וחתירה מתמדת לצדק.
    </p>
</div>


      </div>

      {/* Counter Section */}
      <section className="counter-section" ref={counterRef}>
        <div className="counter-item">
          <h3>
            <span className="counter-value">{counts.success}</span>
            <span className="counter-symbol">%</span>
          </h3>
          <p>הצלחה בהשגת פתרונות מועילים</p>
        </div>
        <div className="counter-item">
          <h3>
            <span className="counter-value">{counts.clients}</span>
            <span className="counter-symbol">+</span>
          </h3>
          <p>לקוחות מרוצים</p>
        </div>
        <div className="counter-item">
          <h3>
            <span className="counter-value">{counts.commitment}</span>
            <span className="counter-symbol">%</span>
          </h3>
          <p>התחייבות לכל לקוח ולקוחה</p>
        </div>
        <div className="counter-item">
          <h3>
            <span className="counter-value">{counts.experience}</span>
          </h3>
          <p>שנות נסיון</p>
        </div>
      </section>

      {/* Expertise Section */}
      <div className="expertise-title">
        <h2>תחומי התמחות</h2>
      </div>
      <section className="expertise-section">
        {[
          {
            title: "גישור ויישוב סכסוכים במשפחה",
            description:
              "ליווי מקצועי ורגיש בתהליכי גישור שמטרתם לפתור סכסוכים משפחתיים מחוץ לכותלי בית המשפט, תוך שמירה על כבוד הדדי ואינטרסים משותפים",
            icon: <FaHandshake />,
          },
          {
            title: "עריכת הסכמי ממון וגירושין",
            description:
              "ניסוח הסכמים מותאמים אישית, החל מהסכמי ממון לפני נישואין ועד הסכמי גירושין המגדירים חלוקת רכוש, משמורת, ודמי מזונות בצורה ברורה והוגנת",
            icon: <FaFileAlt />,
          },
          {
            title: "משמורת ילדים והסדרי ראייה",
            description:
              "ייצוג הורים במאבקי משמורת והסדרי ראייה, תוך דגש על טובת הילד והתחשבות בצרכי המשפחה",
            icon: <FaChild />,
          },
          {
            title: "תביעות למזונות אישה וילדים",
            description:
              "ניהול תביעות למזונות המבטיחות את הצרכים הכלכליים של האישה והילדים במהלך ולאחר תהליך הגירושין",
            icon: <FaMoneyBillWave />,
          },
          {
            title: "אלימות במשפחה",
            description:
              "ליווי משפטי במקרים רגישים של אלימות במשפחה, כולל הגשת צווי הגנה והבטחת סביבה בטוחה ומוגנת ללקוחותיי",
            icon: <FaGavel />,
          },
          {
            title: "צוואות וירושות",
            description:
              "עריכת צוואות, טיפול בסכסוכים ירושתיים וניהול עיזבונות, תוך שמירה על רצון המוריש ועל זכויות היורשים",
            icon: <FaBalanceScale />,
          },
        ].map((field, index) => (
          <div key={index} className="expertise-item">
            <div className="expertise-icon">{field.icon}</div>
            <h3>{field.title}</h3>
            <p>{field.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
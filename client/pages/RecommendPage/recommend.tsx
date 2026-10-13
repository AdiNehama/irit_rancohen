import React, { useEffect } from 'react';
import { Star } from 'lucide-react';
import './recommend.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Recommend: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "אורן ל.",
      text: "עורכת דין מקצועית ויסודית! טיפלה בתיק שלי במהירות וביעילות, עם יחס אישי ותמיכה לאורך כל הדרך. ממליץ בחום!",
      image: "/testimonials/person1.jpg"
    },
    {
      id: 2,
      name: "דנה ר.",
      text: "מצאתי אוזן קשבת וליווי משפטי מצוין. בזכותה קיבלתי את מה שמגיע לי. תודה על הסבלנות והמקצועיות!",
      image: "/testimonials/person2.jpg"
    },
    {
      id: 3,
      name: "משה ג.",
      text: "ידע, ניסיון ואסטרטגיה מנצחת! בזכות הליווי המשפטי המדויק זכיתי בתיק שלי. ממליץ ללא ספק!",
      image: "/testimonials/person3.jpg"
    },
    {
      id: 4,
      name: "יעל ש.",
      text: "מעבר למקצועיות, קיבלתי יחס אישי ואנושי. הרגשתי בטוחה לכל אורך התהליך. תודה ענקית!",
      image: "/testimonials/person4.jpg"
    },
    {
      id: 5,
      name: "אלון ד.",
      text: "עורכת דין ברמה גבוהה! ייצגה אותי בצורה מושלמת והשיגה תוצאה מעולה. אין מילים להודות!",
      image: "/testimonials/person5.jpg"
    }
  ];

  return (
    <div className="recommend-container" dir="rtl">
      <div className="recommend-content">
        <section className="hero-section" data-aos="fade-up">
          <h1 className="page-title">המלצות לקוחות</h1>
          <h2 className="subtitle">מה אומרים עליי הלקוחות שלי</h2>
        </section>

        <section className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="testimonial-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="testimonial-header">
                <div className="profile-image-container">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="profile-image"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/default-avatar.png';
                    }}
                  />
                </div>
                <div className="name-rating">
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className="star-icon"
                        fill="#FFD700"
                        size={16}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
            </div>
          ))}
        </section>

        <section className="cta-section" data-aos="fade-up">
          <div className="cta-content">
            <h3>רוצים להיות הלקוחות המרוצים הבאים שלי?</h3>
            <p>אשמח לעמוד לרשותכם ולסייע גם לכם</p>
            <a href="/contact" className="cta-button">צרו קשר עכשיו</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Recommend;
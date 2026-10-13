import React, { useEffect } from "react";
import { Scale, Heart, Handshake, Shield } from "lucide-react";
import "./family-mediation.css";
import AOS from "aos";
import "aos/dist/aos.css";

const FamilyMediation: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const benefits = [
    {
      icon: <Scale className="benefit-icon" />,
      title: "פתרון מאוזן",
      description: "הגעה להסכמות המיטיבות עם כל הצדדים",
    },
    {
      icon: <Heart className="benefit-icon" />,
      title: "שמירה על היחסים",
      description: "מניעת החרפת הקונפליקט המשפחתי",
    },
    {
      icon: <Shield className="benefit-icon" />,
      title: "פרטיות מלאה",
      description: "שמירה על דיסקרטיות וחיסיון המידע",
    },
    {
      icon: <Handshake className="benefit-icon" />,
      title: "תוקף משפטי",
      description: "אישור ההסכמות בבית המשפט",
    },
  ];

  return (
    <div className="mediation-container" dir="rtl">
      <div className="mediation-content">
        <section className="hero-section" data-aos="fade-up">
          <h1 className="page-title">גישור משפחתי</h1>
          <h2 className="subtitle">הדרך להסכמה בדרכי שלום</h2>
        </section>

        <section
          className="main-content"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="content-grid">
            <div className="text-column">
              <p className="intro-text1">
                כאשר סכסוכים משפחתיים מתעוררים, הפנייה לבית המשפט אינה תמיד
                הפתרון האידיאלי. במקרים רבים, הליכים משפטיים עלולים להעמיק את
                הקונפליקט ולגרום למתחים נוספים בין בני המשפחה. כאן נכנס לתמונה
                תהליך הגישור המשפחתי, שמאפשר לצדדים להגיע להסכמות בדרכי שלום
                ובאווירה מכבדת.
              </p>
              <p className="main-text1">
                גישור משפחתי מתבצע על ידי עורכת דין מוסמכת לגישור, שתפקידה
                להקשיב לצרכים של כל הצדדים ולסייע בגיבוש פתרונות שייטיבו עם
                כולם. יתרון מרכזי של הגישור הוא היכולת לפתור את הסכסוך מבלי
                לחשוף את כל הפרטים האישיים בפני בית המשפט, וכך לשמור על פרטיות
                המשפחה.
              </p>
            </div>
            <div className="image-column" data-aos="fade-left">
              <img
                src="/mediation.png"
                alt="גישור משפחתי"
                className="mediation-image"
              />
            </div>
          </div>
        </section>

        <section className="benefits-section" data-aos="fade-up">
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="benefit-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {benefit.icon}
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="closing-section" data-aos="fade-up">
          <p className="closing-text">
            הליך גישור משפחתי מתאים במקרים של גירושין, חלוקת רכוש, קביעת משמורת
            או כל סכסוך אחר בתוך המשפחה. חשוב לציין כי במקרים רבים, ההסכמות
            המושגות בתהליך גישור מאושרות בבית המשפט, מה שמעניק להן תוקף משפטי.
            אם אתם מחפשים פתרון יעיל, מכבד, ונגיש – גישור משפחתי יכול להיות
            הבחירה הנכונה עבורכם.
          </p>
        </section>
      </div>
    </div>
  );
};

export default FamilyMediation;

import React, { useEffect } from 'react';
import { Scale, BookOpen, Award, Heart } from 'lucide-react';
import './about.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="about-container" dir="rtl">
     

      <div className="about-content">
        <section className="intro-section" data-aos="fade-up">
          <h1 className="about-title"> אודותיי</h1>
          <div className="text-content">
            <p>
              אני עירית רן כהן, עורכת דין המתמחה בדיני משפחה ובעלת ניסיון עשיר בניהול תיקים רגישים ומורכבים בתחום. בעלת תואר ראשון במשפטים (LL.B) בהצטיינות מהמוסד האקדמי המוביל בארץ ותעודת הסמכה מטעם לשכת עורכי הדין. במהלך שנותיי כעורכת דין ייצגתי בהצלחה לקוחות במגוון נושאים, כולל גירושין, מזונות, משמורת, חלוקת רכוש ויישוב סכסוכים משפחתיים. בזכות מחויבותי הבלתי מתפשרת לצדק וללקוחותיי, פיתחתי מוניטין כעורכת דין יסודית, מקצועית ואמפתית.
            </p>
          </div>
        </section>
 <div className="about-header" data-aos="fade-up">
 <div className="photo-grid">
 <div className="photo-item">
        <img src="/documentary1.jpeg" alt="לוגו" className="logo-image" /> </div>
        <div className="photo-item">
        <img src="/documentary1.jpeg" alt="לוגו" className="logo-image" /></div>
        <div className="photo-item">
        <img src="/documentary1.jpeg" alt="לוגו" className="logo-image" /></div>
        <div className="photo-item">

        <img src="/documentary1.jpeg" alt="לוגו" className="logo-image" /></div>

      </div>
      </div>
        <div className="values-section" data-aos="fade-up" data-aos-delay="200">
          <div className="values-grid">
            <div className="value-item">
              <Scale className="value-icon" />
              <h3>מקצועיות</h3>
              <p>ייצוג משפטי ברמה הגבוהה ביותר</p>
            </div>
            <div className="value-item">
              <Heart className="value-icon" />
              <h3>אמפתיה</h3>
              <p>יחס אישי ורגיש לכל לקוח</p>
            </div>
            <div className="value-item">
              <BookOpen className="value-icon" />
              <h3>ניסיון</h3>
              <p>שנים של התמחות בדיני משפחה</p>
            </div>
            <div className="value-item">
              <Award className="value-icon" />
              <h3>הצלחה</h3>
              <p>הישגים מוכחים בייצוג לקוחות</p>
            </div>
          </div>
        </div>

        <section className="why-me-section" data-aos="fade-up">
          <div className="why-me-content">
            <div className="text-side">
              <h2 className="why-me-title">למה דווקא אני?</h2>
              <div className="text-content">
                <p>
                  בבחירת עורך דין לדיני משפחה, חשוב שתהיה לצדכם דמות מקצועית שתשלב ידע משפטי מעמיק עם הבנה אנושית לצרכים הרגשיים שלכם. אני מתבלטת בזכות יכולתי להקשיב, להבין ולבנות אסטרטגיה משפטית מותאמת אישית לכל לקוח ולקוחה. המטרה שלי היא להוביל אתכם לתוצאה הטובה ביותר עבורכם, תוך שמירה על כבוד ורגישות לתהליכים המשפחתיים המעורבים. אני ניחנת בחריצות, יצירתיות, יכולת ניהול משא ומתן ברמה הגבוהה ביותר ויכולת להביא פתרונות גם במצבים המורכבים ביותר. הבחירה בי היא הבחירה בייצוג מקצועי, אנושי ומסור עד הסוף.
                </p>
              </div>
            </div>
            <div className="image-side" data-aos="fade-left">
              <img src="/home.png" alt="תמונת משרד" className="office-image" />
            </div>
          </div>
        </section>

        <section className="contact-cta" data-aos="fade-up">
          <div className="cta-content">
            <h3>מוזמנים ליצור קשר</h3>
            <p>אשמח לעמוד לרשותכם ולסייע בכל שאלה או התייעצות</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
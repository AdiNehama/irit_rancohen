// content.tsx
import React from 'react';
import './contact.css';

const Contact: React.FC = () => {
  return (
    <div  className="contact-container">
    <div className="contact-container-page">
      <h1 className="contact-title-page">אשמח לשמוע מכם</h1>
      <p className="contact-paragraph-page">
        אם אתם זקוקים לייעוץ משפטי בתחום דיני המשפחה או מחפשים ליווי מקצועי בתהליך רגיש, אני כאן כדי לעזור. פנו אליי בכל שאלה, התלבטות או צורך בייעוץ. <br/> יחד נמצא את הפתרון המתאים ביותר עבורכם, תוך שמירה על דיסקרטיות מלאה ויחס אישי ומסור.<br/> 
      </p>
      <p className="contact-paragraph-page">
        ניתן ליצור קשר בטלפון, במייל או להשאיר פרטים בטופס מטה, ואני אחזור אליכם בהקדם. אני כאן בשבילכם בכל שלב בדרך!
      </p>
    </div>
    </div>
  );
};

export default Contact;

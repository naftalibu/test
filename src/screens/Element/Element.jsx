import React from "react";
import { FiRrArrowSmallLeft1 } from "../../icons/FiRrArrowSmallLeft1";
import { FiRrCaretDown } from "../../icons/FiRrCaretDown";
import { FiRrEnvelope } from "../../icons/FiRrEnvelope";
import { FiRrShieldCheck } from "../../icons/FiRrShieldCheck";
import { FiSrHome } from "../../icons/FiSrHome";
import { FiSrWomanHead } from "../../icons/FiSrWomanHead";
import "./style.css";

export const Element = () => {
  return (
    <div className="element">
      <div className="frame">
        <div className="frame-wrapper">
          <div className="logo-new-web-wrapper">
            <img
              className="logo-new-web"
              alt="Logo new web"
              src="https://c.animaapp.com/OvskMtOq/img/logo-new-web-0-1@2x.png"
            />
          </div>
        </div>
        <div className="line" />
        <div className="div">
          <div className="frame-2">
            <div className="title">
              <div className="text-wrapper">ראשי</div>
            </div>
            <div className="frame-2">
              <div className="div-2">
                <div className="text-wrapper-2">בית</div>
                <div className="frame-3">
                  <FiSrHome className="icon-instance-node" />
                </div>
              </div>
              <div className="div-3">
                <div className="frame-4">
                  <div className="div-wrapper">
                    <div className="text-wrapper-3">חדש</div>
                  </div>
                  <div className="text-wrapper-4">ניהול פניות</div>
                </div>
                <div className="frame-5">
                  <div className="group">
                    <div className="communications">
                      <div className="overlap-group-wrapper">
                        <div className="overlap-group">
                          <img className="vector" alt="Vector" src="https://c.animaapp.com/OvskMtOq/img/vector-1.svg" />
                          <img className="img" alt="Vector" src="https://c.animaapp.com/OvskMtOq/img/vector.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ellipse" />
                </div>
              </div>
              <div className="div-4">
                <div className="text-wrapper-5">פרטי חשבון מנוי</div>
                <img className="img-2" alt="Frame" src="https://c.animaapp.com/OvskMtOq/img/frame-1000004420.svg" />
              </div>
              <div className="div-4">
                <div className="text-wrapper-5">פעולות נוספות</div>
                <FiRrCaretDown className="img-3" />
              </div>
              <div className="div-5">
                <div className="text-wrapper-5">הקלטת גלישה</div>
                <img className="img-3" alt="Recording" src="https://c.animaapp.com/OvskMtOq/img/recording--1--3.svg" />
              </div>
              <div className="div-6">
                <div className="text-wrapper-5">תוסף אתרוג</div>
                <img className="img-2" alt="Puzzle piece" src="https://c.animaapp.com/OvskMtOq/img/puzzle-piece.svg" />
              </div>
              <div className="div-5">
                <div className="text-wrapper-5">תיבת מייל אתרוג</div>
                <div className="frame-3">
                  <FiRrEnvelope className="icon-instance-node" />
                </div>
              </div>
              <div className="div-7">
                <div className="text-wrapper-5">מעבר לכלים ותמיכה</div>
                <img className="img-3" alt="Wrench alt" src="https://c.animaapp.com/OvskMtOq/img/wrench-alt--1-.svg" />
              </div>
            </div>
          </div>
          <div className="frame-6">
            <img className="line-2" alt="Line" src="https://c.animaapp.com/OvskMtOq/img/line-647.svg" />
            <div className="frame-2">
              <div className="title">
                <div className="text-wrapper">הגדרות סינון</div>
              </div>
              <div className="frame-2">
                <div className="div-8">
                  <div className="text-wrapper-5">הגדרות סינון כלליות</div>
                  <div className="frame-7">
                    <FiRrShieldCheck className="icon-instance-node" />
                  </div>
                </div>
                <div className="div-4">
                  <div className="text-wrapper-5">מתחם נשים</div>
                  <div className="frame-7">
                    <FiSrWomanHead className="icon-instance-node" />
                  </div>
                </div>
                <div className="div-9">
                  <div className="text-wrapper-5">ניהול זמן גלישה</div>
                  <img
                    className="img-2"
                    alt="Hourglass end"
                    src="https://c.animaapp.com/OvskMtOq/img/hourglass-end.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="line-3" />
      </div>
      <div className="main">
        <div className="div-10">
          <FiRrArrowSmallLeft1 className="fi-rr-arrow-small" color="#132D23" />
          <div className="frame-8">
            <div className="frame-9">
              <img className="social" alt="Social" src="https://c.animaapp.com/OvskMtOq/img/social--1--1.svg" />
              <p className="p">שדרגנו עבורכם את תוסף הכרום שלנו (02.5.3)</p>
            </div>
            <p className="text-wrapper-6">
              התקינו את התוסף, ותהנו מסרגל כלים עם מגוון פעולות מהירות שניתן לבצע דרכו...
            </p>
            <div className="text-wrapper-7">הסתרת מודעה</div>
          </div>
        </div>
      </div>
    </div>
  );
};

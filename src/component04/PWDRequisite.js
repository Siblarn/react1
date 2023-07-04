import React from "react";

const PWDRequisite = ({
  capsLetterFlag,
  numberFlag,
  pwdLengthFlag,
  specialCharFlag,
}) => {
  return (
    <div>
      <div className="message">
        <h2
          className={capsLetterFlag}
          style={{ fontSize: "20px", fontWeight: "600", lineHeight: "1.9rem" }}
        >
          ต้องมีตัวพิมพ์ใหญ่ 1 ตัว
        </h2>
        <p
          className={numberFlag}
          style={{ fontSize: "20px", fontWeight: "600", lineHeight: "1rem" }}
        >
          ต้องมีตัวเลข
        </p>
        <p
          className={pwdLengthFlag}
          style={{
            fontSize: "20px",
            fontWeight: "600",
            lineHeight: "1rem",
          }}
        >
          
        </p>
        <p
          className={specialCharFlag}
          style={{ fontSize: "20px", fontWeight: "600", lineHeight: "1rem" }}
        >
          ต้องมีอักษรพิเศษ เช่น !, @, #
        </p>
        {""}
      </div>
    </div>
  );
};
export default PWDRequisite;

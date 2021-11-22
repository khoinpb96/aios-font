import { useContext, useState } from "react";

import { languages } from "../../../assets/db";
import { LangContext } from "../../../context/LangContext";
import "./LangSelector.scss";

export default function LangSelector() {
  const { language, languageChange } = useContext(LangContext);
  const [isOpen, setIsOpen] = useState(false);
  const currentLang = languages.find((lang) => lang.name === language);

  return (
    <div className={`languages-selector ${isOpen ? "opened" : ""}`}>
      {!isOpen ? (
        <span
          className="language"
          style={{ backgroundImage: `url(${currentLang.icon})` }}
          onClick={() => setIsOpen(true)}
        />
      ) : (
        languages.map((lang, index) => (
          <span
            key={index}
            style={{
              backgroundImage: `url(${lang.icon})`,
            }}
            className="language"
            onClick={() => {
              languageChange(lang.name);
              setIsOpen(false);
            }}
          />
        ))
      )}
    </div>
  );
}

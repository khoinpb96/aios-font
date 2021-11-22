import { useState } from "react";
import { iconData } from "../../assets/db";
import IconCard from "./IconCard.js";
import "./IconsList.scss";

export default function IconsList({ searchVal }) {
  const data = iconData.filter((icon) => icon.includes(searchVal));

  const [copiedIconIndex, setCopiedIconIndex] = useState("");

  return (
    <div className="iconsList">
      {data.map((iconName, index) => (
        <IconCard
          key={index}
          id={index}
          data={iconName}
          copiedIconIndex={copiedIconIndex}
          setCopiedIconIndex={setCopiedIconIndex}
        />
      ))}
    </div>
  );
}

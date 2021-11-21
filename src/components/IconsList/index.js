import { iconData } from "../../assets/db";
import IconCard from "./IconCard";
import "./IconsList.scss";

export default function IconsList({ searchVal }) {
  const data = iconData.filter((icon) => icon.includes(searchVal));

  return (
    <div className="iconsList">
      {data.map((iconName, index) => (
        <IconCard iconName={iconName} key={index} />
      ))}
    </div>
  );
}

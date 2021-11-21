import "./IconCard.scss";
export default function IconCard({ iconName }) {
  return (
    <div className="iconCard">
      <div className="iconCard__content">
        <i className={iconName} />
      </div>
      <div className="iconCard__title">
        <code>{`<i className=${iconName} />`}</code>
      </div>
    </div>
  );
}

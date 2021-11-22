import "./IconCard.scss";

export default function IconCard({
  id,
  data,
  copiedIconIndex,
  setCopiedIconIndex,
}) {
  const copiedIcon = copiedIconIndex === id;
  const iconHTML = !copiedIcon ? `<i className=${data} />` : "Copied";

  const copyHandler = (e) => {
    setCopiedIconIndex(id);
    const iconToCopy = e.target.innerText;
    navigator.clipboard.writeText(iconToCopy);
  };

  return (
    <div className="iconCard">
      <div className="iconCard__content">
        <i className={data} />
      </div>
      <code className="iconCard__title" onClick={copyHandler}>
        {iconHTML}
      </code>
    </div>
  );
}

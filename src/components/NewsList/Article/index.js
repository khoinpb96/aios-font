import "./Article.scss";
export default function Article({ data }) {
  return (
    <div className="article">
      <div
        className="article__image"
        style={{
          backgroundImage: `url(${data.urlToImage}) `,
        }}
      />
      <div className="article__detail">
        <h4>{data.title}</h4>
        <h5>
          BY {(data.author && data.author.includes("[")) || data.source.name}
        </h5>
        <p>{data.description}</p>
        <a href={data.url} target="_blank">
          Read more
        </a>
      </div>
    </div>
  );
}

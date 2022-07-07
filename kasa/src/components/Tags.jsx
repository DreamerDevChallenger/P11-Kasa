import "../style/css/Tags.css";
function Tags({ tags }) {
  return (
    <div className="tag-container">
      {tags.map((tag) => (
        <div key={tag} className="tag-block">
          <p className="tag-name">{tag}</p>
        </div>
      ))}
    </div>
  );
}

export default Tags;

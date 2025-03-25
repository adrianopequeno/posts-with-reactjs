export const PostCard = ({ title, id, cover, body }) => {
  return (
    <div className="post" key={id}>
      <div className="post-img">
        <img src={cover} alt={title} />
      </div>
      <div className="post-content">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

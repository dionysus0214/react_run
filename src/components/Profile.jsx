export default function Profile({ image, name, job }) {
  return (
    <div className="profile">
      <img className="photo" src={image} alt="avatar" />
      <h1>{name}</h1>
      <p>{job}</p>
    </div>
  );
}

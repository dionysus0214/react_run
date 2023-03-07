export default function Avatar({ image, isNew }) {
  return (
    <>
      <img className="photo" src={image} alt="avatar" />
      {isNew && <span class="new">New</span>}
    </>
  );
}

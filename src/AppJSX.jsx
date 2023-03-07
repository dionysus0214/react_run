import './App.css';

function AppJSX() {
  const name = 'jeje';
  const list = ['봄', '여름', '가을', '겨울'];
  return (
    <>
      <h1 className='orange'>{`Hello! ${name}`}</h1>
      <ul>
        {list.map(item => <li>{item}</li>)}
      </ul>
      <img
        style={{ width: '200px', height: '200px' }}
        src='https://images.unsplash.com/photo-1667964394218-0759343685e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60'
        alt=''
      />
    </>
  );
}

export default AppJSX;

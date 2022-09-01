import styles from './style.module.css';
import { useNavigate } from 'react-router-dom';

const Home = ({ username, setUsername, room, setRoom, socket }) => {
  const navigate = useNavigate();

  const joinRoom = () => {
    if (room !== '' && username !== '') {
      socket.emit('join_room', { username, room });
    }

    // Redirect to /chat
    navigate('/chat', { replace: true });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        
        <h1>{`<>PythonicHub</>`}</h1>
        <input 
          type="text" 
          placeholder='Enter Username...' 
          className={styles.input} 
          onChange={(e) => setUsername(e.target.value)}
        />

        <select 
          className={styles.input}
          onChange={(e) => setRoom(e.target.value)}
        >
          <option>--- Select Room ---</option>
          <option value="javascript">JavaScript</option>
          <option value="tailwind">Tailwind CSS</option>
          <option value="gatsby">Gatsby</option>
          <option value="node">Node</option>
          <option value="express">Express</option>
          <option value="react">React</option>
        </select>

        <button 
          className='btn btn-secondary' 
          style={{ width: '100%' }}
          onClick={joinRoom}>
            Join Room
        </button>
      </div>
    </div>
  )
}

export default Home

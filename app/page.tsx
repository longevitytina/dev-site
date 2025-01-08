import './app.css';
import Avatar from '../components/avatar';
import Pizza from '@/components/pizza';
import Ramen from '@/components/ramen'
import PowerUp from '@/components/powerUp'


export default function Home() {
  return (
    <>
      <div className='header'>
        <Avatar />
        <div className='details'>
          <h3>Tina Taylor</h3>
          <h3>Resume</h3>
          <h3>Socials</h3>
        </div>
      </div>
      <div className='projects'>
        <Pizza />
        {/* TODO: onClick displays a grid of projects previews. Click a project to see a summary modal  */}
        <Ramen />
        <PowerUp />
      </div>
    </>
  );
}

import './ramen.css';
import Image from 'next/image'

export default function Ramen() {
  return (
    <div className="ramen-container">
      <Image src="/ramen-svgrepo-com.svg" width='100' height='100' alt="Ramen Bowl" className="ramen_bowl" />
    </div>
  );
}

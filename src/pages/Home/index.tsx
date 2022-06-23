import { Header } from '../../components/Header';
import { PlayerVideo } from '../../components/Player';
import { SideBar } from '../../components/SideBar';

export function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex flex-1'>
        <PlayerVideo />
        <SideBar />
      </main>
    </div>
  );
}

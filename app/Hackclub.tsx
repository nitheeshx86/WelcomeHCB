import ImageTrail from './components/ImageTrail/ImageTrail';

export default function HackClubHero() {
  const key = 'hackclub-trail';
  
  return (
    <div className="min-h-screen bg-orange-600 flex items-center justify-center relative">
      <div style={{ height: '100vh', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: 10 }}>
        <ImageTrail
          key={key}
          items={[
            '/assets/club/one.png',
            '/assets/club/two.png',
            '/assets/club/four.png',
            '/assets/club/five.png',
            '/assets/club/six.png',
            '/assets/club/seven.png',
          ]}
          variant={7}
        />
      </div>
      <div className='flex flex-col items-center text-center relative z-0'>
        <h1 className="text-8xl md:text-9xl font-black text-black tracking-wider drop-shadow-2xl">
          HACKCLUB
        </h1>
        <h2 className='text-3xl md:text-4xl font-medium text-black tracking-wide drop-shadow-2xl mt-4'>
          Tech.Meets.Innovation.
        </h2>
      </div>
    </div>
  );
}
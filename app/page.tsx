import Header from '@/components/Header';
import ProjectGallery from '@/components/ProjectGallery';
import StickyNav from '@/components/StickyNav';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <StickyNav />
      <Header />
      <main className="flex-1">
        <ProjectGallery />
      </main>
    </div>
  );
}

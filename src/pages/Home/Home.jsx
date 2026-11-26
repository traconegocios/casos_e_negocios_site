import FeaturedNews from '@/components/sections/home/FeaturedNews/FeaturedNews.jsx';
import InstagramFeed from '@/components/sections/home/InstagramFeed/InstagramFeed.jsx';
import Interviews from '@/components/sections/home/Interviews/Interviews.jsx';
import LatestNews from '@/components/sections/home/LatestNews/LatestNews.jsx';
import StayInformed from '@/components/sections/home/StayInformed/StayInformed.jsx';
import PromoBanner from '@/components/shared/PromoBanner/PromoBanner.jsx';
import useDocumentTitle from '@/hooks/useDocumentTitle.js';
import {
  featuredNews,
  interviews,
  latestHeadlines,
  leadStory,
  mainInterview,
  quickHeadlines,
  stayInformed,
} from '@/data/home.js';
import { instagramPosts, instagramProfile } from '@/data/instagram.js';
import styles from './Home.module.css';

export default function Home() {
  useDocumentTitle();

  return (
    <>
      <LatestNews lead={leadStory} headlines={latestHeadlines} />
      <FeaturedNews items={featuredNews} />
      <Interviews main={mainInterview} items={interviews} />
      <StayInformed cards={stayInformed} headlines={quickHeadlines} />
      <div className={styles.promo}>
        <PromoBanner />
      </div>
      <InstagramFeed profile={instagramProfile} posts={instagramPosts} />
    </>
  );
}

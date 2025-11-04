export type DurationBucket = 'short' | 'medium' | 'long'; // <5, 5–20, >20

export interface Video {
  id: string;
  title: string;
  author: string;
  durationSec: number; // 30..5400
  publishedAt: string; // ISO, last 120 days
  thumbnail: string;
}

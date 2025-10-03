declare module 'reading-time' {
  export interface ReadingTimeResults {
    text: string;
    minutes: number;
    time: number;
    words: number;
  }

  export interface ReadingTimeOptions {
    wordsPerMinute?: number;
  }

  export default function readingTime(
    text: string,
    options?: ReadingTimeOptions,
  ): ReadingTimeResults;
}

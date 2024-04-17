// interfaces.ts
export interface League {
  id: number;
  image: string;
  title: string;
  eventCounts: number;
  sportsName: string; // Corrected property name
}

export interface Games {
  id: number;
  image: string;
  title: string;
  date: string;
  day:string;
  time:string;
  location:string;
  collection: string; 
  name:string;
}

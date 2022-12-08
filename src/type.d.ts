export interface Player {
  id: string;
  title: string;
  text: string;
  img: string;
  goals:string;
  matches:string;
  number:string;
  nick:string;
}

export type PlayerApi = Omit<Player, 'id'>;

export interface IDragon {
  id: string;
  createdAt: string;
  name: string;
  type: string;
  histories: string[];
}

export type TBodyDragon = Pick<IDragon, 'name' | 'type'>;

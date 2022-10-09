
interface IRating {
  id?: number;
  rated_id: number;
  score?:number;
  date?: Date;
}

export class Rating {
  id: number;
  rated_id: number;
  score:number;
  date: Date;
  constructor(rating?: IRating) {
    this.id = rating?.id || -1;
    this.rated_id = rating?.rated_id || -1
    this.score = rating?.score || 1;
    this.date = rating?.date || new Date();
  }


}

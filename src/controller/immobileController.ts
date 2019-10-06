import db from '../config/db';

class ImmobileController {
  private db = db

  public index(): Promise<any> {
    return this.db('immobiles').then((immobile) => immobile);
  }

  public store(args): Promise<any> {
    return this.db('immobiles').insert(args).then((_) => args);
  }
}

export default new ImmobileController();

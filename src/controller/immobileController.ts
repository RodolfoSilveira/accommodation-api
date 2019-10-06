import db from '../config/db';

class ImmobileController {
  private db = db

  public index(): Promise<any> {
    return this.db('immobiles').then((immobile) => immobile);
  }

  public show(args): any {
    return new Promise((resolve) => {
      resolve(this.db('immobiles').where('id', args.id).then((immobile) => immobile))
    })
  }

  public store(args): Promise<any> {
    return this.db('immobiles').insert(args).then((_) => args);
  }
}

export default new ImmobileController();

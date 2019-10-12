import db from '../config/db';

class ImmobileController {
  private db = db

  public index(): Promise<any> {
    return this.db('immobiles').then((immobile) => immobile);
  }

  public show(args): any {
    return this.db('immobiles').where('id', args.id).first();
  }

  public store(args): Promise<any> {
    return this.db('immobiles').insert(args).then((_) => args);
  }

  public update(id, args): Promise<any> {
    return this.db('immobiles').where('id', id).update({
      name: args.name,
      price: args.price,
      place: args.place,
      description: args.description,
      owner: args.owner,
    }).then((_) => args);
  }

  public delete(id): Promise<any> {
    return this.db('immobiles').where('id', id).del();
  }
}

export default new ImmobileController();

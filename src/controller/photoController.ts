import db from '../config/db';

class PhotoController {
  private db = db

  public index(): Promise<any> {
    return this.db('photos').then((photo) => photo);
  }

  public find(id): Promise<any> {
    return this.db('photos').where('immobileId', id);
  }

  public show(args): any {
    return this.db('photos').where('id', args.id).first();
  }

  public store(args): Promise<any> {
    return this.db('photos').insert(args).then((_) => args);
  }

  public update(id, args): Promise<any> {
    return this.db('photos').where('id', id).update({
      path: args.path,
      immobileId: args.immobileId,
    }).then((_) => args);
  }

  public delete(id): Promise<any> {
    return this.db('photos').where('id', id).del();
  }
}

export default new PhotoController();

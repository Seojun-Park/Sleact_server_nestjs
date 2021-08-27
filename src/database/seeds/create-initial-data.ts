import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

//first data (seeding)

export class CreateInitialData implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into('Workspaces')
      .values([{ id: 1, name: 'Sleact', url: 'sleact' }])
      .execute();
    await connection
      .createQueryBuilder()
      .insert()
      .into('Channels')
      .values([{ id: 1, name: 'General', WorkspaceId: 1, private: false }])
      .execute();
  }
}

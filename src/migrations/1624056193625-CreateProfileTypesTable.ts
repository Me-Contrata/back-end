import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProfileTypesTable1624056193625 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'profile_types',
              columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                  },
                  {
                      name: 'name',
                      type: 'varchar',
                      isNullable: true,
                  }
              ],
            }),
            false,
          );
        }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('profile_types')
    }

}

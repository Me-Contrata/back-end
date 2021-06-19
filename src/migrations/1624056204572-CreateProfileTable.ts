import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateProfileTable1624056204572 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'profiles',
              columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                  },
                  {
                      name: 'profile_type_id',
                      type: 'int',
                      isNullable: false,
                  },
                  {
                    name: 'user_id',
                    type: 'int',
                    isNullable: false,
                  },
                  {
                      name: 'about_me',
                      type: 'varchar',
                      isNullable: false,
                  }
              ],
            }),
            false,
          );

          await queryRunner.createForeignKey(
            'profiles',
            new TableForeignKey({
              columnNames: ['profile_type_id'],
              referencedTableName: 'profile_types',
              referencedColumnNames: ['id']
            })
          );

          await queryRunner.createForeignKey(
            'profiles',
            new TableForeignKey({
              columnNames: ['user_id'],
              referencedTableName: 'users',
              referencedColumnNames: ['id']
            })
          );
        }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('profiles')
    }

}

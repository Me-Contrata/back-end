import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateProjectsTable1624057600195 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'projects',
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
                      isNullable: false,
                  },
                  {
                      name: 'user_id',
                      type: 'int4',
                      isNullable: false,
                  },
                  {
                      name: 'is_active',
                      type: 'boolean',
                      default: true,
                      isNullable: false,
                  },
                  {
                      name: 'created_at',
                      type: 'timestamp',
                      default: 'CURRENT_TIMESTAMP',
                      isNullable: false,
                  },
                  {
                      name: 'updated_at',
                      type: 'timestamp',
                      default: 'CURRENT_TIMESTAMP',
                      isNullable: false,
                  },
              ],
            }),
            false,
          );

          await queryRunner.createForeignKey(
            'projects',
            new TableForeignKey({
              columnNames: ['user_id'],
              referencedTableName: 'users',
              referencedColumnNames: ['id']
            })
          );
        }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('projects')
    }
}

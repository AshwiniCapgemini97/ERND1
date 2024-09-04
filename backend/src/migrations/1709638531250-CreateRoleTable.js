const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class CreateRoleTable1709638531250 {

    async up(queryRunner) {
        await queryRunner.query(`
        CREATE TABLE roles (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL
        );
  
        INSERT INTO roles (name) VALUES ('admin'), ('user');
      `);
    }

    async down(queryRunner) {
        await queryRunner.query(`
      DROP TABLE roles;
    `);
    }

}

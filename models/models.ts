import { Table, Column, Model, HasMany } from 'sequelize-typescript';
@Table
class Person extends Model {
  @Column
  name: string;
  @Column
  birthday: Date;

  @Table({
    paranoid: true,
    timestamps: true,
    indexes: [{
    unique: true,
    fields: ['description',
   'initialDate', 'finalDate'],
    }],
   });
}


   
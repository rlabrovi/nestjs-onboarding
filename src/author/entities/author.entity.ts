import { Exclude } from 'class-transformer';
import { BookEntity } from 'src/book/entities/book.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  ManyToMany,
} from 'typeorm';

@Entity({ name: 'authors' })
export class AuthorEntity {
  @Exclude()
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ type: 'date', nullable: true })
  birthDate: Date | null;

  @Exclude()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Exclude()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @ManyToMany(() => BookEntity, (book) => book.authors)
  books: BookEntity[];

  @BeforeInsert()
  updateTimestamp() {
    this.updatedAt = new Date();
  }
}

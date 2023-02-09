import { Exclude } from 'class-transformer';
import { AuthorEntity } from 'src/author/entities/author.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity({ name: 'books' })
export class BookEntity {
  @Exclude()
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  isbn: string;

  @Column()
  pages: number;

  @Exclude()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Exclude()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @ManyToMany(() => AuthorEntity, (author) => author.books)
  @JoinTable({ name: 'books_authors' })
  authors: AuthorEntity[];

  @BeforeInsert()
  updateTimestamp() {
    this.updatedAt = new Date();
  }
}

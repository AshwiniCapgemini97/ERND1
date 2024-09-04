// user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn, UpdateDateColumn } from 'typeorm';
import { UserStatus } from '../../shared/status.enum';
import { Role } from '../../roles/entities/role.entity';
@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column({ nullable: true })
    account_name: string;

    @Column({ nullable: true })
    project_name: string;

    @Column({ nullable: true })
    project_id: string;

    @Column({ nullable: true })
    project_manager: string;


    @Column({ nullable: true })
    token: string;

    @Column({ type: 'enum', enum: UserStatus, default: UserStatus.INACTIVE })
    status: UserStatus;

    @Column()
    password: string;


    @Column({ nullable: true }) // nullable: true allows the column to be null
    approved_by: number; // user_id of the approver user

    @ManyToOne(() => User, { nullable: true, onDelete: 'SET NULL'})
    @JoinColumn({ name: 'approved_by' })
    approver: User;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }) // Use database default value
    approved_date: Date; // current date/time when user is approved

    @ManyToOne(() => Role, { eager: true })
    @JoinColumn({ name: 'role_id' })
    role: Role;

    @Column({ default: 2 }) // Set the default value to 2
    role_id: number;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    get approverName(): string {
        // const baseUrl = 'http://example.com'; // Replace this with your base URL
        return `test`; // Adjust the path as per your directory structure
    }
}

import { UserStatus } from '../../shared/status.enum';
import { Role } from '../../roles/entities/role.entity';
export declare class User {
    id: number;
    name: string;
    email: string;
    account_name: string;
    project_name: string;
    project_id: string;
    project_manager: string;
    token: string;
    status: UserStatus;
    password: string;
    approved_by: number;
    approver: User;
    approved_date: Date;
    role: Role;
    role_id: number;
    created_at: Date;
    updated_at: Date;
    get approverName(): string;
}

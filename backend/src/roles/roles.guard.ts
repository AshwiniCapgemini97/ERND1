// roles.guard.ts
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RolesService } from '../roles/roles.service';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector, private rolesService: RolesService) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const requiredRoles = this.reflector.get<Role[]>('roles', context.getHandler());
        if (!requiredRoles) {
            return true; // No roles specified, allow access
        }

        const request = context.switchToHttp().getRequest();
        const userId = request.user.id; // Assuming user ID is attached to the request after authentication

        // Fetch the user from the database
        const user = await this.rolesService.findOne(userId);

        // Check if the user has the required role
        return requiredRoles.includes(user);
    }
}

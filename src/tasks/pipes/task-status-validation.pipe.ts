/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { PipeTransform, BadRequestException } from "@nestjs/common";
import { TaskStatus } from "../task-status.enum";

export class TaskStatusValidationPipe implements PipeTransform {
    readonly allowedStatuses = [
        TaskStatus.DONE,
        TaskStatus.IN_PROGRESS,
        TaskStatus.OPEN,
    ];

    transform(value: any) {
        if(!this.isStatusValid(value)) {
            throw new BadRequestException(`${value} is an invalid Status`);
        }
        return value;
    }

    private isStatusValid(status: any) {
        const idx = this.allowedStatuses.indexOf(status);

        return idx !== -1;
    }
}
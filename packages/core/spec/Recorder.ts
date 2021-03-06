import { DomainEvent } from '../src/events';
import { Stage, StageCrewMember } from '../src/stage';

export class Recorder implements StageCrewMember {

    constructor(
        public readonly events: DomainEvent[] = [],
        private readonly stage: Stage = null,
    ) {
    }

    assignedTo(stage: Stage) {
        return new Recorder(this.events, stage);
    }

    notifyOf(event: DomainEvent) {
        this.events.push(event);
    }
}

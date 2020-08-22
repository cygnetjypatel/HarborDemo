import { BoatTypes, StatusTypes } from '../../constants/enums';

export class Boat {
    boatId: number;
    boatType: BoatTypes;
    boatSpeed: number;
    duration: number;
    boatStatus: StatusTypes;
    warning: string;
}
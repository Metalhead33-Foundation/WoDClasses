export class RpgCharacter {
    character_name : string;
    characterpic : string;
    isFromFlist : boolean;
};
export type RpgCharacterStore = Map<string,RpgCharacter>;
export class RpgCharacter {
    character_name : string;
    characterpic : string;
    isFromFlist : boolean;
    constructor(character_name : string, characterpic : string, isFromFlist = false) {
        this.character_name = character_name;
        this.characterpic = characterpic;
        this.isFromFlist = isFromFlist;
    }
};
export type RpgCharacterStore = Map<string,RpgCharacter>;

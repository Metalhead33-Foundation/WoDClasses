export function chronological2biologicalAgeD(chronologicalAge : number, divisor : number) : number {
    return (chronologicalAge > 18) ? (((chronologicalAge-18) / divisor) + 18) : chronologicalAge;
}
/*export const enum AgeRace {
    human = "human",
    elf = "elf",
    half_elf = "half_elf",
    orc = "orc",
    half_orc = "half_orc",
    lizardman = "lizardman",
    dwarf = "dwarf",
    halfling = "halfling",
    gnome = "gnome",
    limjiang = "limjiang",
    azisiri = "azisiri",
    ogre = "ogre",
    goblin = "goblin"
}*/
export enum AgeRace {
    human = 0,
    elf,
    half_elf,
    orc,
    half_orc,
    lizardman,
    dwarf,
    halfling,
    gnome,
    limjiang,
    azisiri,
    ogre,
    goblin
};

export function chronological2biologicalAgeR(chronologicalAge : number, race : AgeRace) : number {
    switch( race ) {
        case AgeRace.human: return chronologicalAge;
        case AgeRace.elf: return chronological2biologicalAgeD(chronologicalAge,10);
        case AgeRace.half_elf: return chronological2biologicalAgeD(chronologicalAge,5);
        case AgeRace.orc: return chronological2biologicalAgeD(chronologicalAge,2.93548);
        case AgeRace.half_orc: return chronological2biologicalAgeD(chronologicalAge,1.46774);
        case AgeRace.lizardman: return chronological2biologicalAgeD(chronologicalAge,14.22581);
        case AgeRace.dwarf: // Fall-through
        case AgeRace.halfling: return chronological2biologicalAgeD(chronologicalAge,2.12903);
        case AgeRace.gnome: return chronological2biologicalAgeD(chronologicalAge,5.65278);
        case AgeRace.limjiang: return chronological2biologicalAgeD(chronologicalAge,1.83838);
        case AgeRace.azisiri: return chronological2biologicalAgeD(chronologicalAge,2.7647058823529);
        case AgeRace.ogre: return chronological2biologicalAgeD(chronologicalAge,2);
        case AgeRace.goblin: return chronological2biologicalAgeD(chronologicalAge,2);
        default: return chronologicalAge;
    }
}

export function formatAgeR(birth : number, now : number, race : AgeRace, true_date : boolean, final_rounding_flag : boolean) : number {
    if(true_date) {
        birth = Math.floor(birth * 365.25 / 376);
        now = Math.floor(now * 365.25 / 376);
    } else {
        birth = Math.floor(birth);
        now = Math.floor(now);
    }
    const years = chronological2biologicalAgeR(now - birth,race);
    return (final_rounding_flag) ? Math.floor(years) : years;
}

const ROUNDING_STAR = '*';
const TRUE_FORMAT = 'true';
const TRUE_FORMAT_SUFFIX = '_true';

export function formatAge(formatt : string, birth : number, now : number) : number {
    const final_rounding_flag = formatt.endsWith(ROUNDING_STAR);
    if(final_rounding_flag) {
        formatt = formatt.substring(0,formatt.length-1);
    }
    var true_format : boolean;
    if(formatt.endsWith(TRUE_FORMAT_SUFFIX)) {
        true_format = true;
        formatt = formatt.substring(0,formatt.length - TRUE_FORMAT_SUFFIX.length);
    } else if(formatt === TRUE_FORMAT) {
        true_format = true;
        formatt = "human";
    } else {
        true_format = false;
    }
    return formatAgeR(birth,now,AgeRace[formatt],true_format,final_rounding_flag);
}
export enum AlignmentN {
    // First two bits
    LNC_LAWFUL = 0x01,
    LNC_NEUTRAL = 0x02,
    LNC_CHAOTIC = 0x03,
    LNC_MASK = 0x03,
    // Third and fourth bits
    GNE_GOOD = 0x04,
    GNE_NEUTRAL = 0x08,
    GNE_EVIL = 0x0C,
    GNE_MASK = 0x0C,
    // Combined alignments
    LAWFUL_GOOD = LNC_LAWFUL | GNE_GOOD,
    LAWFUL_NEUTRAL = LNC_LAWFUL | GNE_NEUTRAL,
    LAWFUL_EVIL = LNC_LAWFUL | GNE_EVIL,
    NEUTRAL_GOOD = LNC_NEUTRAL | GNE_GOOD,
    NEUTRAL_NEUTRAL = LNC_NEUTRAL | GNE_NEUTRAL,
    NEUTRAL_EVIL = LNC_NEUTRAL | GNE_EVIL,
    CHAOTIC_GOOD = LNC_CHAOTIC | GNE_GOOD,
    CHAOTIC_NEUTRAL = LNC_CHAOTIC | GNE_NEUTRAL,
    CHAOTIC_EVIL = LNC_CHAOTIC | GNE_EVIL,
}
export enum AlignmentS {
    "Lawful Good" = AlignmentN.LAWFUL_GOOD,
    "Lawful Neutral" = AlignmentN.LAWFUL_NEUTRAL,
    "Lawful Evil" = AlignmentN.LAWFUL_EVIL,
    "Neutral Good" = AlignmentN.NEUTRAL_GOOD,
    "True Neutral" = AlignmentN.NEUTRAL_NEUTRAL,
    "Neutral Evil" = AlignmentN.NEUTRAL_EVIL,
    "Chaotic Good" = AlignmentN.CHAOTIC_GOOD,
    "Chaotic Neutral" = AlignmentN.CHAOTIC_NEUTRAL,
    "Chaotic Evil" = AlignmentN.CHAOTIC_EVIL
}
export function calculateAlignmentLegacy(lnc : number, gne : number) : AlignmentN {
    var lnce : AlignmentN;
    var gnee : AlignmentN;
    if(lnc >= 0.66666666666667) {
        lnce = AlignmentN.LNC_LAWFUL;
    } else if(lnc >= 0.33333333333333) {
        lnce = AlignmentN.LNC_NEUTRAL;
    } else {
        lnce = AlignmentN.LNC_CHAOTIC;
    }
    if(gne >= 0.66666666666667) {
        gnee = AlignmentN.GNE_GOOD;
    } else if(gne >= 0.33333333333333) {
        gnee = AlignmentN.GNE_NEUTRAL;
    } else {
        gnee = AlignmentN.GNE_EVIL;
    }
    return lnce | gnee;
}
export function calculateAlignment(lnc : number, gne : number) : AlignmentN {
    var lnce : AlignmentN;
    var gnee : AlignmentN;
    if(lnc >= 0.33333333333333) {
        lnce = AlignmentN.LNC_LAWFUL;
    } else if(lnc >= -0.33333333333333) {
        lnce = AlignmentN.LNC_NEUTRAL;
    } else {
        lnce = AlignmentN.LNC_CHAOTIC;
    }
    if(gne >= 0.33333333333333) {
        gnee = AlignmentN.GNE_GOOD;
    } else if(gne >= -0.33333333333333) {
        gnee = AlignmentN.GNE_NEUTRAL;
    } else {
        gnee = AlignmentN.GNE_EVIL;
    }
    return lnce | gnee;
}
export type DocumentData = {
    codeFolder: string;
    processNumber: string;
    yearMonth: string;
    opposingParty: string;
    activationDate: string; // ISO date string
    citationDate: string; // ISO date string
    occurrenceDate: string; // ISO date string
    legalArea: string;
    costCenter: string;
    caseValue: number;
    estimatedValue: number;
    mainLawyer: string;
    organization: string;
    office: string;
    status: string;
    closureDate: string; // ISO date string
    closureMode: string;
    municipality: string;
    city: string;
    state: string;
    region: string;
    opposingLawyer: string;
    opposingState: string;
    contractCpf: string;
    contractCnpj: string;
    team: string;
    markCaseAsCompleted: boolean;
};
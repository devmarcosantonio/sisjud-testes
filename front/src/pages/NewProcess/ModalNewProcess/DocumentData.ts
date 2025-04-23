export interface DocumentData {
    codigoPasta?: string;
    numeroProcesso?: string;
    parteContraria?: string;
    dataAtivacao?: string; // Formato de data (YYYY-MM-DD)
    dataCitacao?: string; // Formato de data (YYYY-MM-DD)
    dataOcorrencia?: string; // Formato de data (YYYY-MM-DD)
    areaJuridica?: string;
    centroCusto?: string;
    valorCausa?: number;
    valorEstimado?: number;
    advogadoPrincipal?: string;
    orgao?: string;
    escritorio?: string;
    status?: string;
    dataEncerramento?: string; // Formato de data (YYYY-MM-DD)
    modoEncerramento?: string;
    municipio?: string;
    cidade?: string;
    uf?: string;
    regional?: string;
    advogadoContrario?: string;
    ufContrario?: string;
    cpfContrato?: string;
    cnpjContrato?: string;
    equipe?: string;
    concluido?: boolean;
}
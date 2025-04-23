import express, { Request, Response } from 'express';
import multer from 'multer';

import { storage } from './multerConfig';
import cors from 'cors';

const app = express();
const port = 3000;

const upload = multer({ storage: storage });

// Habilita o CORS
app.use(cors());
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
  dataEncerramento?: string // Formato de data (YYYY-MM-DD)
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
const data:DocumentData = {
  codigoPasta: "EQ12345",
  numeroProcesso: "0001234-56.2023.8.00.0000",
  parteContraria: "Equatorial Energia",
  dataAtivacao: "2023-01-15",
  dataCitacao: "2023-01-20",
  dataOcorrencia: "2023-01-10",
  areaJuridica: "Direito do Consumidor",
  centroCusto: "CC001",
  valorCausa: 15000.00,
  valorEstimado: 20000.00,
  advogadoPrincipal: "Dr. João Silva",
  orgao: "Tribunal de Justiça",
  escritorio: "Advocacia Silva e Associados",
  status: "Em andamento",
  municipio: "São Luís",
  cidade: "São Luís",
  uf: "MA",
  regional: "Nordeste",
  advogadoContrario: "Dr. Maria Oliveira",
  ufContrario: "MA",
  cpfContrato: "123.456.789-00",
  cnpjContrato: "12.345.678/0001-99",
  equipe: "Equipe A",
  concluido: false
  }

app.post('/upload', upload.single('file'), (req, res) => {
    setTimeout(() => {
        res.json(data);
    }, 5000)
   
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
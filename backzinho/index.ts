import express, { Request, Response } from 'express';
import multer from 'multer';

import { storage } from './multerConfig';
import cors from 'cors';

const app = express();
const port = 3000;

const upload = multer({ storage: storage });

// Habilita o CORS
app.use(cors());

const data = {
    "codeFolder": "2022671899",
    "processNumber": "0805640-92.2022.8.10.0076",
    "yearMonth": "2018-11",
    "opposingParty": "FERNANDO CARVALHO DE MORAES",
    "activationDate": "2018-11-23T00:00:00",
    "citationDate": "2018-11-23T00:00:00",
    "occurrenceDate": "2018-11-23T00:00:00",
    "legalArea": "CIVEL",
    "costCenter": "RECUPERACAO",
    "caseValue": 15399.00,
    "estimatedValue": 2000.00,
    "mainLawyer": "JULIANA NUNES LAMAR",
    "organization": "1 VARA",
    "office": "GALVAO LEONARDO ADVOCACIA",
    "status": "ATIVO",
    "closureDate": "2018-11-23T00:00:00",
    "closureMode": "Modo de Encerramento",
    "municipality": "BREJO",
    "city": "BREJO",
    "state": "MA",
    "region": "LESTE",
    "opposingLawyer": "RAIMUNDO NONATO CHAVES DE LIMA SIPAUBA FILHO",
    "opposingState": "MA",
    "contractCpf": "257.430.153-68",
    "contractCnpj": "",
    "team": "Equipe",
    "markCaseAsCompleted": true
  }

app.post('/upload', upload.single('file'), (req, res) => {
    setTimeout(() => {
        res.json(data);
    }, 5000)
   
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
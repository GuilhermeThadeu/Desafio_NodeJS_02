/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log("Desafio 02 Starts");

	const nome1:string = "Ubuntu Silva";
	const idade1:number = 25;
	const peso1:number = 70;
	const altura1:number = 1.80;
	const ehDev1:boolean = true;

	const nome2:string = "Ubuntu Santos";
	const idade2:number = 30;
	const peso2:number = 72.5;
	const altura2:number = 1.77;
	const ehDev2:boolean = true;

	const nome3:string = "Ubuntu Oliveira";
	const idade3:number = 22;
	const peso3:number = 63;
	const altura3:number = 1.60;
	const ehDev3:boolean = true;

	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05

	console.log(nome1, idade1, peso1, altura1, ehDev1);
	console.log(nome2, idade2, peso2, altura2, ehDev2);
	console.log(nome3, idade3, peso3, altura3, ehDev3);

	//R01
	const age = idade1 + idade2 + idade3;
	console.log(`idade total dos ubuntus e ${age} anos`);

	//R02
	console.log(`os ubuntus sao: ubuntu1: ${nome1}, ubuntu2: ${nome2}, ubuntu3: ${nome3}`);

	//R03
	const imc1 = peso1 / (altura1*altura1);
	const imc2 = peso2 / (altura2*altura3);
	const imc3 = peso3 / (altura3*altura3);

	console.log(`o IMC do ubuntu 1 e: ${imc1}.`);
	console.log(`o IMC do ubuntu 2 e: ${imc2}.`);
	console.log(`o IMC do ubuntu 3 e: ${imc3}.`);

	//R04
	let devcount = 0;
	if (ehDev1 == true)
	{
		devcount++;
	}
	if (ehDev2 == true)
	{
		devcount++;
	}
	if (ehDev3 == true)
	{
		devcount++;
	}

	console.log(`quantidade de ubuntu que sao devs:${devcount}`);

	//R05
	let vetnome = [];
		vetnome = nome1.split(" ");
	if (vetnome[1] === "Silva")
	{
		console.log(nome1);
	}
	vetnome = nome2.split(" ");
	if (vetnome[1] === "Silva")
	{
		console.log(nome2);
	}
	vetnome = nome3.split(" ");
	if (vetnome[1] === "Silva")
	{
		console.log(nome3);
	}

});

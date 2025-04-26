import 'dotenv/config';
import { readFile } from 'fs/promises';
import path from 'path';
import {langbase} from './utils';

async function main() {
	const cwd = process.cwd();
	const memoryName = 'knowledge-base';

	// Upload agent architecture document
	const agentArchitecture = await readFile(path.join(cwd, 'docs', 'RAG.pdf'));
	const agentResult = await langbase.memories.documents.upload({
		memoryName,
		contentType: 'application/pdf',
		documentName: 'RAG.pdf',
		document: agentArchitecture,
		meta: { category: 'Examples', topic: 'Agent architecture' },
	});

	console.log(agentResult.ok ? '✓ Agent doc uploaded' : '✗ Agent doc failed');
}

main();

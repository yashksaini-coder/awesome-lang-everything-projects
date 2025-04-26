import 'dotenv/config';
import {langbase} from './utils';


async function main() {
	const memory = await langbase.memories.create({
		name: 'knowledge-base',
		description: 'An AI memory for agentic memory workshop',
		embedding_model: 'google:text-embedding-004',
	});

	console.log('AI Memory:', memory);
}

main();

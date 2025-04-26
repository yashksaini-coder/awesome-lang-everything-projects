import { runMemoryAgent, runAiSupportAgent } from './agents';


async function main() {
	const query = 'What is agent parallelization?';
	const chunks = await runMemoryAgent(query, 5);

	const completion = await runAiSupportAgent({
		chunks,
		query,
	});

	console.log('Completion:', completion);
}

main();

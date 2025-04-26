import 'dotenv/config';
import { langbase } from './utils';


async function main() {
	const supportAgent = await langbase.pipes.create({
		name: `ai-support-agent`,
		description: `An AI agent to support users with their queries.`,
		messages: [
			{
				role: `system`,
				content: `You're a helpful AI assistant.
				You will assist the user with their queries and help them.
				Always ensure that you provide accurate and to the point information.`,
			},
		],
	});

	console.log('Support agent:', supportAgent);
}

main();

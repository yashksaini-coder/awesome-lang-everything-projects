import { Langbase } from "langbase";

export const langbase = new Langbase({
	apiKey: process.env.LANGBASE_API_KEY!,
	 
});

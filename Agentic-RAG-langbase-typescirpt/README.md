# RAG AI Agent using TypeScript Langbase SDK

This project demonstrates building a Retrieval-Augmented Generation (RAG) system using the Langbase SDK and TypeScript.

## Features

- **Memory Management**: Create and manage AI memories for storing and retrieving knowledge.
- **AI Agents**: Build AI agents to assist users with queries.
- **Google Model Integration**: Uses Google's `text-embedding-004` model for embeddings.
- **Document Upload**: Upload and manage documents for knowledge bases.

## Prerequisites

- npx.js v22.11.0 or later
- An API key from Langbase.com

## Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd Agentic-RAG-langbase-typescirpt
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Langbase API key:
   ```env
   LANGBASE_API_KEY=your_api_key_here
   ```

## Usage

### Create a Memory

Run the `create-memory.ts` script to create a knowledge base memory:

```bash
npx create-memory.ts
```

### Upload Documents

Upload documents to the knowledge base using the `upload-docs.ts` script:

```bash
npx upload-docs.ts
```

### Create an AI Pipe

Create an AI support agent using the `create-pipe.ts` script:

```bash
npx create-pipe.ts
```

### Query the AI Agent

Run the `index.ts` script to query the AI agent:

```bash
npx index.ts
```

## Project Structure

- `agents.ts`: Contains logic for running AI agents.
- `create-memory.ts`: Script to create a knowledge base memory.
- `create-pipe.ts`: Script to create an AI pipe.
- `upload-docs.ts`: Script to upload documents to the knowledge base.
- `utils.ts`: Utility functions and Langbase configuration.
- `docs/`: Directory containing documents to upload.

## Author

<a href="https://github.com/yashksaini-coder">
    <table>
        <tbody>
            <tr>
                <td align="left" valign="top">
                    <img src="https://github.com/yashksaini-coder.png?s=60" width="130px;"/>
                    <br/>
                    <h4 align="center">
                        <b>Yash K. Saini</b>
                    </h4>
                    <div align="center">
                        <p>(Author)</p>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</a>
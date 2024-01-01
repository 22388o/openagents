import { Step } from '@/types/agents';

export const demoSteps: Step[] = [
  {
    agent_id: 1,
    category: 'validation',
    created_at: '2023-08-31T15:00:00.000Z',
    description: "Ensure input is a valid chat message",
    entry_type: 'input',
    error_message: "Could not validate input",
    id: 1,
    name: "Validate Input",
    order: 1,
    success_action: "next_node",
    task_id: 1,
    updated_at: '2023-08-31T15:00:00.000Z',
  },
  {
    agent_id: 1,
    category: 'embedding',
    created_at: '2023-08-31T15:00:00.000Z',
    description: "Convert input to vector embedding",
    entry_type: 'node',
    error_message: "Could not generate embedding",
    id: 2,
    name: "Embed Input",
    order: 2,
    success_action: "next_node",
    task_id: 1,
    updated_at: '2023-08-31T15:00:00.000Z',
  },
  {
    agent_id: 1,
    category: 'similarity_search',
    created_at: '2023-08-31T15:00:00.000Z',
    description: "Compare input to knowledge base",
    entry_type: 'node',
    error_message: "Could not run similarity search",
    id: 3,
    name: "Similarity Search",
    order: 3,
    success_action: "next_node",
    task_id: 1,
    updated_at: '2023-08-31T15:00:00.000Z',
  },
  {
    agent_id: 1,
    category: 'inference',
    created_at: '2023-08-31T15:00:00.000Z',
    description: "Call to LLM to generate response",
    entry_type: 'node',
    error_message: "Could not call to LLM",
    id: 4,
    name: "Call LLM",
    order: 4,
    success_action: "json_response",
    task_id: 1,
    updated_at: '2023-08-31T15:00:00.000Z',
  }
];

export const demoStep: Step = demoSteps[0]
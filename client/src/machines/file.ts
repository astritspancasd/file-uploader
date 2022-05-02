import { assign, createMachine } from "xstate";

export const fileMachine = createMachine(
  {
    id: "file-upload",
    initial: "idle",
    context: {
      results: undefined,
      message: undefined,
    },
    states: {
      idle: {
        on: {
          FETCH: "pending",
        },
      },
      pending: {
        entry: ['fetchData'],
        on: {
          RESOLVE: { target: "successful", actions: ["setResults"] },
          REJECT: "failed",
        },
      },
      failed: {
        on: {
          FETCH: "pending",
        },
      },
      successful: {
        on: {
          FETCH: "pending",
        },
      },
    },
  },
  {
    actions: {
      setResults: assign((ctx, event: any) => ({
        results: event.results,
      })),
      setMessage: assign((ctx, event: any) => ({
        message: event.message,
      })),
    },
  }
);

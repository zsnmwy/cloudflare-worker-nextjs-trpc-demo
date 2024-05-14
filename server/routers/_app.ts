/**
 * This file contains the root router of your tRPC-backend
 */
import { createCallerFactory, publicProcedure, router } from '../trpc';
import { postRouter } from './post';

export const appRouter = router({
  healthcheck: publicProcedure.query(() =>  `From Edge Function: ${new Date().toISOString()}`),

  post: postRouter,
});

export const createCaller = createCallerFactory(appRouter);

export type AppRouter = typeof appRouter;

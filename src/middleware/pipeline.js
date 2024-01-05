/**
 * 實現自定義middleware的function，負責遞迴meta.middleware
 */
const pipelineMiddleware = (context, middleware, index) => {
  const nextMiddleware = middleware[index];

  if (!nextMiddleware) {
    return context.next;
  }

  return () => {
    const nextPipeline = pipelineMiddleware(context, middleware, index + 1);
    nextMiddleware({
      ...context,
      pipe: nextPipeline,
    });
  };
};

export default pipelineMiddleware;

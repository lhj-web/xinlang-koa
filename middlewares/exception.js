
const catchError = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    
  }
}
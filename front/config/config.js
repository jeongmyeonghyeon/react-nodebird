const { backUrl } = process.env.NODE_ENV === 'production' ? 'http://api.jngmnghn.com' : 'http://localhost:3065';

export { backUrl };

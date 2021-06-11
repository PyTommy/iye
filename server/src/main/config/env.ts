export default {
	mongoUrl: process.env.MONGO_URL || 'mongo:27017/clean-node-api',
	port: process.env.LISTENING_PORT || 5000,
};

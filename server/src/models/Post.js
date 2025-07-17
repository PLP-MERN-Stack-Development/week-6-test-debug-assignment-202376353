// Increase Jest timeout for setup
jest.setTimeout(30000); // 30 seconds

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create({
    instance: {
      // Use a fixed port to avoid potential conflicts
      port: 27018
    }
  });
  const mongoUri = mongoServer.getUri();
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
});
import { Client, Databases, ID } from "node-appwrite";
import { appwriteConfig } from "@/lib/appwrite/config";

const testCreateDocument = async () => {
  const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId)
    .setKey(appwriteConfig.secretKey);

  const databases = new Databases(client);

  try {
    const response = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      ID.unique(),
      { fullName: "Teste User", email: "teste@example.com" },
    );
    console.log("✅ Documento criado:", response);
  } catch (error) {
    console.error("❌ Falha ao criar documento:", error);
  }
};

testCreateDocument();

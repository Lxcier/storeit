import { Client } from "node-appwrite";
import { appwriteConfig } from "@/lib/appwrite/config";

const testConnection = async () => {
  const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId)
    .setKey(appwriteConfig.secretKey);

  try {
    const response = await fetch(`${appwriteConfig.endpointUrl}/v1/health`);
    const health = await response.json();
    console.log("🔹 Status do Appwrite:", health);
  } catch (error) {
    console.error("❌ Falha ao conectar ao Appwrite:", error);
  }
};

testConnection();

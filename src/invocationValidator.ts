import {
  IntegrationInstanceConfigError,
  IntegrationValidationContext,
} from "@jupiterone/jupiter-managed-integration-sdk";
import { VeracodeIntegrationInstanceConfig } from "./types";

export default async function invocationValidator(
  context: IntegrationValidationContext,
) {
  const config = context.instance.config as VeracodeIntegrationInstanceConfig;
  if (!config) {
    throw new IntegrationInstanceConfigError("Missing configuration");
  } else if (!config.veracodeApiId || !config.veracodeApiSecret) {
    throw new IntegrationInstanceConfigError(
      "veracodeApiId and veracodeApiSecret are required",
    );
  }
}

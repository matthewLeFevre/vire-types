import { z } from "zod";
import {
  EffectBehaviors,
  EffectPolarities,
  ModifierLifetimeTypes,
  ModifierScopes,
  TargetTypes,
} from "./enum";

export const gameSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  mapBackground: z.string().nullable(),
  mapOutline: z.string().nullable(),
  mainImage: z.string().nullable(),
  height: z.number(),
  width: z.number(),
  speed: z.number(),
  smallCycle: z.number(),
  largeCycle: z.number(),
  currencyResourceId: z.string().nullable(),
  isHexGrid: z.boolean(),
  status: z.string(),
  folderName: z.string(),
  userId: z.string()
});

// === damage ===
export const damageSchema = z.object({
  id: z.string(),
  name: z.string().nullable(),
  description: z.string().nullable(),
  icon: z.string().nullable(),
  gameId: z.string(),
});

// === resource ===
export const resourceSchema = z.object({
  id: z.string(),
  name: z.string().nullable(),
  description: z.string().nullable(),
  icon: z.string().nullable(),
  gameId: z.string(),
  isUnique: z.boolean().default(false),
  isMarketable: z.boolean().default(true),
  isCurrency: z.boolean().default(false),
  baseValue: z.number().int().default(1),
});

// === building ===
export const buildingSchema = z.object({
  id: z.string(),
  gameId: z.string(),
  name: z.string().nullable(),
  description: z.string().nullable(),
  icon: z.string().nullable(),
  level: z.number().int().nullable(),
  buildTime: z.number().int().nullable(),
  nationMax: z.number().int().nullable(),
  territoryMax: z.number().int().nullable(),
  canDestroy: z.boolean().default(true),
});

// === buildingCost ===
export const buildingCostSchema = z.object({
  id: z.string(),
  buildingId: z.string().nullable(),
  resourceId: z.string().nullable(),
  quantity: z.number().int().nullable(),
});

// === buildingUpkeep ===
export const buildingUpkeepSchema = z.object({
  id: z.string(),
  buildingId: z.string().nullable(),
  resourceId: z.string().nullable(),
  quantity: z.number().int().nullable(),
});

// === profile ===
export const profileSchema = z.object({
  id: z.string(),
  gameId: z.string(),
  name: z.string().nullable(),
  description: z.string().nullable(),
  icon: z.string().nullable(),
});

// === node ===
export const nodeSchema = z.object({
  id: z.string(),
  profileId: z.string(),
  type: z.string(),
  name: z.string().nullable(),
  parentId: z.string().nullable(),
  position: z.number().int().nullable(),
  config: z.string().nullable(),
});

// === user ===
export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

// === session ===
export const sessionSchema = z.object({
  id: z.string(),
  expiresAt: z.date(),
  token: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  ipAddress: z.string().nullable(),
  userAgent: z.string().nullable(),
  userId: z.string(),
});

// === account ===
export const accountSchema = z.object({
  id: z.string(),
  accountId: z.string(),
  providerId: z.string(),
  userId: z.string(),
  accessToken: z.string().nullable(),
  refreshToken: z.string().nullable(),
  idToken: z.string().nullable(),
  accessTokenExpiresAt: z.date().nullable(),
  refreshTokenExpiresAt: z.date().nullable(),
  scope: z.string().nullable(),
  password: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

// === verification ===
export const verificationSchema = z.object({
  id: z.string(),
  identifier: z.string(),
  value: z.string(),
  expiresAt: z.date(),
  createdAt: z.date().nullable(),
  updatedAt: z.date().nullable(),
});

// === nation ===
export const nationSchema = z.object({
  id: z.string(),
  gameId: z.string(),
  name: z.string().nullable(),
  description: z.string().nullable(),
  icon: z.string().nullable(),
  primaryColor: z.string().nullable(),
  secondaryColor: z.string().nullable(),
  armyIcon: z.string().nullable(),
  playable: z.boolean().default(true),
  startingX: z.number().int().nullable(),
  startingY: z.number().int().nullable(),
});

// === unit ===
export const unitSchema = z.object({
  id: z.string(),
  gameId: z.string(),
  name: z.string().nullable(),
  description: z.string().nullable(),
  icon: z.string().nullable(),
  health: z.number().int().nullable(),
  speed: z.number().int().nullable(),
  trainTime: z.number().int().nullable(),
  trainable: z.boolean().default(true),
  hireable: z.boolean().default(true),
});

// === unit_train_cost / unit_hire_cost / unit_upkeep / unit_damage / unit_defense ===
const unitCostSchemaBase = {
  id: z.string(),
  unitId: z.string().nullable(),
  resourceId: z.string().nullable(),
  quantity: z.number().int().nullable(),
};

export const unitTrainCostSchema = z.object(unitCostSchemaBase);
export const unitHireCostSchema = z.object(unitCostSchemaBase);
export const unitUpkeepSchema = z.object(unitCostSchemaBase);

export const unitDamageSchema = z.object({
  id: z.string(),
  unitId: z.string().nullable(),
  damageId: z.string().nullable(),
  quantity: z.number().int().nullable(),
});

export const unitDefenseSchema = z.object({
  id: z.string(),
  unitId: z.string().nullable(),
  damageId: z.string().nullable(),
  quantity: z.number().int().nullable(),
});

// === buildable_building ===
export const buildableBuildingSchema = z.object({
  id: z.string(),
  buildingId: z.string().nullable(),
  nationId: z.string().nullable(),
});

// === territory_building ===
export const territoryBuildingSchema = z.object({
  id: z.string(),
  buildingId: z.string().nullable(),
  territoryId: z.string().nullable(),
  quantity: z.number().int().nullable(),
});

// === territory_unit ===
export const territoryUnitSchema = z.object({
  id: z.string(),
  unitId: z.string().nullable(),
  territoryId: z.string().nullable(),
  quantity: z.number().int().nullable(),
});

// Starting Resource Schema
export const startingResourceSchema = z.object({
  id: z.string(),
  nationId: z.string(),
  resourceId: z.string(),
  quantity: z.number(),
});

// Pop Schema
export const popSchema = z.object({
  id: z.string(),
  gameId: z.string(),
  name: z.string().nullable(),
  description: z.string().nullable(),
  icon: z.string().nullable(),
  level: z.number().default(1),
  growthPercentage: z.number().default(100),
});

// Nation Pop Schema
export const nationPopSchema = z.object({
  id: z.string(),
  nationId: z.string(),
  popId: z.string(),
});

// Territory Pop Schema
export const territoryPopSchema = z.object({
  id: z.string(),
  popId: z.string(),
  territoryId: z.string(),
  quantity: z.number(),
});

// Pop Upkeep Schema
export const popUpkeepSchema = z.object({
  id: z.string(),
  popId: z.string(),
  resourceId: z.string(),
  quantity: z.number(),
});

// Modifier Schema
export const modifierSchema = z.object({
  id: z.string(),
  gameId: z.string(),
  name: z.string().nullable(),
  description: z.string().nullable(),
  icon: z.string().nullable(),
  lifetimeType: z.enum(ModifierLifetimeTypes),
  lifetimeDuration: z.number().default(0),
  targetInstanceId: z.string().nullable(),
  targetTypeId: z.string().nullable(),
  targetType: z.enum(TargetTypes),
  scope: z.enum(ModifierScopes),
});

// Effect Schema
export const effectSchema = z.object({
  id: z.string(),
  modifierId: z.string(),
  stackable: z.boolean().default(true),
  behavior: z.enum(EffectBehaviors),
  value: z.unknown(),
  property: z.string().nullable(),
  polarity: z.enum(EffectPolarities),
});

// Job Schema
export const jobSchema = z.object({
  id: z.string(),
  gameId: z.string(),
  name: z.string().nullable(),
  description: z.string().nullable(),
  icon: z.string().nullable(),
});

// Pop Job Schema
export const popJobSchema = z.object({
  id: z.string(),
  popId: z.string(),
  jobId: z.string(),
});

// Object Modifier Schema
export const objectModifierSchema = z.object({
  id: z.string(),
  jobId: z.string().nullable(),
  unitId: z.string().nullable(),
  popId: z.string().nullable(),
  buildingId: z.string().nullable(),
  nationId: z.string().nullable(),
  territoryId: z.string().nullable(),
  modifierId: z.string().nullable(),
  biomeId: z.string().nullable(),
});

// Biome Schema
export const biomeSchema = z.object({
  id: z.string(),
  gameId: z.string(),
  name: z.string().nullable(),
  description: z.string().nullable(),
  icon: z.string().nullable(),
  color: z.string().nullable(),
  background: z.string().nullable(),
  difficulty: z.number(),
});

// Biome Resource Schema
export const biomeResourceSchema = z.object({
  id: z.string(),
  biomeId: z.string(),
  resourceId: z.string(),
});

// Territory Schema
export const territorySchema = z.object({
  id: z.string(),
  gameId: z.string(),
  biomeId: z.string().nullable(),
  level: z.number().default(1),
  nationId: z.string().nullable(),
  name: z.string().nullable(),
});

// Point Schema
export const pointSchema = z.object({
  id: z.string(),
  territoryId: z.string(),
  x: z.number(),
  y: z.number(),
});

// Event Chain Schema
export const eventChainSchema = z.object({
  id: z.string(),
  gameId: z.string(),
  name: z.string().nullable(),
  description: z.string().nullable(),
  icon: z.string().nullable(),
});

// Event Schema
export const eventSchema = z.object({
  id: z.string(),
  gameId: z.string(),
  name: z.string().nullable(),
  description: z.string().nullable(),
  image: z.string().nullable(),
  eventChainId: z.string().nullable(),
});

// Technology Tree Schema
export const technologyTreeSchema = z.object({
  id: z.string(),
  gameId: z.string(),
  name: z.string().nullable(),
  description: z.string().nullable(),
  icon: z.string().nullable(),
});

// Technology Schema
export const technologySchema = z.object({
  id: z.string(),
  gameId: z.string(),
  name: z.string().nullable(),
  description: z.string().nullable(),
  icon: z.string().nullable(),
  technologyTreeId: z.string().nullable(),
});

// File Schema
export const fileSchema = z.object({
  id: z.string(),
  gameId: z.string(),
  path: z.string(),
  name: z.string(),
  size: z.number(),
  key: z.string(),
  type: z.enum(["png", "PNG", "jpg", "JPG"]),
});

export const fullGameSchema = z.object({
  game: gameSchema,
  damages: z.array(damageSchema),
  files: z.array(fileSchema),
  resources: z.array(resourceSchema),
  buildings: z.array(buildingSchema),
  nations: z.array(nationSchema),
  units: z.array(unitSchema),
  pops: z.array(popSchema),
  modifiers: z.array(modifierSchema),
  jobs: z.array(jobSchema),
  points: z.array(pointSchema),
  biomes: z.array(biomeSchema),
  territories: z.array(territorySchema),
  events: z.array(eventSchema),
  eventChains: z.array(eventChainSchema),
  technologies: z.array(technologySchema),
  technologyTrees: z.array(technologyTreeSchema),

  // Pop Entiteis
  popJobs: z.array(popJobSchema),
  popUpkeeps: z.array(popUpkeepSchema),
  territoryPops: z.array(territoryPopSchema),

  // Modifier Entiteis
  objectModifiers: z.array(objectModifierSchema),
  effects: z.array(effectSchema),

  // Resource Entities
  startingResources: z.array(startingResourceSchema),

  // army Entities
  // armyUnits,

  // Unit Entities
  unitDamages: z.array(unitDamageSchema),
  unitDefenses: z.array(unitDefenseSchema),
  unitHireCosts: z.array(unitHireCostSchema),
  unitTrainCosts: z.array(unitTrainCostSchema),
  unitUpkeeps: z.array(unitUpkeepSchema),
  territoryUnits: z.array(territoryUnitSchema),

  // Building Entities
  buildingCosts: z.array(buildingCostSchema),
  buildingUpkeeps: z.array(buildingUpkeepSchema),
  territoryBuildings: z.array(territoryBuildingSchema),

  // Nation Entities
  buildableBuildings: z.array(buildableBuildingSchema),
  profiles: z.array(profileSchema),
  nodes: z.array(nodeSchema),
});

export const deleteGameEntitiesSchema = z.object({
  damages: z.array(z.string()),
  files: z.array(z.string()),
  resources: z.array(z.string()),
  buildings: z.array(z.string()),
  nations: z.array(z.string()),
  units: z.array(z.string()),
  unitDamages: z.array(z.string()),
  unitDefenses: z.array(z.string()),
  unitHireCosts: z.array(z.string()),
  unitTrainCosts: z.array(z.string()),
  unitUpkeeps: z.array(z.string()),
  pops: z.array(z.string()),
  popUpkeeps: z.array(z.string()),
  popJobs: z.array(z.string()),
  modifiers: z.array(z.string()),
  jobs: z.array(z.string()),
  points: z.array(z.string()),
  biomes: z.array(z.string()),
  territories: z.array(z.string()),
  territoryPops: z.array(z.string()),
  territoryUnits: z.array(z.string()),
  territoryBuildings: z.array(z.string()),
  events: z.array(z.string()),
  eventChains: z.array(z.string()),
  technologies: z.array(z.string()),
  technologyTrees: z.array(z.string()),
  startingResources: z.array(z.string()),
  objectModifiers: z.array(z.string()),
  effects: z.array(z.string()),
  buildableBuildings: z.array(z.string()),
  profiles: z.array(z.string()),
  nodes: z.array(z.string()),
});
export const fullGameSaveSchema = fullGameSchema.extend({
  deleted: deleteGameEntitiesSchema,
});

export type EPop = z.infer<typeof popSchema>;
export type ENationPop = z.infer<typeof nationPopSchema>;
export type EPopJob = z.infer<typeof popJobSchema>;
export type EPopUpkeep = z.infer<typeof popUpkeepSchema>;
export type ETerritoryPop = z.infer<typeof territoryPopSchema>;
export type EModifier = z.infer<typeof modifierSchema>;
export type EEffect = z.infer<typeof effectSchema>;
export type EJob = z.infer<typeof jobSchema>;
export type EObjectModifier = z.infer<typeof objectModifierSchema>;
export type EStartingResource = z.infer<typeof startingResourceSchema>;
export type EResource = z.infer<typeof resourceSchema>;
export type EBuildingCost = z.infer<typeof buildingCostSchema>;
export type EBuildingUpkeep = z.infer<typeof buildingUpkeepSchema>;
export type ETerritoryBuilding = z.infer<typeof territoryBuildingSchema>;
export type ETerritoryUnit = z.infer<typeof territoryUnitSchema>;
export type EUnitDamage = z.infer<typeof unitDamageSchema>;
export type EUnitDefense = z.infer<typeof unitDefenseSchema>;
export type EUnitHireCost = z.infer<typeof unitHireCostSchema>;
export type EUnitTrainCost = z.infer<typeof unitTrainCostSchema>;
export type EUnitUpkeep = z.infer<typeof unitUpkeepSchema>;
export type EBuildableBuilding = z.infer<typeof buildableBuildingSchema>;
export type EProfile = z.infer<typeof profileSchema>;
export type ENode = z.infer<typeof nodeSchema>;
export type ETechnologyTree = z.infer<typeof technologyTreeSchema>;
export type ETechnology = z.infer<typeof technologySchema>;
export type EFile = z.infer<typeof fileSchema>;
export type EEvent = z.infer<typeof eventSchema>;
export type EEventChain = z.infer<typeof eventChainSchema>;
export type ETerritory = z.infer<typeof territorySchema>;
export type EPoint = z.infer<typeof pointSchema>;
export type EBiome = z.infer<typeof biomeSchema>;
export type EBiomeResource = z.infer<typeof biomeResourceSchema>;
export type ENation = z.infer<typeof nationSchema>;
export type EGame = z.infer<typeof gameSchema>;
export type EDamage = z.infer<typeof damageSchema>;
export type EBuilding = z.infer<typeof buildingSchema>;
export type EUnit = z.infer<typeof unitSchema>;

export type EFullGame = z.infer<typeof fullGameSchema>;
export type EFullGameSave = z.infer<typeof fullGameSaveSchema>;
export type EDeleteGameEntities = z.infer<typeof deleteGameEntitiesSchema>;

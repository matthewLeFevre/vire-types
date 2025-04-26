export const Commands = [
  "GET_GAMES",
  "GET_SINGLE_PLAYER_GAMES",
  "GET_SINGLE_PLAYER_GAME",
  "NEW_SINGLE_PLAYER_GAME",
  "FETCH_GAME",
  "ADD_PLAYER_TO_GAME",
  "RECONNECT",
  "START_GAME",
  "CANCEL_GAME",
  "PLAY_GAME",
  "PAUSE_GAME",
  "ADVANCE_GAME",
  "EXIT_GAME",
  "SAVE_GAME",
  "GAME_EXISTS",
  "GAME_UPDATE",
  "ASSIGN_PLAYER_TO_NATION",
  "REMOVE_PLAYER_FROM_NATION",
  "START_BUILD",
  "DESTROY_BUILDING",
  "REQUEST_BUILD",
  "CREATE_EDITOR_GAME",
  "DELETE_EDITOR_GAME",
  "SAVE_EDITOR_GAME",
  "GET_EDITOR_GAME",
  "GET_EDITOR_GAMES",
  "GET_EDITOR_FILESYSTEM",
  "CREATE_FOLDER",
  "DELETE_FOLDER",
  "UPDATE_FOLDER_NAME",
  "UPDATE_FOLDER_PARENT",
  "CREATE_FILES",
  "DELETE_FILE",
  "UPDATE_FILE_NAME",
  "UPDATE_FILE_PARENT",
  "TRIGGER_CREATE_FILES",
  "CANCEL_BUILD",
  "START_TRAIN",
  "CANCEL_TRAIN",
  "INITIATE_HIRE",
  "BUY_RESOURCE",
  "SELL_RESOURCE",
  "MOVE",
  "CANCEL_MOVE",
  "ASSIGN_JOB",
  "STEAM_LOGIN",
  "GET_BASE_FILE_PATH",
  "FAILED_RECONNECT",
  "GET_CURRENT_USER",
  "LOGIN_WITH_STEAM",
  "GET_GAMER",
] as const;
export type TCommand = (typeof Commands)[number];
export const Command: Record<TCommand, TCommand> = Object.fromEntries(
  Commands.map((command) => [command, command])
) as Record<TCommand, TCommand>;

export const EffectBehaviors = [
  // New Behaviors
  "ADD_NUMBER",
  "REMOVE_NUMBER",
  "SET_NUMBER",
  "ADD_STRINGS",
  "REMOVE_STRINGS",
  "SET_STRINGS",
  "ADD_ID_NUMBER",
  "REMOVE_ID_NUMBER",
  "SET_ID_NUMBER",
  "ADD_JOB",
  "ADD_RESOURCE",
  "REMOVE_RESOURCE",
] as const;
export type TEffectBehavior = (typeof EffectBehaviors)[number];
export const EffectBehavior: Record<TEffectBehavior, TEffectBehavior> =
  Object.fromEntries(
    EffectBehaviors.map((behavior) => [behavior, behavior])
  ) as Record<TEffectBehavior, TEffectBehavior>;

export const ModifierScopes = [
  "TERRITORY",
  "GAME",
  "NATION",
  "JOB",
  "POP",
  "UNIT",
] as const;
export type TModifierScope = (typeof ModifierScopes)[number];
export const ModifierScope: Record<TModifierScope, TModifierScope> =
  Object.fromEntries(ModifierScopes.map((scope) => [scope, scope])) as Record<
    TModifierScope,
    TModifierScope
  >;

export const EffectPolarities = ["POSITIVE", "NEGATIVE"] as const;
export type TEffectPolarity = (typeof EffectPolarities)[number];
export const EffectPolarity: Record<TEffectPolarity, TEffectPolarity> =
  Object.fromEntries(
    EffectPolarities.map((polarity) => [polarity, polarity])
  ) as Record<TEffectPolarity, TEffectPolarity>;

export const TargetTypes = [
  "UNIT",
  "POP",
  "NATION",
  "BUILDING",
  "JOB",
  "TERRITORY",
] as const;
export type TTargetType = (typeof TargetTypes)[number];
export const TargetType: Record<TTargetType, TTargetType> = Object.fromEntries(
  TargetTypes.map((object) => [object, object])
) as Record<TTargetType, TTargetType>;

export const ModifierLifetimeTypes = ["LIMITED", "PERMANENT"] as const;
export type TModifierLifetimeType = (typeof ModifierLifetimeTypes)[number];
export const ModifierLifetimeType: Record<
  TModifierLifetimeType,
  TModifierLifetimeType
> = Object.fromEntries(
  ModifierLifetimeTypes.map((lifetime) => [lifetime, lifetime])
) as Record<TModifierLifetimeType, TModifierLifetimeType>;

export const NationProperties = [
  "trainableUnitIds",
  "hireableUnitIds",
  "buildableBuildingIds",
  "baseResourceProduction",
] as const;
export type TNationProperty = (typeof NationProperties)[number];
export const NationProperty: Record<TNationProperty, TNationProperty> =
  Object.fromEntries(
    NationProperties.map((property) => [property, property])
  ) as Record<TNationProperty, TNationProperty>;

export const JobProperties = [
  "produced",
  "consumed",
  "percentageChange",
] as const;
export type TJobProperty = (typeof JobProperties)[number];
export const JobProperty: Record<TJobProperty, TJobProperty> =
  Object.fromEntries(
    JobProperties.map((property) => [property, property])
  ) as Record<TJobProperty, TJobProperty>;

export const TerritoryProperties = [
  "produced",
  "consumed",
  "percentageChange",
  "builders",
  "buildingSpace",
  "level",
  "stability",
  "devastation",
  "fortification",
  "popGrowthRate",
  "popGrowthGoal",
  "housing",
  "trainableUnitIds",
  "hireableUnitIds",
  "buildableBuildingIds",
  "size",
  "jobs",
] as const;
export type TTerritoryProperty = (typeof TerritoryProperties)[number];
export const TerritoryProperty: Record<TTerritoryProperty, TTerritoryProperty> =
  Object.fromEntries(
    TerritoryProperties.map((property) => [property, property])
  ) as Record<TTerritoryProperty, TTerritoryProperty>;

export const PopProperties = [
  "produced",
  "consumed",
  "percentageChange",
  "growthPercentage",
  "happiness",
  "health",
] as const;
export type TPopProperty = (typeof PopProperties)[number];
export const PopProperty: Record<TPopProperty, TPopProperty> =
  Object.fromEntries(
    PopProperties.map((property) => [property, property])
  ) as Record<TPopProperty, TPopProperty>;

export const UnitProperties = [
  "produced",
  "consumed",
  "percentageChange",
  "health",
  "speed",
  "trainTime",
] as const;
export type TUnitProperty = (typeof UnitProperties)[number];
export const UnitProperty: Record<TUnitProperty, TUnitProperty> =
  Object.fromEntries(
    UnitProperties.map((property) => [property, property])
  ) as Record<TUnitProperty, TUnitProperty>;

export const BuildingProperties = [
  "produced",
  "consumed",
  "percentageChange",
  "level",
  "territoryMax",
  "buildTime",
  "canDestroy",
] as const;
export type TBuildingProperty = (typeof BuildingProperties)[number];
export const BuildingProperty: Record<TBuildingProperty, TBuildingProperty> =
  Object.fromEntries(
    BuildingProperties.map((property) => [property, property])
  ) as Record<TBuildingProperty, TBuildingProperty>;

export const EffectBehaviorGroups = {
  int: [
    EffectBehavior.ADD_NUMBER,
    EffectBehavior.REMOVE_NUMBER,
    EffectBehavior.SET_NUMBER,
  ],
  units: [EffectBehavior.ADD_STRINGS, EffectBehavior.REMOVE_STRINGS],
  jobs: [EffectBehavior.ADD_JOB],
  buildings: [EffectBehavior.ADD_STRINGS, EffectBehavior.REMOVE_STRINGS],
  resources: [EffectBehavior.ADD_RESOURCE, EffectBehavior.REMOVE_RESOURCE], //x
};

export const getTargetProperties = (target: TTargetType) => {
  switch (target) {
    case TargetType.BUILDING:
      return BuildingProperties;
    case TargetType.JOB:
      return JobProperties;
    case TargetType.NATION:
      return NationProperties;
    case TargetType.POP:
      return PopProperties;
    case TargetType.TERRITORY:
      return TerritoryProperties;
    case TargetType.UNIT:
      return UnitProperties;
    default:
      return [];
  }
};

export type TTargetProperty =
  | TBuildingProperty
  | TJobProperty
  | TNationProperty
  | TPopProperty
  | TUnitProperty
  | TTerritoryProperty;

const TargetProperties = Array.from(
  new Set([
    ...BuildingProperties,
    ...JobProperties,
    ...NationProperties,
    ...PopProperties,
    ...UnitProperties,
    ...TerritoryProperties,
  ])
);

export const TargetProperty: Record<TTargetProperty, TTargetProperty> =
  Object.fromEntries(
    TargetProperties.map((property) => [property, property])
  ) as Record<TTargetProperty, TTargetProperty>;

export const getPropertyBehaviors = (
  property: TTargetProperty
): TEffectBehavior[] => {
  switch (property) {
    case "produced":
      return EffectBehaviorGroups.resources;
    case "consumed":
      return EffectBehaviorGroups.resources;
    case "buildTime":
      return EffectBehaviorGroups.int;
    case "baseResourceProduction":
      return EffectBehaviorGroups.resources;
    case "buildableBuildingIds":
      return EffectBehaviorGroups.buildings;
    case "canDestroy":
      return [];
    case "health":
      return EffectBehaviorGroups.int;
    case "growthPercentage":
      return EffectBehaviorGroups.int;
    case "happiness":
      return EffectBehaviorGroups.int;
    case "hireableUnitIds":
      return EffectBehaviorGroups.units;
    case "level":
      return EffectBehaviorGroups.int;
    case "percentageChange":
      return EffectBehaviorGroups.int;
    case "speed":
      return EffectBehaviorGroups.int;
    case "territoryMax":
      return EffectBehaviorGroups.int;
    case "trainTime":
      return EffectBehaviorGroups.int;
    case "trainableUnitIds":
      return EffectBehaviorGroups.units;
    case "builders":
      return EffectBehaviorGroups.int;
    case "buildingSpace":
      return EffectBehaviorGroups.int;
    case "devastation":
      return EffectBehaviorGroups.int;
    case "fortification":
      return EffectBehaviorGroups.int;
    case "housing":
      return EffectBehaviorGroups.int;
    case "popGrowthGoal":
      return EffectBehaviorGroups.int;
    case "popGrowthRate":
      return EffectBehaviorGroups.int;
    case "size":
      return EffectBehaviorGroups.int;
    case "stability":
      return EffectBehaviorGroups.int;
    case TargetProperty.jobs:
      return EffectBehaviorGroups.jobs;
    default:
      return [];
  }
};

export const NodeTypes = [
  "sequence", // Runs children in order, fails if one fails
  "action", // Performs an action
  "condition", // Checks a condition before executing its child
  "selector", // Runs children till one succeeds
  "random", // Selects a random child to run
  "parallel", // Executes all children
] as const;
export type TNodeType = (typeof NodeTypes)[number];
export const NodeType: Record<TNodeType, TNodeType> = Object.fromEntries(
  NodeTypes.map((property) => [property, property])
) as Record<TNodeType, TNodeType>;

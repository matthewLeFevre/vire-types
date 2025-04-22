import { z } from "zod";

const GameValidation = z.object({
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
  gamerId: z.string(),
});

const DamageValidation = z.object({});

export const EntityValidation = z.object({
  game: GameValidation,
  damage: z.array(DamageValidation),
});

import { EFullGameSave } from "./validation";

export type AssignJobApiReq = {
  popInstanceId: string;
  jobId: string;
};

export type StartBuildApiReq = {
  territoryId: string;
  buildingId: string;
};

export type CancelBuildApiReq = {
  territoryId: string;
  buildJobId: string;
};

export type DestoryBuildingApiReq = {
  territoryId: string;
  buildingInstanceId: string;
};

export type SellResourceApiReq = {
  nationId: string;
  resourceId: string;
  quantity: number;
};

export type BuyResourceApiReq = SellResourceApiReq;

export type StartTrainApiReq = {
  territoryId: string;
  unitId: string;
};

export type CancelTrainApiReq = {
  territoryId: string;
  trainJobId: string;
};

export type InitiateHireApiReq = {
  territoryId: string;
  unitId: string;
};

export type MoveApiReq = {
  unitInstanceIds: string[];
  popInstanceIds: string[];
  originTerritoryId: string;
  targetTerritoryId: string;
};

export type CancelMoveApiReq = {
  partyId: string;
};

export type TGameApi = {
  assignJob(data: AssignJobApiReq): void;
  startBuild(data: StartBuildApiReq): void;
  cancelBuild(data: CancelBuildApiReq): void;
  destroyBuilding(data: DestoryBuildingApiReq): void;
  sellResource(data: SellResourceApiReq): void;
  buyResource(data: BuyResourceApiReq): void;
  startTrain(data: StartTrainApiReq): void;
  cancelTrain(data: CancelTrainApiReq): void;
  initiateHire(data: InitiateHireApiReq): void;
  move(data: MoveApiReq): void;
  cancelMove(data: CancelMoveApiReq): void;
};

export type GetGamesApiReq = {};
export type NewSinglePlayerGameApiReq = {
  gameId: string;
  playerId: string;
};
export type AddPlayerToGameApiReq = {};
export type FetchGameApiReq = {};
export type ReconnectApiReq = {};
export type StartGameApiReq = {
  gameId: string;
};
export type CancelGameApiReq = { gameId: string };
export type AdvanceGameApiReq = {
  ticks: number;
};
export type ExitGameApiReq = {};
export type SaveGameApiReq = {};
export type AssignPlayerToNationApiReq = {
  playerId: string;
  nationId: string;
};
export type RemovePlayerFromNationApiReq = {};
export type GetBaseFilePathApiReq = {};
export type SteamLoginApiReq = {};

export type TAdminApi = {
  getGames(data: GetGamesApiReq);
  getSinglePlayerGames: () => void;
  newSinglePlayerGame(data: NewSinglePlayerGameApiReq);
  addPlayerToGame(data: AddPlayerToGameApiReq);
  fetchGame(data: FetchGameApiReq);
  reconnect(data: ReconnectApiReq);
  startGame(data: StartGameApiReq);
  cancelGame(data: CancelGameApiReq);
  playGame: () => void;
  pauseGame: () => void;
  advanceGame(data: AdvanceGameApiReq);
  exitGame(data: ExitGameApiReq);
  saveGame(data: SaveGameApiReq);
  assignPlayerToNation(data: AssignPlayerToNationApiReq);
  removePlayerFromNation(data: RemovePlayerFromNationApiReq);
  getBaseFilePath: () => void;
  steamLogin: () => void;
};

export type DeleteEditorGameApiReq = {
  gameId: string;
};
export type SaveEditorGameApiReq = {
  entities: EFullGameSave;
};
export type GetEditorGameApiReq = {
  gameId: string;
};
export type DeleteEditorEntityApiReq = {
  id: string;
};
export type GetEditorFileSystemApiReq = {};
export type CreateFolderApiReq = {
  name: string;
  parentFolderId?: string;
};
export type DeleteFolderApiReq = {
  id: string;
};
export type UpdateFolderNameApiReq = {
  id: string;
  name: string;
};
export type UpdateFolderParentApiReq = {};
export type CreateFilesApiReq = {};
export type DeleteFileApiReq = {
  id: string;
};
export type UpdateFileNameApiReq = {};
export type UpdateFileParentApiReq = {};
export type TriggerCreateFilesApiReq = {
  parentFolderId: string;
};

export type TEditorApi = {
  createEditorGame: () => void;
  deleteEditorGame(data: DeleteEditorGameApiReq);
  saveEditorGame(data: SaveEditorGameApiReq);
  getEditorGames: () => void;
  getEditorGame(data: GetEditorGameApiReq);
  deleteEditorEntity(data: DeleteEditorEntityApiReq);
  getEditorFilesystem: () => void;
  createFolder(data: CreateFolderApiReq);
  deleteFolder(data: DeleteFolderApiReq);
  updateFolderName(data: UpdateFolderNameApiReq);
  updateFolderParent(data: UpdateFolderParentApiReq);
  createFiles(data: CreateFilesApiReq);
  deleteFile(data: DeleteFileApiReq);
  updateFileName(data: UpdateFileNameApiReq);
  updateFileParent(data: UpdateFileParentApiReq);
  triggerCreateFiles(data: TriggerCreateFilesApiReq);
};

export type TApi = TGameApi & TEditorApi & TAdminApi;

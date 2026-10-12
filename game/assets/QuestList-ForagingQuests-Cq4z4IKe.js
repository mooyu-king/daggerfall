const e=`-- Foraging Quests quest pack list\r
\r
-- name:        filename of QRC txt file\r
-- group:       guild group from FactionFile.GuildGroups enum\r
-- membership:  N=non-member, M=member\r
-- minRep:      minimum reputation required to be offered the quest (units can use X wildcard)\r
-- notes:\r
\r
schema: *name, group, membership, minReq, flag, notes\r
\r
ChopWoodQuest, None, N, 0, 0, decide bonus after chopping and gathering wood with wood axe\r
FishingQuest, None, N, 0, 0, decide bonus after foraging for fish with fishing net\r
ForageFoodQuest, None, N, 0, 0, decide bonus after foraging for food with basket\r
ForageAridPlantsQuest, None, N, 0, 0, forage for plant ingredients with sickle in the arid deserts\r
ForageSummerPlantsQuest, None, N, 0, 0, forage for plant ingredients with sickle in the rainforest swamp or summer woodlands\r
ForageWinterPlantsQuest, None, N, 0, 0, forage for plant ingredients with sickle in the mountains subtropical or winter woodlands\r
GraveRobbingQuest, None, N, 0, 0, dig up a grave in a cemetery to rob its contents while not using chebs necromancy mod\r
GraveRobbingQuestWeak, None, N, 0, 0, dig up a grave in a cemetery to rob its contents while not using chebs necromancy mod\r
GraveRobbingQuestWeaker, None, N, 0, 0, dig up a grave in a cemetery to rob its contents while not using chebs necromancy mod\r
GraveRobbingQuestWeakest, None, N, 0, 0, dig up a grave in a cemetery to rob its contents while not using chebs necromancy mod\r
GraveRobbingCNQuest, None, N, 0, 0, dig up a grave in a cemetery to rob its contents while using chebs necromancy mod\r
GraveRobbingCNQuestWeak, None, N, 0, 0, dig up a grave in a cemetery to rob its contents while using chebs necromancy mod\r
GraveRobbingCNQuestWeaker, None, N, 0, 0, dig up a grave in a cemetery to rob its contents while using chebs necromancy mod\r
GraveRobbingCNQuestWeakest, None, N, 0, 0, dig up a grave in a cemetery to rob its contents while using chebs necromancy mod\r
MiningQuest, None, N, 0, 0, mine for gem or metal ingredients with pick axe\r
MiningQuestWeak, None, N, 0, 0, mine for gem or metal ingredients with pick axe\r
MiningQuestWeaker, None, N, 0, 0, mine for gem or metal ingredients with pick axe\r
MiningQuestWeakest, None, N, 0, 0, mine for gem or metal ingredients with pick axe\r
FetchWood01, Commoner, N, 0, 0, collect two wood bundles for a commoner who needs some firewood\r
FetchWood02, Commoner, N, 10, 0, collect four wood bundles for a commoner who needs to stock up on firewood\r
FetchWood03, Noble, N, 0, 0, collect six wood bundles for a noble who needs some wood for a witch burning\r
FetchWood04, Noble, N, 10, 0, collect eight wood bundles for a noble who needs to build a scaffold for an execution or two\r
\r
`;export{e as default};

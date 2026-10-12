const e=`-- name:        filename of QRC txt file\r
-- group:       guild group from FactionFile.GuildGroups enum, or social group from FactionFile.SocialGroups enum\r
-- membership:  N=non-member, M=member, P=prospect, T=Akatosh, A=Arkay, D=Dibella, J=Julianos, K=Kynareth, R=Mara, S=Stendarr, Z=Zenithar\r
-- minReq:      minimum requirement to be offered the quest: (val < 10) = guild rank / player level, or (val >= 10) = min reputation\r
-- flag:        0 = nothing, X = adult/nudity, 1 = one time quest\r
-- notes:\r
\r
schema: *name, group, membership, minReq, flag, notes\r
\r
WAQ_SHIP_SMALLRAID, None, M, 0, 0, event quest\r
WAQ_SHIP_ATTACK_PIRATE, None, M, 0, 0, event quest`;export{e as default};

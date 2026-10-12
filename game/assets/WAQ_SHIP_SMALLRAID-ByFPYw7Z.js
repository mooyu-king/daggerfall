const e=`Quest: WAQ_SHIP_SMALLRAID\r
DisplayName:\r
-- Message panels\r
QRC:\r
\r
QuestorOffer:  [1000]\r
<ce>\r
\r
RefuseQuest:  [1001]\r
<ce>           \r
\r
AcceptQuest:  [1002]\r
<ce>           \r
\r
QuestFail:  [1003]\r
<ce>                     \r
\r
QuestComplete:  [1004]\r
<ce> After scavenging the bodies, you take your earnings.       \r
\r
Message: 1013\r
<ce> You've been attacked by pirates while on\r
<ce> your way to ____KnightlyGuard_!\r
<ce> Your crew quickly spring into action!\r
\r
Message: 1014\r
<ce> The attackers have been fought off. The ship \r
<ce> continues to its destination. \r
\r
QBN:\r
\r
Clock _cooldown_ 01:00\r
Clock _reset_ 00:05\r
Clock _second_ 0:01\r
Clock _retreat_ 1:00\r
Clock _findPC_ 24:00\r
Clock _wave1check_ 00:01\r
Clock _wave2check_ 00:01\r
Clock _wave3check_ 00:01\r
Clock _bosscheck_ 00:01\r
Foe _archer_ is Thief\r
Foe _warrior_ is Rogue\r
Foe _healer_ is Healer\r
-Foe _healerp_ is Healer\r
Foe _orc_ is Orc\r
Foe _orcs_ is Orc_sergeant\r
Foe _tiger_ is Sabretooth_tiger\r
Foe _spider_ is Spider\r
Foe _dragon_ is Dragonling_souless\r
Foe _ally_ is Warrior\r
Foe _barb_ is Barbarian\r
Foe _rogue_ is Rogue\r
Foe _nblade_ is Nightblade\r
Foe _assassin_ is Assassin\r
-Foe _thief_ is Thief\r
-Foe _burglar_ is Burglar\r
Foe _spells_ is Spellsword\r
\r
-Person _db_ faction The_Dark_Brotherhood\r
-Person _Court_ faction <insert court name>\r
Person _KnightlyGuard_ factionType People\r
-Person _Temple_ faction Generic_Temple\r
-Person _symbol_ factionType People\r
\r
Item _victory_ gold range 5000 to 10000\r
\r
\r
--	Quest start-up:\r
variable _cooldown_\r
variable _second_\r
variable _wave1check_\r
start task _wave1check_\r
start timer _cooldown_\r
\r
_reset_ task:\r
end quest\r
\r
_cooldown_ task:\r
end quest\r
\r
---------*Change Teams/Infight**---\r
_setFoeInfight_ task:\r
	daily from 00:00 to 24:00\r
	change foe _archer_ infighting true\r
	change foe _warrior_ infighting true\r
	change foe _healer_ infighting true\r
	change foe _spells_ infighting true\r
	change foe _tiger_ infighting true\r
	change foe _spider_ infighting true\r
	change foe _assassin_ infighting true\r
	change foe _dragon_ infighting true\r
	change foe _nblade_ infighting true\r
	change foe _rogue_ infighting true\r
	change foe _orc_ infighting true\r
	change foe _orcs_ infighting true\r
	change foe _barb_ infighting true\r
	change foe _ally_ infighting true\r
	change foe _ally_ team 1\r
	change foe _tiger_ team 21\r
	change foe _assassin_ team 21\r
	change foe _dragon_ team 21\r
	change foe _spider_ team 21\r
	change foe _nblade_ team 21\r
	change foe _rogue_ team 21\r
	change foe _archer_ team 21\r
	change foe _warrior_ team 21\r
	change foe _healer_ team 21\r
	change foe _spells_ team 21\r
	change foe _assassin_ team 21\r
	change foe _nblade_ team 21\r
	setvar _second_\r
	clear _setFoeInfight_\r
\r
--------**First Wave**---\r
_outcome1_ task:\r
	create foe _ally_ every 0 minutes 1 times with 100% success\r
	create foe _ally_ every 0 minutes 1 times with 100% success\r
	create foe _ally_ every 0 minutes 1 times with 100% success\r
	create foe _ally_ every 0 minutes 1 times with 100% success\r
	create foe _ally_ every 0 minutes 1 times with 100% success\r
	create foe _warrior_ every 0 minutes 1 times with 100% success\r
	create foe _warrior_ every 0 minutes 1 times with 100% success\r
	create foe _warrior_ every 0 minutes 1 times with 100% success\r
	create foe _warrior_ every 0 minutes 1 times with 100% success\r
	create foe _warrior_ every 0 minutes 1 times with 100% success\r
	create foe _warrior_ every 0 minutes 1 times with 100% success\r
	create foe _warrior_ every 0 minutes 1 times with 100% success\r
	create foe _warrior_ every 0 minutes 1 times with 100% success	\r
	start task _reinFoput1_\r
	say 1013\r
	\r
_outcome2_ task:\r
	create foe _ally_ every 0 minutes 1 times with 100% success\r
	create foe _ally_ every 0 minutes 1 times with 100% success\r
	create foe _ally_ every 0 minutes 1 times with 100% success\r
	create foe _ally_ every 0 minutes 1 times with 100% success\r
	create foe _ally_ every 0 minutes 1 times with 100% success\r
	create foe _orc_ every 0 minutes 1 times with 100% success\r
	create foe _orc_ every 0 minutes 1 times with 100% success\r
	create foe _orc_ every 0 minutes 1 times with 100% success\r
	create foe _orc_ every 0 minutes 1 times with 100% success\r
	create foe _orc_ every 0 minutes 1 times with 100% success\r
	create foe _orc_ every 0 minutes 1 times with 100% success\r
	create foe _orcs_ every 0 minutes 1 times with 100% success\r
	create foe _orcs_ every 0 minutes 1 times with 100% success\r
	start task _reinFoput3_\r
	start task _reinFoput4_\r
	say 1013\r
	\r
_outcome3_ task:\r
	create foe _ally_ every 0 minutes 1 times with 100% success\r
	create foe _ally_ every 0 minutes 1 times with 100% success\r
	create foe _ally_ every 0 minutes 1 times with 100% success\r
	create foe _ally_ every 0 minutes 1 times with 100% success\r
	create foe _ally_ every 0 minutes 1 times with 100% success\r
	create foe _barb_ every 0 minutes 1 times with 100% success\r
	create foe _barb_ every 0 minutes 1 times with 100% success\r
	create foe _barb_ every 0 minutes 1 times with 100% success\r
	create foe _barb_ every 0 minutes 1 times with 100% success\r
	create foe _barb_ every 0 minutes 1 times with 100% success\r
	create foe _barb_ every 0 minutes 1 times with 100% success\r
	create foe _barb_ every 0 minutes 1 times with 100% success\r
	create foe _barb_ every 0 minutes 1 times with 100% success\r
	start task _reinFoput2_\r
	say 1013\r
	\r
_reinFoput1_ task:\r
	create foe _warrior_ every 5 minutes indefinitely with 100% success\r
	\r
_reinFoput2_ task:\r
	create foe _barb_ every 5 minutes indefinitely with 100% success\r
	\r
_reinFoput3_ task:\r
	create foe _orc_ every 5 minutes indefinitely with 100% success\r
	\r
_reinFoput4_ task:\r
	create foe _orcs_ every 5 minutes indefinitely with 100% success\r
\r
\r
_endquestproper_ task:\r
killed 8 _barb_\r
-legal repute -50\r
remove foe _barb_\r
say 1014\r
clear _reinFoput2_\r
Leave Ship\r
\r
_endquestproper2_ task:\r
killed 8 _warrior_\r
-legal repute -50\r
remove foe _warrior_\r
say 1014\r
clear _reinFoput1_\r
Leave Ship\r
\r
_endquestproper3_ task:\r
killed 6 _orc_\r
clear _reinFoput3_\r
\r
_endquestproper4_ task:\r
killed 2 _orcs_\r
clear _reinFoput4_\r
\r
_endquestproper5_ task:\r
when _endquestproper3_ and _endquestproper4\r
-legal repute -50\r
remove foe _orc_\r
remove foe _orcs_\r
say 1014\r
Leave Ship\r
\r
\r
\r
_wave3spawn_ task:\r
	when _wave1check_\r
	pick one of _outcome1_ _outcome2_ _outcome3_ _outcome1_ _outcome2_ _outcome3_ \r
	\r
\r
	\r
_endit_ task:\r
	when _cooldown_\r
	end quest\r
	\r
----------**Reinforcements**---\r
-_callformoreknights_ task:\r
-killed 5 _warrior_\r
\r
_callfriends_ task:\r
killed 5 _ally_\r
create foe _ally_ every 0 minutes 1 times with 100% success\r
create foe _ally_ every 0 minutes 1 times with 100% success\r
create foe _ally_ every 0 minutes 1 times with 100% success\r
create foe _ally_ every 0 minutes 1 times with 100% success\r
create foe _ally_ every 0 minutes 1 times with 100% success\r
\r
_callfriends2_ task:\r
killed 10 _ally_\r
create foe _ally_ every 0 minutes 1 times with 100% success\r
create foe _ally_ every 0 minutes 1 times with 100% success\r
create foe _ally_ every 0 minutes 1 times with 100% success\r
create foe _ally_ every 0 minutes 1 times with 100% success\r
create foe _ally_ every 0 minutes 1 times with 100% success\r
\r
_callfriends3_ task:\r
killed 15 _ally_\r
create foe _ally_ every 0 minutes 1 times with 100% success\r
create foe _ally_ every 0 minutes 1 times with 100% success\r
create foe _ally_ every 0 minutes 1 times with 100% success\r
create foe _ally_ every 0 minutes 1 times with 100% success\r
create foe _ally_ every 0 minutes 1 times with 100% success\r
`;export{e as default};

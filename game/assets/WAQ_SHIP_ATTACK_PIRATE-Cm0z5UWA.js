const e=`Quest: WAQ_SHIP_PIRATEATTACK\r
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
QBN:\r
\r
Clock _cooldown_ 75:00\r
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
-Foe _orc_ is Orc\r
-Foe _orcs_ is Orc_sergeant\r
-Foe _orcw_ is Orc_warlord\r
-Foe _orcsm_ is Orc_shaman\r
-Foe _knight_ is Knight\r
-Foe _knightp_ is Knight\r
-Foe _sorc_ is Sorceror\r
Foe _tiger_ is Sabretooth_tiger\r
Foe _spider_ is Spider\r
Foe _dragon_ is Dragonling_souless\r
Foe _ally_ is Warrior\r
Foe _rogue_ is Rogue\r
Foe _nblade_ is Nightblade\r
Foe _assassin_ is Assassin\r
-Foe _thief_ is Thief\r
-Foe _burglar_ is Burglar\r
Foe _spells_ is Spellsword\r
\r
-Person _db_ faction The_Dark_Brotherhood\r
-Person _Court_ faction <insert court name>\r
Person _KnightlyGuard_ faction Generic_Knightly_Order\r
Person _Temple_ faction Generic_Temple\r
\r
Item _victory_ gold range 5000 to 10000\r
\r
\r
--	Quest start-up:\r
variable _winner_\r
-variable _cooldown_\r
variable _second_\r
-variable _siegefalseh_\r
variable _wave1check_\r
variable _wave2check_\r
variable _wave3check_\r
variable _bosscheck_\r
variable _magiccheck_\r
variable _magiccheck2_\r
variable _findPC_\r
variable _leaderbuff_\r
-variable _levelcheck2_\r
-variable _levelcheck3_\r
variable _levelcheck4_\r
cast Levitate spell do _magiccheck_\r
cast Fireball spell do _magiccheck2_\r
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
	change foe _ally_ infighting true\r
	change foe _ally_ team 1\r
	restrain foe _ally_\r
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
	cast Free_Action spell on _spells_\r
	cast Shield spell on _spells_\r
	cast Stamina spell on _spells_\r
	cast Orc_Strength spell on _spells_\r
	cast Resist_Shock spell on _spells_\r
	setvar _second_\r
	clear _setFoeInfight_\r
\r
\r
----------**Sound**---\r
\r
_clearsound_ task:\r
	clear _makesound_ \r
	\r
_makesound_ task:\r
	play sound levelup_tes1 every 0 minutes 1 times\r
	play sound talking_loud every 0 minutes 1 times\r
	clear _makesound_ \r
	\r
_makesound2_ task:\r
	-play sound talking_loud every 0 minutes 1 times\r
	-play sound door_slam_remote every 0 minutes 1 times\r
	-play sound levelup_gong every 0 minutes 1 times\r
	play sound Ancient_vampire_1 every 0 minutes 1 times\r
	clear _makesound2_ \r
	\r
_makesound3_ task:\r
	play sound levelup_gong every 0 minutes 1 times\r
	clear _makesound3_ \r
	\r
----------**Entering Keep**---\r
\r
-_entersKeep_ task:\r
-	when pc enters anywhere\r
-	say 2029\r
-	end quest\r
\r
-_choose_ task:\r
-	when _entersKeep_ and not _cooldown_\r
-	-pick one of _random2_ _random1_ _random3_ _random4_\r
-	-start timer _reset_\r
-	start timer _second_\r
-	start timer _cooldown_\r
\r
	\r
	\r
--------**First Wave**---\r
_outcome1_ task:\r
	when _second_ and not _wave1check_\r
	create foe _warrior_ every 0 minutes 1 times with 100% success\r
	create foe _warrior_ every 0 minutes 1 times with 100% success\r
	create foe _warrior_ every 0 minutes 1 times with 100% success\r
	create foe _warrior_ every 0 minutes 1 times with 100% success\r
	create foe _warrior_ every 0 minutes 1 times with 100% success\r
	create foe _ally_ every 0 minutes 1 times with 100% success\r
	create foe _ally_ every 0 minutes 1 times with 100% success\r
	create foe _ally_ every 0 minutes 1 times with 100% success\r
	create foe _ally_ every 0 minutes 1 times with 100% success\r
	create foe _ally_ every 0 minutes 1 times with 100% success\r
	say 1013\r
	start timer _wave1check_\r
\r
\r
----------**Reinforcements**---\r
_callformoreknights_ task:\r
killed 5 _warrior_\r
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
\r
_wave2_ task:\r
	when _callformoreknights_ and not _retreat_ and not _wave2check_\r
	say 1016\r
	create foe _warrior_ every 0 minutes 1 times with 100% success\r
	create foe _warrior_ every 0 minutes 1 times with 100% success\r
	create foe _warrior_ every 0 minutes 1 times with 100% success\r
	create foe _warrior_ every 0 minutes 1 times with 100% success\r
	create foe _warrior_ every 0 minutes 1 times with 100% success\r
	create foe _healer_ every 0 minutes 1 times with 100% success\r
	setvar _makesound_\r
	start timer _retreat_\r
	stop timer _cooldown_\r
	play song song_30\r
	start timer _wave2check_\r
\r
\r
----------**Reinforcements 2**---\r
_callformoreknights2_ task:\r
	killed 10 _warrior_\r
\r
_wave3_ task:\r
	when _callformoreknights2_ and not _retreat_ and not _wave3check_\r
	say 1016\r
	create foe _warrior_ every 0 minutes 1 times with 100% success\r
	create foe _warrior_ every 0 minutes 1 times with 100% success\r
	create foe _warrior_ every 0 minutes 1 times with 100% success\r
	create foe _warrior_ every 0 minutes 1 times with 100% success\r
	create foe _warrior_ every 0 minutes 1 times with 100% success\r
	create foe _healer_ every 0 minutes 1 times with 100% success\r
	create foe _archer_ every 0 minutes 2 times with 25% success\r
	setvar _makesound_\r
	setvar _wave3spawn_\r
	play song song_09\r
	start timer _wave3check_\r
\r
\r
----------**Bait Leader Out**---\r
\r
_finalknight_ task:\r
	killed 15 _warrior_\r
\r
\r
_boss_ task:\r
	when _finalknight_ and not _retreat_ and not _bosscheck_\r
	create foe _spells_ every 0 minutes 1 times with 100% success\r
	say 1017\r
	create foe _nblade_ every 0 minutes 1 times with 100% success\r
	create foe _nblade_ every 0 minutes 1 times with 100% success\r
	create foe _healer_ every 0 minutes 1 times with 100% success\r
	create foe _healer_ every 0 minutes 1 times with 100% success\r
	create foe _healer_ every 0 minutes 1 times with 100 success\r
	setvar _makesound2_\r
	-start timer _reset_\r
	play song song_17\r
	start timer _bosscheck_\r
\r
\r
----------**Wave 3 Special**---\r
\r
_wave3spawn_ task:\r
	-when _callformoreknights2_ and _levelcheck1_ and _entersKeep_\r
	pick one of _random2_ _random1_ _random3_ _random4_ _dud_ _dud_ _dud_ \r
\r
_dud_ task:\r
	--do nothing\r
\r
_random1_ task:\r
	create foe _tiger_ every 0 minutes 1 times with 100% success\r
	create foe _tiger_ every 0 minutes 1 times with 100% success\r
	create foe _tiger_ every 0 minutes 1 times with 100% success\r
	say 2026\r
\r
_random2_ task:\r
	create foe _spider_ every 0 minutes 1 times with 100% success\r
	create foe _spider_ every 0 minutes 1 times with 100% success\r
	create foe _spider_ every 0 minutes 1 times with 100% success\r
	say 2026\r
\r
_random3_ task:\r
	create foe _dragon_ every 0 minutes 1 times with 100% success\r
	create foe _dragon_ every 0 minutes 1 times with 100% success\r
	create foe _dragon_ every 0 minutes 1 times with 100% success\r
	say 2026\r
\r
_random4_ task:\r
	create foe _rogue_ every 0 minutes 1 times with 100% success\r
	create foe _nblade_ every 0 minutes 1 times with 100% success\r
	create foe _rogue_ every 0 minutes 1 times with 100% success\r
	cast Spell_Reflection spell on _nblade_\r
\r
\r
----------**Kill Leader**---\r
\r
_killcommanderknights_ task:\r
	killed 1 _spells_\r
	say 1022\r
	give pc _victory_\r
	setvar _makesound3_\r
	setvar _winner_\r
	clear _soilders1_\r
	start timer _reset_\r
	-change repute with _Court_ by +1\r
	change repute with _KnightlyGuard_ by +3\r
	change repute with _Temple_ by +1\r
	legal repute +3\r
	remove foe _healer_\r
	remove foe _rogue_\r
	remove foe _nblade_\r
	remove foe _archer_\r
	remove foe _warrior_\r
	remove foe _tiger_\r
	remove foe _spider_\r
	remove foe _assassin_\r
	remove foe _dragon_\r
\r
----------**Leader Buff**---\r
\r
_finalhealer_ task:\r
	killed 4 _healer_\r
\r
_leaderbuffcheck_ task:\r
	injured _spells_\r
\r
	\r
_leaderheal_ task:\r
	when _leaderbuffcheck_ and not _finalhealer_\r
	pick one of _noBuff_ _noBuff_ _noBuff_ _noBuff_ _noBuff_ _Heal_ _Shield_ _Shield_ _Specail_\r
	setvar _leaderbuff_\r
	clear _leaderheal_\r
	\r
\r
_noBuff_ task:\r
	clear _noBuff_\r
	\r
_Heal_ task:\r
	cast Heal spell on _spells_\r
	clear _Heal_\r
\r
_Shield_ task:\r
	cast Shield spell on _spells_\r
	clear _Shield_\r
	\r
_Specail_ task:\r
	cast Invisibility spell on _spells_\r
	cast Iron_Will spell on _spells_\r
	clear _Specail_\r
\r
_buff1_ task:\r
	when _Levelcheck2_ and _leaderbuff_\r
    cast Spell_Reflection spell on _spells_\r
\r
_buff2_ task:\r
	when _Levelcheck3_ and _leaderbuff_\r
	cast Orc_Strength spell on _spells_\r
\r
_buff3_ task:\r
	when _Levelcheck3_ and _leaderbuff_\r
	cast Shield spell on _spells_\r
	\r
_buff4_ task:\r
	when _Levelcheck4_ and _leaderbuff_\r
	cast Jack_of_Trades spell on _spells_\r
	cast Nimbleness spell on _spells_ \r
\r
\r
----------** Pressure Spawns**---\r
\r
-_soilders1_ task:\r
-	when _callformoreknights_ and _Levelcheck1_ and _entersKeep_ and not _winner_\r
-	create foe _archer_ every 3 minutes 5 times with 100% success\r
-	create foe _warrior_ every 8 minutes 10 times with 100% success\r
\r
-_soilders2_ task:\r
-	when _callformoreknights_ and _Levelcheck2_ and _entersKeep_ and not _winner_-\r
-	create foe _archer_ every 3 minutes 5 times with 100% success\r
-	create foe _warrior_ every 8 minutes 10 times with 100% success\r
\r
_MagicCounterPick1_ task:\r
	when _wave2_ and _magiccheck_ and not _winner_\r
	pick one of _antiair1_ _antiair2_\r
\r
_MagicCounterPick2_ task:\r
	when _wave2_ and _magiccheck2_ and not _winner_\r
	cast Shield spell on _warrior_\r
\r
\r
_antiair1_ task:\r
	say 2027\r
	create foe _archer_ every 0 minutes 1 times with 100% success\r
	create foe _archer_ every 0 minutes 1 times with 100% success\r
	create foe _archer_ every 0 minutes 1 times with 100% success\r
	create foe _archer_ every 0 minutes 1 times with 100% success\r
	create foe _archer_ every 0 minutes 1 times with 100% success\r
	create foe _archer_ every 3 minutes 10 times with 100% success\r
\r
_antiair2_ task:\r
	say 2028\r
	create foe _dragon_ every 0 minutes 1 times with 100% success\r
	create foe _dragon_ every 0 minutes 1 times with 100% success\r
	create foe _dragon_ every 0 minutes 1 times with 100% success\r
	create foe _dragon_ every 0 minutes 1 times with 100% success\r
	create foe _archer_ every 3 minutes 10 times with 100% success\r
\r
\r
----------** Retreating**---\r
\r
_retreat_ task:\r
	say 2029\r
	start timer _findPC_\r
	clear _callformoreknights_\r
	clear _callformoreknights2_\r
\r
_retreatenemies_ task:\r
	when _findPC__ and not _winner_\r
	pick one of _noBuff_ _noBuff_ _noBuff_ _noBuff_ _gotYou_ _gotYou_ \r
	\r
_gotYou_ task:\r
	create foe _warrior_ every 0 minutes 1 times with 100% success\r
	create foe _warrior_ every 0 minutes 1 times with 100% success\r
	create foe _assassin_ every 0 minutes 1 times with 5% success\r
	create foe _nblade_ every 0 minutes 1 times with 5% success\r
	create foe _assassin_ every 0 minutes 2 times with 25% success\r
	cast Orc_Strength spell on _nblade_\r
	start timer _reset_\r
	say 2025\r
\r
\r
----------**Level Buff**---\r
\r
_Levelcheck1_ task:\r
	level 5 completed \r
\r
_Levelcheck2_ task:\r
	level 10 completed\r
\r
_Levelcheck3_ task:\r
	level 15 completed\r
\r
_Levelcheck4_ task:\r
	level 20 completed\r
\r
_Levelcheck5_ task:\r
	level 25 completed\r
\r
_Levelcheck6_ task:\r
	level 30 completed\r
\r
\r
-Add Retreat Timer\r
-Bandits find you over time `;export{e as default};

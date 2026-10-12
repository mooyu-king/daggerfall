const r=`Quest: WAQ_SHIP_RAID\r
DisplayName: \r
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
<ce> \r
\r
QBN:\r
\r
--	Quest start-up:\r
start task _askplayer_\r
\r
_askplayer_ task:  \r
	worldupdate block SHIPAA00.RMB at 1 in region 31 variant _raid\r
	end quest\r
`;export{r as default};

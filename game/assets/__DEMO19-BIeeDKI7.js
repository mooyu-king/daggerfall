const n=`---- Example quest to demonstrate direction hints for dungeon locations\r
\r
Quest: __DEMO19\r
\r
QRC:\r
\r
QuestorOffer:  [1000]\r
<ce>            Interested in a test of your pathfinding abilities?\r
\r
RefuseQuest:  [1001]\r
<ce>                Well, seems like you never know the right way, isn't it?\r
\r
AcceptQuest:  [1002]\r
<ce>             Excellent! I would like to test if you are able to find ___lostdung_ on your own.\r
<ce>             Do not expect help from me except for the one tip\r
<ce>             to ask peasants about some information where ___lostdung_ might\r
<ce>             be found.\r
\r
QuestLogEntry:  [1010]\r
%qdt:\r
 I was asked to find ___lostdung_ on my own.\r
 The only advise I was given was to ask peasants\r
 if they could provide some information about\r
 where I might be able to find it.\r
\r
Message:  1011\r
I only know that ___lostdung_ is a dangerous place.\r
<--->\r
You might want to look %di of this place.\r
<--->\r
You want to find ___lostdung_? It is %di of here.\r
\r
Message:  1012\r
You have finally found ___lostdung_!\r
\r
QBN:\r
\r
Place _lostdung_ remote dungeon anyInfo 1011\r
\r
--	Quest start-up:\r
	log 1010 step 0\r
	pc at _lostdung_ set _S.00_\r
\r
_S.00_ task:\r
	say 1012\r
	end quest\r
`;export{n as default};

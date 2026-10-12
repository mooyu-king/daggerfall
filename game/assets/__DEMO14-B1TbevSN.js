const e=`---- Example quest to demonstrate dialog linked resources and\r
---- add dialog to reveals anyinfo message\r
---- anyInfo message for person is available from start since no dialog link was established\r
---- so player can ask about where person can be found (via tell me about)\r
---- anyInfo message for item is hidden because dialog link was established\r
---- will be revealed once player clicked npc via add dialog\r
\r
Quest: __DEMO14\r
\r
QRC:\r
\r
Message:  1011\r
_someperson_ can be found in _tavern_.\r
\r
Message:  1012\r
This is a short anyInfo message about item resource...\r
\r
Message:  1013\r
You should ask around for _someitem_...\r
\r
QBN:\r
\r
Person _someperson_ face 81 faction The_Thieves_Guild anyInfo 1011\r
Item _someitem_ trinket anyInfo 1012\r
Place _tavern_ local tavern\r
\r
--	Quest start-up:\r
	dialog link for item _someitem_\r
	create npc _someperson_ \r
	place npc _someperson_ at _tavern_\r
\r
_S.00_ task:\r
	clicked npc _someperson_\r
	say 1013\r
	add dialog for item _someitem_`;export{e as default};

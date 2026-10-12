const e=`---- Example quest to demonstrate dialog linked resources\r
---- one resource is revealed when mentioned in message of\r
---- other resource given as answer by npc (via tell me about)\r
\r
Quest: __DEMO15\r
\r
QRC:\r
\r
Message:  1011\r
_someperson_ used to possess _someitem_.\r
\r
Message:  1012\r
It is said that _someitem_ has magical powers.\r
\r
QBN:\r
\r
Person _someperson_ face 81 faction The_Thieves_Guild anyInfo 1011\r
Item _someitem_ trinket anyInfo 1012\r
\r
--	Quest start-up:\r
	dialog link for person _someperson_ item _someitem_\r
	add dialog for person _someperson_`;export{e as default};

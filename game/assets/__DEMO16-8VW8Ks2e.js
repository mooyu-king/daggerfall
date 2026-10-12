const e=`---- Example quest to demonstrate rumors property of resource and dialog link\r
---- get information after (and only after) hearing the correct rumor\r
---- once an npc talked about the correct rumor the linked dialog option\r
---- will be available in the tell me about section\r
---- only one of the two rumors will reveal the chat topic about the person\r
---- rumors is using message 1020 here\r
---- (you have to switch dialog option and then it will show up in the\r
---- tell me about section)\r
---- you can then ask peasants for the correct place where the person\r
---- can be found\r
---- one (and only one) of the three possible answers is revealing the correct place\r
\r
Quest: __DEMO16\r
\r
QRC:\r
\r
QuestorOffer:  [1000]\r
<ce>            There is quite a talk lately about a mysterious person. Would you be willing to find out more about the rumors?\r
\r
RefuseQuest:  [1001]\r
<ce>                I am sorry to hear that. I understand,\r
<ce>                  of course, but it is disappointing.\r
\r
AcceptQuest:  [1002]\r
<ce>             That's good to hear. You need to ask around for news and rumors...\r
\r
QuestLogEntry:  [1010]\r
%qdt:\r
 I need to ask around for news and rumors about a mysterious person\r
\r
Message:  1011\r
_thief_ was said to be a master thief.\r
<--->\r
_thief_ does all of the thieves guild footwork.\r
<--->\r
The _thief_ is that =thief_ down at _tavern_.\r
\r
Message:  1020\r
_thief_ is in town. You should try to meet %g2. Just ask around where you can find _thief_.\r
<--->\r
There are rumors about a mysterious person in town, but unfortunately I cannot provide a name.\r
\r
QBN:\r
\r
Person _thief_ face 81 faction The_Thieves_Guild anyInfo 1011 rumors 1020\r
Place _tavern_ local tavern\r
\r
--	Quest start-up:\r
	dialog link for person _thief_ \r
	log 1010 step 0  \r
	create npc _thief_ \r
	place npc _thief_ at _tavern_`;export{e as default};

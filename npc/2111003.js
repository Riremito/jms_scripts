// ヒュモノイドA
var npc_talk_status = -1;

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				// BB後
				var text = "僕は人間になりたいです。暖かい心を持った人間に…そうなったらきっと、彼女の手の暖かさも感じることができるでしょう。でも、それは叶わぬ夢…。\r\n";
				return cm.sendSimple(text);
			}
		case 1:
			{
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}
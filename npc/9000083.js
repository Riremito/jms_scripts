// �r����
// 7���N
// �e�X�g�p�r

var npc_talk_status = -1;

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				var text = "�e�X�g\r\n";
				//text += "#L" + 0 + "##b#k#l\r\n";
				//text += "#L" + 1 + "##b#k#l\r\n";
				text += "#r��#b��#d��#g��#k#e����#n#k��\r\n";

				text += "#r�A�C�e�������� = #k#z2000005# #c2000005#\r\n";
				text += "#r�}�b�v�� = #k#m910000000#\r\n";
				text += "#rNPC�� = #k#p9000083#\r\n";
				text += "#rMob�� = #k#o9400439#\r\n";
				text += "#r�A�C�e���� = #k#t2070016#\r\n";
				text += "#r�A�C�e����� = #k#z2070016#\r\n";
				text += "#r�A�C�e���A�C�R��1 = #k#v2070016#\r\n";
				text += "#r�A�C�e���A�C�R��2 = #k#i2070016#\r\n";
				text += "#r�X�L���A�C�R�� = #k#s4121007#\r\n"
				text += "#r�X�L���� = #k#q4121007#\r\n"
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
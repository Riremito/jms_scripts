// �^�~
// ���v������I���r�X

var npc_talk_status = -1;
var ticket_itemid = 4031045;

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				// �f�o�b�O���[�h
				if (!cm.haveItem(ticket_itemid)) {
					cm.gainItem(ticket_itemid, 1);
				}
				// �K��
				var text = "��������D�ɏ��ƒ����ɂȂ�܂��̂ŋ}�ȗp������ΐ�ɉ������Ă��������B�������ł����H�D�ɏ��܂����H";
				return cm.sendYesNo(text);
			}
		case 1:
			{
				if (cm.haveItem(ticket_itemid)) {
					cm.gainItem(ticket_itemid, -1);
				}

				// �I���r�X�`�P�b�g����
				cm.warp(200000100);
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}
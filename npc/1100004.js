// �L��
// �G��������I���r�X

var npc_talk_status = -1;

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				// �����}�}
				var text = "�I�V���A�嗤��#b�I���r�X#k�܂ł����鎞�Ԃ͖� #b8��#k���B������#b1000#k�����B1000�����o���đD�ɏ�邩�H";
				return cm.sendYesNo(text);
			}
		case 1:
			{
				// �I���r�X�`�P�b�g����
				cm.warp(200000100);
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}

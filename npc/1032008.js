// �`�F��
// �G���j�A����I���r�X

var npc_talk_status = -1;

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				// �f�o�b�O���[�h
				if (!cm.haveItem(4031045)) {
					cm.gainItem(4031045, 1);
				}
				// �����}�}
				var text = "��������D�ɏ��ƒ����ɂȂ�܂��̂ŋ}�ȗp������ΐ�ɉ������Ă��������B�������ł����H�D�ɏ��܂����H";
				return cm.sendYesNo(text);
			}
		case 1:
			{
				if (cm.haveItem(4031045)) {
					cm.gainItem(4031045, -1);
				}

				//cm.warp(101000301, 0);
				// �I���r�X�`�P�b�g����
				cm.warp(200000100);
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}
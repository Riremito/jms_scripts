// �p�`���R2

var npc_talk_status = -1;
function action(mode, type, selection) {
	if (mode == 1) {
		npc_talk_status++;
	} else {
		npc_talk_status--;
	}

	switch (npc_talk_status) {
		case 0:
			{
				// �p�`���R�ʂ��������Ă���ꍇ
				if (cm.getPlayer().getTama() > 0) {
					cm.sendYesNo("�p�`���R���n�߂܂��傤���B");
					return;
				}

				cm.sendOk("�p�`���R�ʂ�����Ȃ����߁A�p�`���R�����邱�Ƃ��ł��܂���B�����A�|�C���g�V���b�v��ETC�̌o�ϊ������Ńp�`���R�ʂ�̔����ł��̂ŁA�����p���������B");
				break;
			}
		case -1:
			{
				cm.sendOk("�c�O�ł��ˁc�B��Ŏ��Ԃ��ł��܂�����A�����p���������B");
				break;
			}
		case 1:
			{
				cm.getPlayer().StartPachinko(0);
				break;
			}
		default:
			break;
	}

	cm.dispose();
}
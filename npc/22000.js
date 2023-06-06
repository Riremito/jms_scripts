// �V�����N�X
// �`�����烁�C�v���A�C�����h��

function ToVictoria(npc_talk_status, selection) {
	switch (npc_talk_status) {
		case 0:
			{
				// �f�o�b�O���[�h
				if (!cm.haveItem(4031801)) {
					cm.gainItem(4031801, 1);
				}
				// �����}�}
				var text = "���̑D�ɏ��΁A�L��ȃt�B�[���h���L����#b�r�N�g���A�A�C�����h#k�ɍs�����Ƃ��ł���B#e150 ����#n�K�v�����ǂˁB�����A��x�r�N�g���A�A�C�����h�ɓn���Ă��܂��ƁA�C�s����ň�l�O�ɂȂ�Ȃ���΁A���̃��C�v���A�C�����h�ɂ͖߂��Ă���Ȃ��Ȃ�񂾁B�����ɔ�ׂĊ댯�̑������ł����邩��A���x����5���炢�ɂ����Ă��痷���Ƃ悢���낤�ˁB";
				return cm.sendYesNo(text);

			}
		case 1:
			{
				if (cm.haveItem(4031801)) {
					// �����}�}
					var text = "����̓A���z�X�g�̒��V���[�J�X�l�̐��E������Ȃ���!���ꂪ����Ȃ瑁���s���Ă���A���͂���񂼁B";
					return cm.sendSimple(text);
				}
				if (cm.getMeso() < 150) {
					// �K��
					cm.sendOk("�������s�����Ă��܂��B");
					return cm.dispose();
				}
				// �K��
				return cm.sendSimple("150�����󂯎��܂����B");
			}
		case 2:
			{
				if (cm.haveItem(4031801)) {
					// �����}�}
					var text = "���E���������Ă��邩��A���ʂɗ����͖Ə����悤�B�����I�r�N�g���A�A�C�����h�ɏo�����邼�I�h��邩������Ȃ����牽���ɕ߂܂��Ă���I";
					// sendNextPrev������ɓ��삵�Ȃ�
					return cm.sendSimple(text);
				}
				cm.gainMeso(-150);
				cm.warp(104000000);
				return cm.dispose();
			}
		case 3:
			{
				cm.warp(104000000);
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}

function FromVictoria(npc_talk_status, selection) {
	var fame = cm.getPlayer().getFame();
	switch (npc_talk_status) {
		case 0:
			{
				// �l�C�x����
				if (fame < 300) {
					// �����}�}
					var text = "�l�C�x��300�ȏ�Ȃ��ƃ��C�v���A�C�����h�ɍs�����Ƃ͂ł��Ȃ��B";
					return cm.sendSimple(text);
				}
				// �����}�}
				var text = "���ʂɃT�E�X�y���Ɉړ������Ă����悤�B�ǂ����� #b���C�v���A�C�����h�̃T�E�X�y��#k�ɍs�����������H";
				return cm.sendYesNo(text);

			}
		case 1:
			{
				if (fame < 300) {
					return cm.dispose();
				}
				cm.warp(2000000);
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}

var npc_talk_status = -1;

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}
	npc_talk_status++;

	var mapid = cm.getMapId();

	if (mapid == 104000000) {
		return FromVictoria(npc_talk_status, selection);
	}

	return ToVictoria(npc_talk_status, selection);
}

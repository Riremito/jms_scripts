// �p�`���R�f�r���[

var npc_talk_status = -1;

function start(mode, type, selection) {
	if (mode != 1) {
		return qm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				// BB��
				//qm.forceCompleteQuest();
				//qm.forceStartQuest();
				return qm.sendSimple("��������悤�B�����͂ǂ���܂��ˁB�J�ł��~��̂�����B");
			}
		case 1:
			{
				// BB��
				return qm.sendSimple("����ȓ��ɂ͖`����������A���K�Ȏ����ŋC���]���������񂶂�Ȃ�������B");
			}
		case 2:
			{
				// BB��
				return qm.sendSimple("�C���]���Ƃ����΃p�`���R�ˁB���������ǁA�p�`���R�͂�������Ƃ��邩����H�C�y�Ɋy���߂���B���x����V������ׂ����Ƃ��낾����A��x����Ă݂�Ƃ�����B");
				// prev next
			}
		case 3:
			{
				// prev next
				return qm.sendSimple("�p�`���R���܂ŗ��Ă�������΃p�`���R�ʂ������������B�߂��̒����炷���ɂł������͂�����B");
			}
		case 4:
			{
				qm.forceStartQuest();
				return qm.dispose();
			}
		default:
			break;
	}
	return qm.dispose();
}

function end(mode, type, selection) {
	if (mode != 1) {
		return qm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				// BB��
				return qm.sendSimple("����A���Ă��ꂽ�̂ˁB���ꂶ�Ⴀ�p�`���R�ʂ�������Ƃ����邩��A����Ńp�`���R�f�r���[���Ă����Ȃ����B");
			}
		case 1:
			{
				// BB��
				return qm.sendSimple("�����̌��ʂ��C�}�C�`�ł��A�����܂�������Ƌʂ𕪂��Ă����邠����S�z�Ȃ��y����ŗ��ĂˁB");
			}
		case 2:
			{
				// BB��
				return qm.sendSimple("�����ʂ�����Ȃ���΁A�������ɂ���#b�p�`���R�ʌ����@�𗘗p����Ƃ������B#k");
			}
		case 3:
			{
				// �p�`���R�ʂ�100�ʒǉ����鏈��
				qm.forceCompleteQuest();
				return qm.dispose();
			}
		default:
			break;
	}
	return qm.dispose();
}
// ���ݔ���������
// �r�W�^�[�֘A

var npc_talk_status = -1;

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				// �����}�} ����
				var text = "����!!!���ŃR�C���𓊂����肷���!!!\r\n���ݔ��Ƃł��v���Ă�̂��H";
				return cm.sendSimple(text);
			}
		default:
			break;
	}

	return cm.dispose();
}
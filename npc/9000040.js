// �_���A

var medal_list = Array(
	[1142005, "�`���I�Ȏ�l", "���W�F���h�n���^�["],
	[1142006, "���C�v���A�C�h���X�^�[", "���C�v���A�C�h���X�^�["],
	[1142007, "�z�[���e�C���X���C���[", "�z�[���e�C���X���C���["],
	[1142008, "�s���N�r�[�� �X���C���[", "�s���N�r�[���X���C���["],
	[1142030, "�X�̊�t��", "���X�`�� ��t��"]
);

function DebugGetMedal(index) {
	if (cm.haveItem(medal_list[index][0])) {
		return false;
	}
	cm.gainItem(medal_list[index][0], 1);
	var player_name = cm.getPlayer().getName();
	cm.worldMessage(6, player_name + "���� " + medal_list[index][2] + "�̏̍����l�����܂����B");
	return true;
}

var npc_talk_status = -1;

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				// BB��
				var text = "�ǂ̌M�͂̃����L���O���������̂��H\r\n";
				for (var i = 0; i < medal_list.length; i++) {
					text += "#L" + i + "##b" + medal_list[i][1] + "#k#l\r\n";
				}
				return cm.sendSimple(text);
			}
		case 1:
			{
				// �Ƃ肠�����M�͂������ă��b�Z�[�W�𗬂��Ă���
				DebugGetMedal(selection);
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}
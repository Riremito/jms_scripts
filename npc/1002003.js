// ���������W�W
// �F�B���X�g

var npc_talk_status = 0;

function action(mode, type, selection) {
	npc_talk_status++;
	switch (npc_talk_status) {
		case 1:
			{
				// �����}�}, BB����������ۂ�
				var text = "���������q���񂪑�R����Ƃ����̂��c �����I������Ƒ҂��Ȃ���B�N�̊炩�炵�āA�F�B�����Ȃ葽�������Ă���񂶂�Ȃ����ˁH�ǂ����H�c���V�Ɏ኱�̃������������΁A�F�B�̃��X�g�𑝂₵�Ă�낤�B�������A�����G���g���[ID�̑��̃L�����N�^�[�ɂ͔��f����Ȃ�����o���Ă����񂶂Ⴜ�B�����A����Ă݂񂩁H";
				return cm.sendYesNo(text);
			}
		case 2:
			{
				if (mode == 0) {
					npc_talk_status = -1;
					// BB��
					var text = "�������c�N�̓��V���v�����قǗF�B�����Ȃ��悤����́B�q���z�z�z�A��k�Ɍ��܂��Ă��邶��낤�B�Ƃɂ����C���ς�����疔���Ă����B�F�B�𑝂₵�����Ȃ�ȁc�q���z�z�c";
					return cm.sendSimple(text);
				}
				// BB��
				var text = "�悵�悵�A�悭���f�����̂��B�l�i�͂��܂荂���Ȃ��B���͌����Z�[�����Ԃ�����#b�F�B���X�g5���̒ǉ���5������#k�����ꂶ��ȁB�������A�o���ł͔���Ȃ����B��x���₵����i���Ƀ��X�g�̏���͑������܂܂��B�ǂ����H#b50000����#k�𕥂��̂��H";
				return cm.sendYesNo(text);
			}
		case 3:
			{
				var friend_list = cm.getBuddyCapacity();
				if (mode == 0 || friend_list >= 96) {
					npc_talk_status = -1;
					// BB��
					var text = "�������c �N�̓��V���v�����قǗF�B�����Ȃ��悤����́B����Ƃ�#b50000����#k�������Ă��Ȃ��̂��H�Ƃɂ����C���������疔���Ă����B����������΂ȁc �q���z�z�c";
					return cm.sendSimple(text);
				}
				// BB��
				friend_list += 5;
				cm.updateBuddyCapacity(friend_list);
				var text = "�悵�I��������B�N�̗F�B�̃��X�g��5���₵�����B�m�F���Ă݂Ă���B�����A����ł��F�B�̃��X�g������Ȃ��̂Ȃ�܂����V�̏��֗��Ă���B200�܂łȂ瑝�₵�Ă����邩��B������񂨋��͒������̂��B�ł͂ȁA�q���z�z�`";
				return cm.sendOk(text);
			}
		default:
			break;
	}

	return cm.dispose();
}
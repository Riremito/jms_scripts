// ��m�]�E����

var npc_talk_status = -1;

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				if (cm.haveItem(4031008)) {
					// �����}�}, ���@�g��������
					var text = "����c����͊ԈႢ�Ȃ�#b#p1022000##k�l�̎莆���ȁc�N�A��m��2���]�E�������󂯂邽�߁A�����܂Ŏ���q�˂ė����悤���ˁB�悵�c����ł͐�m��2���]�E�����ɂ��ĊȒP�ɐ������悤�B���܂蕡�G�ł͂Ȃ�����S�z���Ȃ��ł�����B";
					return cm.sendSimple(text);
				}
			}
		case 1:
			{
				// �����}�}, ���@�g��������
				var text = "�����N������閧�̃}�b�v�ɑ����Ă����悤�B�����ɂ͕��ʂ̃t�B�[���h�ɂ͌����Ȃ�������������X�^�[��������B�������p�͓����������i�͑S�R�Ⴄ�B��炩��͌o���l����ʃA�C�e�����Ⴆ�Ȃ��B";
				// prev next
				return cm.sendSimple(text);
			}
		case 2:
			{
				// ���@�g��
				// var text = "���̒��ł���|����#b#z4031013##k�Ƃ����A�C�e���𓾂邱�Ƃ��ł���B����͂��̏X���ĉ����S���W�܂��č��ꂽ���ʂȋʂ��B���̋ʂ�30�W�߂Ē��ɂ��鎄�̒��Ԃɐ����|����΍��i���B";
				// �����}�}
				var text = "�������|����#b#z4031013##k�Ƃ����A�C�e���𓾂邱�Ƃ��ł���B����͂��̏X���ĉ����S���W�܂��č��ꂽ���ʂȋʂ��B���̋ʂ�30�W�߂Ē��ɂ��鎄�̒��Ԃɐ����|����΍��i���B";
				// prev next
				return cm.sendSimple(text);
			}
		case 3:
			{
				// �����}�}, ���@�g��������
				var text = "��x���ɓ�������C�����ʂ��܂ŊO�ɏo�邱�Ƃ͂ł��Ȃ��B�����āA���̒��Ŏ���ł�����ς�o���l�͗����邩��C��t���������ǂ���B�����Ə��������Ȃ���΂Ȃ�Ȃ��Ƃ������ƁB�����c���ꂶ�፡�����������󂯂邩�H";
				return cm.sendYesNo(text);
			}
		case 4:
			{
				// �����}�} , ���@�g��������, �A�C�e�����������ύX
				var text = "�悵�I���ꂶ�Ⴀ���ɓ���Ă�낤�B���Ń����X�^�[��|����#b#z4031013##k��30�W�߂���A���ɂ��鎄�̒��Ԃɐ����|����Ύ������i�̏؋��i�ł���#b#z4031012##k���󂯎�邱�Ƃ��ł���B���ꂶ�ጟ�����F��B";
				return cm.sendSimple(text);
			}
		case 5:
			{
				// ����}�b�v��3���݂���
				cm.warp(108000300, 0);
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}

/*
var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	if (status == 0) {
		if (cm.getQuestStatus(100004) == 1) {
			cm.sendOk("You will have to collect me #b30 #t4031013##k. Good luck.");
			status = 3;
		} else {
			if (cm.getQuestStatus(100004) == 2) {
				cm.sendOk("You're truly a hero!");
				cm.safeDispose();
			} else if (cm.getQuestStatus(100003) >= 1) {
				cm.completeQuest(100003);
				if (cm.getQuestStatus(100003) == 2) {
					cm.sendNext("Oh, isn't this a letter from #bDances with Balrog#k?");
				}
			} else {
				cm.sendOk("I can show you the way once your ready for it.");
				cm.safeDispose();
			}
		}
	} else if (status == 1) {
		cm.sendNextPrev("So you want to prove your skills? Very well...")
	} else if (status == 2) {
		cm.askAcceptDecline("I will give you a chance if you're ready.");
	} else if (status == 3) {
		cm.startQuest(100004);
		cm.sendOk("You will have to collect me #b30 #t4031013##k. Good luck.")
	} else if (status == 4) {
		//	    cm.gainItem(4031008, -1);
		cm.warp(108000300, 0);
		cm.dispose();
	}
}
*/
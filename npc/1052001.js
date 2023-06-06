// �_�[�N���[�h
// �����]�E

var job_1st_level = 10;
var job_1st = 400;

var job_2nd_level = 30;
var job_2nd = Array(
	410,
	420
);

var job_3rd_level = 70;
var job_3rd = Array(
	411,
	421
);

var job_4th_level = 120;
var job_4th = Array(
	412,
	422
);

var npc_talk_status = 0;
// �]�E���ɏ������؂�ւ���Ă��܂�����NPC��b�J�n���ɐE��ID��ێ�����
var jobid = -1;

/*
	�}�C�������Ă��l���N���H#h0#�c�ӂށB�ޏ��Ɍ���ꂽ�ǂ���ɁA���Ȃ莑��������悤�Ȏᑢ���ȁc�����A�����ɂȂ肽�����āH�����ɂ��ĕ������Ă邩�H
	�����Ƃ����Ƃ����ۂ��Ȃ����D���v���l�����邪�A���͈Ⴄ�񂾁B���C�v�����[���h�̓����͈ł̒��ŉs���Z���Ǝ藠���Ő키�l�������B�����������琳�X���X�Ƃ��ĂȂ����������邩������Ȃ��B�����A����������̖{���B�ے肷��K�v�͂Ȃ�����B
	�E�ƂƂ��Ă̓����͑f�����ċ��͂ȃX�L���œG���U������񂾁B�̗͎͂ア�ق������A���̕��������������߃����X�^�[�������̂�����Ȃ��B���͂ȉ^�ŃN���e�B�J���ȍU�������܂����ȁB
	�ǂ����H�����̓������ɕ��ނ��H�N�������̓��ɐi�ނƌ��߂���]�E���̓����ŌN��������#b�J�j���O�V�e�B�[�A�����̃A�W�g#k�ɏ��҂���c�B���ȏ���������h�Ɏv���񂾂ȁB#r�����A���̐E�Ƃ������Ɨǂ�������H����Ȃ�f���Ă���B��������Ȃ����̓��𐄑E���邩��#k�B
*/

function JobChange1(mode, type, selection) {
	if (mode != 1) {
		if (npc_talk_status == 1) {
			// BB��
			var text = "�܂��S�̏������ł��ĂȂ����H";
			cm.sendSimple(text);
		}
		return cm.dispose();
	}

	npc_talk_status++;

	switch (npc_talk_status) {
		case 1:
			{
				// BB��
				var text = "�����̃A�W�g�ւ悤�����B�����ł����Ȃ��Ɠ������Ȃ��Ȃ�������h�������B�ӂӁA�o�鎞�ɖ���悭�����Ă����Ă���B����A�����ɂȂ鏀���͂ł������H";
				return cm.sendYesNo(text);
			}
		case 2:
			{
				cm.resetStats(4, 25, 4, 4);
				cm.changeJob(job_1st);
				// BB��
				var text = "����ŌN�͓����ɂȂ����B�����̃X�L�����g�p�ł���悤�ɂȂ�������X�L���E�B���h�E���J���Ă݂Ă���B���x�����グ��Ƃ�葽���̃X�L�����o���邱�Ƃ��ł���񂾁B";
				return cm.sendSimple(text);
			}
		case 3:
			{
				// BB��
				var text = "�X�L�������ł͕�����Ȃ��ȁH�X�e�[�^�X�������炵���Ȃ�Ȃ��Ɩ{���̓�������Ȃ��ȁB������LUK�����C���X�e�[�^�X�ŁADEX���⏕�X�e�[�^�X�ɂȂ�B�X�e�[�^�X�̏グ����������Ȃ�������#b�����z��#k���g�p����Ƃ����B";
				return cm.sendSimple(text);
			}
		case 4:
			{
				// BB��
				var text = "�����āA�v���[���g�����邼�B�N�̑�����ETC�A�C�e���̕ۊǔ��̌��𑝂₵�Ă������񂾁B�C���x���g�����L���Ɨ����y�����Ȃ���́B�ӂӁc";
				return cm.sendSimple(text);
			}
		case 5:
			{
				// BB��
				var text = "���āI�����N�ɋ�������̂͂����܂ł��B�N�ɖ𗧂悤�ȕ�����������n�������痷�����Ȃ��玩�g��b���Ă݂Ă���B";
				return cm.sendSimple(text);
			}
		default:
			break;
	}

	return cm.dispose();
}

function JobChange2(mode, type, selection) {
	if (mode != 1) {
		if (npc_talk_status == 1) {
			// BB��
			var text = "�܂��S�̏������ł��ĂȂ����H";
			cm.sendSimple(text);
		}
		return cm.dispose();
	}

	npc_talk_status++;

	switch (npc_talk_status) {
		case 1:
			{
				// BB��
				var text = "2���]�E�e�X�g\r\n";
				for (var i = 0; i < job_2nd.length; i++) {
					text += "#L" + job_2nd[i] + "##b" + job_2nd[i] + "#k#l\r\n";
				}
				return cm.sendYesNo(text);
			}
		case 2:
			{
				var next_job = selection;
				cm.changeJob(next_job);
				// BB��
				var text = "2���]�E";
				return cm.sendSimple(text);
			}
		default:
			break;
	}

	return cm.dispose();
}
function JobChange3(mode, type, selection) {
	if (mode != 1) {
		if (npc_talk_status == 1) {
			// BB��
			var text = "�܂��S�̏������ł��ĂȂ����H";
			cm.sendSimple(text);
		}
		return cm.dispose();
	}

	npc_talk_status++;

	switch (npc_talk_status) {
		case 1:
			{
				// BB��
				var text = "3���]�E�e�X�g\r\n";
				for (var i = 0; i < job_3rd.length; i++) {
					text += "#L" + job_3rd[i] + "##b" + job_3rd[i] + "#k#l\r\n";
				}
				return cm.sendYesNo(text);
			}
		case 2:
			{
				var next_job = selection;
				cm.changeJob(next_job);
				// BB��
				var text = "3���]�E";
				return cm.sendSimple(text);
			}
		default:
			break;
	}

	return cm.dispose();
}
function JobChange4(mode, type, selection) {
	if (mode != 1) {
		if (npc_talk_status == 1) {
			// BB��
			var text = "�܂��S�̏������ł��ĂȂ����H";
			cm.sendSimple(text);
		}
		return cm.dispose();
	}

	npc_talk_status++;

	switch (npc_talk_status) {
		case 1:
			{
				// BB��
				var text = "4���]�E�e�X�g\r\n";
				for (var i = 0; i < job_4th.length; i++) {
					text += "#L" + job_4th[i] + "##b" + job_4th[i] + "#k#l\r\n";
				}
				return cm.sendYesNo(text);
			}
		case 2:
			{
				var next_job = selection;
				cm.changeJob(next_job);
				// BB��
				var text = "4���]�E";
				return cm.sendSimple(text);
			}
		default:
			break;
	}

	return cm.dispose();
}

function JobCheck(jobid_list, jobid) {
	for (var i = 0; i < jobid_list.length; i++) {
		if (jobid_list[i] == jobid) {
			return true;
		}
	}

	return false;
}

function JobChange(mode, type, selection) {
	// �E��ID�ƃ��x�����擾
	if (jobid == -1) {
		jobid = cm.getJob();
	}
	var level = cm.getPlayer().getLevel();

	// 1���]�E����
	if (job_1st_level <= level && jobid == 0) {
		JobChange1(mode, type, selection);
		return true;
	}

	// 2���]�E����
	if (job_2nd_level <= level && job_1st == jobid) {
		JobChange2(mode, type, selection);
		return true;
	}

	// 3���]�E����
	if (job_3rd_level <= level && JobCheck(job_2nd, jobid)) {
		JobChange3(mode, type, selection);
		return true;
	}

	// 4���]�E����
	if (job_4th_level <= level && JobCheck(job_3rd, jobid)) {
		JobChange4(mode, type, selection);
		return true;
	}

	return false;
}

function action(mode, type, selection) {
	if (JobChange(mode, type, selection)) {
		return;
	}
	/*
	// �E��ID�ƃ��x�����擾
	var jobid = cm.getJob();
	var level = cm.getPlayer().getLevel();

	if (mode != 1) {
		if (npc_talk_status == 1) {
			// BB��
			var text = "�܂��S�̏������ł��ĂȂ����H";
			cm.sendSimple(text);
		}
		return cm.dispose();
	}

	npc_talk_status++;

	switch (npc_talk_status) {
		case 1:
			{
				if (jobid == 0 && level >= 10) {
					// BB��
					var text = "�����̃A�W�g�ւ悤�����B�����ł����Ȃ��Ɠ������Ȃ��Ȃ�������h�������B�ӂӁA�o�鎞�ɖ���悭�����Ă����Ă���B����A�����ɂȂ鏀���͂ł������H";
					return cm.sendYesNo(text);
				}
				// BB��
				var text = "�B���ȉ�b�c�H�B���ȍs�������Z�̓��������A����͓G�Ɛ키���x�ŏ[�����B";
				// BB�O?
				// �`���������Ȃ邱�Ƃ��ǂ����y���݂Ȃ���邵�����Ȃ����c�H�@��X�ƈꏏ�ɐ��̒����y���݂Ȃ��琶���čs���̂͂ǂ����H�@�{���ɖʔ������H
				cm.sendSimple(text);
				return cm.dispose();
			}
		case 2:
			{
				cm.resetStats(4, 25, 4, 4);
				//cm.expandInventory(1, 4);
				//cm.expandInventory(4, 4);
				// ����s
				cm.changeJob(400);
				//if (cm.getQuestStatus(1048) == 1) {
				//	cm.forceCompleteQuest(1048);
				//}
				// BB��
				var text = "����ŌN�͓����ɂȂ����B�����̃X�L�����g�p�ł���悤�ɂȂ�������X�L���E�B���h�E���J���Ă݂Ă���B���x�����グ��Ƃ�葽���̃X�L�����o���邱�Ƃ��ł���񂾁B";
				return cm.sendSimple(text);
			}
		case 3:
			{
				// BB��
				var text = "�X�L�������ł͕�����Ȃ��ȁH�X�e�[�^�X�������炵���Ȃ�Ȃ��Ɩ{���̓�������Ȃ��ȁB������LUK�����C���X�e�[�^�X�ŁADEX���⏕�X�e�[�^�X�ɂȂ�B�X�e�[�^�X�̏グ����������Ȃ�������#b�����z��#k���g�p����Ƃ����B";
				return cm.sendSimple(text);
			}
		case 4:
			{
				// BB��
				var text = "�����āA�v���[���g�����邼�B�N�̑�����ETC�A�C�e���̕ۊǔ��̌��𑝂₵�Ă������񂾁B�C���x���g�����L���Ɨ����y�����Ȃ���́B�ӂӁc";
				return cm.sendSimple(text);
			}
		case 5:
			{
				// BB��
				var text = "���āI�����N�ɋ�������̂͂����܂ł��B�N�ɖ𗧂悤�ȕ�����������n�������痷�����Ȃ��玩�g��b���Ă݂Ă���B";
				return cm.sendSimple(text);
			}
		default:
			break;
	}
	*/
	var text = "�B���ȉ�b�c�H�B���ȍs�������Z�̓��������A����͓G�Ɛ키���x�ŏ[�����B";
	cm.sendSimple(text);
	return cm.dispose();
}

/*
var status = 0;
var job;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 0 && status == 2) {
		cm.sendOk("You know there is no other choice...");
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		if (cm.getJob() >= 400 && cm.getJob() <= 434 && cm.getQuestStatus(2351) == 1) {
			cm.forceCompleteQuest(2351);
			cm.gainItem(1032076, 1); //owl earring
		}
		if (cm.getJob() == 0) {
			if (cm.getPlayerStat("LVL") >= 10 && cm.getJob() == 0)
				cm.sendNext("So you decided to become a #rThief#k?");
			else {
				cm.sendOk("Train a bit more and I can show you the way of the #rThief#k.")
				cm.dispose();
			}
		} else {
			if (cm.getPlayerStat("LVL") >= 30 && cm.getJob() == 400) {
				if (cm.getQuestStatus(100009) >= 1) {
					cm.completeQuest(100011);
					if (cm.getQuestStatus(100011) == 2) {
						status = 20;
						cm.sendNext("I see you have done well. I will allow you to take the next step on your long road.");
					} else {
						if (!cm.haveItem(4031011)) {
							cm.gainItem(4031011, 1);
						}
						cm.sendOk("Go and see the #rJob Instructor#k.")
						cm.dispose();
					}
				} else {
					status = 10;
					cm.sendNext("The progress you have made is astonishing.");
				}
			} else if (cm.getQuestStatus(100100) == 1) {
				cm.completeQuest(100101);
				if (cm.getQuestStatus(100101) == 2) {
					cm.sendOk("Alright, now take this to #bArec#k.");
				} else {
					cm.sendOk("Hey, #b#h0##k! I need a #bBlack Charm#k. Go and find the Door of Dimension.");
					cm.startQuest(100101);
				}
				cm.dispose();
			} else {
				cm.sendNext("�`���������Ȃ邱�Ƃ��ǂ����y���݂Ȃ���邵�����Ȃ����c�H�@��X�ƈꏏ�ɐ��̒����y���݂Ȃ��琶���čs���̂͂ǂ����H�@�{���ɖʔ������H");
				cm.dispose();
			}
		}
	} else if (status == 1) {
		cm.sendNextPrev("It is an important and final choice. You will not be able to turn back.");
	} else if (status == 2) {
		cm.sendYesNo("Do you want to become a #rThief#k?");
	} else if (status == 3) {
		if (cm.getJob() == 0) {
			cm.resetStats(4, 25, 4, 4);
			cm.expandInventory(1, 4);
			cm.expandInventory(4, 4);
			cm.changeJob(400); // THIEF
			if (cm.getQuestStatus(2351) == 1) {
				cm.forceCompleteQuest(2351);
				cm.gainItem(1032076, 1); //owl earring
			}
		}
		cm.gainItem(1332063, 1);
		cm.gainItem(1472000, 1);
		cm.gainItem(2070015, 500);
		cm.sendOk("So be it! Now go, and go with pride.");
		cm.dispose();
	} else if (status == 11) {
		cm.sendNextPrev("You may be ready to take the next step as a #rAssassin#k or #rBandit#k.");
	} else if (status == 12) {
		cm.askAcceptDecline("But first I must test your skills. Are you ready?");
	} else if (status == 13) {
		cm.startQuest(100009);
		cm.gainItem(4031011, 1);
		cm.sendOk("Go see the #bJob Instructor#k somewhere in the city. He will show you the way.");
		cm.dispose();
	} else if (status == 21) {
		cm.sendSimple("What do you want to become?#b\r\n#L0#Assassin#l\r\n#L1#Bandit#l#k");
	} else if (status == 22) {
		var jobName;
		if (selection == 0) {
			jobName = "Assassin";
			job = 410; // ASSASIN
		} else {
			jobName = "Bandit";
			job = 420; // BANDIT
		}
		cm.sendYesNo("Do you want to become a #r" + jobName + "#k?");
	} else if (status == 23) {
		cm.changeJob(job);
		cm.gainItem(4031012, -1);
		cm.sendOk("So be it! Now go, my servant.");
		cm.dispose();
	}
}
*/
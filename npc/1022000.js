// �R�u�V���J���ė���
// ��m�]�E


var job_1st_level = 10;
var job_1st = 100;

var job_2nd_level = 30;
var job_2nd = Array(
	110,
	120,
	130
);

var job_3rd_level = 70;
var job_3rd = Array(
	111,
	121,
	131
);

var job_4th_level = 120;
var job_4th = Array(
	112,
	122,
	132
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
				// 2���]�E�\���
				if (cm.haveItem(4031012)) {
					// ���@�g��
					// var text = "";
					// �����}�}
					var text = "�����c�����ɋA���Ă����ˁI�@�N�Ȃ炻��Ȏ������炢�͊ȒP�Ƀp�X����Ǝv�����ˁB�N���{���ɋ�����m�Ƃ������Ƃ�F�߂悤�B�����c�N�������Ƌ������Ă�����B���̑O�Ɂc�I�@�N��3�̓��̒��ň��I�����Ȃ���΂Ȃ�Ȃ��B������Ƃ����m��Ȃ����c������Ȃ����Ƃ��������畷���Ȃ����B";
					return cm.sendSimple(text);
				}
				// �����}�}
				var text = "�ق��c�N�͌��Ⴆ��悤�ɐ��������ȁI�@���̑O�̂Ў�Ȏp�͂ǂ����ɍs���č��͐�m�Ƃ��Ă̈Ќ����������Ă���ł͂Ȃ����I�@�����c�ǂ����H�@�����ł���ɋ����Ȃ肽���Ȃ����ˁH�@�ȒP�Ȏ��������p�X������N������w�������Ă������I�@����Ă݂Ȃ����ˁH";
				return cm.sendYesNo(text);
			}
		case 2:
			{
				// 2���]�E�\���
				if (cm.haveItem(4031012)) {
					// �����}�}
					var text = "�����c���肪�I�������c��ԉ��ɂ���[�E�Ƃ�I�����܂��I]��I�����Ȃ����B\r\n";
					text += "#L" + 1 + "##b�\�[�h�}���ɂ��Đ������ĉ������B#k#l\r\n"
					text += "#L" + 2 + "##b�y�[�W�ɂ��Đ������ĉ������B#k#l\r\n"
					text += "#L" + 3 + "##b�X�s�A�}���ɂ��Đ������ĉ������B#k#l\r\n"
					text += "#L" + 0 + "##b�E�Ƃ�I�����܂��I#k#l\r\n"
					return cm.sendSimple(text);
				}
				// �����}�}
				var text = "�悭�l�����ȁB�N�͋������Ɍ����邪���ꂪ�{���Ȃ̂��m�F���Ă݂�K�v������B�ȒP�ȃe�X�g������N�Ȃ�[���Ƀp�X���邱�Ƃ��ł��邾�낤�B�����c�܂������Ŏ��̎莆���󂯎���Ă���B�Y��Ȃ��悤�ɋC��t�����B";
				return cm.sendSimple(text);
			}
		case 3:
			{
				// 2���]�E�\���
				if (cm.haveItem(4031012)) {
					// �����}�}
					if (selection == 0) {
						var text = "�����c�S�͌��߂��̂��H�@2���]�E�������E�Ƃ�I�����Ȃ����B\r\n";
						text += "#L" + 0 + "##b�\�[�h�}��(Swordman)#k#l\r\n"
						text += "#L" + 1 + "##b�y�[�W(Page)#k#l\r\n"
						text += "#L" + 2 + "##b�X�s�A�}��(Spearman)#k#l\r\n"
						return cm.sendSimple(text);
					}
					return cm.dispose();
				}
				cm.gainItem(4031008, 1);
				if (!cm.haveItem(4031008)) {
					// error
					var text = "�C���x���g�����J���Ă�������";
					return cm.sendSimple(text);
				}
				// �����}�}
				var text = "���̎莆���y���I���ӂ�#b#m102020300##k�̂ǂ����ɂ���#b#p1072000##k�ɓ`����悤�ɁB�Z�������̑���ɋ����̎d�������Ă����L���l���B�莆��`���Ă����ΌN�����V�̑���Ƀe�X�g���Ă����B�ڂ������Ƃ͔ނɒ��ڕ����΂킩��B���ꂶ�ᖳ���ɋA���ė��Ăق����B";
				// ���ۂ�Prev Next�ȑI����
				return cm.sendSimple(text);
			}
		case 4:
			{
				// 2���]�E�\���
				if (cm.haveItem(4031012)) {
					// �����}�}
					if (selection == 0) {
						var text = "#b�\�[�h�}��#k��2���]�E�������̂��ȁH�@��x���߂�Α���2���]�E�E�Ƃɂ͓]�E���邱�Ƃ��ł��Ȃ����B���̌��S�c�ԈႢ�Ȃ����ˁH";
						return cm.sendYesNo(text);
					}
					return cm.dispose();
				}
				return cm.dispose();
			}
		case 5:
			{
				// 2���]�E�\���
				if (cm.haveItem(4031012)) {
					cm.changeJob(110);
					cm.gainItem(4031012, -1);
					// �����}�}

					var text = "�悵�I�@�N�͂��ꂩ��#b�\�[�h�}��#k���I�@�\�[�h�}���͋��������߂Ȃ���₦���������́c�����Ă��̂��Ƃ�Y�ꂸ�ɑO�ɐi�݂Ȃ����B�������̗͂ŌN�������Ƌ������悤�B";
					// prev next
					return cm.sendSimple(text);
				}
				return cm.dispose();
			}
		case 6:
			{
				// �����}�}
				var text = "�N�ɍ�����\�[�h�}�����w�ׂ�X�L����������Ă���{��^���悤�B���̖{�ɂ͂��܂��܂ȃt�@�C�^�[�ƌW���X�L����������Ă���B����ɏ���AETC�ɃA�C�e����ۊǂł��鐔�����������B���ꂼ��1���C�������Ă��邾�낤�B�ő�HP�����������ˁc���m�F���Ȃ����B";
				return cm.sendSimple(text);
			}
		case 7:
			{
				// sp
				// �����}�}
				var text = "�N�ɏ�����#bSP#k������������A#b�X�L�����j���[#k���J���Ă݂�B�V���ɓ���2���X�L���������邱�Ƃ��ł���B�������͂��߂���S�Ă������邱�Ƃ͂ł��Ȃ��B���̃X�L����������x�グ�Ă����w�Ԃ��Ƃ��ł���X�L�������邩��ȁB�o���Ă����悤�ɁB";
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
		cm.sendOk("Make up your mind and visit me again.");
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		if (cm.getJob() == 0) {
			if (cm.getPlayerStat("LVL") >= 10 && cm.getJob() == 0) {
				cm.sendNext("So you decided to become a #rWarrior#k?");
			} else {
				cm.sendOk("Train a bit more and I can show you the way of the #rWarrior#k.");
				cm.dispose();
			}
		} else {
			if (cm.getPlayerStat("LVL") >= 30 && cm.getJob() == 100) { // WARROPR
				if (cm.getQuestStatus(100003) >= 1) {
					cm.completeQuest(100005);
					if (cm.getQuestStatus(100005) == 2) {
						status = 20;
						cm.sendNext("I see you have done well. I will allow you to take the next step on your long road.");
					} else {
						if (!cm.haveItem(4031008)) {
							cm.gainItem(4031008, 1);
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
					cm.sendOk("Alright, now take this to #bTylus#k.");
				} else {
					cm.sendOk("Hey, #b#h0##k! I need a #bBlack Charm#k. Go and find the Door of Dimension.");
					cm.startQuest(100101);
				}
				cm.dispose();
			} else {
				cm.sendOk("You have chosen wisely.");
				cm.dispose();
			}
		}
	} else if (status == 1) {
		cm.sendNextPrev("It is an important and final choice. You will not be able to turn back.");
	} else if (status == 2) {
		cm.sendYesNo("Do you want to become a #rWarrior#k?");
	} else if (status == 3) {
		if (cm.getJob() == 0) {
			cm.resetStats(35, 4, 4, 4);
			cm.expandInventory(1, 4);
			cm.expandInventory(4, 4);
			cm.changeJob(100); // WARRIOR
		}
		cm.gainItem(1402001, 1);
		cm.sendOk("So be it! Now go, and go with pride.");
		cm.dispose();
	} else if (status == 11) {
		cm.sendNextPrev("You may be ready to take the next step as a #rFighter#k, #rPage#k or #rSpearman#k.")
	} else if (status == 12) {
		cm.askAcceptDecline("But first I must test your skills. Are you ready?");
	} else if (status == 13) {
		cm.gainItem(4031008, 1);
		cm.startQuest(100003);
		cm.sendOk("Go see the #bJob Instructor#k near Perion. He will show you the way.");
		cm.dispose();
	} else if (status == 21) {
		cm.sendSimple("What do you want to become?#b\r\n#L0#Fighter#l\r\n#L1#Page#l\r\n#L2#Spearman#l#k");
	} else if (status == 22) {
		var jobName;
		if (selection == 0) {
			jobName = "Fighter";
			job = 110; // FIGHTER
		} else if (selection == 1) {
			jobName = "Page";
			job = 120; // PAGE
		} else {
			jobName = "Spearman";
			job = 130; // SPEARMAN
		}
		cm.sendYesNo("Do you want to become a #r" + jobName + "#k?");
	} else if (status == 23) {
		cm.changeJob(job);
		cm.gainItem(4031012, -1);
		cm.sendOk("So be it! Now go, and go with pride.");
		cm.dispose();
	}
}
*/
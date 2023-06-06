// �y�h��
// �C��3��

var map_job_town = 120000000;
var npc_job = 1072008;
// ���x�̃l�b�N���X
var quest_item_1 = 4031057; // or 4032785
var quest_item_2 = 4031058; // or 4032789
var npc_talk_status = -1;

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				// �����}�}
				var text = "���ɉ��̗p���ˁH\r\n";
				text += "#L" + 0 + "##b3���]�E���������ł�#k#l\r\n";
				text += "#L" + 1 + "##b�W���N���_���W�����N�G�X�g�������Ă��������B#k#l\r\n";
				return cm.sendSimple(text);
			}
		case 1:
			{
				// �����}�}
				if (selection == 0) {
					if (cm.haveItem(quest_item_2)) {
						// �����}�}
						var text = "�ق��c�����ɐ��n�������A�₢�ɐ�����������Ԃ����悤���ȁB����Ő����2�̃e�X�g�̓N���A���B���߂łƂ��B�ł́A�܂���Ƀl�b�N���X��a���낤�B";
						return cm.sendSimple(text);
					}
					if (cm.haveItem(quest_item_1)) {
						// �����}�}
						var text = "�قق��c#b#p" + npc_job + "##k����̔C�������������悤���ȁB�N�Ȃ�ł���Ǝv���Ă�����B�����A�܂��C�𔲂��̂͑����B2�ڂ̃e�X�g���c���Ă��邩��ȁB���Ⴀ�A�܂��̓e�X�g�̑O�Ƀl�b�N���X��a���낤���B";
						return cm.sendSimple(text);
					}
					var text = "��H�@���p���ˁH�@�ق��c�c3���]�E�����āA�X�ɋ����C���ɂȂ肽���ƁH�@���_�A���̗͂ŌN���X�ɋ��������邱�Ƃ͂ł��邪�A���̑O�ɌN���ǂꂾ���M�S�ɏC���ɗ�񂾂��������ė~�����B����܂ŋ����Ȃ肽���Ɗ���đ����̎҂����̌���K��Ă������A���ۂɌȂ̋����������ł����҂͐����Ȃ��B�ǂ����ˁH�@���������ȒP�ł͂Ȃ����A����Ă݂邩�ˁH";
					return cm.sendYesNo(text);
				}
			}
		case 2:
			{

				if (cm.haveItem(quest_item_2)) {
					// �����}�}
					var text = "�悵�c����ŌN�͂����Ƌ����C���ɂȂ��͂����B�����A���̑O��SP��S�ď�������ǂ����A�m�F�����ė~�����B���x��70�܂łɓ��� SP��S�ď���Ȃ��ƁA3���]�E�͂ł��Ȃ�����ˁB�����A����ƁA3���]�E�ł͂ǂ̐E�Ƃɂ��邩�͓��ɔY�ޕK�v�͂Ȃ��B���̂��߂ɁA2���]�E�̎��ɐ��X�Y��ł�������̂��B���āA�������]�E���邩�ˁH";
					return cm.sendYesNo(text);
				}
				if (cm.haveItem(quest_item_1)) {
					// �����}�}
					var text = "���ށc�m���ɁB�ł́A����Ŏc��͒m�b�̃e�X�g�݂̂��ȁB���̃e�X�g���N���A�ł���΁A�N�͂���w�����C���ɂȂ邾�낤�B2�ڂ̃e�X�g�́A�I�V���A�̐ጴ�̂ǂ����ɂ���A�����X�^�[�̋ߊ��Ȃ������Ȑ��n�ōs����B�����ڂ͕��}�Ȑ��n�����A���ʂȃA�C�e���������ƁA���̎҂̒m�b�������������K��邾�낤�B";
					// prevnext
					return cm.sendSimple(text);
				}
				// �����}�}
				var text = "�悵�I�@�ł͑����e�X�g�����悤�B�N�ɏؖ����ė~�����̂�2�B�N�̎��͂ƒm�b�������̂��B�܂��͗͂̃e�X�g����������悤�B�N���A1���A2���]�E�������ۂɐ��b�ɂȂ����ł��낤�A#m" + map_job_town + "#��#b#p" + npc_job + "##k�����邾�낤�H�@�ޏ���K�˂�΁A�N��1�C����^���Ă���邾�낤�B���̔C�����������A#p" + npc_job + "#���� #b#z" + quest_item_1 + "##k���󂯎���Ă���̂��B";
				return cm.sendYesNo(text);
			}
		case 3:
			{
				if (cm.haveItem(quest_item_2)) {
					// 3���]�E����
					// �����}�}
					var text = "�����c�N�͂��̊ԁA3���]�E�̓�ւ��N���A�����҂��ˁB#b���@�C�L���O#k�Ƃ��Ă̐����͂ǂ����ˁH�@���ꂩ��A�X�Ȃ�L�����E�𗷂��悤�Ǝv���Ă���Ȃ�A����w�����Ȃ�˂΂Ȃ�Ȃ����낤�B���̑嗤�ɂ́A�����m��Ȃ��悤�ȋ����ȃ����X�^�[���܂��܂��������񂢂邩��ȁB�����C�ɂȂ邱�Ƃ�����΁A���ł��K�˂Ă���Ƃ����B�撣��̂����B";
					return cm.sendSimple(text);
				}
				if (cm.haveItem(quest_item_1)) {
					// �����}�}
					var text = "�܂��͐��n��K�ˁA���ʂȃA�C�e���������̂��B�����āA�m�b�̎������n�܂�����A�^����ꂽ����ɐ�����������Ԃ��̂��B�N�̓����ɖ������Ȃ���΁A���n�͌N��F�߁A#b#z" + quest_item_2 + "##k��^���邾�낤�B����#b#z" + quest_item_2 + "##k�����̌��܂Ŏ����Ă��邱�Ƃ��ł���΁A�����N��F�߁A�X�ɋ����C���ւƓ]�g�����悤�B�ł́A�K�^���F��B";
					// prev next
					return cm.sendSimple(text);
				}
				// �����}�}
				var text = "2�ڂ͒m�b�̃e�X�g�����A����͗͂̃e�X�g�𖳎��N���A�ł�����s���B�܂��́A�͂̃e�X�g���N���A���A#b#z" + quest_item_1 + "##k�������Ă���̂��B���Ⴀ�A#b#p" + npc_job + "##k�ɂ͎�����b��ʂ��Ă�������A���̌シ���ɖK�˂Ă݂�Ƃ����B�����ĊȒP�ł͂Ȃ����낤���A�����ƌN�Ȃ�ł���ƐM���Ă����B";
				// prev next
				return cm.sendSimple(text);
			}
		case 4:
			{
				if (cm.haveItem(quest_item_2)) {
					// �����}�}
					var text = "���āB���������A�N�� SP�� AP��^��������m�F���Ă݂ė~�����B����ŌN�͏\�������C���ɂȂꂽ���낤�B�����A���ꂩ���͂܂��܂��h���������`�����N��҂��󂯂Ă���B�����N���Ȃ̐����Ɍ��E����������A������x����K�˂ė~�����B���̎������Ƃ܂��A�N�̗͂ɂȂ�邾�낤�B";
					// prev next
					return cm.sendSimple(text);
				}
			}
		default:
			break;
	}

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
	if (mode == 0 && status == 1) {
		cm.sendOk("Make up your mind and visit me again.");
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		if (!(cm.getJob() == 510 || cm.getJob() == 520)) {
			cm.sendOk("�N�Ȃ�W���N���ɒ��킷��ɂ����\�����B���̕z�̉���#b#p2030008##k�ɍs���Ă݂Ă���B������������B���̃_���W������T�����Ă���B");
			// �悵�A����#b#p2030008##k�̂���#b�W���N���ւ̖�#k�֑����Ă�낤�B
			cm.dispose();
			return;
		}
		if ((cm.getJob() == 510 || cm.getJob() == 520) && cm.getPlayerStat("LVL") >= 70 && cm.getPlayerStat("RSP") <= (cm.getPlayerStat("LVL") - 70) * 3) {
			cm.sendNext("You are indeed a strong one.");
		} else {
			cm.sendOk("Please make sure that you have used all your 2nd job skill point before proceeding.");
			cm.safeDispose();
		}
	} else if (status == 1) {
		if (cm.getPlayerStat("LVL") >= 70 && cm.getPlayerStat("RSP") <= (cm.getPlayerStat("LVL") - 70) * 3) {
			if (cm.getJob() == 510) {
				cm.changeJob(511);
				cm.gainAp(5);
				cm.sendOk("You are now a #bBuccaneer#k. May #rOdin#k be with you!");
				cm.dispose();
			} else if (cm.getJob() == 520) {
				cm.changeJob(521);
				cm.gainAp(5);
				cm.sendOk("You are now a #bValkyrie#k. May #rOdin#k be with you!");
				cm.dispose();
			}
		} else {
			cm.sendOk("Come back when you are level 70 and used SP.");
			cm.dispose();
		}
	}
}
*/
// �X�N���W
var status = -1;

function selectJob(jobid, level) {
	text = "�E�ƑI��\r\n";
	text += "#L" + 0 + "##b" + "���x���A�b�v" + "#l#k\r\n";

	switch (jobid) {
		// ���S��
		case 0:
			{
				if (level >= 8) {
					text += "#L" + 200 + "##b" + "���@�g��" + "#l#k\r\n";

					if (level >= 10) {
						text += "#L" + 100 + "##b" + "��m" + "#l#k\r\n";
						text += "#L" + 300 + "##b" + "�|�g��" + "#l#k\r\n";
						text += "#L" + 400 + "##b" + "����" + "#l#k\r\n";
						text += "#L" + 500 + "##b" + "�C��" + "#l#k\r\n";
					}
					cm.sendSimple(text);
					return true;
				}
				break;
			}
		// �V�O�i�X
		case 1000:
			{
				if (level >= 10) {
					text += "#L" + 1100 + "##b" + "�\�E���}�X�^�[" + "#l#k\r\n";
					text += "#L" + 1200 + "##b" + "�t���C���E�B�U�[�h" + "#l#k\r\n";
					text += "#L" + 1300 + "##b" + "�E�B���h�V���[�^�[" + "#l#k\r\n";
					text += "#L" + 1400 + "##b" + "�i�C�g�E�H�[�J�[" + "#l#k\r\n";
					text += "#L" + 1500 + "##b" + "�X�g���C�J�[" + "#l#k\r\n";
					cm.sendSimple(text);
					return true;
				}
				break;
			}
		// �A����
		case 2000:
			{
				if (level >= 10) {
					text += "#L" + 2100 + "##b" + "�A����" + "#l#k\r\n";
					cm.sendSimple(text);
					return true;
				}
				break;
			}
		case 2100:
			{
				if (level >= 30) {
					text += "#L" + 2110 + "##b" + "�A����2��" + "#l#k\r\n";
					cm.sendSimple(text);
					return true;
				}
				break;
			}
		case 2110:
			{
				if (level >= 70) {
					text += "#L" + 2111 + "##b" + "�A����3��" + "#l#k\r\n";
					cm.sendSimple(text);
					return true;
				}
				break;
			}
		case 2111:
			{
				if (level >= 120) {
					text += "#L" + 2112 + "##b" + "�A����4��" + "#l#k\r\n";
					cm.sendSimple(text);
					return true;
				}
				break;
			}
		// �G���@��
		case 2001:
			{
				if (level >= 10) {
					text += "#L" + 2200 + "##b" + "�G���@��" + "#l#k\r\n";
					cm.sendSimple(text);
					return true;
				}
				break;
			}
		case 2200:
			{
				if (level >= 20) {
					text += "#L" + (jobid + 10) + "##b" + "�G���@��2��" + "#l#k\r\n";
					cm.sendSimple(text);
					return true;
				}
				break;
			}
		case 2210:
			{
				if (level >= 30) {
					text += "#L" + (jobid + 1) + "##b" + "�G���@��3��" + "#l#k\r\n";
					cm.sendSimple(text);
					return true;
				}
				break;
			}
		case 2211:
			{
				if (level >= 40) {
					text += "#L" + (jobid + 1) + "##b" + "�G���@��4��" + "#l#k\r\n";
					cm.sendSimple(text);
					return true;
				}
				break;
			}
		case 2212:
			{
				if (level >= 60) {
					text += "#L" + (jobid + 1) + "##b" + "�G���@��5��" + "#l#k\r\n";
					cm.sendSimple(text);
					return true;
				}
				break;
			}
		case 2213:
			{
				if (level >= 70) {
					text += "#L" + (jobid + 1) + "##b" + "�G���@��6��" + "#l#k\r\n";
					cm.sendSimple(text);
					return true;
				}
				break;
			}
		case 2214:
			{
				if (level >= 80) {
					text += "#L" + (jobid + 1) + "##b" + "�G���@��7��" + "#l#k\r\n";
					cm.sendSimple(text);
					return true;
				}
				break;
			}
		case 2215:
			{
				if (level >= 100) {
					text += "#L" + (jobid + 1) + "##b" + "�G���@��8��" + "#l#k\r\n";
					cm.sendSimple(text);
					return true;
				}
				break;
			}
		case 2216:
			{
				if (level >= 120) {
					text += "#L" + (jobid + 1) + "##b" + "�G���@��9��" + "#l#k\r\n";
					cm.sendSimple(text);
					return true;
				}
				break;
			}
		case 2217:
			{
				if (level >= 160) {
					text += "#L" + (jobid + 1) + "##b" + "�G���@��10��" + "#l#k\r\n";
					cm.sendSimple(text);
					return true;
				}
				break;
			}
		// �f���A���u���C�h
		case 430:
			{
				if (level >= 30) {
					text += "#L" + (jobid + 1) + "##b" + "�f���A���u���C�h2��" + "#l#k\r\n";
					cm.sendSimple(text);
					return true;
				}
				break;
			}
		case 431:
			{
				if (level >= 55) {
					text += "#L" + (jobid + 1) + "##b" + "�f���A���u���C�h2.5��" + "#l#k\r\n";
					cm.sendSimple(text);
					return true;
				}
				break;
			}
		case 432:
			{
				if (level >= 70) {
					text += "#L" + (jobid + 1) + "##b" + "�f���A���u���C�h3��" + "#l#k\r\n";
					cm.sendSimple(text);
					return true;
				}
				break;
			}
		case 433:
			{
				if (level >= 120) {
					text += "#L" + (jobid + 1) + "##b" + "�f���A���u���C�h4��" + "#l#k\r\n";
					cm.sendSimple(text);
					return true;
				}
				break;
			}
		// �V�O�i�X2��
		case 1100:
		case 1200:
		case 1300:
		case 1400:
		case 1500:
			{
				if (level >= 30) {
					text += "#L" + (jobid + 10) + "##b" + "�]�E" + "#l#k\r\n";
					cm.sendSimple(text);
					return true;
				}
				break;
			}
		/*
		case 1111:
		case 1211:
		case 1311:
		case 1411:
		case 1511:
		*/
		case 1111:
			{
				if (level >= 120) {
					text += "#L" + (jobid + 1) + "##b" + "�]�E" + "#l#k\r\n";
					cm.sendSimple(text);
					return true;
				}
				break;
			}
		case 100:
			{
				if (level >= 30) {
					text += "#L" + 110 + "##b" + "�\�[�h�}��" + "#l#k\r\n";
					text += "#L" + 120 + "##b" + "�y�[�W" + "#l#k\r\n";
					text += "#L" + 130 + "##b" + "�X�s�A�}��" + "#l#k\r\n";
					cm.sendSimple(text);
					return true;
				}
				break;
			}
		// 3���]�E
		case 110:
		case 120:
		case 130:
		case 210:
		case 220:
		case 230:
		case 310:
		case 320:
		case 410:
		case 420:
		case 510:
		case 520:
		case 1110:
		case 1210:
		case 1310:
		case 1410:
		case 1510:
			{
				if (level >= 70) {
					text += "#L" + (jobid + 1) + "##b" + "3���]�E" + "#l#k\r\n";
					cm.sendSimple(text);
					return true;
				}
				break;
			}
		// 4���]�E
		case 111:
		case 121:
		case 131:
		case 211:
		case 221:
		case 231:
		case 311:
		case 321:
		case 411:
		case 421:
		case 511:
		case 521:
			{
				if (level >= 120) {
					text += "#L" + (jobid + 1) + "##b" + "4���]�E" + "#l#k\r\n";
					cm.sendSimple(text);
					return true;
				}
				break;
			}
		// 2���]�E
		case 200:
			{
				if (level >= 30) {
					text += "#L" + 210 + "##b" + "�E�B�U�[�h(�΁A��)" + "#l#k\r\n";
					text += "#L" + 220 + "##b" + "�E�B�U�[�h(���A�X)" + "#l#k\r\n";
					text += "#L" + 230 + "##b" + "�N�����b�N" + "#l#k\r\n";
					cm.sendSimple(text);
					return true;
				}
				break;
			}

		case 300:
			{
				if (level >= 30) {
					text += "#L" + 310 + "##b" + "�n���^�[" + "#l#k\r\n";
					text += "#L" + 320 + "##b" + "�����W���[" + "#l#k\r\n";
					cm.sendSimple(text);
					return true;
				}
				break;
			}
		case 400:
			{
				if (level >= 20) {
					text += "#L" + 430 + "##b" + "�Z�~�f���A��" + "#l#k\r\n";

					if (level >= 30) {
						text += "#L" + 410 + "##b" + "�A�T�V��" + "#l#k\r\n";
						text += "#L" + 420 + "##b" + "�V�[�t" + "#l#k\r\n";
					}
					cm.sendSimple(text);
					return true;
				}
				break;
			}
		case 500:
			{
				if (level >= 30) {
					text += "#L" + 510 + "##b" + "�C���t�@�C�^�[" + "#l#k\r\n";
					text += "#L" + 520 + "##b" + "�K���X�����K�[" + "#l#k\r\n";
					cm.sendSimple(text);
					return true;
				}
				break;
			}
		default:
			break;
	}

	text = "";

	return false;
}

function LearnSkills(jobid) {
	switch (jobid) {
		case 222:
			{
				cm.teachSkill(2221000, 0);
				cm.teachSkill(2221003, 0);
				cm.teachSkill(2221004, 0);
				cm.teachSkill(2221007, 0);
				cm.teachSkill(2221008, 0);
				break;
			}
		case 232:
			{
				cm.teachSkill(2321000, 0);
				cm.teachSkill(2321003, 0);
				cm.teachSkill(2321004, 0);
				cm.teachSkill(2321006, 0);
				cm.teachSkill(2321007, 0);
				cm.teachSkill(2321008, 0);
				cm.teachSkill(2321009, 0);
				break;
			}
		default:
			break;
	}
	return false;
}

function action(mode, type, selection) {
	var id = cm.getNpc();
	var mapid = cm.getMapId();
	var text = "�f�o�b�O���\r\n";
	text += "#p" + id + "#\r\n";
	text += "NPC ID = #b" + id + "#k\r\n";
	text += "#m" + mapid + "#\r\n";
	text += "Map ID = #b" + mapid + "#k\r\n";

	var jobid = cm.getJob();
	var level = cm.getPlayer().getLevel();

	if (mode == 1) {
		status++;
	}
	else {
		status--;
	}

	if (status == 0) {
		if (selectJob(jobid, level)) {
			return;
		}
	}

	if (status == 1) {
		if (selection > 0) {
			cm.getPlayer().changeJob(selection);
		}
		//LearnSkills(selection);
		else if (selection == 0) {
			cm.getPlayer().gainExp(500000000, true, false, true);
		}
	}
	else {
		if (level <= 160) {
			cm.getPlayer().gainExp(500000000, true, false, true);
		}
		else {
			cm.sendOk(text);
		}
	}

	cm.dispose();
	return;
}